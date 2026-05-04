export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600"); // cache 1 hour

  try {
    const response = await fetch("https://ddsl.ie/league/208718/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Knocklyon-App/1.0)",
        "Accept": "text/html",
      },
    });

    if (!response.ok) throw new Error(`DDSL fetch failed: ${response.status}`);

    const html = await response.text();

    // Parse the standings table from the HTML
    const rows = [];

    // Match table rows — DDSL uses a standard standings table
    const tableMatch = html.match(/<table[^>]*>([\s\S]*?)<\/table>/gi) || [];

    for (const table of tableMatch) {
      const trMatches = table.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
      for (const tr of trMatches) {
        const tds = (tr.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || [])
          .map(td => td.replace(/<[^>]+>/g, "").trim());

        // A valid standings row has: pos, team, played, w, d, l, gf, ga, gd, pts
        if (tds.length >= 8) {
          const pos = parseInt(tds[0]);
          const pts = parseInt(tds[tds.length - 1]);
          if (!isNaN(pos) && pos >= 1 && pos <= 20 && !isNaN(pts)) {
            rows.push({
              position: pos,
              team: tds[1]?.replace(/\s+/g, " ").trim() || "",
              played: parseInt(tds[2]) || 0,
              won: parseInt(tds[3]) || 0,
              drawn: parseInt(tds[4]) || 0,
              lost: parseInt(tds[5]) || 0,
              goalsFor: parseInt(tds[6]) || 0,
              goalsAgainst: parseInt(tds[7]) || 0,
              points: pts,
            });
          }
        }
      }
      if (rows.length >= 4) break; // found the right table
    }

    if (rows.length === 0) {
      return res.status(200).json({ success: false, error: "Could not parse table", rows: [] });
    }

    return res.status(200).json({ success: true, rows, fetchedAt: new Date().toISOString() });

  } catch (err) {
    return res.status(200).json({ success: false, error: err.message, rows: [] });
  }
}
