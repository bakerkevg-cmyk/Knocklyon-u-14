export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600");

  try {
    const response = await fetch("https://ddsl.ie/league/208718/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "text/html,application/xhtml+xml",
      },
    });

    if (!response.ok) throw new Error(`DDSL fetch failed: ${response.status}`);

    const html = await response.text();
    const rows = [];

    // Find all tables in the HTML
    const tables = html.match(/<table[\s\S]*?<\/table>/gi) || [];

    for (const table of tables) {
      const trs = table.match(/<tr[\s\S]*?<\/tr>/gi) || [];
      const tableRows = [];

      for (const tr of trs) {
        // Strip all tags and get text content of each cell
        const cells = (tr.match(/<t[dh][\s\S]*?<\/t[dh]>/gi) || [])
          .map(cell => cell.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

        if (cells.length >= 7) {
          const pos = parseInt(cells[0]);
          const pts = parseInt(cells[cells.length - 2]); // Pts is second to last (last is Form)
          const ptsAlt = parseInt(cells[cells.length - 1]);

          // Find which is points - it should be a reasonable number
          const pointsVal = (!isNaN(pts) && pts >= 0 && pts <= 99) ? pts :
                            (!isNaN(ptsAlt) && ptsAlt >= 0 && ptsAlt <= 99) ? ptsAlt : null;

          if (!isNaN(pos) && pos >= 1 && pos <= 20 && pointsVal !== null) {
            // Team name is in the cell with the club profile link
            const teamMatch = tr.match(/clubprofile[^>]+>([^<]+)<\/a>/);
            const teamName = teamMatch ? teamMatch[1].trim() : cells[1];

            tableRows.push({
              position: pos,
              team: teamName,
              played: parseInt(cells[2]) || 0,
              won: parseInt(cells[3]) || 0,
              drawn: parseInt(cells[4]) || 0,
              lost: parseInt(cells[5]) || 0,
              points: pointsVal,
            });
          }
        }
      }

      // The standings table should have 8 rows (one per team)
      if (tableRows.length >= 6 && tableRows.length <= 12) {
        rows.push(...tableRows);
        break;
      }
    }

    if (rows.length === 0) {
      return res.status(200).json({ success: false, error: "Could not parse standings table", rows: [] });
    }

    return res.status(200).json({ success: true, rows, fetchedAt: new Date().toISOString() });

  } catch (err) {
    return res.status(200).json({ success: false, error: err.message, rows: [] });
  }
}
