import React, { useState, useEffect } from "react";

const INITIAL_PLAYERS = [
  { id: 1, name: "Anabel Caddle", position: "CAM", number: 8, development: { technical: 70, physical: 68, tactical: 65, mental: 75 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 2, name: "Aisling Tighe", position: "CDM", number: 6, development: { technical: 68, physical: 72, tactical: 70, mental: 70 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 3, name: "Ellie Drinan", position: "CDM", number: 3, development: { technical: 67, physical: 74, tactical: 68, mental: 72 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 4, name: "Charlotte Creed", position: "CAM", number: 10, development: { technical: 71, physical: 70, tactical: 67, mental: 73 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 5, name: "Sophie Sopher", position: "CB", number: 5, development: { technical: 69, physical: 71, tactical: 66, mental: 74 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 6, name: "Olivia Crowley", position: "ST", number: 9, development: { technical: 75, physical: 68, tactical: 73, mental: 76 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 7, name: "Ava Mulhall", position: "LW", number: 12, development: { technical: 73, physical: 67, tactical: 71, mental: 70 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 8, name: "Lauren Mitchell", position: "RW", number: 14, development: { technical: 78, physical: 65, tactical: 74, mental: 73 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 9, name: "Ellen Mangan", position: "GK", number: 1, development: { technical: 74, physical: 72, tactical: 65, mental: 69 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 10, name: "Abbie Snell", position: "LB", number: 13, development: { technical: 76, physical: 73, tactical: 66, mental: 71 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 11, name: "Jane Moran", position: "CB", number: 4, development: { technical: 77, physical: 74, tactical: 69, mental: 76 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 12, name: "Cara McGinley", position: "LW", number: 11, development: { technical: 66, physical: 68, tactical: 72, mental: 71 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 13, name: "Clara Fitzgerald", position: "RB", number: 7, development: { technical: 65, physical: 76, tactical: 67, mental: 70 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
  { id: 14, name: "Lauren Fox", position: "CDM", number: 2, development: { technical: 75, physical: 73, tactical: 68, mental: 74 }, notes: { "Kevin Baker": "", "James Drinan": "" }, secondPosition: "", roles: { captain: false, viceCaptain: false, penaltyTaker: false, goalKick: false, cornerLeft: false, cornerRight: false, freeKickAtt: false, freeKickDef: false, throwInAttLeft: false, throwInAttRight: false, throwInDefLeft: false, throwInDefRight: false }, goals: [] },
];

const INITIAL_MATCHES = [
  {id:0,date:"2025-01-01",opponent:"Park Vale FC",venue:"Home",friendly:true,goalsFor:4,goalsAgainst:2,playerStats:{1:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:1,date:"2025-09-14",opponent:"Tolka Rovers",venue:"Home",goalsFor:6,goalsAgainst:2,playerStats:{1:{played:true,started:true,goals:1,assists:2,yellowCard:false,redCard:false,rating:8},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:6},4:{played:true,started:true,goals:2,assists:2,yellowCard:false,redCard:false,rating:9},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:7},6:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:8},7:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:7},8:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:7},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:6},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:7},11:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:6},13:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:6},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:5}}},
  {id:2,date:"2025-09-21",opponent:"Ballyoulster FC",venue:"Away",forfeit:true,goalsFor:0,goalsAgainst:3,playerStats:{1:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:3,date:"2025-01-01",opponent:"Beechwood FC",venue:"Home",cancelled:true,goalsFor:0,goalsAgainst:0,playerStats:{1:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:4,date:"2025-01-01",opponent:"Lakelands FC",venue:"Home",goalsFor:8,goalsAgainst:1,playerStats:{1:{played:true,started:true,goals:2,assists:1,yellowCard:false,redCard:false,rating:0},2:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:4,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:2,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:0,assists:1,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:1,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:5,date:"2025-01-01",opponent:"Lakelands FC",venue:"Home",goalsFor:10,goalsAgainst:0,playerStats:{1:{played:true,started:true,goals:2,assists:4,yellowCard:false,redCard:false,rating:0},2:{played:true,started:true,goals:1,assists:1,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:1,assists:1,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:5,assists:2,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:2,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:6,date:"2025-11-23",opponent:"Ballyoulster Utd",venue:"Home",goalsFor:1,goalsAgainst:5,playerStats:{1:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:7,date:"2025-12-14",opponent:"ParkVale FC",venue:"Away",goalsFor:5,goalsAgainst:1,playerStats:{1:{played:true,started:true,goals:2,assists:2,yellowCard:false,redCard:false,rating:0},2:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:8,date:"2025-01-01",opponent:"Cabinteely FC",venue:"Home",cup:true,goalsFor:3,goalsAgainst:2,playerStats:{1:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:9,date:"2026-03-08",opponent:"Tolka Rovers",venue:"Away",goalsFor:11,goalsAgainst:0,playerStats:{1:{played:true,started:true,goals:3,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:3,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:3,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:10,date:"2026-02-08",opponent:"Kilnamanagh",venue:"Away",goalsFor:9,goalsAgainst:1,playerStats:{1:{played:true,started:true,goals:4,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:2,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:2,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:11,date:"2026-03-15",opponent:"Kilnamanagh",venue:"Home",goalsFor:4,goalsAgainst:2,playerStats:{1:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:12,date:"2026-03-22",opponent:"Park Vale",venue:"Away",goalsFor:4,goalsAgainst:3,playerStats:{1:{played:true,started:true,goals:2,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:false,started:false,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0}}},
  {id:13,date:"2026-03-29",opponent:"Maynooth",venue:"Home",goalsFor:5,goalsAgainst:1,playerStats:{1:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},2:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},3:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},4:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},5:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},6:{played:true,started:true,goals:2,assists:0,yellowCard:false,redCard:false,rating:0},7:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},8:{played:true,started:true,goals:1,assists:0,yellowCard:false,redCard:false,rating:0},9:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},10:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},11:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},12:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},13:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0},14:{played:true,started:true,goals:0,assists:0,yellowCard:false,redCard:false,rating:0}}},
];

const INITIAL_SESSIONS = [
  { id: 1, date: "2025-10-07", title: "Defensive Shape", focus: "Tactical", duration: 60, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 2, date: "2025-10-14", title: "Possession & Patterns", focus: "Technical", duration: 60, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 3, date: "2025-11-04", title: "Attacking Third", focus: "Technical", duration: 60, warmup: null, drill1: 2, drill2: 4, game: null, drills: [2, 4] },
  { id: 4, date: "2025-11-11", title: "Set Pieces", focus: "Tactical", duration: 60, warmup: null, drill1: 42, drill2: 43, game: null, drills: [42, 43] },
  { id: 5, date: "2026-02-09", title: "Physical Conditioning", focus: "Physical", duration: 60, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },

  { id: 6, date: "2026-03-30", title: "Passing & Movement", focus: "Technical", duration: 60, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 7, date: "2026-04-01", title: "Defensive Shape", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 8, date: "2026-04-06", title: "Fitness & Conditioning", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 9, date: "2026-04-08", title: "Attacking Patterns", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 10, date: "2026-04-13", title: "Set Pieces", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 11, date: "2026-04-15", title: "1v1 & Finishing", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 12, date: "2026-04-20", title: "Pressing & Transitions", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 13, date: "2026-04-22", title: "Positional Play", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 14, date: "2026-04-27", title: "Crossing & Finishing", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 15, date: "2026-04-29", title: "Speed & Agility", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 16, date: "2026-05-04", title: "Passing & Movement", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 17, date: "2026-05-06", title: "Defensive Shape", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 18, date: "2026-05-11", title: "Fitness & Conditioning", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 19, date: "2026-05-13", title: "Attacking Patterns", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 20, date: "2026-05-18", title: "Set Pieces", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 21, date: "2026-05-20", title: "1v1 & Finishing", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 22, date: "2026-05-25", title: "Pressing & Transitions", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 23, date: "2026-05-27", title: "Positional Play", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 24, date: "2026-06-01", title: "Crossing & Finishing", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 25, date: "2026-06-03", title: "Speed & Agility", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 26, date: "2026-06-08", title: "Passing & Movement", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 27, date: "2026-06-10", title: "Defensive Shape", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 28, date: "2026-06-15", title: "Fitness & Conditioning", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
  { id: 29, date: "2026-06-17", title: "Attacking Patterns", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 30, date: "2026-06-22", title: "Set Pieces", focus: "Tactical", duration: 75, warmup: null, drill1: 3, drill2: 8, game: null, drills: [3, 8] },
  { id: 31, date: "2026-06-24", title: "1v1 & Finishing", focus: "Technical", duration: 75, warmup: null, drill1: 1, drill2: 10, game: null, drills: [1, 10] },
  { id: 32, date: "2026-06-29", title: "Pressing & Transitions", focus: "Physical", duration: 75, warmup: null, drill1: 5, drill2: 6, game: null, drills: [5, 6] },
];

const DRILLS = [
  // ── TECHNICAL ──────────────────────────────────────────────
  {
    id: 1, name: "Rondo 4v2", category: "Technical", duration: 15, players: "6+", intensity: "Medium",
    description: "Classic possession rondo. 4 players on outside, 2 in the middle. Focus on one-touch passing and movement.",
    coachingPoints: ["Quality and selection of pass", "Body shape — be on your back foot, ready to receive", "One or two-touch maximum", "Movement after passing — don't stand still", "Communicate with teammates"],
    organisation: "Area: 10x10m grid. 4 players on the outside, 2 defenders in the middle. Outside players keep possession. Middle players press and win the ball. Rotate defenders every 2 minutes.",
    equipment: ["Cones (4 to mark grid)", "1 ball", "2 bibs for defenders"]
  },
  {
    id: 2, name: "1v1 Finishing", category: "Technical", duration: 20, players: "8+", intensity: "High",
    description: "Players receive a pass and go 1v1 with the goalkeeper. Variety of angles and distances.",
    coachingPoints: ["Positive first touch — get the ball out of your feet", "Keep head up to assess goalkeeper's position", "Shoot early or commit the goalkeeper", "Follow in for rebounds", "Work both left and right sides"],
    organisation: "Area: Use the penalty area. Server plays ball in to attacker who takes a first touch and shoots before a defender (starting 3m behind) can close. Rotate roles. Vary the starting angle and distance.",
    equipment: ["Cones", "Balls (6+)", "Goal & goalkeeper", "Bibs"]
  },
  {
    id: 3, name: "Zonal Defending Block", category: "Tactical", duration: 25, players: "10+", intensity: "Medium",
    description: "Back 4 and midfield 4 hold defensive shape against attacking patterns. Emphasis on compactness.",
    coachingPoints: ["Stay compact — no gaps between lines", "Shift together as a unit horizontally", "Hold shape — don't dive in", "Communicate who is pressing", "Stay goal-side and ball-side"],
    organisation: "Area: 60x40m. Defending team sets up in their 4-4 shape. Coach or attacking team moves ball around. Defending team must shift and hold shape. No tackling — shape work only first, then add opposition.",
    equipment: ["Cones to mark zones", "Bibs (2 sets)", "Balls (4+)"]
  },
  {
    id: 4, name: "Crossing & Finishing", category: "Technical", duration: 20, players: "8+", intensity: "High",
    description: "Wide players deliver crosses to strikers and midfielders arriving late. Work on timing of runs.",
    coachingPoints: ["Wide player — get your head up before crossing", "Delivery variety: low driven, clipped, cutback", "Striker — time your run to arrive as ball arrives", "Midfield runner — attack the far post", "Follow in for second balls"],
    organisation: "Area: Final third. Wide player receives from a pass, drives to the byline and crosses. Two strikers and one CM make timed runs into the box. GK active. Rotate wide players every 5 crosses. Work both sides.",
    equipment: ["Cones", "Balls (8+)", "Goal & goalkeeper", "Bibs"]
  },
  {
    id: 5, name: "Sprint Intervals", category: "Physical", duration: 15, players: "Any", intensity: "Very High",
    description: "6x40m sprints with 90 seconds rest. Focus on acceleration mechanics.",
    coachingPoints: ["Drive phase — lean forward, pump arms", "High knees and long strides once up to speed", "Stay low for first 10m", "Consistent effort each rep", "Rest fully between reps"],
    organisation: "Area: 40m straight. Players line up and sprint on whistle. Walk back to start for recovery. 6 reps with 90 seconds rest. Coach records times on rep 1 and rep 6 to check drop-off.",
    equipment: ["Cones to mark 40m", "Stopwatch"]
  },
  {
    id: 6, name: "Agility Ladders", category: "Physical", duration: 10, players: "Any", intensity: "Medium",
    description: "Ladder drills for footwork, coordination and quick feet. Icky shuffle, in-out, lateral.",
    coachingPoints: ["Stay on the balls of your feet", "Arms drive the movement", "Eyes forward — not looking at feet", "Rhythm and accuracy before speed", "Progress to full speed once pattern is learned"],
    organisation: "Area: Flat surface. 2 agility ladders side by side. 3 stations — two-feet in each rung, lateral shuffle, icky shuffle. 3 runs through each pattern then rotate. Coach demonstrates each pattern first.",
    equipment: ["2 agility ladders", "Cones to organise queue"]
  },
  {
    id: 7, name: "Positional Game", category: "Tactical", duration: 30, players: "12+", intensity: "Medium",
    description: "Full pitch shape work. Teams maintain structure in and out of possession. Coach-led interventions.",
    coachingPoints: ["Hold your position — don't ball-chase", "Communicate constantly", "In possession: create width and depth", "Out of possession: get compact quickly", "Look to play forward first"],
    organisation: "Area: Full pitch or 70x50m. Two teams in structured shape (4-3-3 vs 4-4-2). Coach stops play to correct positions and decision-making. Play 8-minute periods with coaching breaks. GKs involved.",
    equipment: ["Full-size goals or large goals", "Balls (6+)", "Bibs (2 sets)", "Cones"]
  },
  {
    id: 8, name: "Pressing Triggers", category: "Tactical", duration: 20, players: "10+", intensity: "High",
    description: "Identify and react to pressing cues — back pass, open body shape, heavy touch. Press as a unit.",
    coachingPoints: ["Agree the trigger BEFORE pressing", "Front player presses — midfield tucks in immediately", "Cut off easy pass options", "Press at an angle — force play backwards or wide", "Recover if press is beaten — don't chase"],
    organisation: "Area: 50x35m. Attacking team plays out from back. Defending team identifies triggers (back pass to GK, heavy touch) and presses as a unit. Coach calls triggers initially then let players react. Award points for winning the ball high.",
    equipment: ["Cones", "Bibs (2 sets)", "Balls (4+)", "Goals or targets"]
  },
  {
    id: 9, name: "Counter Attack", category: "Tactical", duration: 25, players: "10+", intensity: "Very High",
    description: "Win the ball in your half, transition fast. 4v3 and 5v4 overloads. Speed of thought and movement.",
    coachingPoints: ["First pass must be forward — no going backwards on transition", "Runners ahead of the ball — go early", "Ball carrier — head up, pick the right option", "Arrive in numbers — support the attack", "End product — shoot early, don't overplay"],
    organisation: "Area: Full pitch. Blue team defends, wins ball, and immediately counter-attacks. Red team must get numbers back. Start with 4v3 overloads from halfway, progress to 5v4 from own half. Coach times transition — reward fast attacks.",
    equipment: ["Full-size goals", "Balls (6+)", "Bibs (2 sets)", "Cones"]
  },
  {
    id: 10, name: "Pattern Play 3-4-3", category: "Technical", duration: 20, players: "11+", intensity: "Low",
    description: "Pre-planned combination patterns from GK build-up through to striker. Repetition builds muscle memory.",
    coachingPoints: ["Move before you receive — create the angle", "Body shape open to the pitch when receiving", "Pass and move — don't watch the ball", "Weight and timing of pass is everything", "Repetition — pattern must become automatic"],
    organisation: "Area: Full pitch, no opposition. GK starts. Team plays through 3-4-3 shape using 3 set patterns (coach decides). No defenders — focus on movement, timing and touch. Rotate through all positions. Each pattern runs 10 times each side.",
    equipment: ["Full-size goal", "Balls (8+)", "Cones to mark positions if needed", "Bibs"]
  },

  // ── POSSESSION / FAI sessions ──────────────────────────────
  {
    id: 11, name: "3v1 Possession", category: "Technical", duration: 25, players: "8+", intensity: "Medium",
    description: "3 players keep possession against 1 defender in a small area, then a Blue player can break out and attack a 1v1 on goal.",
    coachingPoints: [
      "Quality and selection of pass",
      "Body shape / First Touch / Back Foot",
      "Disguise / Change of Direction",
      "Angles and Distance of support",
      "Awareness of space and defender",
      "1v1 Dribbling — positive first touch, get the ball out of your feet, attack the defender with the ball under control",
      "Keep your head up to assess defender's position",
      "Make your move (skill, trick or speed), accelerate into space created, end product"
    ],
    organisation: "Area: 40x20m full area, 12x12m possession square. 3 Blue players v 1 Yellow player in the square. After a set number of passes, one Blue player can dribble out and attack either goal in a 1v1 with a Yellow player (GK in each goal). If Yellow wins the ball or GK saves, Yellow can transition and score through goals marked with red cones. One Blue player can leave to try and stop this.",
    equipment: ["Cones (to mark 40x20m area and 12x12m square)", "Red cones (to mark transition goals)", "Bibs (Blue and Yellow sets)", "2 mini goals or full goals", "Balls (4+)"]
  },

  // ── ATTACKING ──────────────────────────────────────────────
  {
    id: 12, name: "Third Man Running", category: "Attacking", duration: 20, players: "9+", intensity: "Medium",
    description: "Two players combine to release a third runner in behind the defensive line.",
    coachingPoints: ["Third player times their run — don't go too early", "First two passes must be quick to draw the press", "Runner stays onside — check shoulder before going", "Ball into the runner's path, not at their feet", "End product — get a shot or cross off"],
    organisation: "Area: 50x35m. Player A plays to Player B who lays off to Player C. C plays first time into the run of Player A who has made a late run in behind. Progress to adding a defender on the runner. Work both sides.",
    equipment: ["Cones", "Balls (4+)", "Goal & goalkeeper", "Bibs"]
  },
  {
    id: 13, name: "Overlapping Runs", category: "Attacking", duration: 20, players: "8+", intensity: "Medium",
    description: "Wide player holds, combines with the overlapping full-back, delivers into the box.",
    coachingPoints: ["Full-back — overlap at pace, make the run obvious", "Winger — hold the ball long enough to draw the defender", "Communication — call for the overlap", "Delivery — early cross or cutback depending on position", "Opposite side player attacks far post"],
    organisation: "Area: Wide channel and final third. Winger receives, full-back overlaps outside. Winger either plays into overlap or cuts inside. Full-back crosses — two strikers attack box. Rotate roles after 5 reps. Do both sides.",
    equipment: ["Cones", "Balls (6+)", "Goal & goalkeeper", "Bibs"]
  },
  {
    id: 14, name: "2v1 Into Goal", category: "Attacking", duration: 15, players: "6+", intensity: "High",
    description: "Two attackers vs one defender plus GK — quick decision making to score.",
    coachingPoints: ["Ball carrier — commit the defender first", "Don't pass too early — make the defender choose", "Support player — angle your run to stay onside", "Once defender commits, play quick and finish", "Follow in — be ready for rebounds"],
    organisation: "Area: 25x20m ending at goal. Two attackers start at halfway, one defender at edge of box. Attackers combine to score. If defender wins ball, they can counter to a mini goal at halfway. Rotate roles every 3 reps.",
    equipment: ["Cones", "Balls (6+)", "Full goal & goalkeeper", "Mini goal or cones goal", "Bibs"]
  },
  {
    id: 15, name: "Combination Play in the Box", category: "Attacking", duration: 25, players: "10+", intensity: "High",
    description: "Structured sequences around the penalty area — cutbacks, lay-offs, late arrivals.",
    coachingPoints: ["Move before the ball arrives — create space", "Lay-off or cutback must be firm and accurate", "Late runner times their arrival to meet the ball", "First-time finish — don't take extra touches in the box", "Two players attack far post on every move"],
    organisation: "Area: Final third. Rehearsed 5-player sequence — outside player to striker, lay-off to CM, CM plays wide for cutback, second striker arrives late. Walk through first, then at pace. GK active. 10 reps each pattern.",
    equipment: ["Cones", "Balls (8+)", "Goal & goalkeeper", "Bibs"]
  },
  {
    id: 16, name: "Breaking Lines", category: "Attacking", duration: 20, players: "10+", intensity: "Medium",
    description: "Teams score by playing a pass through gate pairs on the pitch — encourages vertical play.",
    coachingPoints: ["Look forward first — always check for the line-breaking pass", "Receiver — check shoulder before ball arrives", "Body shape open when receiving between lines", "Move the ball quickly after breaking the line", "Width stretches the defence to create the gap"],
    organisation: "Area: 50x35m. 4 pairs of cone gates placed across the pitch in 3 rows. Team scores a point by playing through a gate. After breaking 3 lines, attack goal. Defender cannot enter the gate — must go around.",
    equipment: ["Cones (16 for gates, 4 for area)", "Balls (4+)", "Bibs (2 sets)", "Goal or target"]
  },
  {
    id: 17, name: "Wide Play & Crossing", category: "Attacking", duration: 25, players: "10+", intensity: "High",
    description: "Wingers drive to the byline and deliver crosses to strikers and midfielders. Vary delivery.",
    coachingPoints: ["Wide player — get your head up before crossing", "Low driven cross — hardest for GK and defender", "Clipped cross to far post — quality over quantity", "Striker near post run — front player attacks near post", "Far post runner arrives late — don't be too early"],
    organisation: "Area: Full width of final third. Wide player receives from a midfielder, beats a passive defender and crosses. Two strikers (near and far post) plus one late CM run. GK active. Rotate every 6 crosses, work both sides.",
    equipment: ["Cones", "Balls (8+)", "Full goal & goalkeeper", "Bibs"]
  },
  {
    id: 18, name: "Finishing Under Pressure", category: "Attacking", duration: 20, players: "8+", intensity: "High",
    description: "Striker receives, turns and shoots with a defender closing from behind.",
    coachingPoints: ["First touch away from pressure — don't take it into the defender", "Body between ball and defender on receipt", "Turn quickly — use the defender's momentum against them", "Shoot early — don't give the defender time to recover", "Variety of finishes — driven, placed, chip GK"],
    organisation: "Area: Top of penalty area. Server plays ball to feet of striker. Defender starts 2m behind and presses on the pass. Striker must control, turn and finish. Progress to defender allowed to challenge. Rotate roles.",
    equipment: ["Cones", "Balls (8+)", "Full goal & goalkeeper", "Bibs"]
  },
  {
    id: 19, name: "Link Play ST & CAM", category: "Attacking", duration: 20, players: "8+", intensity: "Medium",
    description: "Striker and attacking midfielder combine using layoffs, flicks and movement to create chances.",
    coachingPoints: ["ST — hold up play, protect the ball with your body", "CAM — time your run off the striker's back", "Layoff must be firm — don't let it bobble", "ST after laying off — spin and attack the space", "Communication — who holds, who goes"],
    organisation: "Area: 30x25m plus goal. Ball played in from midfield to ST who lays off to CAM. CAM either shoots or plays first time back to ST who has spun. Add a passive then active defender. Progress to 2v2.",
    equipment: ["Cones", "Balls (6+)", "Goal & goalkeeper", "Bibs"]
  },

  // ── DEFENDING ──────────────────────────────────────────────
  {
    id: 20, name: "Defensive 1v1", category: "Defending", duration: 15, players: "6+", intensity: "High",
    description: "Defender delays, jockeys and wins the ball without diving in.",
    coachingPoints: ["Get goal-side quickly — don't get caught flat", "Stay on your feet — don't dive in", "Jockey stance — side-on, low centre of gravity", "Force the attacker onto their weaker foot", "Wait for the mistake — touch too big, wrong direction"],
    organisation: "Area: 20x15m channel ending at goal. Attacker starts at one end, defender 3m ahead. Attacker tries to beat defender and score. Defender cannot foul. 3 reps each then swap. Progress to adding a second attacker.",
    equipment: ["Cones", "Balls (4+)", "Goal & goalkeeper (optional)", "Bibs"]
  },
  {
    id: 21, name: "Pressing as a Unit", category: "Defending", duration: 25, players: "12+", intensity: "High",
    description: "Trigger-based pressing — front three press together, midfield tucks in immediately.",
    coachingPoints: ["All three forwards press at the SAME TIME on the trigger", "Press at an angle — cut off the easy pass back", "Midfield line tucks up to compress space", "If press is beaten — recover quickly, don't chase", "Don't let them play through you — make them go long"],
    organisation: "Area: 60x40m. Blue team builds from GK. Red front 3 press on agreed triggers (back pass, heavy touch, goalkeeper). Red midfield 4 shift to cut off passes. Coaching pauses to reinforce. Award points for winning ball in top third.",
    equipment: ["Cones to mark zones", "Bibs (2 sets)", "Balls (4+)", "Goals or targets"]
  },
  {
    id: 22, name: "Compactness Shape", category: "Defending", duration: 20, players: "11+", intensity: "Low",
    description: "Defensive unit holds shape as coach moves ball around. Emphasise horizontal and vertical compactness.",
    coachingPoints: ["Maximum 10m between your defensive lines", "When ball goes wide — near side midfielder tucks in", "Centre backs hold — don't follow striker on runs wide", "GK organises the shape with constant communication", "Hold the line — move as one unit on every pass"],
    organisation: "Area: 60x40m. Defending team sets up in shape. Coach or server moves the ball around the edge. No pressure — defenders just hold and shift correctly. Coach stops and corrects. Progress to adding a passive then active attacking team.",
    equipment: ["Cones to mark zones", "Bibs", "Balls (4+)"]
  },
  {
    id: 23, name: "Recovering Positions", category: "Defending", duration: 20, players: "10+", intensity: "High",
    description: "Team defends, gives ball away, then all players sprint to recover shape before next attack starts.",
    coachingPoints: ["Sprint back — jogging is not enough", "Get goal-side of the ball first, then find your position", "Organise as you run — call out your position", "Shape before pressure — don't chase randomly", "Goalkeeper directs recovering players"],
    organisation: "Area: Full pitch. Blue team attacks, gives ball away. All Blue players must sprint back behind the ball before Red can attack. Red must wait 3 seconds. Progress to Red attacking immediately — reward Blue for recovering shape.",
    equipment: ["Full goals", "Balls (6+)", "Bibs (2 sets)", "Cones"]
  },
  {
    id: 24, name: "Defending Set Pieces", category: "Defending", duration: 20, players: "11+", intensity: "Medium",
    description: "Zonal or man-marking corners and free kicks. Walk through assignments then practice at pace.",
    coachingPoints: ["Every player has an assigned area or person — know your job", "Post player — stay on the post until ball is cleared", "Zonal marker — attack the ball, don't wait for it to come", "First clearance — head it away with purpose, not just over the bar", "Second ball — nearest player follows in immediately"],
    organisation: "Area: Penalty area and edge. Walk through positions and assignments first. GK organises. Server delivers corners and free kicks from both sides. Add attacking players once defending team knows their roles. 10 corners each side.",
    equipment: ["Cones", "Balls (8+)", "Full goal & goalkeeper", "Bibs"]
  },
  {
    id: 25, name: "High Line Offside Trap", category: "Defending", duration: 20, players: "12+", intensity: "Medium",
    description: "Back 4 hold a high line and step to play attackers offside on cue from the last defender.",
    coachingPoints: ["Last defender calls STEP on the trigger", "All 4 move forward together — one person stepping breaks the trap", "GK must be ready to come off line if ball goes in behind", "Hold the line when ball is played — don't drop early", "Communicate constantly — who is last, where is the line"],
    organisation: "Area: Half pitch. Back 4 hold a high line (10m from halfway). Attackers try to play in behind. On the trigger (ball played in behind), all 4 step up together. GK sweeps. Award points for successful traps and successful runs in behind.",
    equipment: ["Cones to mark offside line", "Bibs (2 sets)", "Balls (4+)", "Full goal & goalkeeper"]
  },
  {
    id: 26, name: "Midfield Press Trap", category: "Defending", duration: 25, players: "12+", intensity: "High",
    description: "Midfield pair press the opponent on the ball while teammates cut off passing lanes.",
    coachingPoints: ["Press at an angle — force play into the trap", "Partner tucks behind to cut off the lay-off pass", "Wide midfielder cuts off the switch pass", "Time the press — don't go too early", "When you win it — attack immediately"],
    organisation: "Area: Middle third, 40x35m. Blue midfield 4 press Red who have the ball. CDM presses, CM covers the lay-off, wide MFs cut off switches. Red must escape to score on mini goals. Blue scores if they win ball and play to a striker target.",
    equipment: ["Cones", "Bibs (2 sets)", "Balls (4+)", "Mini goals (4)"]
  },

  // ── PHYSICAL ───────────────────────────────────────────────
  {
    id: 27, name: "Reactive Sprints", category: "Physical", duration: 15, players: "Any", intensity: "Very High",
    description: "Players react to a visual or audible signal and sprint 10–20m.",
    coachingPoints: ["Stay on the balls of your feet — don't flat-foot", "Explode on the signal — no hesitation", "Drive phase — low and powerful for first 5m", "Full effort every rep — compete with teammates", "Vary the distance to keep players guessing"],
    organisation: "Area: 20m straight. Players line up in pairs facing each other or side by side. Coach gives signal (whistle, hand drop, call of a colour). Players react and sprint to cone. 8 reps with 60 seconds rest. Vary the signal type each rep.",
    equipment: ["Cones (to mark 10m and 20m)", "Stopwatch", "Coloured cones (for colour-call variation)"]
  },
  {
    id: 28, name: "Shuttle Runs", category: "Physical", duration: 15, players: "Any", intensity: "Very High",
    description: "20m shuttles x 6 reps with 60 seconds rest. Focus on turning technique and drive off the line.",
    coachingPoints: ["Plant your foot wide on the turn — don't over-run", "Low centre of gravity on the turn", "Drive hard off the turn — don't slow down into it", "Pump arms — they drive leg speed", "Record times — compete against personal best"],
    organisation: "Area: 20m straight. Two cones 20m apart. Players sprint from one to other and back (40m total). 6 reps. 60 seconds rest between. Coach records time for each rep. Players should aim to maintain time across all 6 reps.",
    equipment: ["Cones (2 per lane)", "Stopwatch", "Recording sheet"]
  },
  {
    id: 29, name: "Rondo Endurance", category: "Physical", duration: 20, players: "8+", intensity: "High",
    description: "Continuous rondo with rotating middle players — technical quality under fatigue.",
    coachingPoints: ["Maintain passing quality even when tired", "Keep moving — don't stand still after passing", "Middle players — stay active, press and intercept", "Speed of play stays high throughout", "Communicate — call for the ball"],
    organisation: "Area: 12x12m grid. 6v2 rondo. Middle players rotate every 90 seconds (or when they win the ball). No water breaks during the rondo. 3 rounds of 5 minutes with 2 minutes rest between. Progress to 5v2 to increase intensity.",
    equipment: ["Cones (to mark grid)", "Balls (4+)", "Bibs for middle players"]
  },
  {
    id: 30, name: "Interval Running", category: "Physical", duration: 20, players: "Any", intensity: "High",
    description: "30 seconds on, 30 seconds off x 8. Players run at 80–85% max effort.",
    coachingPoints: ["Run at 80-85% — not flat out, not jogging", "Consistent pace across all 8 reps", "Breathe through the rest period — recover actively", "Focus on running mechanics — don't shuffle", "Work in pairs to keep each other honest"],
    organisation: "Area: Pitch perimeter or 60m straight. Players run for 30 seconds at 80% effort, rest 30 seconds. 8 reps total. Coach tracks effort level visually. Progress over weeks by increasing reps or reducing rest time.",
    equipment: ["Cones to mark course", "Stopwatch", "Whistle"]
  },
  {
    id: 31, name: "Plyometric Circuit", category: "Physical", duration: 15, players: "Any", intensity: "Very High",
    description: "4-station circuit — box jumps, lateral hops, bounding and tuck jumps. Builds explosive power.",
    coachingPoints: ["Land softly — knees bent, absorb the landing", "Full extension on each jump — don't half-jump", "Reset quickly between reps — sharp and explosive", "Quality over quantity — stop if form breaks down", "Rest fully between stations"],
    organisation: "Area: Flat surface. 4 stations: (1) Box jumps x8, (2) Lateral cone hops x10 each side, (3) Bounding for 15m, (4) Tuck jumps x8. 40 seconds at each station, 20 seconds rest to move. 3 rounds total. Demonstrate each station before starting.",
    equipment: ["Plyometric box or step", "Cones (for lateral hops and bounding)", "Flat surface"]
  },
  {
    id: 32, name: "Ball Mastery Warm-Up", category: "Physical", duration: 10, players: "Any", intensity: "Low",
    description: "Individual ball work — toe taps, inside/outside rolls, drag-backs and step-overs. High reps to get touch sharp.",
    coachingPoints: ["Stay on your toes throughout", "Head up as much as possible — know your space", "Both feet equally — spend equal time on each", "Sharp movements — not lazy rolls", "Gradually increase speed as body warms up"],
    organisation: "Area: Each player in their own 2x2m space. Coach calls the moves — toe taps, inside/outside, drag-back, step-over, scissors. 30 seconds per move. Progress to moving through a slalom after 5 minutes.",
    equipment: ["1 ball per player", "Cones (optional — to mark individual spaces)"]
  },
  {
    id: 33, name: "Dynamic Stretching Routine", category: "Physical", duration: 10, players: "Any", intensity: "Low",
    description: "High knees, heel flicks, hip circles, lunge walks, lateral shuffles. 10-minute group warm-up.",
    coachingPoints: ["Dynamic — keep moving throughout, no static holds", "Full range of motion on each movement", "Control the movement — don't flail", "Progressively increase pace as warm-up develops", "Finish with 2 short sharp sprints to prime the nervous system"],
    organisation: "Area: 20m straight. Players walk/jog through each movement in a line. Coach leads at the front. Sequence: high knees, heel flicks, hip circles, lunge walk, lateral shuffle, carioca, leg swings, then 2x20m strides at the end.",
    equipment: ["20m of clear space — no equipment required"]
  },

  // ── TACTICAL ───────────────────────────────────────────────
  {
    id: 34, name: "Build-Up from the Back", category: "Tactical", duration: 25, players: "11+", intensity: "Medium",
    description: "GK distributes to CBs who play out under pressure. CDMs drop to offer angles.",
    coachingPoints: ["GK — scan before receiving, play quickly", "CBs — open body shape, don't receive square-on", "CDM — drop deep to offer a pass, show for the ball", "Don't force it — if pressed, GK goes long", "Width — full-backs get wide to stretch the press"],
    organisation: "Area: Own half. GK distributes to CB. Press of 2 applied by opposition. Team must play out to halfway. If press wins ball, they score in empty goal. If team plays out successfully, award a point. 10 rounds. Progress to 3-man press.",
    equipment: ["Full goal", "Cones to mark halfway target", "Bibs (2 sets)", "Balls (6+)"]
  },
  {
    id: 35, name: "Switching the Play", category: "Tactical", duration: 20, players: "10+", intensity: "Medium",
    description: "Team must switch play across the pitch at least once before scoring. Develops awareness of space.",
    coachingPoints: ["Receiver on the far side — check your shoulder early", "Ball must travel quickly across — don't dwell", "Switch with pace — a slow switch gives the defender time", "After the switch — attack at speed before they recover", "Don't switch for the sake of it — only when there's space"],
    organisation: "Area: 60x40m. Normal game but a switch pass scores a bonus point. Far side player must call and show for the switch. Progress to requiring TWO switches before shooting. Coach pauses to demonstrate well-timed switches.",
    equipment: ["Goals (full or large)", "Bibs (2 sets)", "Balls (6+)", "Cones"]
  },
  {
    id: 36, name: "Transition Games", category: "Tactical", duration: 25, players: "12+", intensity: "High",
    description: "5v5 or 6v6 — when possession is won, immediate quick transition to attack.",
    coachingPoints: ["Transition is in the first 3 seconds — react immediately", "First pass must go forward — no safety passes back", "Runners go early — before the other team organises", "Losing team — press immediately, don't switch off", "Goalkeeper counts to 3 — if not forward, turnover"],
    organisation: "Area: 50x35m with goals. 6v6. When ball is won, team has 5 seconds to play forward or score. If they don't, possession turns over. Coach counts out loud initially to set the expectation. Award bonus points for goals scored within 5 seconds of winning ball.",
    equipment: ["Large goals or full goals", "Bibs (2 sets)", "Balls (6+)", "Cones", "Stopwatch"]
  },
  {
    id: 37, name: "Shape vs Shape", category: "Tactical", duration: 30, players: "14+", intensity: "Medium",
    description: "Full team vs full team in structured shape. Coach stops play to reinforce positional principles.",
    coachingPoints: ["Hold your shape — don't ball-watch and drift", "In and out of possession — shape changes slightly but structure holds", "Reference points — know where your nearest teammate is", "Communicate — call for ball, call for press", "Play at game speed — shape must work at pace"],
    organisation: "Area: Full pitch. Full 11v11 or 10v10. Coach stops play every 3-4 minutes to freeze-frame and correct positioning. Focus on one theme per session (e.g. width in attack, compactness in defence). Finish with 10 minutes unrestricted play.",
    equipment: ["Full-size goals", "Bibs (2 sets)", "Balls (8+)", "Cones"]
  },
  {
    id: 38, name: "Playing Through the Lines", category: "Tactical", duration: 20, players: "10+", intensity: "Medium",
    description: "Team must play through three zones before shooting. Cannot skip a zone.",
    coachingPoints: ["Patience — don't force the pass into the next zone", "Movement — someone must always show for the ball in each zone", "Body shape when receiving between lines — face forward", "Quick combination to escape the zone under press", "Final zone — attack at pace and get a shot off"],
    organisation: "Area: 60x40m divided into 3 zones. Ball must be received and controlled in each zone before advancing. Defenders in each zone (1 in zone 1, 2 in zone 2, 2 in zone 3). Progress to defenders moving freely across zones.",
    equipment: ["Cones to mark 3 zones", "Bibs (2 sets)", "Balls (4+)", "Goals"]
  },
  {
    id: 39, name: "Box-to-Box Midfield", category: "Tactical", duration: 20, players: "10+", intensity: "High",
    description: "Central midfielders practise box-to-box running — support, receiving on the turn, pressing and recovering.",
    coachingPoints: ["Support the attack — get in the box on crosses and cutbacks", "Track back — when team loses ball, sprint back to your position", "Arrive late — timing your run means you're harder to mark", "On the turn — check shoulder before receiving, take it away from pressure", "Engine — you cover the most ground. Fitness is key."],
    organisation: "Area: Full pitch with two midfielders and supporting players. Ball starts in defensive third. MFs support build-up, break forward to support attacks, then sprint back on transition. Continuous 8-minute rounds. Coach tracks distance covered.",
    equipment: ["Full pitch", "Bibs", "Balls (4+)", "Cones to mark midfield zones"]
  },
  {
    id: 40, name: "4v4 Transition SSG", category: "Tactical", duration: 25, players: "10+", intensity: "Very High",
    description: "Small-sided game — points for scoring within 5 seconds of winning the ball.",
    coachingPoints: ["Win the ball — look up immediately, don't celebrate", "First pass forward — never sideways or back on transition", "Support runners go on the moment of press", "Keep the space tight — this is a high-intensity game", "Defence — press instantly, no team defends passively"],
    organisation: "Area: 35x25m with goals. 4v4 plus GKs. Normal rules but bonus point for goals scored within 5 seconds of winning possession. Coach counts out loud. Rotate substitutes every 4 minutes to keep intensity high.",
    equipment: ["Large goals or small goals", "Bibs (2 sets)", "Balls (6+)", "Cones", "Stopwatch"]
  },
  {
    id: 41, name: "Wing Play Patterns", category: "Tactical", duration: 20, players: "10+", intensity: "Medium",
    description: "Winger receives, combines with overlapping full-back or underlapping CAM, delivers into box.",
    coachingPoints: ["Winger — hold the ball long enough to draw the defender", "Full-back — time the overlap so you're running onto the ball", "CAM underlap — tuck inside to create the space for the overlap", "Decision — overlap or underlap? Read the defender's position", "Delivery — quality over quantity, pick the right cross"],
    organisation: "Area: Wide channel and final third. Structured pattern — CB to full-back, full-back to winger, winger holds, full-back overlaps (or CAM underlaps), ball delivered into box. 2 strikers attack. GK active. 5 reps each side then switch.",
    equipment: ["Cones", "Balls (6+)", "Full goal & goalkeeper", "Bibs"]
  },

  // ── SET PIECES ─────────────────────────────────────────────
  {
    id: 42, name: "Corner Routines — Attacking", category: "Set Pieces", duration: 20, players: "11+", intensity: "Low",
    description: "Practise 3 set corner routines — near post flick-on, far post run, short corner combination.",
    coachingPoints: ["Everyone knows their role before the corner is taken", "Near post runner — sharp and early, attack the ball", "Far post runner — time the run, arrive as ball arrives", "Short corner — disguise the move, quick pass and return", "Second ball runner — anticipate where the clearance goes"],
    organisation: "Area: Penalty area. Walk through each routine at slow pace (3 times), then at game pace (5 times each). Designate roles: corner taker, near post, far post, penalty spot, short option, second ball. Work from both sides. Add defenders once routines are learned.",
    equipment: ["Cones (to mark positions)", "Balls (8+)", "Full goal & goalkeeper", "Bibs"]
  },
  {
    id: 43, name: "Free Kick Routines", category: "Set Pieces", duration: 20, players: "11+", intensity: "Low",
    description: "Direct shots, dummy runs over the ball, layoffs for runners from 20-25m out.",
    coachingPoints: ["Wall positions — know exactly where to stand", "Dummy runner — run with conviction, sell the dummy", "Layoff — firm and accurate to the shooter's stronger foot", "Shooter — decide on technique before the run-up", "Variation — have at least 3 different routines"],
    organisation: "Area: Edge of box, both sides of centre. 3 set routines: (1) Direct shot, (2) Dummy over ball + second player shoots, (3) Layoff for runner from deep. Practice each 8 times from both sides. Add a defensive wall (minimum 4 players) from rep 3 onwards.",
    equipment: ["Cones (for wall positioning)", "Balls (10+)", "Full goal & goalkeeper", "Bibs for wall"]
  },
  {
    id: 44, name: "Throw-in Patterns", category: "Set Pieces", duration: 15, players: "8+", intensity: "Low",
    description: "Three rehearsed throw-in plays — short and return, long diagonal, spin and receive.",
    coachingPoints: ["Throw-in taker — scan before picking up the ball", "Short option — show, receive, play back in one move", "Long diagonal — creates immediate attacking opportunity", "Spin move — receiver shows short, spins behind defender", "Never give the ball away from a throw-in — simple options first"],
    organisation: "Area: Own half and middle third. 3 patterns: (1) Short to nearest player who returns, taker overlaps, (2) Long diagonal to switch play, (3) Receiver shows short, spins behind for the diagonal. 5 reps each pattern, both sides of pitch.",
    equipment: ["Cones", "Balls (4+)", "Bibs"]
  },
  {
    id: 45, name: "Defending Corners", category: "Set Pieces", duration: 20, players: "11+", intensity: "Low",
    description: "Zonal or man-marking corners. Every player has an assigned role. Walk through then full practice.",
    coachingPoints: ["Know your role — zonal or man? Practise both", "Post players — stay on post until ball is cleared past you", "Zonal defender — step and attack the ball aggressively", "First clearance — head it with purpose and distance", "GK — claim everything in the 6-yard box, command the area"],
    organisation: "Area: Penalty area. Assign roles: 2 post players, 4-5 zonal defenders, 2 on edge of box, 1 covering far post run. Walk through each position (3 times), then practice with live corners from both sides (10 each). Progress to 6 attackers vs full defending team.",
    equipment: ["Cones (for zonal positions)", "Balls (8+)", "Full goal & goalkeeper", "Bibs"]
  },
];

const INITIAL_TRAINING = {
  1: {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, 10:true, 11:true, 12:true, 13:true, 14:false},
  2: {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, 10:false, 11:true, 12:true, 13:true, 14:true},
  3: {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:false, 10:true, 11:true, 12:true, 13:true, 14:true},
  4: {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, 10:true, 11:true, 12:true, 13:true, 14:true},
  5: {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, 10:true, 11:true, 12:true, 13:true, 14:true},

};

const DEVELOPMENT_GOALS = [
  // Technical
  { id: "t1",  category: "Technical",  text: "Improve first touch — control under pressure" },
  { id: "t2",  category: "Technical",  text: "Develop weak foot — use in training and games" },
  { id: "t3",  category: "Technical",  text: "Passing accuracy — short range (under 15m)" },
  { id: "t4",  category: "Technical",  text: "Passing accuracy — long range (over 25m)" },
  { id: "t5",  category: "Technical",  text: "Shooting technique — driven finish" },
  { id: "t6",  category: "Technical",  text: "Shooting technique — placed finish" },
  { id: "t7",  category: "Technical",  text: "Crossing accuracy and delivery" },
  { id: "t8",  category: "Technical",  text: "Heading — attacking and defensive" },
  { id: "t9",  category: "Technical",  text: "Ball carrying — speed with the ball" },
  { id: "t10", category: "Technical",  text: "1v1 dribbling — beat the defender with the ball" },
  // Tactical
  { id: "ta1", category: "Tactical",   text: "Positioning — find space before receiving the ball" },
  { id: "ta2", category: "Tactical",   text: "Decision making — when to pass, run or hold" },
  { id: "ta3", category: "Tactical",   text: "Pressing triggers — when and how to press" },
  { id: "ta4", category: "Tactical",   text: "Defensive shape — hold position and stay compact" },
  { id: "ta5", category: "Tactical",   text: "Transition — react immediately when possession changes" },
  { id: "ta6", category: "Tactical",   text: "Movement off the ball — create angles for teammates" },
  { id: "ta7", category: "Tactical",   text: "Switch of play — awareness of the far side" },
  { id: "ta8", category: "Tactical",   text: "Understanding of role — positional responsibilities" },
  // Physical
  { id: "p1",  category: "Physical",   text: "Improve sprint speed over 20m" },
  { id: "p2",  category: "Physical",   text: "Build aerobic endurance — maintain intensity for 60 mins" },
  { id: "p3",  category: "Physical",   text: "Improve agility and change of direction" },
  { id: "p4",  category: "Physical",   text: "Strengthen core stability and balance" },
  { id: "p5",  category: "Physical",   text: "Increase explosive power — jumping and acceleration" },
  { id: "p6",  category: "Physical",   text: "Improve recovery rate between sprints" },
  // Mental
  { id: "m1",  category: "Mental",     text: "Confidence — take risks and back your ability" },
  { id: "m2",  category: "Mental",     text: "Communication — organise and encourage teammates" },
  { id: "m3",  category: "Mental",     text: "Resilience — bounce back after mistakes" },
  { id: "m4",  category: "Mental",     text: "Focus — stay switched on for the full game" },
  { id: "m5",  category: "Mental",     text: "Leadership — set the example in training and games" },
  { id: "m6",  category: "Mental",     text: "Work rate — pressing and tracking back consistently" },
];

const ROLES = [
  { key: "captain",         label: "Captain",                  emoji: "🅒",  group: "Leadership" },
  { key: "viceCaptain",     label: "Vice Captain",             emoji: "🅥",  group: "Leadership" },
  { key: "penaltyTaker",    label: "Penalty Taker",            emoji: "⚽",  group: "Leadership" },
  { key: "goalKick",        label: "Goal Kicks",               emoji: "🥅",  group: "Distribution" },
  { key: "cornerLeft",      label: "Corners — Left",           emoji: "🚩",  group: "Set Pieces" },
  { key: "cornerRight",     label: "Corners — Right",          emoji: "🚩",  group: "Set Pieces" },
  { key: "freeKickAtt",     label: "Free Kicks (Attacking)",   emoji: "🎯",  group: "Set Pieces" },
  { key: "freeKickDef",     label: "Free Kicks (Defensive)",   emoji: "🛡️", group: "Set Pieces" },
  { key: "throwInAttLeft",  label: "Throw-ins Attack — Left",  emoji: "🤾", group: "Throw-ins" },
  { key: "throwInAttRight", label: "Throw-ins Attack — Right", emoji: "🤾", group: "Throw-ins" },
  { key: "throwInDefLeft",  label: "Throw-ins Defence — Left", emoji: "🤾", group: "Throw-ins" },
  { key: "throwInDefRight", label: "Throw-ins Defence — Right",emoji: "🤾", group: "Throw-ins" },
];

const FOCUS_COLORS = { Technical: "#3B82F6", Tactical: "#c9a84c", Physical: "#EF4444", Mental: "#10B981", Attacking: "#F97316", Defending: "#06B6D4", "Set Pieces": "#F59E0B" };
const POSITION_COLORS = { GK: "#F59E0B", CB: "#3B82F6", RB: "#06B6D4", LB: "#06B6D4", CM: "#c9a84c", CAM: "#c9a84c", CDM: "#1e7a3e", RW: "#10B981", LW: "#10B981", ST: "#EF4444" };

function RadarChart({ data }) {
  const keys = Object.keys(data); const values = Object.values(data);
  const size = 120; const cx = size / 2, cy = size / 2, r = 45;
  const pts = keys.map((_, i) => { const a = (i / keys.length) * 2 * Math.PI - Math.PI / 2; const v = values[i] / 100; return { x: cx + r * v * Math.cos(a), y: cy + r * v * Math.sin(a), lx: cx + (r + 18) * Math.cos(a), ly: cy + (r + 18) * Math.sin(a), label: keys[i] }; });
  const grid = (s) => keys.map((_, i) => { const a = (i / keys.length) * 2 * Math.PI - Math.PI / 2; return `${cx + r * s * Math.cos(a)},${cy + r * s * Math.sin(a)}`; }).join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1].map(s => <polygon key={s} points={grid(s)} fill="none" stroke="#2d5a3d" strokeWidth="0.5" />)}
      {pts.map((p, i) => <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos((i / keys.length) * 2 * Math.PI - Math.PI / 2)} y2={cy + r * Math.sin((i / keys.length) * 2 * Math.PI - Math.PI / 2)} stroke="#2d5a3d" strokeWidth="0.5" />)}
      <polygon points={pts.map(p => `${p.x},${p.y}`).join(" ")} fill="rgba(99,102,241,0.25)" stroke="#1e7a3e" strokeWidth="1.5" />
      {pts.map((p, i) => <text key={i} x={p.lx} y={p.ly} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#86b598">{p.label}</text>)}
    </svg>
  );
}

function StatBar({ value, color }) {
  return <div style={{ height: 4, background: "#1e3d28", borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: `${value}%`, background: color, borderRadius: 2, transition: "width 0.6s ease" }} /></div>;
}

function ResultBadge({ gf, ga }) {
  const r = gf > ga ? "W" : gf < ga ? "L" : "D";
  const c = r === "W" ? "#10B981" : r === "L" ? "#EF4444" : "#F59E0B";
  return <span style={{ padding: "2px 10px", borderRadius: 6, background: c + "22", color: c, fontWeight: 800, fontSize: 12 }}>{r}</span>;
}


// Team badge SVGs — colour-based crests for division opponents
const TEAM_BADGES = {
  "Knocklyon United FC": { primary: "#1B3A6B", secondary: "#C8B560", abbr: "KU", circleBg: "#2D6A2D", circleBorder: "#C8B560", imageUrl: "data:image/png;base64,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" },
  "Ballyoulster United FC": { primary: "#1B5FAD", secondary: "#FFFFFF", abbr: "BU" },
  "Ballyoulster FC": { primary: "#1B5FAD", secondary: "#FFFFFF", abbr: "BU" },
  "Ballyoulster Utd": { primary: "#1B5FAD", secondary: "#FFFFFF", abbr: "BU" },
  "Cabinteely FC": { primary: "#1A6B2A", secondary: "#FFFFFF", abbr: "CAB" },
  "Kilnamanagh AFC": { primary: "#C0392B", secondary: "#FFD700", abbr: "KIL", circleBg: "#111111", circleBorder: "#C0392B", imageUrl: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAF/AUQDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAAQFBgcBAgMICf/EAGIQAAECBAMDAwoQCAkKBgMBAAECAwAEBREGEiEHMUETUWEIFCIyNGJxgZGyFzZCUlRWcnN0k5ShsbPB0RUjJCU3dYKVFiYzNVWS0uHiJ0NERUZTY2RlwnaDhKK08IXE8aP/xAAcAQABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABBEQABAwICBAgMBQMFAQAAAAABAAIDBBEFIQYSMUETIlFhcZGx0QcUMjM0UnKBkqGywRUjNVPwJELhJUOCovFi/9oADAMBAAIRAxEAPwCZjE7dFpKFTcrNzgL6m2+TfObt1aG5jiNosh/QFW+UD+1DHicfmmWP/Oq89UVtWH6tM1NaJZ5bLCDlAbNiTzkxk2Pe5xF+Xl5Vj5KupNRwMdvfflVyjaLI+1+rfHj742G0SS/oCrfHj74pFLVaOvXc58aI3S1WvZc58aId43rD596sPEsZ/bPwuV2+iJJafmCrfH/3xkbQ5H+gKt8f/fFKBmtey5z40RsGaz7MnPjRHeN6w+fejxLGf2z8LldXohyX9AVb48f2oPRCkv6Aqvx4++KWDNZ9lznxojbkaz7MnPjRBZ3rD59674ljH7Z+Fyuj0QpL+gKr8ePvjCtocl/QFV+PH3xTHI1n2XOfGiNVM1n2ZOfGiO2d63b3o8Sxj9s/C5XMdokl7X6t8ePvjB2iyX9AVb48ffFLFmtey5z40RqWa17LnPjRHbO9YfPvSPEsZ/bPwuV0naLI/wBAVb4//FGPRFkfa/Vvj/74pUs1r2XOfGiNCzW/Zc58aI5Z3rD59654ljX7Z+Fyus7RpH2v1b5R/fGp2jyHtfq3ygf2opNTVb9lznxojQtVv2XOfGiCzvWHz71zxLGv2j8Lldx2kyHtfq3yj++NDtJkPa/VvlH+KKQU1XPZc58YI5qarvsuc+MTHLO9YfPvXPEsb/aPwuV4naXIe1+r/KP74x6JlPH+z9X+Uf3xRamq77LnPjExzU3XvZc58YmOWd6w+feueJY3+0fhcr3O02n+1+r/ACj/ABRr6JtP9r1X+Uf3xQ5RXvZc58YmNSiv+y5z4xMFj646z3pJosc/aPwuV9eidT/a9V/lH98HonU/2vVf5R/fFCZK/wCypz4xMYyV/wBlTnxiY7Y+uPn3pPiWO/tH4XK/PROp/teq/wAo/wAUHonU/wBr1X+Uf4ooPJX/AGVN/GJjOSv+ypz4xMFj64+fejxLHf2j8LlffonU/wBr1X+Uf4oPROp/teq/yj/FFB5K/wCypv4xMGSv+ypv4xMFj64+fejxPHf2j8LlfnonU/2vVf5R/ig9E6n+16r/ACj/ABRQeSv+ypv4xMGSv+ypv4xMFj646z3o8Tx39o/C5X56J1P9r1X+UD+1B6J1P9r1X+Uf4ooPJX/ZU38YmDJX/ZU38YmCx9cfPvR4njv7R+Fyvz0Tqf7Xqv8AKP8AFB6J1P8Aa9V/lA/tRQeSv+ypv4xMGSv+ypv4xMFj64+fejxPHf2j8Llfnom0/wBr1X+Uf4oPROp/teq/yj/FFCZK/wCypz4xMGSv+ypv4xMFj64+fejxPHf2j8LlffonU/2vVf5R/ig9E2n+16r/ACj++KEyV/2XN/GJjGSv+y5v4xMFj64+fejxLHf2j8Llfvom063pfq/ygffHCf2pybEk68zhyqrcQgqSFTNgTwvrFM4epmJanV2JKWmJxbi1aAuJtYakxK8SSL9OlnpaZUFOhnMSNxht0ha4N1r9fequurcSoJGsnZa/KHDL3qF1ucr2IKo9VqpWagxMPqzcjLzS0ttJ4IHgEECuHggi0ZI4tGakR19Q5oOsVdOJ7mlS43Drxfnqiv3h+WO++GLCxOLUuWH/ADa/OXFfvD8sd98MU0flO9/aVIpP1eP2h9Sc6JTJirVFmnygb5d02RnUEgnwnQQonqQ9I1pdJfdl1TTduVQ06F8meY23Hohds+SDi2QvuzH6DHDAEvLsY2nqvOtJTSaUJqp1BRsM/Jq7FGu8qVlSB30LjiMgNtoXt2L4+7D66OEgahaSeXK/cleJMOqw263L1d2UZmnACmXL6eVNxftAbiMYhw1NUWRlZycdlW0zaUqYRyyStwEAiyb33GK5fqk9Va9NV+ZAXUqq8qYdWRqhKjcJHMLcInW1LMxOUyZypL6KNK2URqCUpvDxpmh+qDuVS7SWrZFFI9o47rb9nWlMvhudew87XiuVZkGlFK3HXkpsRrbXww0ISlaQpNiCLiHatNJf2WUovISv86OEhQuO0SYjWF3XpqXK3TcnWGzFZmsrfDsZfV1s1O5oAba3+VKn8MVFnDScQucgiQXcJWXEgk3ta2+8JKDRJuuTqpSQS0p0IU52awkWAudT0Q+YjD0xSsG0tmRbfLynXCVHtcpNvHcw0YFzs1LEFOfN1N0+aCb8U8moj/70R0Q3YHX2qtGk7xPUwOaLxhxbz2vtzTQ622mYcaQ8y9yailS2lhSSRzEQ/wAhgqtTlDTWm2mESSgpQcddSgAJ3nUxA6OtwVFEm0AhpLaAEgaC45vHE9xPISNS2gUfDc+2p2XptESAyFkJMw6lTxJHHtkjxQvgBwmrfJOV2kktPhsdSxgL3bvdcqMAtrJ5NaHE3IzINwfAYfFYRqqcNoxEsS7dNUgr5Zx1KQLEi2p33BiGSL7iK09KqISgZSkDgCN3zRN8bpmp5GE8KsSiXmU05VQmFE27VxwjTjoY5wH5mpfJJxHSh1NhUVdG0EutcHoJNupR+Rllz00zLSyQtx5QQ30k7oX4sw7PYYmW5WrqlmZh09gyl1KlkDjYHd0wm2QTYbxc7NzwC2aNy08sH1rKS4PoHliN40fqzxRiupyqJabrC0vtIvcpZvlFr8NI6ylJc4E7EVulnAzUzIwLSWv7/wCFSGhUicrlWZpdOaDk0+SEJJtewv8AQI2xRQJ3Dj7UtVet2n3gShoPJUqw4kA7oU4KmDJ4WxHiE3C5OkupbXfVLjo5JJHT2fzREK1T5Wk4IotSkG1CZeYUZl1SsylqQ5Y6ncLcIbip9cEkpzGNKXUFfHA1oLTq6x5LnuUjw1h2o4jnHJSltIdfbb5QpUsJ7EEDefDDVOMdbzjsqpbK3Gl5F5FhQvxFxoYe9nlQMtRq7UeTD62qUtQST2xzI++IbPIm6fJUieclkyzb6LLQDcanQ+W4hDIC5rnX2J2r0p8UxiOie0ajwM99zcqQYjok1QVyrdRclUuzTaXWm0PJUsoIuFZRqBGcNYfqWI55cjSmQ6+ltThSSAAkbzcwz7Zpgy2LOuWEpS4uSkhmA4FlJhzlH1yex3E9SzFt+dEvTGVg2ILiwtQH7LR8sdNPmwA+VZFLpQ+TDZqp7RrMJA5NwHasYhpMzQal+DagphM3lzKaQ6lSkjpsdIRy7Dsw8hhhtbrqyAlKU3JJ4WhrxrJytClaQ9SWi21MSku64oqzFZUmyiT4bxNaPW3cG7Kp3F1MyfwhqEyKZS3VDWVzJJdeT32UhIPC5hT6bjta07UnDNL2z4a+rqG2c0kW593L70smdm+I5KXQ7VDTaUVozpanp9llwp58ilAjxiI1Rac7WKy3Sac9KvzDrnJoUl9BbUr3YOXx3ir5pPXE+48+4/U6g6oqemZhxS1LPPqYsDYs3UEY/o7TzQQx1wBlAsALQqWnZGziuuUulxvEnNfNNG0NDSRYG97XF80vrdOco9Wdpc29JrmmkguoYmEO5L7gSgkA9ELa3h2do9Gk6tUHpBuWnUhUsOu2y45fmQDm+aK/rM05J4ldQyAgPzDql24nNEw2yOFqRw3NgAuoooUlXEEnfHTSgS6l9ygO0xnFBBUag1nv1TttbPZn3pPYcwh3wthuqYlnXZOlNNLdaaLq+UdS2AkEAm6iBxHGIthyYcmqel1xVzEoqKlSOyOtzAUtC6pOS1NSUGxyZi6sA/8Alp8vTEZsZdIGLWYtifiWHvq2jMAWvykgfe6TV2mO0aqOUycdlFTbYu4hiYQ7k6FFJIB6IRadEN2OJeVoT9PNHZLUo8xLuEqUVFZW2Lkk9N4XS687CFjiIXPCIyLbCoOjGOOxikMsjdV4JBHQnjDGHqjiSfXI0tDK30tlzK46lsFI36qIEO83s+r8ow4/NO0dlpsZlqXVJcZRzns45bP+3rJGhFKeII4GwikpiXbTPiWYlgtRSlRJWSSTrzwuCBsjS5xtZV2L6QVtPifiNM1p4oOd/fvVjJU2rNybjbqQSkKQoKSbHeCNCIUU+SmqhNtycjLuTEw4oJQ22nMpRO4ADf4IjWG0z6VFMyjKgDQW0iyKlWZvAeylNRoqjL4lxLMLlJWcT20pKoA5RaDwUoki/AJ0tDYi1pdRpV1WYuKHD/Gp28bIW5Xd209C5YgwTVcPSK5muTdHpy0JClS79SZS8Ad3YZr313b4jCFIWkKSQQRe4O+K6YYbEyUyrKpqZJut94lSlq4nWJjh1M6GCZu9+EOTwMjHFN0xguI11U5xqWAA2tb75qc7N7fwtlve3fq1R32hd2zHTKj6Y4bNvTbLe9u+YqO+0Lu5/wCCRBZ51eX+FX0tnst+oqAWuB4IIwdAPBBF605LBQ+QFduJf5rlvha/PXEAeH5W77sxYGJR+a5b4WvzlxAXe7HffDFYzyne/tVnS/q0ftD6lJ9nw/jbIHvj9BhNLVdupCt4MptNl2Zecmluzk3MvHO620vPkQkDdmAJvzCFGA3G2MTybzqwhtslSlE6AAGIbLVFtnHEpUZdwOMl95WZO5SFLsfKCYk0mWsV6TpnSvqq6JjPK1DbpzSqnUtLeIJhDiRZCgWx3h3fd4olO2RCW5mVJ0ApUt9CYasSqbl6wJiVmUOKYe5F8JN7A9qfL9MLtrkwxOTrKGXkuutUuVDiUm+UkJIHkh3VIlvzKtbVeO4fSE+UHWPuslc0kubKaUo/0o7b4sRGcGNHrLdzROJYUobP6DT6pUGpNb1ScUMwJsnIkFRA1trCIMYRo9NU3S8XM1WZzZG2JaSdBV0lSkgAdN4azdHYDlWhwySKkxOczOtciy3x+47JYdwrOsXC2WX1A+BV4U0qSbexM9Upc2anKTNnxKYUR5DcRz2kzAcwph+XbmUKdRKvqWgWuATYG0dsO12YkMCzqELlWXut1yyHnG7qQhzQlPTqfLCoyQxoKo8ToC589THta8g9Dsj9lA8EU5VRx3JSDe99xpoHmvYXiYIoOKq7tcm8S02iTszT0V/Ip1tGiWG1BAH9QQk2ZIlaPjCpV1+YT1rRZJyYzrIF1Jbsi/SVlI8JEV2+y5NPsNvKfeJVyy0KmHAMyzc2AUAOEPtsS4nYnZopZRTwMF7MJ68k6Ylk10vGipdxIStDrjKxzFKr2+eJbimfRJbSsOpcNm/wZLS7mu5Lo1v/AFoj20GWpknU2WqSlCGJZTCigOFahyiBe6jvOojG2KZZdxw+JV1KxKtyrGZB7VSGk3HhEBbd2tzKrhPjFDBSPGx7h/OtatSjtHoWPJ0/i1rlm6a0Toc7r6UqA/8ALQuE+1VKVYbw04gGwpaQD7l5QjvtbxCZuRYpEi1KtMOut1OcWkEuuuqScqSeAGZR8JhHjJ9l/AWHU8okzCae+OTvqAHlWPlhYvcHlVdEx5gjkk2te1vuF08S8hPPbGEy0gw49MVqty8sENIJK22kqWR5VI8kaVrCmIqXswQ3iGjzVOcbqLrbfLptmS4gbui4MNu0KdRK4XwdQWJohySpzlRmQ04UKS4+u6ASLG+QIMM+BpOmoodbqFQRlmWUNrl3HH1lNyux0JNzu8sJjaGtF1Lxh01T4zUNFwC3p4uQ+yetmDnK4VxEgnVNJWDfoWiGeQcTWcLztMcV+OkXbov/ALtQBHkUPnELNnj7EjJYxYffQ22mnOgFRsOydby+cIZcDTJlcWOE2yODk1hWosQLXHQbQ2wBmsTypzF4X4nOXw+WI2ub0ix/wlG2UqVU5Ja0kKVTpAkdIZSD84MP9Xo9XndmeDqHSJJ+cmanPTM+pllBKl5EpabGnSF+WIrtYq0zW8QTFSmnWVq5ZuWQ2wgIQ0htFgAB44W7ZZ9tqsyFIkpxZFBo0tILLLqkDl1Jzug5SNQpSgR0aw5wfHbzD/Cj0lS+TCmxM2vf/OTeQnDH+HK7StnlBaxBSpqmzqWH2g3MJyqIQvMk+Cx0jSdc6+2SYYSgXDExMqV0KOa3jtb5oYsKytMbwPMzU0kNz5nkstqW8ogtrQbgJJOuh1jpgmpJboKqXNgqQxMFadfEfNBgsLtcNgKi1DapsFZTtYdZrg8jmN726Lpx2LuyDkh1qnB1PxBVXZhx5T03MOtBiXS2CbFC0g6hR3Ew7bNa517tOpyXpeTlHXZkFEvKBXJtg3AAKlKJ3byY6YVVgLCkxUKr/DmQQy5IzCESC5Z4vBxxtSQgWQU2ud5I+2IlsteZa2u0GaW4lLQW2tSibAJGY3PihqSLXY4ub0K8hxR75yYZCY3xG4N7A2N8k4z+0WrYeqE1K0+kYcSlUy4tLszTkzLqgDa11ggC/MBGu1moYgrFKplbxDMU8rm6XmlWpNhLSUtZ9CUjQXiI19cvO19t1pYcZdccKVDcoFcTDa7MSS6VQpCWeQtyUoTaHUJOqLquAfEYkF1pA0BUgoSyip52ki77EbtpTdhL+aUiJvjehVqoYUwZh+jU2anpuY68qTjTCCsm9m0aDoQT44heDEFyntNjUqUB9ELNuVZamsYOSlLqCnJakSDFMSqXeUEFaUDlRdNs3Z5vDEGnaTOTyXXomlszzQ09Oza9w+X/AKEs2l0CuUzA+HzX6Y/Tp4SC0KaeTlWC08vL5UBJ8cNtCdD1MaUOaE1AlaYMAKfmElFScnTLpU46o5m1I9SknfvueiHPZ5U8K0fZ5WKjX2H5+qNrTK0+TQvIMxvmcUQL2FhYeHxO1EfCMaGZqi0XxRmFT1baoEAG9unkUt2eKCHqytScwFKfJTziw0iAJx21JSrcg1gjCCZoMhInpiVdfmBfcq5Xl0HC1olWz+u09DVdemphqXQmlvAlSrgE2AF/GBFZS7DcziBDaxmSWkePSOUw4Nj9YJeKNZiePsdE4gOjBBGRUoo1RROIyhWZSe2UEhIPiGgHREm2oXmsIYV5O6utpWZFgNyjmMIcQzODcP0SlUykyD0xWJhsvz86t6yGRvS2hFubeTre8YlqzKTNNYbf7NlpRKeNgd4Hz+WEQtLZQ+2RTmllf45hbm093ugcNbLaLEX5+dRPArCOty+RdR4xJyY6da4BpMm89T8apdcUMzVM6xdL+c7kA2y2ud5IsBxhwm6xg6lYBbcel3ahiGemMjaUvZG5ZsDtjYdkTfwWtDUsMj5LAbVpcP0nw6PDmzlxytcWzuf/AApfs29Nst7h3zFR32hd3P8AwOG3ZPOtTWKpYtkE5HQdf+GqHLaF3c/8DiGGls1ivOPChK2Woie3YWNP/ZV+rh4IIFcPBBF0Niw8PmwruxJ/NUsf+cX564gbvdjvvhieYjP5qlvhi/PXEEdt14774YrmeU739pVnSfq0ftD6kqSnMgpO5QsfBDami3n0PIAShIsANAB4IdEboUNjpjrXFuxfRMtPHKQ5wzCb5+jJmXwtBykquog7z0w4rpCSwFGxdXa+upsALk+KFTAJUBC5Izv24J0EK4RxyuktoYBmGjqXBqk8rLoSs53gCAs7xffbmhVJ4VXlsFqF+kw+0iWzEXicUKjl8CwMPRhzsgmKlsEfGc0Ku5nDCVSuUgFeXKVW1tzeCE81R0tyPW60hQ5voi5prDmRgqKOEQuuSHJKULCHXxOaM1GhqoJLhoGaqpuhhh5xS+zSsgqSo3CrG4uOO6E6aOGp8zZVdKtR90S2otZVHSGxYKmljm1ERnOcFYR08ORDRkoxW6SmcczJASom6iN5tz+SEE7Rc+QJICs+dZ4qVzk8TEndB11hK4DzwcI4b026gpy7W1QmGqUhEy2hGgULXI42jlP0dDsmlkBJWEZM1rm172h+Q2p11LaSMylBIv0xNF7Isf37GjNKHOJxn+1CDM4b03NBRR+d1RflsO1U8/QlGVKARyiyCpZNybCwuTzAQtZpzbdLMosJXffcXFxrFnq2RbQv6Eb+Ws/24hmIKZNUOsuUiomXTOtJC1tNTCHSkHdfITY9B1hJmc7einZh5OpGWm+4EFQ+UoimXni4czbvbJJuDY3F/ID4oxTaSuWqDkySMquEWDhTBeI8WMzDtBkkTYllJS8C+hspzXt2xF9x8kO69jm0X+gUEfDmP7cJdOTcEpXB4fTvsXNa4c4BVN1mhGZmQ60cnZZiL8efwxwqdDW+2htFgcxW4ripR3kniemLmXsb2jn/AFAj5cx/biP4ywPiTCEiidxFKS0i04sNt5p5lS1qO4JSlZUfEIBUu2ApDYsKJ4rmXPIR8lCl05s01MqoBRTqL8DbfCSiUhcmp0OKzIc4GHsbxc2ud5ifo2ObRnEJW3Qm3EKAKVCeY1BFx6uEmZwFiVOmho4HiSTVadlzYXVNVHD7y3SuWeUBvsTeMUmgTDE51w6rhbQ28P2xcE/skx9T5RycnaPLy0u0kqW47UZdKUgc5K4gbbiHUBba0rSbgKSbg2NtCN46YWKmQi11EgoMMkkLodUnfa32TBMUJblRQ80EobRoEgWAEK67SjOtENgBxQAUribbgT4Idxfog1jnDvuDdTPwyl1CzUFjzdiQ0OUXIySWVKOYG9xwhurNFM26kMJS22FXISALniT0w/6waxxsrgbgp2Sihla1rxe2xIJinpXTEy2UEoF09Btv8MNtNojjMu806QpKjcXN9YkOvRBbxwCZ4FgUiTDaWR2s5gv0DPpUepVCWwt8vHMhzek7jrexHEaCCTojrVXM0VAJvEhOsGtrR0zPN81xuG07SHBuYTXX6b18z2Fgu1r8bQUimmVp5l3jmv8ANDpYwa9EJ4R1tVONoYGvMgaLnbzqLz+HZhTxXLPrAvuzGFMvRZjrBTL6wpXqeiH+2kYtC/GJOVRm4LRi9mDPblklexWkuSGLGC4om6XD/wD5qiQbQu7X/gccNm3ptlr/AO7d+rVHbaD3c/8ABBEcOLprleN+FCFsVTG1uzVb9RUAVw8EECuHggi7bsWHh82FdmJL/gmVP/Nr89cQN0/ljvvhid4kN6TK/DF+euIG73Y774Yr4/Kd7+0qxpT/AKvH7Q+pL0GFLUJUHSFDR1hK+kUvlP5VN+eF0p/Kqv64w3MKsoG8LkHK8SNytRHd6VuUuoRTmTFp4PWyAgqtaKbpUyEkaxL6TWVMpFlfPE2meGm6pcThdKwtCtquTkqmTypte0VRid5C3VWhRPV9TjdsxMRepzvKEkmJs8rXBUOHUUkT80zVQjMYZz2znNlMLZ97MTDes5WVq5+xEVMi2MIsEic3Qlc3mFLphK4YbKdWJU/ljPvifpj1pU33mZgpaUm6rdsLgdiI8lSx/LGvfE/THrGsd1+TzRFPisjo26zdtlmtIQCYr8/2UY2h1SqS2FJpcpMtsOuFLQcSjVIUbG3ijyptDIpm0oSEsDkMi2pajqpaiTdRPEx6l2hsuzGFXWmUFay40co39uIofaLsyx5VtoyarTMMzs1JKlG0B1sCwIJ5zEbBKl80tpHXyP2VLSkRVLHDLNWZ1MdxScRHTRcsfPiz1Ts3fRTQAJFssQnYPhbEGHaXXE1qmOyRfUwWgsjssua+48LiJgnRJ46n6Yh4vUSwPuw2uVJxIslrHkG4y7AuvXk6dM7I/Yjyr1QU3OTNGnq9PP8AXE4mpoYZuLBpCVHRI4X549Sk2I0N487bVsD4rxLg2flKFRZmfmE1TlOTaHZFIWfvhnCK+WSoa2V2RIUB7Q0gtVX0V5b8i264dTaPcHXDzMlL8kUgqbaHZC/+bTHlCg7J9o7VObQ7hKfbULdirKD9Mer51lyXYl23k5VJDaSL33ISD84i2xh7mDWZuutDjU0c0UIDgTnv6FVG2N6cqtYbpk9MA0+XklTBl0JslxdyAVc4EeXcETr00wpCyMqSoC3uo9RbTL/wpd6aWfpMeVdnfaOe6X50OYJK+aB7nm54v3UPAjqVthvBUwggEEWC3yIx5IzBAhEYtGYI6hYtBaMxiBCyIx5IL6QQIRaCCMwIUi2bem6X97d+rVHbaF3c/wDBY47N/TdL+9u/VqjvtC7uf+Cw2zzq8L8KvpjPZb9RVfq4eCCBXDwQRet2LBw+bCurEZ/NMr8MX564gbvdjnvhid4jP5olfhjnnriBun8sc98MV8flO9/aVYUv6vH7Q+pLkGO7aoTJMSHBGGpzFdVcpshMy0u8hkvZpgqCCBv1SCePNCLgbV9IPe2Npc42ASBowuYWFoCb9kN0ThOxfE431igfHO/2IhOIZJuhVr8ELq0hPzKUlS+sytSUWNrFSkgX8F46CDsUaLEaaVwYx4JKUMTBQbHSHJifKQNY3wRhidxa7MMyk3KS7kugLUXyoAgm3AHniRzOyqtyku5MTFdoTTLYJUtTrgAH9WFNksbJNRV00btSR4BUdXUCRvv44RTM2VDfCBTiFzL7MvMtzKWXC2XWwoIWRxGYA28UYUUgXccA6BvhZkTscTHAObsK2UouqsPLCWacCiEp7RO7pMZefunIgZU/OYSLVCNqkbMgtXVQnWY3WqOKzHChZlj+WM+7T9Mesq0QmaBKgL23nvRHkplYQ+2sjRKgTCjaTtGOIcWTNRqyakzTmlFqQlJdKhZA05RdjvO+3TFfW0rqkarVnNIGPPBuaL2v9l6g0IAslXivCh2emHAlJQyoD1wileptbpOInKjV5SZqDCZFaGlNPLWM5UCRoTYjsT5IuM2zGxJF4yM7JsPlIFwecf8AqzwAf5QW7kxOraKEhloHQlCCTHJDakpACVG3RHmPqnmalPbX6dTpaqT0qx+BUulth9TYzcqsXsONrRAV4RrG/wDD1Y+Wri+iwGbEqdk0k20XtbZ8ws/XaR0eHTGGXIr20ULIuUHfzR0Zffl2VNttoKFG6sydDHhxWEa1/T9X+WLiYbDsM1eX2s0B1+s1R5kPkutuTSlJWkJJsRzboRLoq+lY6Zs2bQT5PJ71Hj0xw+d7YxtJAXrHryZvo3KAdAMRyo44ww3PFqfxTSUPNackl8dgenpjfGz0w1gypLYWW3jKkBQ4Ei1/njyfj1+TwHNSFPp9Ol59ydYL7jjyeyuDY67zeKuhbPiQMb3nPcLDZmblaZ4DHDVbmrvxpWKVWcQvzFJqMvPNIppSpbKwoA3OhjzFs87Vz3S/Oh2k9oVYlCtUrQJNouIKFZVEZgeB0huwGw6ylYcQUklR8pvGpw+hfRxPa7fq2zvsvyK5wSKQVgc5tsipZBAIIdW7RBBBAhEYjMYjqEXvwjF4tDZtsmRjPC6KymvCRUX1sllUsV9qEm9wR66G/algGj4DpS35nFnXs+U5mpNmRVmUL2zElVkgc5hAeCbBVsuLUcUhje/MZbD3KAa8RGLnmiQbN8PN4wxXK0ITglOuUrIeyZ8uVBVqLjmi1B1PdwFfwvQQd1pBVvOgMjQbFOVOJUtM4NlfYkX2H7BUXe28RkG8P20ej0XCdaYpEjX/AMMPrKg+tuWLbbRHqcxJuegQwg31ELGYunqaqhqW68TrhSPZv6bpf3t36tUd9oXdz/wWOGzf03S/vbv1ao77Qu7n/gsNs86vE/Cr6Yz2W/UVX6uHgggVw8EEXrdiwcPmwrnxGfzRK/DHPPXECdP5Y574YneIz+Z5X4Y5564gTp/LHffDFdH5Tvf2lT6X9Yj9ofUlwOkWR1Ph/jtMfq977IrVJiyOp6P8eZj9XvfZEec/llfRGIj+lk6D2K2cbzEy3huqramXWihjsSg2IjzPtNKZDF9FlpYFDfWKlHW5JK9STxMeoqzJpn5SdklkBL6chJ4aQ1VHZzs7qjkrM1mlNzs1Lt8ml0zTrRA327BQv44pMMq7VWrITYX7FhopBC9snIod1PKvy2r8/WqD/wC9MSLaSVTU5TpR951UspbiltZrJWUgWvzxJ6DQ8IYaTMO0antya3kBCyJhxwqAIIHZE8RETx8vNVKSsi2bliB4hEiulIeC123uKeraplXOZGg2y2rz4xMuKxlXW1LJSmoOJAvuAtD0Vgboi0s5/HrEAv8A6yd+yJApepi9OTW9A7Fq8JdrUrV1UuOKlRqpUc1KhN1ZrK1RzJgJjQmOFdstVHWEk1KsTBu8kKtuvClRjio3Jjl7ILQ4WKunqZZWXl6DWy0gDNNs3039g598WW3x8JHzxXXU1n8wVn4Wz5i4sRu+U+E/SYx+OEl+axWJANrZAObsC86bez/l0pv6hT9cqG9wnTeYX7fP06079RJ+uVDes6iNtg36fF0LwfTc/wCqO6AuZUb7jEp2QH/KVR9T27nHvDEVUdYlWyD9JVH9259WqHcS9El9k9izeFn+uh9pvarX2gKKcDVNQ3iX+0R5Q2+pH8M6AgjTrJXnmPVu0P0i1Td3P9ojynt+9O9A+BK88xhtGPPj/l2BfSLfPs6R2rmwwzyKDySN3NHZCEt6IQAOgRiX/kUe5jpGpJXpTGgAZIggghKWiCCCBCIxGYxwjqF6T6ngn0MBvv1+/uOvaNxUW2VtKcK4ynbqVMKfLZdWolWUKRYAncOiLc6nr9Fw+HP+a3EjbwvhWaYnG6xTWptmcOZ1p1JKFXAve3gjNT1PAVjeTWHyN15vijb1Up5yvN/UluKc2kUdSyVHK/qfeFx6WxapwUapZHnGymTVbIoixymOmHaBgTDkyibouH6TIPtghtxiXIWm4INj4CRHHFTvL0OrPBJQgyywkEcAkwvF52ueHxu2kbDzrlVVCqe02Is22fv715G23oRItYVblRyaVB1SrE3USlNyTxMcZEkyrZPrY77ff9lPe1+amOEh3I37kRe0ZJooyeftKv8ARjyXjn7lKdm/pul/e3fq1R32hd3P/BY4bN/TdL+9u/VqjvtC7uf+Cx1nnV5r4VfTGey36ioOy0hbYKhr4YIWU1CVS1ykHWCL1uxYKDzYVoYkP5olfhjnnriAPH8sd98MTvEZP4GlPhjnnriAvH8sd98MVrPKd7+0qfS/rEftD6kvSdYsnqeD/HqY/V732RWQMWT1O5/j3Mfq577IjVB/LK+i8RH9JJ0HsV2VKalpJuam5x9qXl2U53XXFZUoSBqSTuERg7R9nZ1ONcOq5vy5s/bGNtKc2y/FyVag0x0a+5jzJhfBtHmqFKPuScoVLZQSSyn1o6IpsMweKv4R73EWNsl5Vi2MswtrS8XuvTo2j7OxqMa4dH/rm/vhDjaclp6boc3JTDUzLuodU260oKSsW3gjeIoNWBqIEk9ZSe7/AHKfui5ZuUap9AwVJMISltunEJSkWA0J3eOHK/CIqENex5JN9vQmMK0gixOQxsFrC6oOXX/H3EAt/rF37IkJXrEYl1Wx/iH9Yu/SIkJXrGgfsb0DsXqGC50oXQqjBMaFUalcIurZbExopUalYgTqdYALrqwomOKjYmOzmguI4KNyYUWWXQVePU0G9ArXwtnzFxYzXam44n6TFc9TT/MFat7LZ8xcWKjtf2j9JjF47k9YrE866T3dgXnfb5LzJ230x5Mu6WlUQJCwglJIeVcX59RDe5LTWn5M/wDFmPTSVLRcoW6gnfkWU38kbcq9v65mvj1ffEmj0o8Vp2Q6l9UW2rz3GtDRitUagy6t91r/AHXl/raZ9iv/ABZiU7IpeYTtHo6lS7yUhblyUEDtFRe3Kv8AsmZ+OV98HKPcZmYt0vK++O1OlnDwuj4PaCNvKq6l8Hop52S8PfVIPk8nvUb2hekSqG3+j/aI8p7ffTvQPgavPMertog/iPVQE2/Ec/SI8o7fj/Heg/A1eeYZ0Y8+P+XYF6Mzz7OkLMv/ACCPcx0jkxoyjwR0vpvjUFemN2BZgvGLwXHTAurN4IxcdMFxAhZjHCM3jECF6T6nr9FvT18/5rcPVdxbhXDrrEtX8RUqlvvNBxtubmUtqWi9swB3i4Ihk6nof5Lv/XP+Y3FKdVJTJeqbZqBLzCELT/B0GykgjSZc++M6cPZiFeIXmwzOXMvL8frRQvnnIuAVevonbOfbzhv5ej745T2OsF1mmz1OpGK6LPzjkq4UMS82la1WSb2AOseYv4AUf2NLfFj7olOybCFLpe0KnTzUvL52WJtQs2PYzo5umJ82ilNBG6VsjiWi+7csPTad09TM2EMzcQOtR3b7uwoe8c81McJDuRv3Ijvt7/k8Je4X5qY4yXczfuRE6i9Cj9/1FevaM7H9P2ClGzf03S/vbv1ao77Qu7n/AILHDZv6bpf3t36tUd9oXdz/AMFjrPOrzXwq+mM9lv1FR+gC8iexv2Z4dAghdhFC1UpRSlRHKncOgQRfM2LCQD8sKYYjP5mlfhjnnriv3j+Wu++GJ7iQ/mWVP/OueeuK+eP5a774Yq2eW7pPaVLpf1mP2m/UnAGLK6nY/wAfJj9XPfZFYhUWX1Ohvj58f9Oe+yItQfyivpDER/SSeyexWTto/Rfi79WO+bFC4MP8WZH3hHmiL421G2y/F36tc82KDwYr+LEj7wjzRCdGz+XL7X2C8C06yiiT04ewV7n7IsavH824P/V5+gxWriuwPufsix66bUzBx/6cfoMK0gP5bOk9iq9Bzerk9n7hedmFAbQcQ/rB36RF/U3YqufpsnPJxM02mal23wgyiiUhaQoC4PTHntlX+UPEH6wd+kR7ObddawDTlsuLbWKQzZSTqPxMdrangGsPMOxe0tq5qaijMRtcled9pFEpWD6nK0pvECKpOurUl1tqXUlLNhfslE2ueaI+0OVdQ2FAZlAX5rxptlaclaNhqYZQ7d6accfdIJKlKbGqlc51jjRuUU3KqyLVcpN8phccgkgEo33+SuMGrZaphEpuQVbCth2KEqANUogPC76r+bEDxnSBhatt0eYq9NnptbZWtEm6VhoDgo2AB6N8em8eTM3K0KoLlX1sOiWNlJ7ZJyDd0x5D2wJcp1bw51ul0IelnFOOqBJccKgSSriYZoqsTS8Hv7hdVFPjlU6VofaxPIpVs6pcnX8a02jT4dMrNOFDhbVlUNCbg2MXSNjGAykEzNZTfnmmx/2RUWwsLO0ihKyKN3TrlPrTHo2aSlTjd0g9hxEIxCsdT8bcpWNVU8UrGxOLbhIsK4Ww7gylTbVJfmlJfdS4svvJWbgEADKBzmOzV8guNTrbm4wFtoG/JJuONo247jGOxOuFSRYWsqMF7nl7zclGvrT5YLd4fLB4jB4jFRdLRbvD5YP2D5YPEYPEY4hN+Iqd+FaJN04ko5dvLfm1iKYk2F4JxM9IVCuVKqpmpVsoQZN9CElJN7HOk315rRO/EY0UhCrZkAkc4vE/D651JIHi+V/mkPaSQQbFQ0bENnzbWs9W8qRqpU01u6ewijdrKMIUSflmMLNVF6VMwWXZ6bmUFC1AXyoSEAnXjePTNYYbNJnAGQVGXXbseOUx5d2y0CtTuFcNCk0Wemg1MErTKyyllN0DWyRfnjUYbioq5gwi1zbbzEqVHiVZHK0mQkXGSbKPKqqlSlJJlaErmnkMoUo9iCo2F+jWLOmdhGKZdDjj1Zw8223crWuaUkJA4m6dIhmzzC+J2q9QlvYcrDYTOsFSlyTiQkBYuTcaRfG3BUw5+DKX1y81Kzk09y6EKtyiUi4B6LxPqakQvtu5lf4vis1NwfAkZg3+S8zzqWGKlNyTM5LTnWrpaU9LqKm1EetJAuOmJ9sy2ZrxxSZqfbrjVP62eDRQuXLma4vfQ9EVHUHlo2lVuUbsllubUEoAsABYWj091MWmEKvrr18i39Qw7VPMMbXjfbsSn4nK7DTUNNnC27nCiuKdjsnhqkOVOr44lGWUJJA6yWVLIG5IBuTFQyky1NMh1onKb2zCxte2o4RfW1RCpvEylTTrj3W9OUtpK1XShRJuoDnjzBgJ5xxKwtRVZSreUxyinbVMc8brfNRsIxapnqODmNwRyD7L191PX6Lh8Of8xuKg6ov9OOH/APw5/wDsri3up7/Rf/65/wAxuKi6osf5cMP/APhz/wDZXETD/wBWHQ7sWJ029HqvekahrD3s/wDTjLfBZv8A+OuGRRh72f8Apwl9f9Em/wD46401d6NJ0HsXgeD+nw+03tVebfO0wl7hfmpjjJdzN+4EdtvnaYS9wvzUxxku5m/cCKei9Cj9/wBRX1nozsf0/ZSjZv6bpf3t36tUd9oXdz/wWOGzf03S/vbv1ao77Qu7n/gsdZ51ea+FX0xnst+orlgNpa6KopTccsr6BBCzZqypzD61JIt1woanvUwRfsHFWGpx+WE4YkV+ZJT4a5564r55X5c774YnuJT+YpQ/8659YuK8eV+Xuj/iGKpnlu6T2lPUp/1qL2m/UnEKizOpxP8AlAf/AFc/9kVcFRZvU3G+0J4f9Nf+yIdT5py+lsSH9JJ7J7FdmJqVLV2lVOjTwX1rOsll3IbKyqFjY88RembLsIU6Qak2W6qtDSAlJcmk3sBbgiJq9/Lu3vvG7wQC1tbxivxCopnubE8gE7l5tU4dTVrQJ2B1uVRJWzrCpGsvUd3sof2YdpvDNNnV0lhS3WZantckgKVclNjvNt8PGnOYDYDjDcuI1M4AkeSk0uE0dI4ugjDSeRRAbG9maaxM1LrKYXMTLhcdV18pIKja5CQLcImU2ZBuWladJJHIstIaSgKzBKEiwBPHSORQg7038QjICU7uxHQInVGMmaHg3N3WvdTdV5AaXZDcu1LXI0uTQzLSaUFOgUEAmFgrZFuxe/qD7obRl5zBp0xHgxWaBmo21kl0DXG5WKm7+FFLTMMkMFJSQq2ZdxaFclMydPlWmJaS5ENpAuhAJ06TCXQ88Fh0wyMRlE3Db0rgWltk4iuKFyG3yfcJENynXHnlOuIyXFkpHARg26YwACbXVC6nFpp2ajti4yBrDcLN+hUYP7UZyjp8sZ0iqJuU6tbC+8wWHOfLAbQ0YixNQMOs8vXatKyCd4Dq+yPgSNTHWRuedVgueZcJAzKd+NtYP60R/DmM8MYhSk0irszBVuSQUKPgCgLxINPBHXxPjNnix50BwOxH9aD+tAEjnPlg0BtdXlhCUggEWIURzQokpzrGVEuxLZEDdyaspMJ9OcwadMOwTugeJGbQkuYHCxS0ViYH+Ye8b/8AfEdxFRm8SVCQmJ90NdbOKUkJOgChY3PPDrp0weMxMmxWpmbquOSbEDRsUMmNiey92uzFYck5pc1MKzOq6/KUlXE5QLRLMPUPC+E6NMylEZUyh1wOru+XCpQFhv8AsjqUIOpTfwgQBCAbhAHgAie7HnOjDHMvYWzKX+bwfB651eTcmeYwrTazWUztRdUhtUtyS0A9tre30ww0rYbsqpi1mWkpmyiT2dRUd+u62kTiwtbWNeTb9aPIIi0OLPpA4WvfnXW68bteN1jzLnSqZh7DNAFJoSChouKWEcqXCVKsCbnoSIiWLNm2HMU4ok8Q1c1ATUnJGTbTLOpQkoK8/ZXSdxJ3c/giZBKBqBbwCM2HOYTNi0rpRLFxCORNTU7alrmz8YO233qGehnhI/5mp2+FJ/sRhzBOHKDLzVYkmZ7rmWlHuT5SYCknM2pJuMo4GJpw4w24o9LlS+Cr80wDF62QhjpSQedVTdHMLicHsgaCMx0ryTt97TCfuHPNTHCS7mb9wI77f92FPcOeamOEl3M37gRuaH0KP3/UVu9GNj+n7KUbN/TdL+9u/VqjvtC7uf8AgscNm/pul/e3fq1R32hd3P8AwWOs86vNvCr6Yz2W/UU6bKGOVw04rNb8qUP/AGpghZsbZDmFHlFRH5Wsae5RBGgjHFCxVKPympDib+YpT4a59YuK5f7vd98MWNib+YpT4a59YuK5f7vc98MVTPLd0ntKTTfrcXtN+pKwYs7qajfaK9+rX/sisBFm9TX+kR79Wv8A2RBqvNOX05iQ/pJPZPYr/e7pc1tqPojAOnbK8kDxtMu6kaj6IwDoOyPkjzyoP5rlgmbFnT1yoNPXKgzd8fJBm74+SGtZKRp64waeuPkgzd8fJBm74+SDWQjT1yvJBceuV5IM3fHyRi/fHyRzWQs3HrlRi/fKgv3x8kZ8ccuhYAv6oxtGL9MZuOeOLiIwSACb5QBqTwgJFt8QnbNU5uSwW5LSLi0TE+6mUStOhSFdsR4ochiMsgZypLjqi6ge07apUpybcoWB18khCuTmaopN8p4pbHE79YruXoDXL9e1J92cm1aqemVlxw+XQQ8das0wJlGUFIaGgtqOnwmORJVe5OsejYVhUfAggWaes85P22LzLSXS6SmndT0w4w2k7jyAJ4kKlKNsNSr8ueTbFkrTqoa7+jfwiw8JYgmZdpGWaM/JHSxVmWjwH7DFSW+fSFlGqUxSpxMzLquAbra9S4OY/fwgxHR2OVhMGR5NyrMG06nieGVvGby7x3r0hKTDUyyh5peZChfdr/8A2O6bQ24XVLzlClqnLOXZmWw4lNtx436QQR4ocbjgTHm72lji1wsRkvXopWysD2G4OYWbdJjBFvVGMg9MGnPCU4saeuVBp65UZv0weOBdWNPXKg09cfJBfvj5IL98fJAhH7SoNPXHyQX74+SC/fHyQIRfvleSDT1yoL98fJBfvj5IEI09cqG3E/pbqXH8lc80w5X74+SG3E5/i3Utf9FX9BhcXljpCS7YvJO37dhT3LnmpjhJdzN+4Ed9v27CnuXPNTHCS7mb9wI9JofQo/f9RWh0Y2SdP2ClGzf03S/vbv1ao77Qu7n/AILHDZv6bpf3t36tUd9oXdz/AMFhTPOrzbwq+mM9lv1FSzYa0heD3yoG/Xqxv7xEELOp/bbXgmYK0gnr9fHvG4I0UY4oWPpB+S1RjEn8wynw136xcV0/3e574YsXEulClB/zrv1i4rp/u9z3wxUM8t3Se0pim/XIvab9SVCLN6mr9Ij/AOrX/sishFm9TX+kR79Wv/ZEGq805fTuJeiSeyexX873S7rbURi+g7KMu90u6gajf4IwDpvEedVHnXLAs2Iv3w8kF++Hkgv0pgv0phlKRfvh5IL98PJBfpTBfpTAhF++Hkgv3w8kF+lMF+lMCEX74eSC49cPJBfpTBfpTAhFx64QXHrhBfpTBfpTAhFx64RBdrZBbogJB/LFK8iDE6v0piEbV1KCaLlBV+VL7X3BiRSedHv7CkSeSVT9aUpdamyo7lhItzAD74ScYV1m/wCG52/+9/7RCVFiQFGwvqeaPXaD0aPoC+c8cN8Rnv6xQY1vaN1Zc6ghWZIUQFWIvY79Y1VEtVS9DbMiRsspNjqUPfWGHy/SBDFsy/RZSfcPfWGH0bt4GseU456Sek9q+idHP0yD2W9iLj1wguPXCC+u9MF+lMUqu0XHrhBceuEF+lMF+lMCEX74eSC/fDyQX6UwX6UwIRfvh5IL98PJBfpTBfpTAhF++Hkgv3w8kF+lMF+lMCEX74eSG3E/pbqWv+iueaYcr9KYbcT+lupa/wCir80w5F5Y6Qku2LyTt+3YU9y55qY4SXczfuBHfb9uwp7lzzUxwku5m/cCPSKH0KP3/UVodGNknT9gpRs39N0v7279WqO+0Lu5/wCCxw2b+m6X97d+rVHfaF3c/wDBYUzzq828KvpjPZb9RVh9TklJwJM5kgn8IObx/wANuCFnUypJ2fzXY3/OTnD/AIbcEaSIcQLJ0bfyGqA4k/mKV+HO/WLiun+73PfDFi4l/mOV+HO/WLiun+73PfDFM3y3dJ7SolN+uRe036kqEWb1NX6RH/1a/wDZFZCLN6mr9Ij/AOrX/siDVeacvp3EvRJPZPYr+e7pd3bxv8EYF7DtYy73S7oN4jGttyY86qPOuWBZsRr3sGvewa8yYNeZMMpSNe9g172DXmTBrzJgQjXvYNe9g15kwa8yYEI172DXvYNeZMGvMmBCNe9g172DXmTBrzJgQjXvYhO1btaLu7rXu9wYm2vMmITtV7Si3KR+Vr8wxIpfOj39hSJPJVO1n+fJ737/ALRCUQqrP89zx/432CEseu0Po0fQF85Y3+oze0VmMKjMYVEtVa9DbMf0WUj3D31hh7Hajd44Y9mX6LKT7h76ww+DcN0eU476Sek9q+idHP0yD2W9izr3sGveweJMGvMmKVXaNe9g172DXmTBrzJgQjXvYNe9g15kwa8yYEI172DXvYNeZMGvMmBCNe9g172DXmTBrzJgQjXvYbcT+lypbu5XPNMOWvMmG3E+mHKlu7lc80w5F5Y6Qku2LyTt+3YU9y55qY4SXczfuBHfb9uwp7lzzUxwku5m/cCPSKH0KP3/AFFaHRjZJ0/YKUbN/TdL+9u/VqjvtC7uf+Cxw2b+m6X97d+rVHfaF3c/8FhTPOrzbwq+mM9lv1FW11LCHFbOpspBI/Cjm73pqCFXUmoWrZtOFNrfhV36pqCNNCOIFmaFt6dqqzEn8xyvw536xcV0/wB3ue+GLFxJ/Mct8Od+sXFdP93ue+GKRvlu6T2lV1N+uRe036kq5os3qa/0iPfq1/7IrI7osXqe52Vp2NZ2enX0MS0vSZlx1xR0SkAEmINV5ojo7V9O4l6HJ7J7F6GeH5S7oDqN/gjAGnaiKcXtpnJ2ZfmKXhYPSJcIYdemcinEj1VraAwei/W/alL/AC3+6MTPhs5kcbDrHevO2zsA2q4/2RB4hFOei/XPajL/AC3+6Oo2w1MJF8GZucpn02v5IZ/DZ+QfEO9K4dnKre8Qg/ZEVD6MdSH+xav3gj7ox6MVS9pSv3gj7oPw2o5B8Te9d4dnKrf/AGRB4kxUPoxVLf8AwLV+8EfdB6MVS9pa/wB4I+6D8MqOQfEO9HDM5Vb37KfLB4kxUPow1O3pKV+8EfdGPRiqXtKV+8EfdB+G1HIPiHejhmcqt/xJg8SYqH0Yql7S1fvBH3Rj0Yql7S1fvBH3QfhtRyD4m96OHZyq3/EIhW1PRFFuLflat3uDEV9GKp+0tX7wR90NtZx/NYjmqcxNUA0xlh4uKe66S4NU2tYfTDsNBNG7WcBYX3jkPOkula4WCjNbBFbnbi13AfFlEJBC2vgCuzZHqilV/CmEQj1DDz/Sx9AXzzjwtiU4/wDorJjUxsYxa5tExVAXoXZn+iyk+4e+sMPgtbwGKwb2g07Buy7D0p1uqo1WbS9yMk0sBWXlTdSjwHT0Qne2sVtmWafdwM4lt2+RRn0WV80eaYxQzSzlzRlc7wN/OV9C6PStbhsAPqt7FbHDcIPEmKh9GGp39JSv3gj7oz6MFV9pK/l6Puip/DajkHxN71dcMxW7foTB4hFQnbDU9xwSof8A5BH3QHbDUvaSr94I+6D8NqOQfE3vRwzOVW9foT5YPEnyxUPoxVL2lL/eCPug9GKpX9JS/wB4I+6D8MqOQfEO9HDs5Vb3iEHiEVD6MdRH+xZ/eCPug9GKpE+ktX7wR90H4bUcg+Jvejh2cqt79kQfsiKg9GGp7hgpX7wR90YXthqxADOCwk31K6gkj5hHfwyo5B8Q71zh2cquDxJhtxP6W6lp/oq/NMVd6L9bG/CUv8tH3RwqO1atTshMSasKsIS82psqE6Li4tfdCmYdO1wJt1jvXDOwhVDt+3YU9y55qY4SXczfuRHXbw426jCim1hQAcSbcCEpBEcZHuVv3Ijd0QtRR+/tK02jHkydP2Up2b+m6X97d+rVHfaF3c/8Fjhs39N0v7279WqO+0Lu5/4LHWedXm3hV9MZ7LfqKuzqRUFWzOdII/nZ36pmCOnUgJvsxnTf/W7v1TMEa2naDGFR4dGDTMPMqgxL/Mkv8Pd89cV0/wB3ue+GLExHc0OW+Hu/WLiunzeouD/iGM83y39J7SqWmH+uR+036krjR9JclXpflFpbeRkcCVWzJuDY9FwNOiNxwgtEe6+qHMa9uq4XBUXnKVWVvqLFRm0N7glLpAEcPwPX/wClJ344xLzfhBrzw8JiBZVJwOjcb6qiKaRX0qCk1SdBGoPKnSFhm8Xyqeyn3JpPHONfKIkXZc8BGloOGzzAPuTE2jdDM3Vc1RZWIqqg2mlTrRHFKswhRLYiecPYVJ8nmK7GHx2XZdBC0JIhtm6BIP8AqADD7J4v7mDqWVr9AGvuaeZzfeSF3Yrc3uM0741wuarcwNDMOeX+6Iw9h2ZY1lJpY6DqPnhM4mrSp/GNJeA9boYktNK/+0dQWIxDQjGqfNjy4cxKnrNZcO95XlELGaq4f86fmitmqwEGzyHWT3w0hxlqohSQpDyVDoMPCmgP9o6gsXWYdidMbSF495VhN1Bat67+IR1TOKPqz5IhEvVDpdUODFUB9VB4pD6g6gqWU17f9x3WVKxMr9eTfwRlMw4fVfMIjrVSBOpuIWNTyFeqhBpIfUHUFFdU1zf913We9OalFSsyjdVgPJujFxzwkTNIPERuJhHC3jh0M1RYKukEj3FzsylNxzxgkXhP1wnojVU0gcQDHbJHBuKV3HLJeNi4lsNJUQCUoBJyi40F1E+OFfLzk0hkPTTpZYvyaCrsU332HiEM3XiVKtmjuaggkJCrJAhh8Me3VF+hW1NLWmzRI4Ac5Twl1QACN3PYRyenXGxqo257CGaZqhAsnQcLQ1zVWVa2bwxHFND6g6grqNta7LhXdZUieqdwbqT5BDTPVRxq5Q8rL4ojszUFBe82hDNVVlKSl15AvvF9YeFPCM9QdQUuKmrJTq67r9JT3MV5/W0wseOED9dmibCbdH7URKbq9nFIaaWs30voITpcqk2bNoyA+tTDxipx/aOoK9otHcWnIALh0kqTv1ydFyZ59P7dobZnEj6Tb8JzSzzJWTCSWw3PTKgXlK135tYeJPCku2Ap5eY8wiO+SmbsaOoLZ0Gg9W6xmlPXbtTKrEFXdOViYm9dxU4Y2b/hLOkZqhPAHgHCBEwlqZJS4HJtAnnMK0pSkWSkJiM6ob/a0dS2dFolTweUSffftUQTR6/l1qc6D76Yz+B69/Sk58cYl+vPBrbfDXDu5la/gNH6qhpw/U3nmlzM06/kVdPKLzWiXyyC2whB3gWjfW++DcIQ+Rz9qm0lDDSAiMWupHs39N0v7279WqO+0Lu5/wCCxpsvZU9jBgJ0ytOk/FqjbaKctUnGzvalUgndvuYZYPzV4v4VfTGey36ir06j5IOy+dN/9bu/VMwRt1HJCtls6f8Aq7v1TMEbCmH5TVV4W0eKM6FR8wlb2EKZPOiy33BMKAVdKeUJOnHjEJmU2qDulvxp+iJlITctVNndMmJNV2W2GgVG47QDN88RKqotUXCdEnKbCMy2/CPB5T2rJ8LwOLMedzh8nLPNG0aC5SLcY2EML6yabgELMEEEcSkQGCCBCxBYxmCO3QsWMYIuNQD4Y2gjiElfkpZ4HlGU+QQ2TWG5Vw5miW1b9NIfSI1hxsjm7Co01JDMLPaCowaRPypuy5yieYxu2843pMMFB5xEkFxGrjaF6KQFeGH21bxtWdrdD8Nqb8QApnZeaWRleKTzGFzK3EjsVgwO0yVcuQgJJ4p0hMqnTDRzS8wT0KiSytB2rF4j4NQbugIKckPrAsr5o7Jmgka3hn5WeZFnZdSxzp1jC6ggduy6D7gxIE4OxYmq0MrKd1nRHqunkzqPVJ08MYM3K2vyayfDDCupsD/NPnwNkxhurSxVrLTx8EsqOGUqO3Rqe9vF3dRT6Jxn1LJHjjC5kEdiiEDE9KukJRKT4J9dLkQqKJhYIblVIB4rIENPnA8oq4o9EK2Q2EJHSElnJsoT2SrdENbsw+8bMIJPPD0ikoUrPM3WeYGHGXSwwjI3Lp5r8YhyVZ/tC3eH6CsYAZlB3aVU5qZKVqWBxsSBDnT8KjRTqwL74k4uVFVgI6oB43hh9S9wstfS4FSU4yamRVDkGXQS3nIhU0w00LNtIT4o7vqCnTbhpGsJDnEZq1jhjYOKLLGu4boLRmCOJ5Y8UEZggQsRkQQQIRGDGYwd8dQp1sZllOV6oTGXRmQXrfcVFKP+4xHtoT4XP1lzlQr8aGUlPRuHzmJzsalks4frFScSQlbrTGbhYXWrzUxVmKJrlZblLj8pnHHdBwCjb6B5Y7A27yV8++Emo4XFdQbtUdQ1l6J6k7EuHaJs2nJWsVunSD66q64luYfS2pSC00AoAndcEX6II8Q4pqwbqqmsjiShIB1tfUm/kIgjWwgtjASqBjmUzG8yvDZs7KzGyamy8utLiky6g4E7wvMdPohrrKDy6F69kjXxf/2Gvqc5t+YwpPyjiUdby74yniVKFz8yTD/WGrNpsAOTWUn6Izc7eDqnD+ZrCY40xVxty9oumtB7ERvGjehI0jcRGdkSvqbA6sVmHQTj+5oPvtmswQQQlWqIIIIEIggggQiCCCBCIIIIEIggjBgQgwWgMOFHp0/UqgxTqPSJquVV9QSzIS2mW5tyjy9zTYvqpXMQOJS5FE6V2qwXKj1NVFTRmSU2ASaUkpucVllZZ147zkQVWA3nxRNsP7I8V1yRan5Y0lEo4opS6ufbIuNFA5SSCDoQRcHhE0wz1Ok/WpRp/apiF95k2cRh2jLLEoydNHF73FAZkE6q3WWYvVmWk6TSWZKVl2JOmSDAaYabTlRLsoTYJA5gB80XMWEtHnHdSxVXpe8m1OwAcpzPULW6yvNTuwjFTY1qFA3X1mlAeXLaIniDAWJqGlx2YpqZmXb1W/JOpmEIHrlZCSkdKgItyrdUlsYZcUhGLHJojQlimTBHlUgX8UIGdsux/EsxLykpi1kTj7obYamZJ9o5joOzKMqfCVCHHYTERkSo0WltW03e1pHRb7qjRpqNOiFTTnKJ76LM2jbO0qqj79BcULABaX1dg656opNrgcBe9zzCKvnpaZp885JTbS2Jhk9mhXzEc4PAxUVVE+HbsWuw3GafEBxMnci7FMYyxyRMEaKF4364T60xB1SFbLolMd1S7obvokndeOEo9ykyhOUAdMOCQpxdybmOtYXGyakk1U0Py7jOqrEHiI5Q9zDPYFKhoRDIIeexzMiuxSa+SIIIIQnkQQQQIRBBBAhY4wcIOMKaXKOT1Rl5NlJW684ltKQL3JNhHb2SXEAXKtSWH8HtjDbpuhx9p6asDqSshCfmReKTxU5yL0swomzDJKvDF2ba3WZRil4el9Wm1ob5vxbCQnd0kE+OPPmJ6klD87PHKQgkIzagZRp88SKGMkj+bV8w43UHEsXc8byT8RsPkquxLPmdrL74IKbhKbC2g0HzQQ2vL5R1az6okwRqwLBa5rQ0ABWV1P1Udl8SPUwEluZbKspVYAp1vbiYt2rNZy8ka5hmHhjzRhWorpOIJKfRb8U6Cb7rXj0yXUTDLbzZuhSQpJtwIv8AdFDi0erI2Qb1h9LoS17Jhvy94UecFilXPpGYUTrNlLSBxumEwNxFa/lXrngtxYVeFmlceNGfkcx9wtoIBBDa9ORBBBAhEEEECEQQQQIRBBBAhEYMF4wfnjqFPNieB142xall8KTS5MB6dcToQngkdKiLDoueFo9a0ihUSkvzcxSaPTqe7OcmmZclpZLang2nK2FkDsglOgHC5tvMUth3EdB2J7AWcXVxlTkzUXEuCXbIDkypRIaQm+lggFfR2UTfZLtdwXtJp7aqHUuQngn8ZTpkhEw2bbreq46i8aXD6cRRBx2nNeX6R4k6qqzGDxGZDp3n+blYBRpYXtFa9UrVF0LYjiibZUpMxMShkmSkXIU9+LuPET4IshbyG8oF3FnchIuTEU2pYIVjygS9Mm50SIlp5mdQlKOUClNk2SvUaEE3sYnrPr5yVLDL1OlG21NqSUIAPhtr88RGel1NrI1GserdsWAqrh9Lq5+SIlyopRMtXUyvjorgeggHw6GPN1dk3HJ0S0u2t15xeRDbaCpSlHQAAak9EAQvXewLGCsdbLJKanXy9V6etUjPlVsylICS24ePZoI1O9SFx02p4RNZo5n5BsCpSiSts2tyqRqpB8PDptDD1NmybE2z6nVGtYonkSMzWJVtCKEEZnWsriVoefWDZtQTnAbFz+M1sQQLeGVwciQQvgOJvzc8Jexr2lrtidgnfBIJIzYheVpOYRMsJdQLA7wd4PNHeEWI6hSW9qGIJCjTCHZJM0q2UWSh0aOJHRm3QsEZOphMMhYvXMMrRW07Zt529K3aWW3AtO8GHWVm2tDmAPMYaICAeENseWOuFLkjDwnSo1BBSUtkKWRYW4Q1AWFoyABuEELnndM7WckwwiMIgjq2ytfCwjqJUeqVDBcAnSQElghUZZPBUc1y606jWOBwKNYFcYIzlVe1jBkX60wpdWu8mJ/sLpRmsWqqy0ZmaWyqYsdxc3Nj+sUnxRAsiuYxdOF2EYN2TOVOYBbmp5JnHQdDkF0spt0kqV4xzRwjWs0b1nNKsQ8RwyRwPGdxR79vULqvtqVXEziOozIXmakGet29d6zqrx8IorHM71tRxLBR5R89lpvG8+U28kTzFEw4QxKuLJeeUZmY6VKN7Hx/RFSY8m2Zir8kybpaGUqvvO8/TaL3Dos9ZeAYJFw9U6Y7PtsHeo7BBBFytkgaGL72UVldVwq22/Mco/LHkinW4TwvFCRKtmddNGxE2HFWl5j8W50X3GItZBw0RbvVVjVD47SOjG3aOkK+JtvMAsHo8UNb6OTeI4K1EPCFBYymxB3HohHNslaCDbMndGX5istoNj5wTFWukNmO4rujl9xSEGMxqDpuIjIhK+rWuDgCNhWYIII4uoggggQiCCCBCIIIIELEYuRra9iI2jU9qRYR1C49Wfi9NY2gUnBkkoml4VpzLAAUcq3ltIUo77aJyJ8IVzxW2E5hLD6X0uOMut6odacKFoPOFDURP+q7oqjiujY7lsy5TENMly6rfkmGmkIUk9OUIN+JJin5CcLbasp1ynx6RsoyCwWXilQ0tmcDtue1fUnZGJpvZjhd2oTLkzPv0eVfmph1WZxxxbaVKufCYlCnBlve+kRXAE025gLDjrSkqbco8mpsg6W5FMPTj5sRCk0tKozLTkq5KzbDb7DoyuNuJCkrTzEHQjoMVrg/Z1g3B1RmsRUWkNIq03NPlqadAWZNGiShgH+TuFEE77Ei9rAT6bmQARmF92+I/PTQTTJVIOpdmD86IEJsqr4LiuyuoqJJJuSTvJ5zEZ2i5/Q7xE4zMvS7rFKmXm3WTlWhSGlKBB4brQvmpjPNWvoDc6wzbR5xmX2bYpemFhLQos2kk86mVJSPGogeOBC8O4FmHG5xZLhy5kqI5yb6xcLKszKFc4ioMNS6muTWbjlMth/98MW5KC0o17mM/ioHC3Xoeihd4uQV3G6CCCKpa1EKpdgAZ1+IRzlW87lzuEKlnyQ2924JD3WQpXAaCNRcmwjKEFR5hzwLeSjsWx44SG32JrpXRLYAutVo2DrSe1F4RlZUbqN42SY6Wgc65Yrs8rOLpSAYRKedBsYVJMcZtu9lAb+aFMfY2Sm7bFPuzmiP4mxbJ0wkoYKi5MO20bbSLqV5AfHYRMdueIGJipS9CYyolGU9cPNp0ShtHYto8gGnhh5wFIy2Bdm8ziOp2bmqk0HLK3pl79iB74qx6QBzxROMqvMzS3piZWevam4XXde0b4J8kSYGa5vZeK+ELGvGagUsJybl7/7j7tnSoziqqMrlZ2puLKFuXDYHNwH2xULqy44pajck3iR43qKnprrNCvxbe8DdeI1GnpohGywVfhdMIIBlmf4EQQQRIViiMpJSQQbEboxBAhXzs1r7dXw+whToM3LpyOoO+w3KiXaLSFjUCPOOEK49Qqw1NIUrkiQHUA2zp5ov+lT7M1LtvtLSpp5IULG9riM9iNKWO127CvN9JsJNPN4xGOK75H/K0qDHJr5VI7FR1A4GEvGH/KFgpNikix8ENE5LKlndQS0e0Vz9EVl1634NdL21kAwyqd+YwcUn+5vJ0jsXCMxgWEZgXrqIxGYwNTYakwBCxBeJaxLYQoOHmFYzemmJusj8gVLozLlUg/yyxftSRbUbrnmMMmIKQ5SXmiJyVnpN8ZpablnApDieFwDdJ6D88LEby3WtkqaDHqGeqdSMfxwbcxO+x322JuBvGYxcwXMIVysxqd8bRgwIU1pdLktpOzt3Z7U5xEm+w+l+nzSmysskkkGw1IBUoEDgoc0PGzjqbdntMTyuI6jUcUO3T+LbSZCVIt2QuFF5VjxugG26K5p85NU6eanpJZRMMqCkHgeg9Bi4cIY7k6khSUAsqSrsmlb0k628A1APGNDhtSJI+DO0LzfSXDHU9Qaho4rvkVdcqafIyMnTaMGZWWk5ZuXl5ZKcjTbaRZKEnhYDjp0iEFcxNSqNKPTdZqEvTmmxdaph0IAHRff4oictX2ikfjBFR9V3atbKErZutVPn23wDuSghSVW8JKPJFmsuuW1XqpqdKNvSGBZYT0xqkTsygpZT0pTe6vHYRWmy7qjsYUGt8piZ1OIZFbi1lqZFlN5tVZCOHe+SKLIVckJMYyrOmU+SO2QveOEsZUrE9NXWJSeli2tZK0hVuS1vlIOoIuIntHoUnXKDPTOIWg1hUyy1TQmLI67bSCVHXtWwBcq0vbTnFRdRLs36ywlNYwrcugv1RwNyDL6AoBtBSS7lVxJNhzWvx0R9V5tqZqUvMbLsGT4mQ4cleqTS8yQkHWWQrjr2xBt6n10JcQ0XKU1heQ1u1efqeuSqmI310lp5umJmFpkw6q6y0FdiVHntFhpTlQlPMIjGCKUJZhL6kZUhNkiJRujL1kolkJC9VwOjNNTAO2lbQRi+kF4iK5SyUFmieeOqEZiSdw3xpKDO0BD87RWJenyr9Wq0pS+vb9ZsOZlPzNjYlKEgnLfTMbC4IvcGGQ0vfYKBXVkNGwzTuDWjeUwPu+pTcJEJyY3mcqJlyXJIW2bKSRYjxRyMOlpbkV2iqoKyETwODmnYQshUdEmOSRHREJKlkLqkxOdkuE04krRmZ9KhSZAB2aVbt9exbHSo6eInhEXwxRZ+v1mXpVOZU5MPrCQBuA4kngALknhaLex5VpHZ9g6XwvQSl6deByrT/nXSAFvHmSLWSObn3whrC91gsrpPjjMLpTY2e7Zzc/dzqFbb8WN1esrpiFIRT5A8pNZNEFYHYNDoSPoih69VgUTdUmVgKI/FIJ16Bb54dsTz3+rWVlaEHlJlwm5cXvN+eKpxRUzOzZbbUS0g2Glo0NFT3Osdi8Nw+B1dUGd+z7d52lNMw6p59bqzdSjcxzggi5WvRBBBAhEEEECERNtnuL1Um1OmxmlVquFcUH7ohMA0MIkjbI0tdsTFRTx1MZjkFwV6dp80lbaAVaKAKCeYjSHhDTE6yppxN7jVI3g84imdn+N+WaapFYd1QAhh4ncOCT0RZ9OnVZ0pUrKsdqobjGYrKN0LuZeaVlDUYPVCRhIsbgj+bUmqUi9IvZHUkoPaLtoR9/RCYbom0quUqEsZaYSkqI7JJ3m3Ec0R2t0WYp5U6nM7LcHOKehX3xCDtxXvuhunMOLRtgqiBLy7nf55upNd4kGEqfI8nNV6uEt0amI5WYI3uH1LaelR08FzDAnLexNk8T0Ry2iYpamqXJUSmysxJ0qSJUtLwCVzT53uKA9SNwHMB0xIhi4V9t29aDSfE5qOmEdMCZJDqg8nKb9n+F02iyFcxDJOY7k5yTq8pNqstuSWS5TmwexbW1opAFuFxp44a8I4IemZU4krVUlqPQKdbrmoPIUs6kWbaQnVxw6kJFuckCI1IUafrKcqBnLy0gJJIub6bom21ioNyvWGGGHA5T6C0GwEjsX5tQHKuHnsRYdAEWWtrODWnLf0LACJ+EQshcwOlceId/OT0Zdu5O1Pm8E1xExLURnFMhMtoKpZ6phpTUzYbilGrZOttVw0S7qH2uVbBKR23R4Y1wYw7TME1LFE8r8bPvokqegnUkdk4odAGQX6TCjZtUp7DmDMR4paKEzEy+mm07lGwtJW5mU6opVcEJQEj9uI8lO14uzLOysqLSuqoKmojqzwjGBtjs4x3LWC8dNnBkq7P1BVcnHmpCQlXJmcmWGkJUkDQFKBZOqikAC17mFOFqZM4rnpmWw+248WW1PBMyUMLU2k6nslWBtbS8RHxOaTlkMluafHaOUhjnartXWIO4c52JFxMclh9twTMm8WX07lDj0HnEdlJKXltmylIUUqCVBViN+o0jXS8Ja50brjIqyeyKpi1XWc0pfT8cvyxDFVcXLL3cqbls+Ph44e5qoIrtLfk1vJmpWYbKF8msEWI33+eIi/LsvpyuNhQPOIZZrDrWcuybrsuu9wW1lP0GLmHFcrSBYyu0UN9anOXIUtb2UyhbSE1ZlICRcuMqSN3jjkML7OsPzTcxiPFLc0ls5lScgwVuu23JzGwTc6X4QzzlArEx2D1Rm3kcy3lffBJYQShWZ0gc9ofdicQGSrItGKtzrOyUj2g7Z8UYnkE4ewwwcM4fQymWQ2yr8cpoC2TN6kW328cRTC2FwhCVOIyNjW3EnpiTSNGkpQDK0lShxMOAsAAAB4IraivdLkNi1GG6OxUp135lCEpbQG0CyRujMZSlS9EpJPQI3Sy6p/rcIVypVlyW1B5rRXrSXAyXOHKgUKrV+oIkqRIPzjytbNovYc5O4DpOnTDhU5LDNMrbuFVvVSpYhlwEzhlUIErKOkX5IrUbrWPVACwNxc2MMVerdcRht7CcvVpyRkFzBcmmZchtbybEFCyOyIvbQkjfzw82B2WtkFmJtKKV8jqajIfMNgOQPKQTttzKQYkZoOGJWWkG65LVituTHJzTcivlGJJITmstzcpZOlk6Cx1hJjNDeJMSMVml1FlCn6XKSbQcUR1qppASpOnagqBVccTfjDDSQfQfxNJS0qiVRTp6SnexT2RQVLaVdR1Oq0Rrstcp6sQUiaqoK2JOfaXMAEjMgLGYHnFrw+WRwt127DkVj6o4nickkD5AJIyHNyuNmyydMS05FbxMH5PEtOfnJWnS6J7k23VJdmkgpWlJCNSAASSBreEjdinKVJUsaGxjSawvilrG766W8HJwVB11K0OJSlV1lQVqQCgg6g6c+kIcc1Rk7S6w5S3GnJATnJhxk3aW4Ep5QoI0Kc+axGhGsKnia8EjcouiuLVFNUNia9ronXuBkWHuToBwhXTZKZn5xmTk2HHn3lBKEITmKiTuAG+NqLT5yrTLEpIS635l8hKEIFySeEXpQqRQ9k+HnazV5hpytKTlccHZdb3BHJtW3rO4qG7UDiTWNDnmwXo2MY1BhkHCSG5Owcv+FrIytK2SYNfm6gttdZmUZZhSCCUn/cNnn3Zjz6cIoLHmJZx+bfn5xeaqTicqEcJdrgBDlj7F05U538L1QZXNRISN9Gh65Q9dFS4irqZNa5uZWH5tw3Sk/b0dEWdLTa51QMu1eB4hX1GO1Zc43BPuPN7I+abMXVNErJdbNOJW+9fOQrVPh6TEHJJNzHWcmHJqZW+6eyWbmOMaKNgY2wWhpqdsEYYEQQQQtPoggggQiCCCBCIIIIELIJBBBsRFh4Hxq21LdY1dxXYD8U7v8AEYruCESRtkbquUeqpYqqMxyC4XpSmVUFttanCpCrFtxO8CJlS6w0scjPBJz6coB2J6CI8x4TxdM0x1qXnFLek0AgJ4pvzRa1BrIfkm5uWcS4y4L5Cd33RnqzDizMbFgK7CKjDZOFizb/ADq6VP63hJLoMxSSlKjqWFGyT7k8PAdOkRX9co/Lv8jNNqacQeySoWIiYUCvrYASwQpu/ZMOcPBzfRErbcouJWgzNto5UCyUrVZxHuT/APR0RWgvjK3+jnhDe1opcQGu3/sO/tVaUZSKa8wtpP8AJEKFucaiOFVwpL16ep9VViegU+kOqWqoOztQabdlSDdf4lSg46SO1CAq5003xMaxgeeYCnaWvr1of5s9i6B4NyvFr0RWOJ8PLdmissBD6T2SHG7EeEHdEyknYLh29bTE6aPG5ocRw2UExgjV6eblCV7QcVSlYcl2KKy/LUGmMCUpTTostSfVvLHrlklXjtwhdtI/MNHoeEkEA0qR5ebAI1m3+zXqPWpKU/sRH6PRZpdRYfnrFtlaVFPAgHdEmxFT6Lieccq0/jOk0R0zilTzdRS9mKDrmb5NCs5sD2OnhicxzXOs3cstiWHHD5KeKcHVkcXOdzjYP5tXGUbFB2Rstq7GaxLNcs5ziUYuAPApwq/qCNsCzU5J4Krs/LNIem6zOs0mWSteWydXXSPAA0L99DRtExFJVyoldGaebo0qwin0tLosssNi2cjgVm6iOdRh0ri/wFhfCNNzZVtyy6m7YWIXMLATf/y20EeGOWtZp27T/OpRahsssEs1uNM4NHQP/AEv2cFVO2pqlSEplqU05PL5O1khltSz0HskAeOO+z6trxFj1+cxEy3U0rl5idfZLYabyIbUsJ/FhNtw136xmfYFObxhiBKuTMzLt09hXrlPOBRt+wlX/wBMMuzI8lT8ZVoaJYo6mEc93XEIHzAwiSJrr5bSEYVi9Q+k4ZryOCi1R0nLrTvRsR0Wvzq5KbwnL0lxYKmXqbPOLKQdxW26VZh4CmFOE5GRq2JxSZ6cclWQl1TjzTXKKSEIUsHLcXvl59L9ERXZLKCc2pySXBdpkrLnNkQ0oq8VgYW7PZpcztckG0qsmbZmGzfpadA+aETQMdfVFrK3o8exOhl4N8hc18RcL5lrrH5ZbCnapVrZhLsPdY4gxFPzSbhDSaOlAUoadsXdB06+CFdFOFWsFTmJK/8Ahp5TEwhhMpTm21Fali6brUrTUG+hiJzeDnl0pqsTWL8L0yWSi3W0xUFGZVYkEpaaQtW/TUD7Ye8NyQZ2W4nQHC4EqlppF7ixCiL8/quMElPE1zRbInnUqHSHEH4XJVNmu4BptYcXjW5N6VNzGHavIOv0un1imPtb25t1t9B59UhJSfEYa2nEOC6FDTQjmhJsZZL2JqpJqWSh+TmklPuUqWk+HsfnhnpU8oVpbKj2DqErHQba/RCJYGWJZlZWGAY5XsxLxSrfrse0OabZjlBsrToGJ5iTqlJwvgpDVGm55rNUq/ONpcdClFQSxLJ1ybtV9sTbcAAYBQKw5TcRyqJhb0wtp4OuOOkqW6oLOYknUm4MODQLdRlJ1pRS7LvoeQRzpNxCHahKN03Hb70vYMrmA+3b/dPJzpgiLZIyy2wJOJxz4ZjcMz5C5sus032DkHzATjjiiVWpY3qs5hwuTCp6prn2yyoZ/wAYc4UL7yI6bV1MpxJ+FpItuy7i0pdmGSFMLmUpT1whtY0WEqVa405oaJuj1Suoak6Sh+ZfeGVDDKCtS+gAanxR12iNqpVLw5s/LrD0/QJeZfq3IOBbctMPuC0vcaFaENoKrE2UpQvoYkRubKCebNUNRg9dh08Ie4HUfdhG0tOef83qRYYQarh/FdMZUEicoTxT7plSHxa3H8UR44gOEJlTdRdSDosBdvCLw/4PqE3IyLsxLEB5cs8wnNuHKIKL/PDFhqkT5xAzJyjDsy4bNoDaCVLPQBvJ5oj3bwbmHlW0dSTNxVlWBxCwAnnTxXWJucbyszTiUHQtk3BEOez7Z7iHFtTZk5CUAZZsXHDZLTKb6qUdwG/pPAE6RbuD9j3IoFSxvNGSZQkLEi0ocsR36u1bHhud+g3x3xhtVkaXJnDmAJKVS0xfM62bSzJ5yTq4rpMR2iR7bE5KjxvFcHwp75KYAvO0jyb85G08wT+p/CeyGgFth4TdWebyqeSPxz5sOwaT6hHTvPiEUXj3GUzPVAVGtLQ5NAWlJBvtGBznnPTEbxHiZxU886mcXUqm5flZ17UI6E83iiDVqsM05xaphRmJpxOa5N9Tuv8AdEynoy7IDJeaVVXV41MXPJsfcSPsObaumKMQONKXMvq5WZcJ8A6B0RX85MvTb6nnllSieME5MuzTynXVEkm8cYvYoWxCwV9SUjKZmq3aiCCCHVLRBBBAhEEEECEQQQQIRBBBAhEEEECEQ40Wsz9Jf5WUeKbgpKTqCD0Q3QQEXXHNDhYq1MOYxkZ1lCJt4y04D2x7U68DwibSNaPJoD1nkHUOIPZf3x51h2pGIKlTVANPqU3xQo3EV89AyTMZLO1+jkE/Gi4p+X+F6nw9i6ZZSEIdTOtDehw2cR4FffEoRU8M4iR1vUWW+VPYpTMpyuC/rFj7/FHmmgYwkpxSUPr61f4KJsPLwiXSGIF5EoU63NoIvvF7eEb4ppsPew7FRsGJYVJrNJy37D1j7q1qrs4ZdBco8+WuZua7IHoC0j6R44rnG+z+vMJL0zTXgka8s2A43w9ULgeOHai4sclhaSqb8nf1DvZI+fSJlSMfVBgJM0w1NJ3FxhfJqP2GI7RJEbha2l8IcrmcDXtD2/8A0LHrGSo2QoEwuYbXOLzNII0BhTtDn5iq1p6acl0MIc5NhhptVwhltAbbBPPlSL9MX4uuYGrhKapTm0Or7Zb8vyavjEWuek3hJN7NcHVopepdUeZN7jK4iYSPNI8d4dbUvBJcFqI8fwOvEbn3YWHLe3Po7lT20fE05PYbkaO3OKErJoQ8plLQTneUhKcxVvVl1tfdeFmB5VZ2V1OXl1NdeVeqSsmy2pYSVpSFqUBffqpv5omuJdi9Tm2kokanTpoDclalMkf1hb/3GI/VtlmK5WjpbXQnZlLObk1MrS+Ek2uQEE8w8kPirYdW+VlHiwWj8TmpqKpadc3FyBvva23am2lyruzil1urVxyVbxHUmHJCkUxEwh14F0gOTDiUE8mhKMwSVWKirQWF4adkCFL2tUNN82R3kyfChQ+2GheEsQUh9wvUl+UWr1a5coI8ZEPuDJSZoM6iqMqAnGyVNqIuEqsdYclnYG2adqs6bAaio13vsXahaANgyUbmaBUpqpMqkKTMOXuOUalyrssx3kDfFgYBkZ5uh4qp01mKl0paigg3BQ4g2tz74icziXG9MZTTJPFWIGZTXM1Lzq2ELJ7YlKd9+mOuHalUhKzcnLrclg/Llha03KsqiL6niY7O4Os4O3pjD8JqzQS0MsOq4tsDykG4BUg2c06fwomu46rko9T6RKSD4lX5hBQmbmXmlIZaav26iV5ja9kpJNor+kF1VZllLFl8mCoc17n7Y7TUjVp6rNqWzN1JTCQ2xypW6UAbgAd1om+C9mONqjNGdThuprKtylS6kJ/rEACCWVjWmx2qRhGHTR1Ec1WQ0sAbt5N61tw6IQbTKkzPStNCWHOVZp4aec4ZkLIQPDltFqSGx3F7y0ie/B1MCiO6ZtBNueyCo/NDydiNFMteu4pTlB7NLEuQkD3bhT9BiDBIY33srrSKqwmsiY2WcAsOsNXM5dF1TGFahMNSzM3KPqafQkgLSogi4sd3RCPDuC67Vp9FHw/SJmYTfM4ptokqPrlK4ePSL+p42MYClw2wWKxOJHbOqM2b8wQmyPLeOdU20TymutMO0XrWXCcqFzQSw2ga7m0gc8LGuL7gVnsV0xw1uq8Mu8C2scvlt7EnwnsRRIsJViyrIlUIFzKyZDjvSFLPYI8qvBDs9jrA2AwZHB9FZmqnlyLXLLC3T7t4jQdAsIpvGGNpqovKFcr0xPka9ayt22h0djviGTNaqL6CxJpbp8tYkhO+3STuh1lPrOva6xuJaXYhiQ4NmTd20Dq8oqfbQMe1GturNfn+QYJuimSizr7tQ7YxXNXrcxOtBpPJyMinc0k5fKYjdRr1OkVry3nH76nMbX13neeG6IlVKpNVB9bji8qVG4QnQDwRZw0W96r6bB5JnCSoNz2dA3dqfKtiNKG1y0ihIukpUsjd4Ii7i1uKzLUVHnJjWCLFrQ0WC0UMLIW6rAiCCCFJ1EEEECEQQQQIRBBBAhEEEECEQQQQIRBBBAhEEEECEQQQQIRCyn1OdkHkuyz60KT0wjggXCARYqaUrGpQwlmflyshWriTbTpESimYjp6lIVJVRLS1IuUq7Ag83EfPFRwAkbojvpY37Qq2fCKWba23Qr6lsRzaUJKizNIKc2Y21HhGkLpXEUqhYWuVdlnL6LZI8txYxQEtPTcssLYmHEKAsCFboeqfi6oy7RaeQ1MpKco5QajW97jWIb8MYcwqaXRdgN4nWPV2dy9D03G8+yUplcUTjdzYIfIUPIofbEikdolfbSCl2mzgGmcpKVeVJjzNKYzTySUzMqorzalKtLeA3he7iqmB9Alw+pKleqRkKfGDr80RXYa8bFFOE4jF5Dyeo9ua9SSm1etsgcrTVqP/AAJ5SR88LPRXZcOacw/OvK4qcDT58q7mKEwJSaxjLEX4Dwu8uaqCkKWhsvlvMEi51XZINtdTEnn9m21KlurRMU15tST2V55hX/fDJoX7x8kkHFIdh+RHYVaHolYaJCl4LecWBvMkyI6sbWafKKzSODX2V20UhplB+YRTJw5tAzhBYczHhy7P9qHCR2YbVqq6Ey1LfdUrdafYT9KxAKN5yt2pQq8TcbEj/t3q0nts1Y5RSmMPOhR9U9O6w1VHa1jCZSUplaTLjgXXFuERTW0WgYmwNU2aVi0uyU262HUNmZDnYkkA3bKhvB48IhVUrknLTSGXHXHkqTcrSVHL4Aq0OihkP/iWIMTl2m3/AB7yrzqe0jEKgoPYuakwdCJRtKT5d8Q6rYslZpRM3OVWsL533iU/YIrWcxJSGA31s0++bHMVIDfgHGGtWLZkSy2m5VgLUdHCCSB4CbfNEhmHu3n+e5PNwerl87Ieu3Z3qyHMTzSAUU+RlZMAb0JGb5oZKhWyt5P4Uqp11KVE6D3I49Biv5qtVKYStC5laW170J0T5BCBalLN1KKj0xKZQxtU+nwGCI6x2/zec1LapipgBbcjLAG/YrOnzRH6hVp+eWFPvqNhYAaADwQggiW1jWjJXEcEcXkhEEEEKTyIIIIEIggggQiCCCBCIIIIEIggggQv/9k=" },
  "Kilnamanagh": { primary: "#C0392B", secondary: "#FFD700", abbr: "KIL", circleBg: "#111111", circleBorder: "#C0392B", imageUrl: "data:image/png;base64,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" },
  "Parkvale FC": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "PV", circleBg: "#FFFFFF", circleBorder: "#C0392B", imageUrl: "data:image/jpeg;base64,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" },
  "ParkVale FC": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "PV", circleBg: "#FFFFFF", circleBorder: "#C0392B", imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERUSEhIVFRUXFxYXGBUXFxoYHhkXFhkWGBUYFxkZHSggGBooHRUXITEjJykrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy8dHyAtLystLy0tLS0tLS0tLS0rLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIANEA8QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABGEAABAwIEAgYGBgcHBAMAAAABAAIDBBEFBhIhMUEHEyJRYXEyQoGRk9EUFlJUYsEVFyNjcqHSMzRTkrHh8EOCorIkJTX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAAICAQMEAgMAAAAAAAAAAQIRAxIhMUFRBBMiYTJxFEKB/9oADAMBAAIRAxEAPwDuKIigEREBERAWjjOIinidKWlwaW3DeNiQCfG17+xbpVKzTWydYXRP1sMezQQW6o3Eyf8AeLtPk0q2M3RJ5azIKizX6Q5w1NLb2cOBtfmDdWNctpntA1xcz10Z5gjaaPza4X8rro2E1zZomyDmNx3HmPercmOr4RK3ERFmkREQEREBERAREQEREBERAREQERFIIiIMIiIMoi+HSAEAkXPAd9uNlA+0REBERBr19QI43yEEhoJIHE25LnlRUAuBhu2aM7scPSa3YeZDdiONvcrvmKo0QnewJa02brNnGxDW+sbcvNUCoNtnFkpbvG9rurlb9m5cRe1rAFtx3rXjiK+KqQN/swNMjuw02u2fZroifsubt5EHkrHkOocwuicQQ5okZ3i+z2u/EHAg9/HmqnhtjK+WQk7lvasNQsNdwL6X3tZ4vuN7Ky9WYZaabYXe5jrbX6ztAkcrkXsNrkrTk9NIi9IsBZXMsIiICIiAiIgIiICIiAiIgIiICIikEREGEREAqt1zdzTvLjc6oyXWdxuOrf8AbB5d3DmFI4u6N1mdYGyjtsGog8xewO45Ks4jiwc3q6lhI5OFpB4EWs4fzUwTmGYwQeqmPaHrEWJ8x3qca4HcbrnkNTq7HWxVDfV1PMUzbfZe4b28fepvBqqXrOridqa0AydZa4Lj2QCzsl3G5HhtvdTcRakK0TiAb/aNc3xtqHvHD2hedPjlM8uAkA0uLTe43HcTsVXVGpm0v6gaLh2tti219tzYu2Btfj5c1RMSrJNw9wdYG2sRcrC99W23cpzpPx+OGFjQWPe52oMNnbAEaiOFgTz9i5zgMrJHulleNQ4NtcXJ5MAsB2rDie5u1x1cOP47qmV86W/KlOXRag5wGt5s0P0l1+9zhGeHq/kVPYw3XC9wJJiMEnhsXB1jw5O4HkFoZbpGQwzOlcwNZICZGi2xA7O5LmWva/ZspSkx2gIkY+rhLXNA7UjNti0i97u25/zKpnu26WnotsDrtB7wF9qsYHmmiELWvqoQ5t27yN30mwI34FSH1pw/73B8RvzWPWp2l0UR9acP+9wfEb81j60Yf97g+I35p1ptKyStaCXEADiSoalzXSSTdSHlrzfTrY5gfbjoc4AO9i5hnTOlS+tc2lqSyJgDWlhFnbAudfe++3sUG+aedzDUVPWhhuA+Vo87Ena9u5azh1N5VTt8P0MCsrl+GZ3MQsZo3NHqykXt3CRhN/O3sVzoc2UT2Bzp4mH7LpGf6g7hZXCxbadRRX1kofvUHxG/NPrJQ/eoPiN+ajrUpVFFfWSh+9QfEb81n6x0P3qD4jfmp60SiKL+sdD96g+I35p9Y6H71B8RvzTrRKIov6x0P3qD4jfmpNrgQCDcHcFRrQyiIgIiIMIiIIDNbOw1xLgBxLG3cPI3FgtKkpnFtzUTNH4nU49psDf3q1vYCLEXCq9blCFrjNAxnW8QHtDm38Qf9VMo246YDdri4kbnXe5327DeCjapj45OtiJD9IBZa3WN2PMlwI3sbWud0psds4Q1Be2S4baxa1zjyjbHu4eZUVmvMTKNjgCx0pO0VwL34uc1l9h+IklaYS26RbqJynxXrWlove+4NrtPHtX28O5eODNFpQAb9c+4JG/okXvsdiCuW4Nm2aOdz5XF4k0tde5axoPFkYIaSBsL7BdN68t0TxuvG4APPZfdouQdhpFtyQ2+x8FpnhcfCMcpVK6R8ELZTUve1sZDWMaB2nOAN9gbcbm91G9GjGGts479W/SO9xtsBxJtfhbnc2upLpWDi6B+rUwh+/Z43FvRA5f6KJ6Ni79IRgX3bICLA7abm/c3YXI8ua2m/tMr/N0DMTQ2grQGGxYLHTYbEAnVwd5AAbG3FbOK1lBRtYZo4gHCwBiBJLQ0kdlp1HteA4Lxz3GRRzuB4MtYnbdzNRIB9KwA8LgDmq10tRvDKYvtcmS1r7jTHvY+iL37PvuSufCdtT5a5XXlZG5kwdpa8hgY8etTkAEb3B0WPcbX4BSkNXRyND4qSN7CCQ4dTva3IE2481R54qqfDo4IqaVwdHFd72taxpZuHse51+At7SpLKVN9AonOmkA1F0jxv2QABa3edPH2KbhNeqJbtazU0QAL6UN8oWv4/wAFyfcqzmDPGFxNc2CBksliB+yDWtP4i4A+wBQFFmOqNYwznRDUG0esXawE9k7Wub2vc+sp3pCwSOlpfpLe3O2SMCRzWm1+Nm2ty53U9JMpL7ly8eHx0VZbcRLV1MTSJbdWHNHC5c5waeAJtbyXQv0TTf4EXw2/JcwqsxVf0eldSVsk9TIB1kAax9tt7hrbt3sLE81P9JGN1lNR07439VK9zQ/SAd9BLm7321f6KueOWWX9kskXD9E03+BF8NvyURjNdhVI5rahsMZcNTbxXuBsbENIUXQ49NiFoaSUMaxrOvqdi65AJbCw8bm/aIsFI52y2KujMYu6WMao3HiXAbgn8XA+xZyay1lVt+PCTo6OiljbLHFC5jgHNcI22IPPgtbEnYdA6NkscLXSnSxvVAlx2GwDT3hUnojzEGNko5nadGqRmrazR/atPdY7+9SuXnCpnmxeo7MLA5tPq9WNt9UluRO/vKtlhcbZUS7i4foim/wIvht+SOwel508Xw2/Jc/w/OdVHXsdVXZSVQvC0gdhpNo3E8QeFwftAq09IOJTU9BJLC/Q8FgDrA8XAHjtwVbhlLJ8m4lRgdJ92h+G35J+g6T7tD8NvyWtk2skmoaeWV2p72AudsLnffZUzM+YqlmLCm+lOggLWXIa06btJJ7TTzATHHK2zfoncWLOeEUraCpc2CIOET7EMaCDbiDbYreyVM59FEXG50ge5QOIVDH4bXaa11XaM7uDRo2O3ZaL34qbyJ/cYvJRf4iwIiKqRERBhERBlERQNOvwyKZpbIwHx5qhZi6MmP7VObO5gniukorY5XG7iLNvzRjWDTUr9ErSO422Kn8lZtMH7Cc3iNg0n/pm44niI+8BdizBgENXGWyN5bHmFxLMuTaikceyXMvs4DkuvDmxznXNlcbjd4rdn7DmOo3SNffS4SDcaTc6X6B6o7XLie88ObYZiElPK2aIgPbexIva4tw58V9yYpOYfo7nkx3adJ5aQQ1u/BouTbvK1YQNTQeFxfyvut8MOuOr5Uyy3duv5ma2PCnBx7RiZ6R7TpHOa5zjfi7UTt3nwWjnzDKurjpy98TLXtGS7VqIBcG6QS8gDewFiDbles9IePNnnbHG7VFCBa3Au4Gx5iwA9/erBJmCf6VTsPVgzRtdrkcWsjaS46GgHZtmgX4k7+C55hcZK13L4WDLNNXGCKGTSyNjWN7O523Ou/PlYLyzngckhiiu0QC8kpJdqdouWsG3DmTfmrHS4wyKnMtTLTta0kaonlzLcgL76vBQ2IYpDVTtp2vIdJps1zXNdoIJc4BwGxaDbx8Fjjle219eyOr+j6KegYIhpn0te0ve8i7t3NIJIaCDyHILbxfLuIVOFMpZTEahr29rWdLmsOxJ031Wty5KwTZmooy9pl2isJC1rnNj7g9zQQ1aOZ85w0jIXBpl64jSWns6ftarG/kN0mWdsRqK/WZCqWR0s1K9kVXC1rZDchr7C1723PLcbhSGdsvVtfSQMtE2ZrtUg1nTfSQdJ034+C9sWzY6LEKaG7RTyxl7iWu1Xs7SBzBuBtZT1DmClma98crSI/TG4LP4mkXHuS5ZzVpqeirYjkqeKSKqw9zI6hoaJGEkRybAO4Dw4W347FXekc8saZGhr7DUGm4DuYBtuFHUuZKSSUQtktI4XaxzXMLgObdQF1C4fmWd9ViMRDNNM28dgb3sT2t9+Cre2Xr7J8RC5o6OJJ63roHMZFIQZdyCCdpNIA3uPHiSrHmDL8k4p6VmllG23XAOIc5rB2I2gDgTxN16ZAxyWtoxPMG6i97eyLCzTtsSVnMmaW00sVNHGZqiX0YwQ0Afae7kNj7irXLO3r8I1ETmro+impy2n1CVtur6yV7mjhdvaJ0gjuHIL6xDAa+own6JKY/pALBq1ktc1jgQS7Te9h3clPQzYhqZrjpy0uAdoe+7BzI1Ns63dsozCMyvfWV0U2hsVMGkOANwLEuLjc3tbuUTLLXzryaj4y3T4pTQwU5gpiyMBrn9e6+m+5Derte3K6j8byxWnFW10LYXtaG2a+QsJIaWkGzTbirQ7MtGKdtSZm9S52lr97F1yLcL8QfcoXE82PhxRlK4sEDodZOkl2rtWAsd+A2skuW7ZCyaMxvqjhtYaiKKI9WdIikL7i2+olrbbqSyJ/cYvJaOacWp6nC6t0EjXgRuBtxB22cDuD5reyJ/cYvJVvolYERFVIiIgwiIgyiIoBERAXlPA14LXAEHkV6ogpGM9HFNKS5h0E8gNrrn2JdH9VFIG8Wl7Wh3LtG17eHFd3KrldVa5HXJAj1sIJAZazdRcePPjcWsQtePkyl8VW4yuDfo6Q9YWtLmRu0ueBsN9IK6kMDe6spZ3OYY6ePQWlpu4NDrbHYne+/ctfFq+jfSvgilZGLBgcGHT2SHWaBx9Hj4qJdjVSR2KjUT3Ux48B2tXcujLk7fpWY6XbOmCQ1cMUUcscLhIHsGnYuLSQHNb396jcOwKaXEIaydzLapg1sZJ7TLtF3OAJbsdh3eKgYscNRqgOmKQAF+oOv2d9bLO3se0W22HDgVK1eaGxUTJGFjZ4HyR6SdYLtJBdx7TXF1wfGyz65SaidxIU+TqmGGqpYXxOiqXOPWP1BzA4WIIAOv3hfWKZEeaKlp4ZQXU8nWXfcB5JJdwvp3OypX60sS/c/DP9SfrSxL9z8M/wBSv9rlV74uiYrl2okrYK1rog+FmnqjqIc46r2fbb0tjbktOkyhVNdWVAqGx1NT6OgEtjGq9rndx5XtsqP+tLEv3Pwz/UpDCs8Y5Um0ELJPERHT/mLrfzVbxcknnSe+NWGmyfWfSaSpkkjc6HaS75Hl973eHOGx39GwCkaHLEzKnEJi5mmqbZg3uDYjtbePJaMD8yOFyKRng69//EkLyrKnMsYuI6aT+Dc+5zgqflfG4nwn8h4FJRUgglc1zg97iW3t2jtxXhmXKrpqmKsp5RHURbdppc17RewcAbjid/FUCt6RcXhdoljZG7udEWn2XO61/wBaWJfufhn+pX+zyW9ojvj6Os0r68uaJI4GN9Yte95I7mgtFj5lQtJlWUT4g9z2BlW3Sy1yW7EXcPaqB+tLEv3Pwz/Un60sS/c/DP8AUk+n5J6aPuYrNNkmvdh7KEup7Rya2vu+7hdx3Gns+l4qdrsuT/pBldG6N2iIR9W4kX9IOOoA29Iclz0dKeI90J/7D/UvSLpQxJxDQ2D/ACO/qU3i5J5uiZ4rFXZYkpaPEqiV7TJUNJLWX0sGouAud3G7uNgrXkUf/Ci/hVHxLEsZqoHwvhj0SNsS2Mg247Ev2V/ylTPjpI2PFnAbhYZ3c8rxMIiKiRERBhERBlERQCIiAiIgwVRqvKtTPJ1ckpFOCTYbF5O5LrcVekU7FcgyXRN0/sgdP81MRYdC0WbG0ewLbRQOT9LODOhkjroLsIIDi3azh6LvyVLnhL3va1pLSCI7Dh1l5mtLvMrv2NYayogfC8Xa8EfIrhdbBJDKWCQNmjAidE4lhd1YAjkY70SS2xte978brs4M9zXwyznurKyApSso+sddgDZHC5jv6Tr2d1fO999BsRyuFdOijKgke6rnYbRu0xtcLdsek4g92wHjfuXTnyTHHdZTC26bmSOjZthPXNuTu2DkO4yW4n8PvXToIGsaGsaGtAsGgWAHgAvQBCvNz5Ms7uumYyeiGrM00EL3Ry1MbHt9JpO42vuvFudMMJsKyH/MuN9JH/6VT/E3/wBGroOfX4d+jyH9T1uhvVBunXr24ad7cb8uK1vDJMf2p39f0uFVTUlbFZ4jnjPDg4ewjgfJchz3kJ9HeaC74L733dHfhfvb4+9SHQtDP18rxqEGizvsmS7dNu8gauHeuuyxhzS1wBBFiDuCDxBUdrw56l2nUznl+XEVjz5l36DVFjR+yfd8Z8L7t8wdvKyri9HHKZTcc1mroV16OMvGomDnDsNsT+Q/NVKgpjI8NAvcj/YL9BZQwYUtO1tu0d3HxXL9Vya/GNeLH3TbGAAADgvpEXC3ERFIIiIMIiIMoiKAREQEREBERAREQCuWdMOXtm1jBuLMk8vVK6mtXEqJk0T4ni7XAg+1Xwy65bRZuafmZ8xLQ0724Hn4C/Md3cuv4DilTSBsDi6RzWt108rh1trC76Z/CZn4TuOF+S5fieFupqwwP9WRov3tLhY+5dpzrlT6eIrSaHRB5a7nrIbo9gLd/NdfPlLr4rLjl8pvCcZp6luqGQOtxbwc08w5p3afNb5K4TTYbWQTPne7q3077zzA3kAfsHOYTaWPntxBPNdEwDPtPK50NQ6OKVnrdY0xyD7Ub789jpO4uubPi1/Hy0mXy5Z0in/7Kp/jH/q1dkw7KGHBrHCkhvpablgO9h3rwODYPWSPeG088h3eWvDj3XOk+Csos0cgAPcArcnLuSTxpGOOraQwtaA1oDQOAAAA8gF92ULU5tw+M6X1cIPdrB/0Xth+YqOc6YaiJ57g8X93FY9b66X2rPTDh4koett2ontcD+F3ZcP5g+xcTX6D6Q7fo2qv/h/mLLh2XsNdPM1jRxNv9/Z8l2fT59eO2+zHkx3lF56Lct6nde8bN4eJ/wCfmuthaOCYc2nhZG0cB/Nb65Msrld1rJqCIiqkREUgiIgwiIgyiIoBERAREQEREBERAREQcz6X8v6o21cY7TNn2+zyPsKveX68VFNDMPXja7227Q9huFtV1K2WN0bxdrgWkeBVEyFWmjnlwuY2LXF8BPrMduWjx5/5u5a77Ya+FfSp7pCYP0dVHn1fH2hcu6N66jidMaqPWCGaf2Jltu6/AG3JdTz+0uw2pDQSer4AXPEcAFTOhelkY+p1se27Y7amkX3dwutOOycWStn5Rbcq4jh00kn0SHQ8NbrPUmO4JNhuBfcLmucccnr6/wCiteWQiUQtaDYE6tLnvA9Le+xXcLLkWcslVcNWayjYZGl/W6Ru5jwdR7PrNJ3277KvDce13/xOcunRsFyzSU0YjjhZsN3FoLnHmSTuvuXLdG6aOfqGCSM6muaNO9rb29LjzULhvSDSuYPpAkp5fWY+N/H8JDdwt+jzbBNK2OBssl76pBG5rGAC93PeAPYN1SzP3W8IjpcrdFB1QPamkYwDwB1u9nZA9q0ui3L2hn0h43Po+XeojFKg4tiQYzeCK7GnkQD+0f7SLDwC6rR07Y2NY0WDRZMrrHqiTzt7oiLNYREQERFIIiIMIiIMoiKAREQEREBERAREQEREBc96VsCc5jKyG4lh3Jbx0g3v5jiuhLyqYWvaWOFw4EEeBVscut2izah5K6RIp2iKqc2OYWAedmye31XeHuV/Fl+cc2YIaOpfCfRvdh72nh8vYvXBc319KAIpiWD/AKb+232A8PYQurL6eZTth7spya8V+ikK45D0t1YHaghce8Fzf5XK8azpXrnCzI4Y/GxcfZc2WX+Nmv8Acxdiq5442l8jmtaOLnEAD2lcmzvn01N6WjJER2fLaxeOYaOTf5lUjF8aqap2qoldJ3AnYfwtGw9ysvRxl76RMHOHZbYn8h+fuWl4pxY9svNV79rqOhdHWACngEjhZ7x7hyCuK+WNAAA4BfS5PVqIiICIiAiIpBERBhERBlERQCIiAiIgIiICIiAiIgIiIKF0s4AZ6cTsF3w3JtzYfS+fsXFV+pJow4FpFwQQR5r87ZxwQ0dW+K3ZJLmH8JOw9nBdv0vJ/rWPLj7oRERdrB70FMZHhoF7kf7D/niv0Hk/BRS07W+sd3HxXP8Aoty5rf17xs3h4n/n5rrgXmc/J3y/p1YY6jKIiwXEREBERAREUgiIgwiIgyiIoBERAREQEREBERAREQEREBUbpVwD6RS9axt5Iu1txLfWCvK+JGBwIO4IsrY5dbtFm/D8tKRwLD3TzNY0XuQP+eSkM74EaSsfGB2HnUzyPL2FXzoqy8Gt+kPHg38yu7m5p08e7DDD8l7wLDG08LYmjgN/NSCIvPdAiIgIiICIiAiIpBERBhERBlERQCIiAiIgIiICIiAiIgIiICIiCv5ryzHWhmrZzDcHwOxCl8PpGxRtjaNmiy2UUgiIoBERAREQERFIIiICIiDCIiDKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMIiIP/Z" },
  "Park Vale FC": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "PV", circleBg: "#FFFFFF", circleBorder: "#C0392B", imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERUSEhIVFRUXFxYXGBUXFxoYHhkXFhkWGBUYFxkZHSggGBooHRUXITEjJykrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy8dHyAtLystLy0tLS0tLS0tLS0rLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIANEA8QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABGEAABAwIEAgYGBgcHBAMAAAABAAIDBBEFBhIhMUEHEyJRYXEyQoGRk9EUFlJUYsEVFyNjcqHSMzRTkrHh8EOCorIkJTX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAAICAQMEAgMAAAAAAAAAAQIRAxIhMUFRBBMiYTJxFEKB/9oADAMBAAIRAxEAPwDuKIigEREBERAWjjOIinidKWlwaW3DeNiQCfG17+xbpVKzTWydYXRP1sMezQQW6o3Eyf8AeLtPk0q2M3RJ5azIKizX6Q5w1NLb2cOBtfmDdWNctpntA1xcz10Z5gjaaPza4X8rro2E1zZomyDmNx3HmPercmOr4RK3ERFmkREQEREBERAREQEREBERAREQERFIIiIMIiIMoi+HSAEAkXPAd9uNlA+0REBERBr19QI43yEEhoJIHE25LnlRUAuBhu2aM7scPSa3YeZDdiONvcrvmKo0QnewJa02brNnGxDW+sbcvNUCoNtnFkpbvG9rurlb9m5cRe1rAFtx3rXjiK+KqQN/swNMjuw02u2fZroifsubt5EHkrHkOocwuicQQ5okZ3i+z2u/EHAg9/HmqnhtjK+WQk7lvasNQsNdwL6X3tZ4vuN7Ky9WYZaabYXe5jrbX6ztAkcrkXsNrkrTk9NIi9IsBZXMsIiICIiAiIgIiICIiAiIgIiICIikEREGEREAqt1zdzTvLjc6oyXWdxuOrf8AbB5d3DmFI4u6N1mdYGyjtsGog8xewO45Ks4jiwc3q6lhI5OFpB4EWs4fzUwTmGYwQeqmPaHrEWJ8x3qca4HcbrnkNTq7HWxVDfV1PMUzbfZe4b28fepvBqqXrOridqa0AydZa4Lj2QCzsl3G5HhtvdTcRakK0TiAb/aNc3xtqHvHD2hedPjlM8uAkA0uLTe43HcTsVXVGpm0v6gaLh2tti219tzYu2Btfj5c1RMSrJNw9wdYG2sRcrC99W23cpzpPx+OGFjQWPe52oMNnbAEaiOFgTz9i5zgMrJHulleNQ4NtcXJ5MAsB2rDie5u1x1cOP47qmV86W/KlOXRag5wGt5s0P0l1+9zhGeHq/kVPYw3XC9wJJiMEnhsXB1jw5O4HkFoZbpGQwzOlcwNZICZGi2xA7O5LmWva/ZspSkx2gIkY+rhLXNA7UjNti0i97u25/zKpnu26WnotsDrtB7wF9qsYHmmiELWvqoQ5t27yN30mwI34FSH1pw/73B8RvzWPWp2l0UR9acP+9wfEb81j60Yf97g+I35p1ptKyStaCXEADiSoalzXSSTdSHlrzfTrY5gfbjoc4AO9i5hnTOlS+tc2lqSyJgDWlhFnbAudfe++3sUG+aedzDUVPWhhuA+Vo87Ena9u5azh1N5VTt8P0MCsrl+GZ3MQsZo3NHqykXt3CRhN/O3sVzoc2UT2Bzp4mH7LpGf6g7hZXCxbadRRX1kofvUHxG/NPrJQ/eoPiN+ajrUpVFFfWSh+9QfEb81n6x0P3qD4jfmp60SiKL+sdD96g+I35p9Y6H71B8RvzTrRKIov6x0P3qD4jfmpNrgQCDcHcFRrQyiIgIiIMIiIIDNbOw1xLgBxLG3cPI3FgtKkpnFtzUTNH4nU49psDf3q1vYCLEXCq9blCFrjNAxnW8QHtDm38Qf9VMo246YDdri4kbnXe5327DeCjapj45OtiJD9IBZa3WN2PMlwI3sbWud0psds4Q1Be2S4baxa1zjyjbHu4eZUVmvMTKNjgCx0pO0VwL34uc1l9h+IklaYS26RbqJynxXrWlove+4NrtPHtX28O5eODNFpQAb9c+4JG/okXvsdiCuW4Nm2aOdz5XF4k0tde5axoPFkYIaSBsL7BdN68t0TxuvG4APPZfdouQdhpFtyQ2+x8FpnhcfCMcpVK6R8ELZTUve1sZDWMaB2nOAN9gbcbm91G9GjGGts479W/SO9xtsBxJtfhbnc2upLpWDi6B+rUwh+/Z43FvRA5f6KJ6Ni79IRgX3bICLA7abm/c3YXI8ua2m/tMr/N0DMTQ2grQGGxYLHTYbEAnVwd5AAbG3FbOK1lBRtYZo4gHCwBiBJLQ0kdlp1HteA4Lxz3GRRzuB4MtYnbdzNRIB9KwA8LgDmq10tRvDKYvtcmS1r7jTHvY+iL37PvuSufCdtT5a5XXlZG5kwdpa8hgY8etTkAEb3B0WPcbX4BSkNXRyND4qSN7CCQ4dTva3IE2481R54qqfDo4IqaVwdHFd72taxpZuHse51+At7SpLKVN9AonOmkA1F0jxv2QABa3edPH2KbhNeqJbtazU0QAL6UN8oWv4/wAFyfcqzmDPGFxNc2CBksliB+yDWtP4i4A+wBQFFmOqNYwznRDUG0esXawE9k7Wub2vc+sp3pCwSOlpfpLe3O2SMCRzWm1+Nm2ty53U9JMpL7ly8eHx0VZbcRLV1MTSJbdWHNHC5c5waeAJtbyXQv0TTf4EXw2/JcwqsxVf0eldSVsk9TIB1kAax9tt7hrbt3sLE81P9JGN1lNR07439VK9zQ/SAd9BLm7321f6KueOWWX9kskXD9E03+BF8NvyURjNdhVI5rahsMZcNTbxXuBsbENIUXQ49NiFoaSUMaxrOvqdi65AJbCw8bm/aIsFI52y2KujMYu6WMao3HiXAbgn8XA+xZyay1lVt+PCTo6OiljbLHFC5jgHNcI22IPPgtbEnYdA6NkscLXSnSxvVAlx2GwDT3hUnojzEGNko5nadGqRmrazR/atPdY7+9SuXnCpnmxeo7MLA5tPq9WNt9UluRO/vKtlhcbZUS7i4foim/wIvht+SOwel508Xw2/Jc/w/OdVHXsdVXZSVQvC0gdhpNo3E8QeFwftAq09IOJTU9BJLC/Q8FgDrA8XAHjtwVbhlLJ8m4lRgdJ92h+G35J+g6T7tD8NvyWtk2skmoaeWV2p72AudsLnffZUzM+YqlmLCm+lOggLWXIa06btJJ7TTzATHHK2zfoncWLOeEUraCpc2CIOET7EMaCDbiDbYreyVM59FEXG50ge5QOIVDH4bXaa11XaM7uDRo2O3ZaL34qbyJ/cYvJRf4iwIiKqRERBhERBlERQNOvwyKZpbIwHx5qhZi6MmP7VObO5gniukorY5XG7iLNvzRjWDTUr9ErSO422Kn8lZtMH7Cc3iNg0n/pm44niI+8BdizBgENXGWyN5bHmFxLMuTaikceyXMvs4DkuvDmxznXNlcbjd4rdn7DmOo3SNffS4SDcaTc6X6B6o7XLie88ObYZiElPK2aIgPbexIva4tw58V9yYpOYfo7nkx3adJ5aQQ1u/BouTbvK1YQNTQeFxfyvut8MOuOr5Uyy3duv5ma2PCnBx7RiZ6R7TpHOa5zjfi7UTt3nwWjnzDKurjpy98TLXtGS7VqIBcG6QS8gDewFiDbles9IePNnnbHG7VFCBa3Au4Gx5iwA9/erBJmCf6VTsPVgzRtdrkcWsjaS46GgHZtmgX4k7+C55hcZK13L4WDLNNXGCKGTSyNjWN7O523Ou/PlYLyzngckhiiu0QC8kpJdqdouWsG3DmTfmrHS4wyKnMtTLTta0kaonlzLcgL76vBQ2IYpDVTtp2vIdJps1zXNdoIJc4BwGxaDbx8Fjjle219eyOr+j6KegYIhpn0te0ve8i7t3NIJIaCDyHILbxfLuIVOFMpZTEahr29rWdLmsOxJ031Wty5KwTZmooy9pl2isJC1rnNj7g9zQQ1aOZ85w0jIXBpl64jSWns6ftarG/kN0mWdsRqK/WZCqWR0s1K9kVXC1rZDchr7C1723PLcbhSGdsvVtfSQMtE2ZrtUg1nTfSQdJ034+C9sWzY6LEKaG7RTyxl7iWu1Xs7SBzBuBtZT1DmClma98crSI/TG4LP4mkXHuS5ZzVpqeirYjkqeKSKqw9zI6hoaJGEkRybAO4Dw4W347FXekc8saZGhr7DUGm4DuYBtuFHUuZKSSUQtktI4XaxzXMLgObdQF1C4fmWd9ViMRDNNM28dgb3sT2t9+Cre2Xr7J8RC5o6OJJ63roHMZFIQZdyCCdpNIA3uPHiSrHmDL8k4p6VmllG23XAOIc5rB2I2gDgTxN16ZAxyWtoxPMG6i97eyLCzTtsSVnMmaW00sVNHGZqiX0YwQ0Afae7kNj7irXLO3r8I1ETmro+impy2n1CVtur6yV7mjhdvaJ0gjuHIL6xDAa+own6JKY/pALBq1ktc1jgQS7Te9h3clPQzYhqZrjpy0uAdoe+7BzI1Ns63dsozCMyvfWV0U2hsVMGkOANwLEuLjc3tbuUTLLXzryaj4y3T4pTQwU5gpiyMBrn9e6+m+5Derte3K6j8byxWnFW10LYXtaG2a+QsJIaWkGzTbirQ7MtGKdtSZm9S52lr97F1yLcL8QfcoXE82PhxRlK4sEDodZOkl2rtWAsd+A2skuW7ZCyaMxvqjhtYaiKKI9WdIikL7i2+olrbbqSyJ/cYvJaOacWp6nC6t0EjXgRuBtxB22cDuD5reyJ/cYvJVvolYERFVIiIgwiIgyiIoBERAXlPA14LXAEHkV6ogpGM9HFNKS5h0E8gNrrn2JdH9VFIG8Wl7Wh3LtG17eHFd3KrldVa5HXJAj1sIJAZazdRcePPjcWsQtePkyl8VW4yuDfo6Q9YWtLmRu0ueBsN9IK6kMDe6spZ3OYY6ePQWlpu4NDrbHYne+/ctfFq+jfSvgilZGLBgcGHT2SHWaBx9Hj4qJdjVSR2KjUT3Ux48B2tXcujLk7fpWY6XbOmCQ1cMUUcscLhIHsGnYuLSQHNb396jcOwKaXEIaydzLapg1sZJ7TLtF3OAJbsdh3eKgYscNRqgOmKQAF+oOv2d9bLO3se0W22HDgVK1eaGxUTJGFjZ4HyR6SdYLtJBdx7TXF1wfGyz65SaidxIU+TqmGGqpYXxOiqXOPWP1BzA4WIIAOv3hfWKZEeaKlp4ZQXU8nWXfcB5JJdwvp3OypX60sS/c/DP9SfrSxL9z8M/wBSv9rlV74uiYrl2okrYK1rog+FmnqjqIc46r2fbb0tjbktOkyhVNdWVAqGx1NT6OgEtjGq9rndx5XtsqP+tLEv3Pwz/UpDCs8Y5Um0ELJPERHT/mLrfzVbxcknnSe+NWGmyfWfSaSpkkjc6HaS75Hl973eHOGx39GwCkaHLEzKnEJi5mmqbZg3uDYjtbePJaMD8yOFyKRng69//EkLyrKnMsYuI6aT+Dc+5zgqflfG4nwn8h4FJRUgglc1zg97iW3t2jtxXhmXKrpqmKsp5RHURbdppc17RewcAbjid/FUCt6RcXhdoljZG7udEWn2XO61/wBaWJfufhn+pX+zyW9ojvj6Os0r68uaJI4GN9Yte95I7mgtFj5lQtJlWUT4g9z2BlW3Sy1yW7EXcPaqB+tLEv3Pwz/Un60sS/c/DP8AUk+n5J6aPuYrNNkmvdh7KEup7Rya2vu+7hdx3Gns+l4qdrsuT/pBldG6N2iIR9W4kX9IOOoA29Iclz0dKeI90J/7D/UvSLpQxJxDQ2D/ACO/qU3i5J5uiZ4rFXZYkpaPEqiV7TJUNJLWX0sGouAud3G7uNgrXkUf/Ci/hVHxLEsZqoHwvhj0SNsS2Mg247Ev2V/ylTPjpI2PFnAbhYZ3c8rxMIiKiRERBhERBlERQCIiAiIgwVRqvKtTPJ1ckpFOCTYbF5O5LrcVekU7FcgyXRN0/sgdP81MRYdC0WbG0ewLbRQOT9LODOhkjroLsIIDi3azh6LvyVLnhL3va1pLSCI7Dh1l5mtLvMrv2NYayogfC8Xa8EfIrhdbBJDKWCQNmjAidE4lhd1YAjkY70SS2xte978brs4M9zXwyznurKyApSso+sddgDZHC5jv6Tr2d1fO999BsRyuFdOijKgke6rnYbRu0xtcLdsek4g92wHjfuXTnyTHHdZTC26bmSOjZthPXNuTu2DkO4yW4n8PvXToIGsaGsaGtAsGgWAHgAvQBCvNz5Ms7uumYyeiGrM00EL3Ry1MbHt9JpO42vuvFudMMJsKyH/MuN9JH/6VT/E3/wBGroOfX4d+jyH9T1uhvVBunXr24ad7cb8uK1vDJMf2p39f0uFVTUlbFZ4jnjPDg4ewjgfJchz3kJ9HeaC74L733dHfhfvb4+9SHQtDP18rxqEGizvsmS7dNu8gauHeuuyxhzS1wBBFiDuCDxBUdrw56l2nUznl+XEVjz5l36DVFjR+yfd8Z8L7t8wdvKyri9HHKZTcc1mroV16OMvGomDnDsNsT+Q/NVKgpjI8NAvcj/YL9BZQwYUtO1tu0d3HxXL9Vya/GNeLH3TbGAAADgvpEXC3ERFIIiIMIiIMoiKAREQEREBERAREQCuWdMOXtm1jBuLMk8vVK6mtXEqJk0T4ni7XAg+1Xwy65bRZuafmZ8xLQ0724Hn4C/Md3cuv4DilTSBsDi6RzWt108rh1trC76Z/CZn4TuOF+S5fieFupqwwP9WRov3tLhY+5dpzrlT6eIrSaHRB5a7nrIbo9gLd/NdfPlLr4rLjl8pvCcZp6luqGQOtxbwc08w5p3afNb5K4TTYbWQTPne7q3077zzA3kAfsHOYTaWPntxBPNdEwDPtPK50NQ6OKVnrdY0xyD7Ub789jpO4uubPi1/Hy0mXy5Z0in/7Kp/jH/q1dkw7KGHBrHCkhvpablgO9h3rwODYPWSPeG088h3eWvDj3XOk+Csos0cgAPcArcnLuSTxpGOOraQwtaA1oDQOAAAA8gF92ULU5tw+M6X1cIPdrB/0Xth+YqOc6YaiJ57g8X93FY9b66X2rPTDh4koett2ontcD+F3ZcP5g+xcTX6D6Q7fo2qv/h/mLLh2XsNdPM1jRxNv9/Z8l2fT59eO2+zHkx3lF56Lct6nde8bN4eJ/wCfmuthaOCYc2nhZG0cB/Nb65Msrld1rJqCIiqkREUgiIgwiIgyiIoBERAREQEREBERAREQcz6X8v6o21cY7TNn2+zyPsKveX68VFNDMPXja7227Q9huFtV1K2WN0bxdrgWkeBVEyFWmjnlwuY2LXF8BPrMduWjx5/5u5a77Ya+FfSp7pCYP0dVHn1fH2hcu6N66jidMaqPWCGaf2Jltu6/AG3JdTz+0uw2pDQSer4AXPEcAFTOhelkY+p1se27Y7amkX3dwutOOycWStn5Rbcq4jh00kn0SHQ8NbrPUmO4JNhuBfcLmucccnr6/wCiteWQiUQtaDYE6tLnvA9Le+xXcLLkWcslVcNWayjYZGl/W6Ru5jwdR7PrNJ3277KvDce13/xOcunRsFyzSU0YjjhZsN3FoLnHmSTuvuXLdG6aOfqGCSM6muaNO9rb29LjzULhvSDSuYPpAkp5fWY+N/H8JDdwt+jzbBNK2OBssl76pBG5rGAC93PeAPYN1SzP3W8IjpcrdFB1QPamkYwDwB1u9nZA9q0ui3L2hn0h43Po+XeojFKg4tiQYzeCK7GnkQD+0f7SLDwC6rR07Y2NY0WDRZMrrHqiTzt7oiLNYREQERFIIiIMIiIMoiKAREQEREBERAREQEREBc96VsCc5jKyG4lh3Jbx0g3v5jiuhLyqYWvaWOFw4EEeBVscut2izah5K6RIp2iKqc2OYWAedmye31XeHuV/Fl+cc2YIaOpfCfRvdh72nh8vYvXBc319KAIpiWD/AKb+232A8PYQurL6eZTth7spya8V+ikK45D0t1YHaghce8Fzf5XK8azpXrnCzI4Y/GxcfZc2WX+Nmv8Acxdiq5442l8jmtaOLnEAD2lcmzvn01N6WjJER2fLaxeOYaOTf5lUjF8aqap2qoldJ3AnYfwtGw9ysvRxl76RMHOHZbYn8h+fuWl4pxY9svNV79rqOhdHWACngEjhZ7x7hyCuK+WNAAA4BfS5PVqIiICIiAiIpBERBhERBlERQCIiAiIgIiICIiAiIgIiIKF0s4AZ6cTsF3w3JtzYfS+fsXFV+pJow4FpFwQQR5r87ZxwQ0dW+K3ZJLmH8JOw9nBdv0vJ/rWPLj7oRERdrB70FMZHhoF7kf7D/niv0Hk/BRS07W+sd3HxXP8Aoty5rf17xs3h4n/n5rrgXmc/J3y/p1YY6jKIiwXEREBERAREUgiIgwiIgyiIoBERAREQEREBERAREQEREBUbpVwD6RS9axt5Iu1txLfWCvK+JGBwIO4IsrY5dbtFm/D8tKRwLD3TzNY0XuQP+eSkM74EaSsfGB2HnUzyPL2FXzoqy8Gt+kPHg38yu7m5p08e7DDD8l7wLDG08LYmjgN/NSCIvPdAiIgIiICIiAiIpBERBhERBlERQCIiAiIgIiICIiAiIgIiICIiCv5ryzHWhmrZzDcHwOxCl8PpGxRtjaNmiy2UUgiIoBERAREQERFIIiICIiDCIiDKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMIiIP/Z" },
  "Park Vale": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "PV", circleBg: "#FFFFFF", circleBorder: "#C0392B", imageUrl: "data:image/jpeg;base64,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" },
  "Clontarf FC": { primary: "#1B4FA0", secondary: "#F5A623", abbr: "CLO" },
  "Maynooth Town FC": { primary: "#1A6B2A", secondary: "#FFD700", abbr: "MAY" },
  "Maynooth": { primary: "#1A6B2A", secondary: "#FFD700", abbr: "MAY" },
  "Tolka Rovers AFC": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "TR" },
  "Tolka Rovers": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "TR" },
  "Tolka Rover": { primary: "#C0392B", secondary: "#FFFFFF", abbr: "TR" },
  "Lakelands FC": { primary: "#6B21A8", secondary: "#FFFFFF", abbr: "LAK" },
  "Beechwood FC": { primary: "#1A6B2A", secondary: "#FFFFFF", abbr: "BEE" },
};

function TeamBadge({ name, size = 40 }) {
  const badge = TEAM_BADGES[name];
  const safeId = (name || "unknown").replace(/[^a-zA-Z0-9]/g, "_");
  const circleId = `circle-clip-${safeId}`;

  if (!badge) {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" fill="#1e3d28" stroke="#2d5a3d" strokeWidth="1.5"/>
        <text x="20" y="25" textAnchor="middle" fontSize="9" fontWeight="800" fill="#86b598" fontFamily="system-ui">{(name||"").slice(0,3).toUpperCase()}</text>
      </svg>
    );
  }

  if (badge.imageUrl) {
    const bg = badge.circleBg || "#FFFFFF";
    const border = badge.circleBorder || "#2d5a3d";
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <defs>
          <clipPath id={circleId}>
            <circle cx="20" cy="20" r="18" />
          </clipPath>
        </defs>
        <circle cx="20" cy="20" r="19" fill={bg} stroke={border} strokeWidth="1.5"/>
        <image href={badge.imageUrl} x="2" y="2" width="36" height="36" clipPath={`url(#${circleId})`} preserveAspectRatio="xMidYMid meet" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19" fill={badge.primary} stroke={badge.secondary} strokeWidth="1.5" strokeOpacity="0.5"/>
      <text x="20" y="25" textAnchor="middle" fontSize={badge.abbr.length > 2 ? "9" : "11"} fontWeight="800" fill={badge.secondary} fontFamily="system-ui" letterSpacing="0.5">{badge.abbr}</text>
    </svg>
  );
}

function DrillPicker({ allDrills, selectedIds, focusColors, onToggle }) {
  const [filter, setFilter] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const categories = ["All", "Technical", "Attacking", "Defending", "Tactical", "Physical", "Set Pieces"];
  const filtered = allDrills.filter(d => {
    const matchCat = filter === "All" || d.category === filter;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 10, padding: 14 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
        {categories.map(c => (
          <button key={c} onClick={() => setFilter(c)} style={{ background: filter === c ? "#1e7a3e" : "#112318", border: `1px solid ${filter === c ? "#1e7a3e" : "#1e3d28"}`, color: filter === c ? "white" : "#4d7a5a", padding: "4px 12px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: 600 }}>{c}</button>
        ))}
      </div>
      <input type="text" placeholder="Search drills…" value={search} onChange={e => setSearch(e.target.value)} style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 8, padding: "7px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, outline: "none", width: "100%", marginBottom: 10 }} />
      <div style={{ maxHeight: 320, overflowY: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
        {filtered.map(d => {
          const selected = selectedIds.includes(d.id);
          const color = focusColors[d.category] || "#1e7a3e";
          return (
            <div key={d.id} onClick={() => onToggle(d.id)}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, cursor: "pointer", background: selected ? "#1a3d25" : "#112318", border: `1px solid ${selected ? "#1e7a3e" : "#1e3d28"}`, transition: "all 0.15s" }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${selected ? "#1e7a3e" : "#2d5a3d"}`, background: selected ? "#1e7a3e" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "white", transition: "all 0.15s" }}>
                {selected ? "✓" : ""}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#E8F5E9", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.name}</div>
                <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color }}>{d.category}</span>
                  <span style={{ fontSize: 10, color: "#4d7a5a" }}>·</span>
                  <span style={{ fontSize: 10, color: "#4d7a5a" }}>{d.duration} mins</span>
                  <span style={{ fontSize: 10, color: "#4d7a5a" }}>·</span>
                  <span style={{ fontSize: 10, color: "#4d7a5a" }}>{d.players}</span>
                </div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && <div style={{ textAlign: "center", color: "#4d7a5a", padding: "20px 0", fontSize: 12 }}>No drills match your search.</div>}
      </div>
    </div>
  );
}

function DrillsTab({ drills, focusColors }) {
  const [drillFilter, setDrillFilter] = React.useState("All");
  const [expandedId, setExpandedId] = React.useState(null);
  const categories = ["All", "Technical", "Attacking", "Defending", "Tactical", "Physical", "Set Pieces"];
  const filtered = drillFilter === "All" ? drills : drills.filter(d => d.category === drillFilter);
  const intensityColor = (i) => i === "Very High" ? "#EF4444" : i === "High" ? "#F59E0B" : i === "Low" ? "#3B82F6" : "#10B981";
  const intensityBg = (i) => intensityColor(i) + "22";

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {categories.map(c => (
          <button key={c} onClick={() => setDrillFilter(c)} style={{ background: drillFilter === c ? "#1e7a3e" : "#112318", border: `1px solid ${drillFilter === c ? "#1e7a3e" : "#1e3d28"}`, color: drillFilter === c ? "white" : "#86b598", padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 500, transition: "all 0.2s" }}>{c}</button>
        ))}
      </div>
      <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 12 }}>{filtered.length} drill{filtered.length !== 1 ? "s" : ""} — click any card to expand</div>
      <div style={{ display: "grid", gridTemplateColumns: expandedId ? "1fr" : "repeat(auto-fill,minmax(280px,1fr))", gap: 12 }}>
        {filtered.map(d => {
          const isExpanded = expandedId === d.id;
          const color = focusColors[d.category] || "#1e7a3e";
          return (
            <div key={d.id} onClick={() => setExpandedId(isExpanded ? null : d.id)}
              style={{ background: isExpanded ? "#1A2640" : "#112318", border: `1px solid ${isExpanded ? color + "66" : "#1e3d28"}`, borderRadius: 12, padding: 16, cursor: "pointer", transition: "all 0.2s" }}>
              {/* Header — always visible */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ padding: "2px 8px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: color + "22", color }}>{d.category}</span>
                  <span style={{ padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 700, background: intensityBg(d.intensity), color: intensityColor(d.intensity) }}>{d.intensity}</span>
                </div>
                <span style={{ color: "#4d7a5a", fontSize: 16, lineHeight: 1 }}>{isExpanded ? "▲" : "▼"}</span>
              </div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: "#f0faf1", marginBottom: 5 }}>{d.name}</div>
              <p style={{ fontSize: 12, color: "#4d7a5a", lineHeight: 1.5, marginBottom: 8 }}>{d.description}</p>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{ fontSize: 11, color: "#4d7a5a" }}>⏱ {d.duration} mins</span>
                <span style={{ fontSize: 11, color: "#4d7a5a" }}>👥 {d.players}</span>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div onClick={e => e.stopPropagation()} style={{ marginTop: 18, borderTop: "1px solid #1e3d28", paddingTop: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

                    {/* Coaching Points */}
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: color, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>🎯 Coaching Points</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {d.coachingPoints && d.coachingPoints.map((pt, i) => (
                          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 5 }} />
                            <span style={{ fontSize: 12, color: "#c8e6c9", lineHeight: 1.5 }}>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Organisation */}
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>📋 Organisation</div>
                      <p style={{ fontSize: 12, color: "#c8e6c9", lineHeight: 1.6 }}>{d.organisation}</p>
                    </div>
                  </div>

                  {/* Equipment */}
                  {d.equipment && (
                    <div style={{ marginTop: 16 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>🧰 Equipment</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {d.equipment.map((eq, i) => (
                          <span key={i} style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 6, padding: "4px 10px", fontSize: 11, color: "#86b598" }}>{eq}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── OPPOSITION PROFILES TAB ────────────────────────────────────────────────
const OPPOSITION_TEAMS = [
  "Ballyoulster United FC", "Cabinteely FC", "Clontarf FC",
  "Kilnamanagh AFC", "Maynooth Town FC", "Parkvale FC", "Tolka Rovers AFC",
];

const THREAT_LEVELS = ["Low", "Medium", "High", "Very High"];
const THREAT_COLORS = { Low: "#10B981", Medium: "#F59E0B", High: "#EF4444", "Very High": "#c9a84c" };
const OPP_FORMATIONS = ["4-3-3", "4-4-2", "4-2-3-1", "3-5-2", "4-1-4-1", "5-3-2", "3-4-3", "Other"];
const PLAY_STYLES = ["Possession", "Direct / Long Ball", "Counter-Attack", "High Press", "Low Block", "Gegenpressing", "Mixed"];
const OPP_STRENGTHS = ["Set pieces", "Pace in behind", "Strong physically", "Good pressing", "Technical quality", "Long throws", "Wide play", "Aerial threat", "Organised defensively", "Quick transitions"];
const OPP_WEAKNESSES = ["Weak on the ball", "Vulnerable to pace", "Poor set piece defence", "High defensive line", "Weak wide areas", "Slow to transition", "Vulnerable to press", "Aerial weakness", "Poor fitness", "Individual errors"];

function OppositionTab({ matches, leagueData, oppProfiles, setOppProfiles, oppBadges, saveOppBadges }) {
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({});

  const allTeams = OPPOSITION_TEAMS;
  const profile = (team) => oppProfiles[team] || {};

  const startEdit = (team) => {
    const p = profile(team);
    setDraft({
      formation: p.formation || "",
      playStyle: p.playStyle || "",
      threat: p.threat || "Medium",
      strengths: p.strengths || [],
      weaknesses: p.weaknesses || [],
      keyPlayers: p.keyPlayers || [{ name: "", position: "", notes: "" }],
      setPieces: p.setPieces || "",
      pressStrategy: p.pressStrategy || "",
      ourPlan: p.ourPlan || "",
      generalNotes: p.generalNotes || "",
    });
    setEditing(true);
  };

  const save = () => {
    setOppProfiles({ ...oppProfiles, [selected]: { ...draft } });
    setEditing(false);
  };

  const toggleArr = (field, val) => {
    setDraft(prev => {
      const arr = prev[field] || [];
      return { ...prev, [field]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] };
    });
  };

  const updateKeyPlayer = (i, field, val) => {
    setDraft(prev => {
      const kp = [...(prev.keyPlayers || [])];
      kp[i] = { ...kp[i], [field]: val };
      return { ...prev, keyPlayers: kp };
    });
  };

  const addKeyPlayer = () => setDraft(prev => ({ ...prev, keyPlayers: [...(prev.keyPlayers || []), { name: "", position: "", notes: "" }] }));
  const removeKeyPlayer = (i) => setDraft(prev => ({ ...prev, keyPlayers: prev.keyPlayers.filter((_, idx) => idx !== i) }));

  // H2H record from matches
  const h2h = (team) => {
    const ms = matches.filter(m => !m.cancelled && (m.opponent === team || m.opponent?.replace(" FC","") === team?.replace(" FC","") || team?.includes(m.opponent) || m.opponent?.includes(team?.split(" ")[0])));
    return { played: ms.length, wins: ms.filter(m => m.goalsFor > m.goalsAgainst).length, draws: ms.filter(m => m.goalsFor === m.goalsAgainst).length, losses: ms.filter(m => m.goalsFor < m.goalsAgainst).length, gf: ms.reduce((s,m)=>s+m.goalsFor,0), ga: ms.reduce((s,m)=>s+m.goalsAgainst,0), matches: ms };
  };

  const p = selected ? profile(selected) : null;
  const rec = selected ? h2h(selected) : null;

  const inputStyle = { background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 8, padding: "8px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 13, outline: "none", width: "100%" };
  const textareaStyle = { ...inputStyle, resize: "vertical", lineHeight: 1.6 };
  const labelStyle = { fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 6, display: "block" };
  const sectionStyle = { marginBottom: 20 };

  return (
    <div style={{ display: "grid", gridTemplateColumns: selected ? "240px 1fr" : "repeat(auto-fill, minmax(220px,1fr))", gap: 14, alignItems: "start" }}>
      {/* Team list */}
      <div>
        {selected && <button onClick={() => { setSelected(null); setEditing(false); }} style={{ background: "none", border: "none", color: "#4d7a5a", cursor: "pointer", fontSize: 13, padding: "4px 0", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>← All Teams</button>}
        {!selected ? (
          allTeams.map(team => {
            const p = profile(team);
            const r = h2h(team);
            const hasProfile = !!p.formation || !!p.generalNotes || (p.keyPlayers?.length > 0 && p.keyPlayers[0]?.name);
            return (
              <div key={team} onClick={() => { setSelected(team); setEditing(false); }}
                style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16, cursor: "pointer", marginBottom: 10, transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#1e7a3e"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1e3d28"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, color: "#f0faf1", flex: 1, paddingRight: 8 }}>{team}</div>
                  {p.threat && <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: (THREAT_COLORS[p.threat]||"#1e7a3e")+"22", color: THREAT_COLORS[p.threat]||"#1e7a3e", flexShrink: 0 }}>{p.threat}</span>}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  {p.formation && <span style={{ fontSize: 11, color: "#1e7a3e", background: "#1e7a3e22", padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>{p.formation}</span>}
                  {p.playStyle && <span style={{ fontSize: 11, color: "#4d7a5a" }}>{p.playStyle}</span>}
                </div>
                {r.played > 0 && (
                  <div style={{ display: "flex", gap: 6, fontSize: 11 }}>
                    <span style={{ color: "#10B981", fontWeight: 700 }}>{r.wins}W</span>
                    <span style={{ color: "#F59E0B", fontWeight: 700 }}>{r.draws}D</span>
                    <span style={{ color: "#EF4444", fontWeight: 700 }}>{r.losses}L</span>
                    <span style={{ color: "#4d7a5a" }}>({r.gf}–{r.ga})</span>
                  </div>
                )}
                {!hasProfile && r.played === 0 && <div style={{ fontSize: 11, color: "#2d5a3d", fontStyle: "italic" }}>No profile yet</div>}
              </div>
            );
          })
        ) : (
          allTeams.map(team => {
            const p = profile(team);
            const isSelected = team === selected;
            return (
              <div key={team} onClick={() => { setSelected(team); setEditing(false); }}
                style={{ padding: "10px 14px", borderRadius: 8, cursor: "pointer", background: isSelected ? "#1a3d25" : "transparent", borderLeft: `3px solid ${isSelected ? "#1e7a3e" : "transparent"}`, marginBottom: 2 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: isSelected ? "#E8F5E9" : "#4d7a5a" }}>{team.replace(" FC","").replace(" AFC","")}</div>
                {p.threat && <span style={{ fontSize: 10, fontWeight: 700, color: THREAT_COLORS[p.threat]||"#1e7a3e" }}>{p.threat}</span>}
              </div>
            );
          })
        )}
      </div>

      {/* Detail / Edit panel */}
      {selected && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Header */}
          <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 10, background: "#0a1a0f", border: "1px solid #1e3d28", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                  {oppBadges[selected] ? <img src={oppBadges[selected]} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <span style={{ fontSize: 26 }}>🛡️</span>}
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#f0faf1", marginBottom: 6 }}>{selected}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p?.formation && <span style={{ background: "#1e7a3e22", color: "#4ade80", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{p.formation}</span>}
                    {p?.playStyle && <span style={{ background: "#0a1a0f", color: "#4d7a5a", padding: "3px 10px", borderRadius: 20, fontSize: 12, border: "1px solid #1e3d28" }}>{p.playStyle}</span>}
                    {p?.threat && <span style={{ background: (THREAT_COLORS[p.threat]||"#1e7a3e")+"22", color: THREAT_COLORS[p.threat]||"#1e7a3e", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>⚠ {p.threat} threat</span>}
                  </div>
                </div>
              </div>
              <button onClick={() => startEdit(selected)} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600 }}>
                {p?.formation || p?.generalNotes ? "✏️ Edit" : "+ Add Profile"}
              </button>
            </div>
          </div>

          {/* H2H record */}
          {rec && rec.played > 0 && (
            <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Head-to-Head Record</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginBottom: 14 }}>
                {[["Played", rec.played, "#4d7a5a"], ["Won", rec.wins, "#10B981"], ["Drawn", rec.draws, "#F59E0B"], ["Lost", rec.losses, "#EF4444"], ["Goals", `${rec.gf}–${rec.ga}`, "#1e7a3e"]].map(([l, v, c]) => (
                  <div key={l} style={{ textAlign: "center", background: "#0a1a0f", borderRadius: 8, padding: "10px 4px" }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: c }}>{v}</div>
                    <div style={{ fontSize: 10, color: "#4d7a5a", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
              {rec.matches.map(m => {
                const r = m.goalsFor > m.goalsAgainst ? "W" : m.goalsFor < m.goalsAgainst ? "L" : "D";
                const c = r === "W" ? "#10B981" : r === "L" ? "#EF4444" : "#F59E0B";
                return (
                  <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderTop: "1px solid #0a1a0f" }}>
                    <span style={{ width: 22, height: 22, borderRadius: 5, background: c+"22", color: c, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{r}</span>
                    <span style={{ fontSize: 12, color: "#86b598", flex: 1 }}>{new Date(m.date).toLocaleDateString("en-IE", { day: "numeric", month: "short", year: "numeric" })} · {m.venue}</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#E8F5E9" }}>{m.goalsFor}–{m.goalsAgainst}</span>
                  </div>
                );
              })}
            </div>
          )}

          {editing ? (
            <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#f0faf1", marginBottom: 18 }}>Edit Profile — {selected}</div>

              {/* Badge upload */}
              <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: 10, background: "#0a1a0f", border: "1px solid #1e3d28", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                  {oppBadges[selected] ? <img src={oppBadges[selected]} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <span style={{ fontSize: 22 }}>🛡️</span>}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#86b598", marginBottom: 6 }}>Team Badge</div>
                  <label style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "6px 14px", borderRadius: 7, cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>
                    Upload Badge
                    <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
                      const file = e.target.files[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = ev => saveOppBadges({ ...oppBadges, [selected]: ev.target.result });
                      reader.readAsDataURL(file);
                    }} />
                  </label>
                  {oppBadges[selected] && <button onClick={() => saveOppBadges({ ...oppBadges, [selected]: null })} style={{ marginLeft: 8, background: "none", border: "none", color: "#EF444466", cursor: "pointer", fontSize: 12 }}>Remove</button>}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
                <div style={sectionStyle}>
                  <label style={labelStyle}>Formation</label>
                  <select value={draft.formation} onChange={e => setDraft(p => ({ ...p, formation: e.target.value }))} style={{ ...inputStyle }}>
                    <option value="">Unknown</option>
                    {OPP_FORMATIONS.map(f => <option key={f}>{f}</option>)}
                  </select>
                </div>
                <div style={sectionStyle}>
                  <label style={labelStyle}>Play Style</label>
                  <select value={draft.playStyle} onChange={e => setDraft(p => ({ ...p, playStyle: e.target.value }))} style={{ ...inputStyle }}>
                    <option value="">Unknown</option>
                    {PLAY_STYLES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div style={sectionStyle}>
                  <label style={labelStyle}>Threat Level</label>
                  <select value={draft.threat} onChange={e => setDraft(p => ({ ...p, threat: e.target.value }))} style={{ ...inputStyle }}>
                    {THREAT_LEVELS.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Their Strengths</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {OPP_STRENGTHS.map(s => {
                      const on = (draft.strengths||[]).includes(s);
                      return <button key={s} onClick={() => toggleArr("strengths", s)} style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${on ? "#EF4444" : "#1e3d28"}`, background: on ? "#EF444422" : "#0a1a0f", color: on ? "#EF4444" : "#4d7a5a", fontFamily: "inherit", fontSize: 11, cursor: "pointer", fontWeight: on ? 700 : 400 }}>{s}</button>;
                    })}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Their Weaknesses</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {OPP_WEAKNESSES.map(s => {
                      const on = (draft.weaknesses||[]).includes(s);
                      return <button key={s} onClick={() => toggleArr("weaknesses", s)} style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${on ? "#10B981" : "#1e3d28"}`, background: on ? "#10B98122" : "#0a1a0f", color: on ? "#10B981" : "#4d7a5a", fontFamily: "inherit", fontSize: 11, cursor: "pointer", fontWeight: on ? 700 : 400 }}>{s}</button>;
                    })}
                  </div>
                </div>
              </div>

              {/* Key Players */}
              <div style={sectionStyle}>
                <label style={labelStyle}>Key Players to Watch</label>
                {(draft.keyPlayers||[]).map((kp, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 1fr 32px", gap: 8, marginBottom: 8, alignItems: "center" }}>
                    <input type="text" placeholder="Player name" value={kp.name} onChange={e => updateKeyPlayer(i, "name", e.target.value)} style={inputStyle} />
                    <input type="text" placeholder="Position" value={kp.position} onChange={e => updateKeyPlayer(i, "position", e.target.value)} style={inputStyle} />
                    <input type="text" placeholder="Notes (e.g. fast, good on left)" value={kp.notes} onChange={e => updateKeyPlayer(i, "notes", e.target.value)} style={inputStyle} />
                    <button onClick={() => removeKeyPlayer(i)} style={{ background: "#0a1a0f", border: "1px solid #2d5a3d", color: "#EF4444", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 16, width: 32, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
                  </div>
                ))}
                <button onClick={addKeyPlayer} style={{ background: "none", border: "1px dashed #2d5a3d", color: "#4d7a5a", padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 12, marginTop: 4 }}>+ Add player</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Set Piece Threats</label>
                  <textarea rows={3} value={draft.setPieces} onChange={e => setDraft(p => ({ ...p, setPieces: e.target.value }))} placeholder="e.g. Strong at corners — tall striker at back post. Free kicks from right side." style={textareaStyle}
                    onFocus={e => e.target.style.borderColor = "#1e7a3e"} onBlur={e => e.target.style.borderColor = "#1e3d28"} />
                </div>
                <div>
                  <label style={labelStyle}>How They Press</label>
                  <textarea rows={3} value={draft.pressStrategy} onChange={e => setDraft(p => ({ ...p, pressStrategy: e.target.value }))} placeholder="e.g. High press from front 3. Trigger is goalkeeper with ball." style={textareaStyle}
                    onFocus={e => e.target.style.borderColor = "#1e7a3e"} onBlur={e => e.target.style.borderColor = "#1e3d28"} />
                </div>
              </div>

              <div style={sectionStyle}>
                <label style={labelStyle}>Our Game Plan vs {selected.split(" ")[0]}</label>
                <textarea rows={4} value={draft.ourPlan} onChange={e => setDraft(p => ({ ...p, ourPlan: e.target.value }))} placeholder="e.g. Press high, exploit their slow CB on the right. Use Lauren's pace in behind. Set piece routine A..." style={textareaStyle}
                  onFocus={e => e.target.style.borderColor = "#1e7a3e"} onBlur={e => e.target.style.borderColor = "#1e3d28"} />
              </div>

              <div style={sectionStyle}>
                <label style={labelStyle}>General Notes</label>
                <textarea rows={3} value={draft.generalNotes} onChange={e => setDraft(p => ({ ...p, generalNotes: e.target.value }))} placeholder="Any other scouting notes, observations from watching them play..." style={textareaStyle}
                  onFocus={e => e.target.style.borderColor = "#1e7a3e"} onBlur={e => e.target.style.borderColor = "#1e3d28"} />
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={save} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "9px 22px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 700 }}>Save Profile</button>
                <button onClick={() => setEditing(false)} style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "9px 18px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>Cancel</button>
              </div>
            </div>
          ) : p?.formation || p?.generalNotes || (p?.keyPlayers?.length > 0 && p?.keyPlayers[0]?.name) ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Overview row */}
              {(p.strengths?.length > 0 || p.weaknesses?.length > 0) && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {p.strengths?.length > 0 && (
                    <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>⚠ Their Strengths</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.strengths.map(s => <span key={s} style={{ background: "#EF444422", color: "#EF4444", border: "1px solid #EF444444", padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{s}</span>)}
                      </div>
                    </div>
                  )}
                  {p.weaknesses?.length > 0 && (
                    <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>✓ Their Weaknesses</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.weaknesses.map(s => <span key={s} style={{ background: "#10B98122", color: "#10B981", border: "1px solid #10B98144", padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{s}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* Key players */}
              {p.keyPlayers?.some(k => k.name) && (
                <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>🔍 Key Players to Watch</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {p.keyPlayers.filter(k => k.name).map((kp, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "#0a1a0f", borderRadius: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F59E0B22", border: "1.5px solid #F59E0B44", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "#F59E0B", flexShrink: 0 }}>{kp.position || "?"}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#E8F5E9" }}>{kp.name}</div>
                          {kp.notes && <div style={{ fontSize: 11, color: "#4d7a5a", marginTop: 2 }}>{kp.notes}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Set pieces & press */}
              {(p.setPieces || p.pressStrategy) && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {p.setPieces && (
                    <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>🚩 Set Piece Threats</div>
                      <p style={{ fontSize: 13, color: "#86b598", lineHeight: 1.6 }}>{p.setPieces}</p>
                    </div>
                  )}
                  {p.pressStrategy && (
                    <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#06B6D4", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>🔄 How They Press</div>
                      <p style={{ fontSize: 13, color: "#86b598", lineHeight: 1.6 }}>{p.pressStrategy}</p>
                    </div>
                  )}
                </div>
              )}
              {/* Game plan */}
              {p.ourPlan && (
                <div style={{ background: "#1a3d25", border: "1px solid #1e7a3e44", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1e7a3e", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>📋 Our Game Plan</div>
                  <p style={{ fontSize: 13, color: "#c8e6c9", lineHeight: 1.7 }}>{p.ourPlan}</p>
                </div>
              )}
              {/* General notes */}
              {p.generalNotes && (
                <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>📝 General Notes</div>
                  <p style={{ fontSize: 13, color: "#86b598", lineHeight: 1.7 }}>{p.generalNotes}</p>
                </div>
              )}
            </div>
          ) : (
            <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#4d7a5a", marginBottom: 6 }}>No profile yet</div>
              <div style={{ fontSize: 13, color: "#2d5a3d", marginBottom: 16 }}>Start building a scouting profile for {selected}</div>
              <button onClick={() => startEdit(selected)} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "9px 22px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600 }}>+ Add Profile</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── FORMATION TAB ──────────────────────────────────────────────────────────
const PRESET_FORMATIONS = {
  "4-3-3": [
    { key: "GK",   label: "GK",  x: 50, y: 88 },
    { key: "RB",   label: "RB",  x: 82, y: 72 },
    { key: "CB1",  label: "CB",  x: 62, y: 72 },
    { key: "CB2",  label: "CB",  x: 38, y: 72 },
    { key: "LB",   label: "LB",  x: 18, y: 72 },
    { key: "CM1",  label: "CM",  x: 70, y: 50 },
    { key: "CM2",  label: "CM",  x: 50, y: 48 },
    { key: "CM3",  label: "CM",  x: 30, y: 50 },
    { key: "RW",   label: "RW",  x: 80, y: 26 },
    { key: "ST",   label: "ST",  x: 50, y: 20 },
    { key: "LW",   label: "LW",  x: 20, y: 26 },
  ],
  "4-4-2": [
    { key: "GK",   label: "GK",  x: 50, y: 88 },
    { key: "RB",   label: "RB",  x: 82, y: 72 },
    { key: "CB1",  label: "CB",  x: 62, y: 72 },
    { key: "CB2",  label: "CB",  x: 38, y: 72 },
    { key: "LB",   label: "LB",  x: 18, y: 72 },
    { key: "RM",   label: "RM",  x: 82, y: 50 },
    { key: "CM1",  label: "CM",  x: 60, y: 50 },
    { key: "CM2",  label: "CM",  x: 40, y: 50 },
    { key: "LM",   label: "LM",  x: 18, y: 50 },
    { key: "ST1",  label: "ST",  x: 62, y: 22 },
    { key: "ST2",  label: "ST",  x: 38, y: 22 },
  ],
  "4-2-3-1": [
    { key: "GK",   label: "GK",  x: 50, y: 88 },
    { key: "RB",   label: "RB",  x: 82, y: 72 },
    { key: "CB1",  label: "CB",  x: 62, y: 72 },
    { key: "CB2",  label: "CB",  x: 38, y: 72 },
    { key: "LB",   label: "LB",  x: 18, y: 72 },
    { key: "CDM1", label: "CDM", x: 60, y: 57 },
    { key: "CDM2", label: "CDM", x: 40, y: 57 },
    { key: "RAM",  label: "AM",  x: 76, y: 38 },
    { key: "CAM",  label: "CAM", x: 50, y: 36 },
    { key: "LAM",  label: "AM",  x: 24, y: 38 },
    { key: "ST",   label: "ST",  x: 50, y: 18 },
  ],
  "3-5-2": [
    { key: "GK",   label: "GK",  x: 50, y: 88 },
    { key: "CB1",  label: "CB",  x: 68, y: 72 },
    { key: "CB2",  label: "CB",  x: 50, y: 74 },
    { key: "CB3",  label: "CB",  x: 32, y: 72 },
    { key: "RM",   label: "RM",  x: 88, y: 50 },
    { key: "CM1",  label: "CM",  x: 66, y: 50 },
    { key: "CM2",  label: "CM",  x: 50, y: 47 },
    { key: "CM3",  label: "CM",  x: 34, y: 50 },
    { key: "LM",   label: "LM",  x: 12, y: 50 },
    { key: "ST1",  label: "ST",  x: 62, y: 22 },
    { key: "ST2",  label: "ST",  x: 38, y: 22 },
  ],
  "4-1-4-1": [
    { key: "GK",   label: "GK",  x: 50, y: 88 },
    { key: "RB",   label: "RB",  x: 82, y: 72 },
    { key: "CB1",  label: "CB",  x: 62, y: 72 },
    { key: "CB2",  label: "CB",  x: 38, y: 72 },
    { key: "LB",   label: "LB",  x: 18, y: 72 },
    { key: "CDM",  label: "CDM", x: 50, y: 58 },
    { key: "RM",   label: "RM",  x: 82, y: 44 },
    { key: "CM1",  label: "CM",  x: 62, y: 44 },
    { key: "CM2",  label: "CM",  x: 38, y: 44 },
    { key: "LM",   label: "LM",  x: 18, y: 44 },
    { key: "ST",   label: "ST",  x: 50, y: 20 },
  ],
  "3-4-3": [
    { key: "GK",   label: "GK",  x: 50, y: 88 },
    { key: "CB1",  label: "CB",  x: 68, y: 73 },
    { key: "CB2",  label: "CB",  x: 50, y: 75 },
    { key: "CB3",  label: "CB",  x: 32, y: 73 },
    { key: "RM",   label: "RM",  x: 80, y: 52 },
    { key: "CM1",  label: "CM",  x: 60, y: 50 },
    { key: "CM2",  label: "CM",  x: 40, y: 50 },
    { key: "LM",   label: "LM",  x: 20, y: 52 },
    { key: "RW",   label: "RW",  x: 78, y: 24 },
    { key: "ST",   label: "ST",  x: 50, y: 20 },
    { key: "LW",   label: "LW",  x: 22, y: 24 },
  ],
};

const POSITION_LABELS = ["GK","CB","RB","LB","CDM","CM","CAM","RM","LM","RW","LW","ST","AM","WB"];

function FormationTab({ players, positionColors }) {
  const [activeFormation, setActiveFormation] = useState("4-3-3");
  const [customFormations, setCustomFormations] = useState({});
  const [assignments, setAssignments] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null); // key of slot waiting for player
  const [savedLineups, setSavedLineups] = useState([]);
  const [lineupName, setLineupName] = useState("");
  const [showSave, setShowSave] = useState(false);
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [newFormationName, setNewFormationName] = useState("");
  const [builderSlots, setBuilderSlots] = useState([]);
  const [builderDraft, setBuilderDraft] = useState({ label: "GK", x: 50, y: 50 });

  const allFormations = { ...PRESET_FORMATIONS, ...customFormations };
  const slots = allFormations[activeFormation] || [];
  const assignedIds = Object.values(assignments).filter(Boolean);

  // Click a slot → select it; click again or click a player → assign
  const handleSlotClick = (slotKey) => {
    setSelectedSlot(prev => prev === slotKey ? null : slotKey);
  };

  const handlePlayerClick = (pid) => {
    if (!selectedSlot) return;
    setAssignments(prev => {
      const next = { ...prev };
      // Remove this player from any other slot
      Object.keys(next).forEach(k => { if (next[k] === pid) delete next[k]; });
      next[selectedSlot] = pid;
      return next;
    });
    setSelectedSlot(null);
  };

  const removeFromSlot = (slotKey, e) => {
    e.stopPropagation();
    setAssignments(prev => { const n = { ...prev }; delete n[slotKey]; return n; });
    if (selectedSlot === slotKey) setSelectedSlot(null);
  };

  const resetAll = () => { setAssignments({}); setSelectedSlot(null); };

  const saveLineup = () => {
    if (!lineupName.trim()) return;
    setSavedLineups(prev => [...prev, { name: lineupName, formation: activeFormation, assignments: { ...assignments } }]);
    setLineupName("");
    setShowSave(false);
  };

  const loadLineup = (lu) => {
    setActiveFormation(lu.formation);
    setAssignments(lu.assignments);
    setSelectedSlot(null);
  };

  const addBuilderSlot = () => {
    const key = `${builderDraft.label}${builderSlots.length + 1}`;
    setBuilderSlots(prev => [...prev, { key, label: builderDraft.label, x: parseInt(builderDraft.x), y: parseInt(builderDraft.y) }]);
  };

  const saveCustomFormation = () => {
    if (!newFormationName.trim() || builderSlots.length === 0) return;
    setCustomFormations(prev => ({ ...prev, [newFormationName]: builderSlots }));
    setActiveFormation(newFormationName);
    setAssignments({});
    setBuilderSlots([]);
    setNewFormationName("");
    setShowCustomBuilder(false);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 16, alignItems: "start" }}>
      {/* Left: pitch */}
      <div>
        {/* Formation tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
          {Object.keys(allFormations).map(f => (
            <button key={f} onClick={() => { setActiveFormation(f); setAssignments({}); setSelectedSlot(null); }}
              style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${activeFormation === f ? "#1e7a3e" : "#1e3d28"}`, background: activeFormation === f ? "#1e7a3e22" : "#112318", color: activeFormation === f ? "#4ade80" : "#4d7a5a", fontFamily: "inherit", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              {f}
            </button>
          ))}
          <button onClick={() => setShowCustomBuilder(p => !p)}
            style={{ padding: "6px 14px", borderRadius: 8, border: "1px dashed #2d5a3d", background: "#112318", color: "#4d7a5a", fontFamily: "inherit", fontSize: 12, cursor: "pointer" }}>
            + Custom
          </button>
          <button onClick={resetAll} style={{ marginLeft: "auto", padding: "6px 12px", borderRadius: 8, border: "1px solid #1e3d28", background: "#112318", color: "#4d7a5a", fontFamily: "inherit", fontSize: 12, cursor: "pointer" }}>Reset</button>
        </div>

        {/* Custom formation builder */}
        {showCustomBuilder && (
          <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 10, padding: 16, marginBottom: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#86b598", marginBottom: 12 }}>Build Custom Formation</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px auto", gap: 8, marginBottom: 10, alignItems: "end" }}>
              <div>
                <div style={{ fontSize: 10, color: "#4d7a5a", marginBottom: 4 }}>Position Label</div>
                <select value={builderDraft.label} onChange={e => setBuilderDraft(p => ({ ...p, label: e.target.value }))}
                  style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 7, padding: "7px 10px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, width: "100%" }}>
                  {POSITION_LABELS.map(l => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#4d7a5a", marginBottom: 4 }}>Left % (0–100)</div>
                <input type="number" min="5" max="95" value={builderDraft.x} onChange={e => setBuilderDraft(p => ({ ...p, x: e.target.value }))}
                  style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 7, padding: "7px 10px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, width: "100%" }} />
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#4d7a5a", marginBottom: 4 }}>Top % (0–100)</div>
                <input type="number" min="5" max="95" value={builderDraft.y} onChange={e => setBuilderDraft(p => ({ ...p, y: e.target.value }))}
                  style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 7, padding: "7px 10px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, width: "100%" }} />
              </div>
              <button onClick={addBuilderSlot} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "7px 14px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 700 }}>+ Add</button>
            </div>
            {builderSlots.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                {builderSlots.map((s, i) => (
                  <span key={i} style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "#86b598", display: "flex", alignItems: "center", gap: 6 }}>
                    {s.label} ({s.x},{s.y})
                    <button onClick={() => setBuilderSlots(p => p.filter((_,idx) => idx !== i))} style={{ background: "none", border: "none", color: "#EF4444", cursor: "pointer", fontSize: 13, lineHeight: 1 }}>×</button>
                  </span>
                ))}
              </div>
            )}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="text" placeholder="Formation name (e.g. 4-3-2-1)" value={newFormationName} onChange={e => setNewFormationName(e.target.value)}
                style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 7, padding: "7px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, flex: 1 }} />
              <button onClick={saveCustomFormation} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "7px 16px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 700 }}>Save Formation</button>
              <button onClick={() => setShowCustomBuilder(false)} style={{ background: "#112318", border: "1px solid #1e3d28", color: "#4d7a5a", padding: "7px 12px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12 }}>Cancel</button>
            </div>
          </div>
        )}

        {/* Instruction */}
        <div style={{ fontSize: 12, color: "#4d7a5a", marginBottom: 10 }}>
          {selectedSlot
            ? <span style={{ color: "#c9a84c", fontWeight: 700 }}>👆 Now click a player on the right to place them in <strong>{slots.find(s=>s.key===selectedSlot)?.label}</strong></span>
            : "Click a position on the pitch to select it, then click a player to assign them."}
        </div>

        {/* Pitch */}
        <div style={{ position: "relative", width: "100%", paddingBottom: "130%", background: "linear-gradient(180deg, #0a2e1a 0%, #0d3b20 45%, #0a2e1a 100%)", borderRadius: 12, border: `2px solid ${selectedSlot ? "#c9a84c44" : "#1e3d28"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 100 130" preserveAspectRatio="none">
            <rect x="5" y="4" width="90" height="122" fill="none" stroke="#ffffff18" strokeWidth="0.5" />
            <line x1="5" y1="65" x2="95" y2="65" stroke="#ffffff18" strokeWidth="0.5" />
            <circle cx="50" cy="65" r="10" fill="none" stroke="#ffffff18" strokeWidth="0.5" />
            <rect x="22" y="4" width="56" height="18" fill="none" stroke="#ffffff18" strokeWidth="0.5" />
            <rect x="34" y="4" width="32" height="9" fill="none" stroke="#ffffff18" strokeWidth="0.5" />
            <rect x="22" y="108" width="56" height="18" fill="none" stroke="#ffffff18" strokeWidth="0.5" />
            <rect x="34" y="117" width="32" height="9" fill="none" stroke="#ffffff18" strokeWidth="0.5" />
            <circle cx="50" cy="10" r="1.2" fill="#ffffff22" />
            <circle cx="50" cy="120" r="1.2" fill="#ffffff22" />
          </svg>
          {slots.map(slot => {
            const pid = assignments[slot.key];
            const player = pid ? players.find(p => p.id === pid) : null;
            const color = player ? (positionColors[player.position] || "#1e7a3e") : "#2d5a3d";
            const isSelected = selectedSlot === slot.key;
            return (
              <div key={slot.key}
                onClick={() => handleSlotClick(slot.key)}
                style={{ position: "absolute", left: `${slot.x}%`, top: `${slot.y}%`, transform: "translate(-50%,-50%)", zIndex: 2, cursor: "pointer" }}>
                <div style={{
                  width: 54, height: 54, borderRadius: "50%",
                  background: player ? color + "33" : isSelected ? "#c9a84c22" : "#0a1a0f88",
                  border: `2px solid ${isSelected ? "#c9a84c" : player ? color : "#2d5a3d"}`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                  boxShadow: isSelected ? "0 0 14px #c9a84c66" : player ? `0 0 10px ${color}44` : "none"
                }}>
                  {player ? (
                    <>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "white", lineHeight: 1 }}>{player.number}</div>
                      <div style={{ fontSize: 8, fontWeight: 700, color: "#c8e6c9", marginTop: 1, maxWidth: 46, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{player.name.split(" ")[0]}</div>
                    </>
                  ) : (
                    <div style={{ fontSize: 10, fontWeight: 700, color: isSelected ? "#c9a84c" : "#4d7a5a", textAlign: "center" }}>{slot.label}</div>
                  )}
                </div>
                {player && (
                  <button onClick={e => removeFromSlot(slot.key, e)}
                    style={{ position: "absolute", top: -3, right: -3, width: 16, height: 16, borderRadius: "50%", background: "#EF4444", border: "2px solid #0a2e1a", color: "white", fontSize: 9, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, zIndex: 3 }}>×</button>
                )}
              </div>
            );
          })}
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", fontSize: 12, fontWeight: 700, color: "#ffffff33", letterSpacing: 2 }}>{activeFormation}</div>
        </div>

        {/* Save lineup */}
        <div style={{ marginTop: 12 }}>
          {showSave ? (
            <div style={{ display: "flex", gap: 8 }}>
              <input type="text" placeholder="Lineup name (e.g. vs Tolka — Apr 26)" value={lineupName} onChange={e => setLineupName(e.target.value)}
                style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 7, padding: "7px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, flex: 1 }} />
              <button onClick={saveLineup} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "7px 16px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 700 }}>Save</button>
              <button onClick={() => setShowSave(false)} style={{ background: "#112318", border: "1px solid #1e3d28", color: "#4d7a5a", padding: "7px 12px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12 }}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => setShowSave(true)} style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "7px 18px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 600 }}>💾 Save Lineup</button>
          )}
        </div>
      </div>

      {/* Right: squad list + saved lineups */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>
            Squad {selectedSlot ? <span style={{ color: "#c9a84c" }}>— pick a player</span> : "— click pitch slot first"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {players.map(p => {
              const isOnPitch = assignedIds.includes(p.id);
              const color = positionColors[p.position] || "#1e7a3e";
              const isClickable = !!selectedSlot && !isOnPitch;
              return (
                <div key={p.id}
                  onClick={() => isClickable && handlePlayerClick(p.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8,
                    background: isOnPitch ? "#0a2e1a" : isClickable ? "#1a3d25" : "#112318",
                    border: `1px solid ${isClickable ? "#1e7a3e" : isOnPitch ? "#10B98133" : "#1e3d28"}`,
                    opacity: isOnPitch ? 0.45 : 1,
                    cursor: isClickable ? "pointer" : "default",
                    transition: "all 0.15s",
                    boxShadow: isClickable ? "0 0 0 1px #1e7a3e22" : "none"
                  }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: color + "22", border: `1.5px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color, flexShrink: 0 }}>{p.number}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: isOnPitch ? "#4d7a5a" : "#E8F5E9", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: "#4d7a5a" }}>{p.position}</div>
                  </div>
                  {isOnPitch && <span style={{ fontSize: 10, color: "#10B981", fontWeight: 700, flexShrink: 0 }}>ON</span>}
                  {isClickable && <span style={{ fontSize: 16, color: "#1e7a3e", flexShrink: 0 }}>→</span>}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 10, padding: "8px 12px", background: "#0a1a0f", borderRadius: 8, border: "1px solid #1e3d28", fontSize: 11, color: "#4d7a5a" }}>
            <span style={{ color: "#1e7a3e", fontWeight: 700 }}>{assignedIds.length}</span> / 11 placed
          </div>
        </div>

        {/* Saved lineups */}
        {savedLineups.length > 0 && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>Saved Lineups</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {savedLineups.map((lu, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "#112318", border: "1px solid #1e3d28", borderRadius: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#E8F5E9", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{lu.name}</div>
                    <div style={{ fontSize: 10, color: "#4d7a5a" }}>{lu.formation}</div>
                  </div>
                  <button onClick={() => loadLineup(lu)} style={{ background: "#1e7a3e22", border: "1px solid #1e7a3e44", color: "#4ade80", padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: 600 }}>Load</button>
                  <button onClick={() => setSavedLineups(p => p.filter((_,idx) => idx !== i))} style={{ background: "none", border: "none", color: "#EF444488", cursor: "pointer", fontSize: 14 }}>×</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── PLAYER COMPARISON TAB ──────────────────────────────────────────────────
function CompareTab({ players, matches, positionColors, focusColors, playerSeasonStats }) {
  const [pA, setPa] = useState(null);
  const [pB, setPb] = useState(null);

  const statsA = pA ? playerSeasonStats(pA.id) : null;
  const statsB = pB ? playerSeasonStats(pB.id) : null;

  const devKeys = ["technical", "physical", "tactical", "mental"];
  const statKeys = [
    { label: "Apps",    fn: s => parseFloat(s.apps) || 0 },
    { label: "Goals",   fn: s => parseFloat(s.goals) || 0 },
    { label: "Assists", fn: s => parseFloat(s.assists) || 0 },
    { label: "Avg Rtg", fn: s => parseFloat(s.avgRating) || 0, maxVal: 10 },
  ];

  const Bar = ({ valA, valB, maxVal, label, colorA, colorB }) => {
    const mx = maxVal || Math.max(valA, valB, 1);
    const pctA = Math.round((valA / mx) * 100);
    const pctB = Math.round((valB / mx) * 100);
    return (
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: colorA || "#1e7a3e" }}>{valA}</span>
          <span style={{ fontSize: 11, color: "#4d7a5a", fontWeight: 600 }}>{label}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: colorB || "#c9a84c" }}>{valB}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 4px 1fr", gap: 2, alignItems: "center" }}>
          <div style={{ height: 6, background: "#0a1a0f", borderRadius: 3, overflow: "hidden", direction: "rtl" }}>
            <div style={{ height: "100%", width: `${pctA}%`, background: colorA || "#1e7a3e", borderRadius: 3, transition: "width 0.6s ease" }} />
          </div>
          <div style={{ height: 12, width: 2, background: "#1e3d28", borderRadius: 1 }} />
          <div style={{ height: 6, background: "#0a1a0f", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pctB}%`, background: colorB || "#c9a84c", borderRadius: 3, transition: "width 0.6s ease" }} />
          </div>
        </div>
      </div>
    );
  };

  const PlayerPicker = ({ value, onChange, exclude, colorClass }) => (
    <select value={value ? value.id : ""} onChange={e => onChange(players.find(p => p.id === parseInt(e.target.value)) || null)}
      style={{ background: "#112318", border: `1px solid ${colorClass}`, borderRadius: 8, padding: "8px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 13, outline: "none", width: "100%" }}>
      <option value="">Select player…</option>
      {players.filter(p => !exclude || p.id !== exclude.id).map(p => (
        <option key={p.id} value={p.id}>{p.name} ({p.position})</option>
      ))}
    </select>
  );

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: 12, alignItems: "center", marginBottom: 24 }}>
        <PlayerPicker value={pA} onChange={setPa} exclude={pB} colorClass="#1e7a3e" />
        <div style={{ textAlign: "center", fontSize: 13, fontWeight: 800, color: "#2d5a3d" }}>VS</div>
        <PlayerPicker value={pB} onChange={setPb} exclude={pA} colorClass="#c9a84c" />
      </div>

      {pA && pB && statsA && statsB ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Player headers */}
          {[{ p: pA, stats: statsA, color: "#1e7a3e" }, { p: pB, stats: statsB, color: "#c9a84c" }].map(({ p, stats, color }) => (
            <div key={p.id} style={{ background: "#112318", border: `1px solid ${color}44`, borderRadius: 12, padding: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: (positionColors[p.position]||"#1e7a3e") + "22", border: `2px solid ${(positionColors[p.position]||"#1e7a3e")}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: positionColors[p.position]||"#1e7a3e", flexShrink: 0 }}>{p.number}</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: "#f0faf1" }}>{p.name}</div>
                <span style={{ background: (positionColors[p.position]||"#1e7a3e")+"22", color: positionColors[p.position]||"#1e7a3e", padding: "2px 8px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{p.position}</span>
              </div>
            </div>
          ))}

          {/* Match stats comparison */}
          <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 18, gridColumn: "1/-1" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>Match Stats</div>
            {statKeys.map(({ label, fn, maxVal }) => (
              <Bar key={label} label={label} valA={fn(statsA)} valB={fn(statsB)} maxVal={maxVal} colorA="#1e7a3e" colorB="#c9a84c" />
            ))}
          </div>

          {/* Development comparison */}
          <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 18, gridColumn: "1/-1" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>Development Profile</div>
            {devKeys.map(k => {
              const label = k.charAt(0).toUpperCase() + k.slice(1);
              return <Bar key={k} label={label} valA={pA.development[k]} valB={pB.development[k]} maxVal={100} colorA="#1e7a3e" colorB="#c9a84c" />;
            })}
          </div>

          {/* Radar overlay */}
          <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 18, gridColumn: "1/-1", display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Radar Overlay</div>
              <DualRadar dataA={pA.development} dataB={pB.development} colorA="#1e7a3e" colorB="#c9a84c" />
              <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 12, height: 3, background: "#1e7a3e", borderRadius: 2 }} /><span style={{ fontSize: 11, color: "#86b598" }}>{pA.name.split(" ")[0]}</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 12, height: 3, background: "#c9a84c", borderRadius: 2 }} /><span style={{ fontSize: 11, color: "#86b598" }}>{pB.name.split(" ")[0]}</span></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#2d5a3d", fontSize: 14 }}>
          Select two players above to compare their stats and development profiles.
        </div>
      )}
    </div>
  );
}

function DualRadar({ dataA, dataB, colorA, colorB }) {
  const keys = Object.keys(dataA);
  const size = 200; const cx = size / 2, cy = size / 2, r = 70;
  const pts = (data) => keys.map((k, i) => { const a = (i / keys.length) * 2 * Math.PI - Math.PI / 2; const v = data[k] / 100; return { x: cx + r * v * Math.cos(a), y: cy + r * v * Math.sin(a), lx: cx + (r + 22) * Math.cos(a), ly: cy + (r + 22) * Math.sin(a), label: k }; });
  const grid = (s) => keys.map((_, i) => { const a = (i / keys.length) * 2 * Math.PI - Math.PI / 2; return `${cx + r * s * Math.cos(a)},${cy + r * s * Math.sin(a)}`; }).join(" ");
  const ptsA = pts(dataA); const ptsB = pts(dataB);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1].map(s => <polygon key={s} points={grid(s)} fill="none" stroke="#2d5a3d" strokeWidth="0.8" />)}
      {ptsA.map((p, i) => <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos((i / keys.length) * 2 * Math.PI - Math.PI / 2)} y2={cy + r * Math.sin((i / keys.length) * 2 * Math.PI - Math.PI / 2)} stroke="#2d5a3d" strokeWidth="0.8" />)}
      <polygon points={ptsA.map(p => `${p.x},${p.y}`).join(" ")} fill={colorA + "33"} stroke={colorA} strokeWidth="2" />
      <polygon points={ptsB.map(p => `${p.x},${p.y}`).join(" ")} fill={colorB + "22"} stroke={colorB} strokeWidth="2" strokeDasharray="4,2" />
      {ptsA.map((p, i) => <text key={i} x={p.lx} y={p.ly} textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#86b598">{p.label}</text>)}
    </svg>
  );
}

// ── FIXTURES CALENDAR TAB ──────────────────────────────────────────────────
function FixturesTab({ matches, sessions }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Upcoming matches (not cancelled, not in past)
  const upcoming = [...matches]
    .filter(m => !m.cancelled && new Date(m.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Upcoming sessions
  const upcomingSessions = [...sessions]
    .filter(s => new Date(s.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Past matches
  const past = [...matches]
    .filter(m => !m.cancelled && new Date(m.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Build combined timeline for upcoming
  const timeline = [
    ...upcoming.map(m => ({ type: "match", date: new Date(m.date), data: m })),
    ...upcomingSessions.map(s => ({ type: "session", date: new Date(s.date), data: s })),
  ].sort((a, b) => a.date - b.date);

  const fmt = (d) => new Date(d).toLocaleDateString("en-IE", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const daysUntil = (d) => { const diff = new Date(d) - today; return Math.ceil(diff / (1000 * 60 * 60 * 24)); };

  const FOCUS_COLORS_LOCAL = { Technical: "#3B82F6", Tactical: "#c9a84c", Physical: "#EF4444", Mental: "#10B981", Attacking: "#F97316", Defending: "#06B6D4", "Set Pieces": "#F59E0B" };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "start" }}>
      {/* Timeline */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>Upcoming Schedule</div>
        {timeline.length === 0 && <div style={{ padding: "40px 20px", textAlign: "center", color: "#2d5a3d", fontSize: 13 }}>No upcoming fixtures or sessions.</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 20, top: 24, bottom: 24, width: 2, background: "linear-gradient(180deg,#1e7a3e,#1e3d28)", borderRadius: 2 }} />
          {timeline.map((item, i) => {
            const days = daysUntil(item.date);
            const isToday = days === 0;
            const isMatch = item.type === "match";
            const color = isMatch ? (item.data.cup ? "#F59E0B" : item.data.friendly ? "#10B981" : "#1e7a3e") : (FOCUS_COLORS_LOCAL[item.data.focus] || "#1e7a3e");
            return (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0 12px 48px", position: "relative" }}>
                {/* Timeline dot */}
                <div style={{ position: "absolute", left: 12, top: 20, width: 18, height: 18, borderRadius: "50%", background: isToday ? "#F59E0B" : color, border: `3px solid #0a1a0f`, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>
                  {isMatch ? "⚽" : "🏃"}
                </div>
                <div style={{ flex: 1, background: "#112318", border: `1px solid ${isToday ? "#F59E0B44" : "#1e3d28"}`, borderRadius: 10, padding: "12px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, color: "#f0faf1" }}>
                        {isMatch ? `vs ${item.data.opponent}` : item.data.title}
                      </div>
                      <div style={{ fontSize: 11, color: "#4d7a5a", marginTop: 2 }}>{fmt(item.date)}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: color + "22", color }}>
                        {isMatch ? (item.data.cup ? "CUP" : item.data.friendly ? "FRIENDLY" : "LEAGUE") : item.data.focus.toUpperCase()}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: isToday ? "#F59E0B" : days <= 3 ? "#EF4444" : "#4d7a5a" }}>
                        {isToday ? "TODAY" : days === 1 ? "Tomorrow" : `${days}d`}
                      </span>
                    </div>
                  </div>
                  {isMatch && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, color: "#4d7a5a" }}>{item.data.venue === "Home" ? "🏠 Home" : "✈️ Away"}</span>
                    </div>
                  )}
                  {!isMatch && (
                    <div style={{ fontSize: 11, color: "#4d7a5a" }}>⏱ {item.data.duration} mins</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right panel: Past results + stats */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Season at a Glance</div>
          {(() => {
            const league = matches.filter(m => !m.friendly && !m.cancelled && !m.cup);
            const w = league.filter(m => m.goalsFor > m.goalsAgainst).length;
            const d = league.filter(m => m.goalsFor === m.goalsAgainst).length;
            const l = league.filter(m => m.goalsFor < m.goalsAgainst).length;
            const gf = league.reduce((s,m)=>s+m.goalsFor,0);
            const ga = league.reduce((s,m)=>s+m.goalsAgainst,0);
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[["Played", league.length, "#4d7a5a"], ["Won", w, "#10B981"], ["Drawn", d, "#F59E0B"], ["Lost", l, "#EF4444"], ["Goals For", gf, "#1e7a3e"], ["Goals Against", ga, "#EF4444"]].map(([l, v, c]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 10px", background: "#0a1a0f", borderRadius: 7 }}>
                    <span style={{ fontSize: 12, color: "#4d7a5a" }}>{l}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: c }}>{v}</span>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

        <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Recent Results</div>
          {past.slice(0, 6).map((m, i) => {
            const r = m.goalsFor > m.goalsAgainst ? "W" : m.goalsFor < m.goalsAgainst ? "L" : "D";
            const c = r === "W" ? "#10B981" : r === "L" ? "#EF4444" : "#F59E0B";
            return (
              <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < Math.min(past.length,6)-1 ? "1px solid #0a1a0f" : "none" }}>
                <span style={{ width: 20, height: 20, borderRadius: 4, background: c+"22", color: c, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{r}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#E8F5E9", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.opponent}</div>
                  <div style={{ fontSize: 10, color: "#4d7a5a" }}>{new Date(m.date).toLocaleDateString("en-IE", { day: "numeric", month: "short" })}</div>
                </div>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#E8F5E9", flexShrink: 0 }}>{m.goalsFor}–{m.goalsAgainst}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NewsComposer({ squadNews, saveSquadNews, activeCoach, S }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const post = () => {
    if (!title.trim() || !body.trim()) return;
    saveSquadNews([...squadNews, { title: title.trim(), body: body.trim(), author: activeCoach, date: new Date().toISOString() }]);
    setTitle(""); setBody("");
  };
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ ...S.card, padding: 20, marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#f0faf1", marginBottom: 14 }}>📢 Post a Message to Parents</div>
        <div style={{ marginBottom: 10 }}>
          <input type="text" placeholder="Title (e.g. Training cancelled Thursday)" value={title} onChange={e => setTitle(e.target.value)} style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 8, padding: "8px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 13, outline: "none", width: "100%" }} />
        </div>
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Message body..." rows={4}
          style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 8, padding: "8px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 13, width: "100%", resize: "vertical", lineHeight: 1.6, outline: "none" }}
          onFocus={e => e.target.style.borderColor="#1e7a3e"} onBlur={e => e.target.style.borderColor="#1e3d28"} />
        <button onClick={post} style={{ marginTop: 10, background: "#1e7a3e", border: "none", color: "white", padding: "9px 22px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 700 }}>Post to Parents</button>
      </div>
      {[...squadNews].reverse().map((msg, i) => (
        <div key={i} style={{ ...S.card, padding: 16, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#E8F5E9" }}>{msg.title}</div>
            <button onClick={() => saveSquadNews(squadNews.filter((_,idx) => idx !== squadNews.length-1-i))}
              style={{ background: "none", border: "none", color: "#EF444466", cursor: "pointer", fontSize: 16 }}>×</button>
          </div>
          <div style={{ fontSize: 13, color: "#86b598", lineHeight: 1.7 }}>{msg.body}</div>
          <div style={{ fontSize: 11, color: "#4d7a5a", marginTop: 8 }}>{msg.author} · {new Date(msg.date).toLocaleDateString("en-IE", { day:"numeric", month:"short" })}</div>
        </div>
      ))}
      {squadNews.length === 0 && <div style={{ textAlign: "center", padding: "30px", color: "#4d7a5a", fontSize: 13 }}>No messages posted yet.</div>}
    </div>
  );
}

function LeagueTab({ leagueData: fallbackData }) {
  const [rows, setRows] = useState(fallbackData);
  const [loading, setLoading] = useState(false);
  const [fetchedAt, setFetchedAt] = useState(null);
  const [error, setError] = useState(null);

  const fetchLive = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/league");
      const data = await res.json();
      if (data.success && data.rows.length > 0) {
        setRows(data.rows);
        setFetchedAt(data.fetchedAt);
      } else {
        setError("Could not parse live data — showing last known standings.");
      }
    } catch (e) {
      setError("Could not reach DDSL — showing last known standings.");
    }
    setLoading(false);
  };

  useEffect(() => { fetchLive(); }, []);

  return (
    <div style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 12, padding: 20, maxWidth: 680 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: "#f0faf1" }}>DDSL 14.1 Girls Sunday</div>
          <div style={{ fontSize: 12, color: "#4d7a5a", marginTop: 2 }}>
            {fetchedAt ? `Live · Updated ${new Date(fetchedAt).toLocaleTimeString("en-IE", { hour: "2-digit", minute: "2-digit" })}` : "League standings — 2025/26"}
          </div>
          {error && <div style={{ fontSize: 11, color: "#F59E0B", marginTop: 4 }}>⚠ {error}</div>}
        </div>
        <button onClick={fetchLive} disabled={loading}
          style={{ background: "#1e7a3e22", border: "1px solid #1e7a3e44", color: "#4ade80", padding: "7px 14px", borderRadius: 8, cursor: loading ? "default" : "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 700, opacity: loading ? 0.6 : 1 }}>
          {loading ? "Fetching…" : "↻ Refresh"}
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #1e3d28" }}>
              {["#","Team","Pld","W","D","L","Pts"].map(h => (
                <th key={h} style={{ padding: "6px 10px", textAlign: h==="Team"?"left":"center", fontSize: 10, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.6px" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isUs = row.team?.includes("Knocklyon");
              return (
                <tr key={i} style={{ borderBottom: "1px solid #0a1a0f", background: isUs ? "#1a3d25" : "transparent" }}>
                  <td style={{ padding: "10px", textAlign: "center", fontSize: 13, fontWeight: 700, color: isUs ? "#1e7a3e" : "#4d7a5a" }}>{row.position}</td>
                  <td style={{ padding: "10px", fontSize: 13, fontWeight: isUs ? 700 : 500, color: isUs ? "#E8F5E9" : "#86b598" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <TeamBadge name={row.team} size={24} />
                      {row.team}
                      {isUs && <span style={{ fontSize: 9, fontWeight: 700, color: "#1e7a3e", background: "#1e7a3e22", padding: "1px 6px", borderRadius: 10 }}>US</span>}
                    </div>
                  </td>
                  <td style={{ padding: "10px", textAlign: "center", fontSize: 13, color: "#4d7a5a" }}>{row.played}</td>
                  <td style={{ padding: "10px", textAlign: "center", fontSize: 13, color: "#10B981" }}>{row.won}</td>
                  <td style={{ padding: "10px", textAlign: "center", fontSize: 13, color: "#4d7a5a" }}>{row.drawn}</td>
                  <td style={{ padding: "10px", textAlign: "center", fontSize: 13, color: "#EF4444" }}>{row.lost}</td>
                  <td style={{ padding: "10px", textAlign: "center", fontSize: 15, fontWeight: 800, color: isUs ? "#1e7a3e" : "#E8F5E9" }}>{row.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: "#2d5a3d" }}>
        Source: <a href="https://ddsl.ie/league/208718/" target="_blank" rel="noreferrer" style={{ color: "#4d7a5a" }}>ddsl.ie</a>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("squad");
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [playerDraft, setPlayerDraft] = useState({});
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const [potmAwards, setPotmAwards] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const COACHES = ["Kevin Baker", "James Drinan"];
  const [activeCoach, setActiveCoach] = useState("Kevin Baker");
  const [view, setView] = useState("coach");
  const [searchPlayer, setSearchPlayer] = useState("");
  const [showAddMatch, setShowAddMatch] = useState(false);
  const [newMatch, setNewMatch] = useState({ date: "", opponent: "", venue: "Home", goalsFor: "", goalsAgainst: "" });
  const [editingStats, setEditingStats] = useState(null);
  const [draftStats, setDraftStats] = useState({});
  const [matchPhotos, setMatchPhotos] = useState({});
  const [matchReviews, setMatchReviews] = useState({});
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const [editingSessionDrills, setEditingSessionDrills] = useState(false);
  const [trainingAttendance, setTrainingAttendance] = useState(INITIAL_TRAINING);
  const [oppProfiles, setOppProfiles] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [saveIndicator, setSaveIndicator] = useState("");

  // ── SUPABASE CONFIG ────────────────────────────────────────────────────────
  const SUPABASE_URL = "https://idwfuxhfthilfikxwjbk.supabase.co";
  const SUPABASE_KEY = "sb_publishable_SVd0qC4DoP2cfoWW0xvdRw_LM9LvXfH";
  const SB_HEADERS = { "Content-Type": "application/json", "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`, "Prefer": "resolution=merge-duplicates" };

  const sbGet = async (key) => {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/app_data?key=eq.${key}&select=value`, { headers: SB_HEADERS });
    const rows = await r.json();
    return rows?.[0]?.value ?? null;
  };

  const sbSet = async (key, value) => {
    await fetch(`${SUPABASE_URL}/rest/v1/app_data`, {
      method: "POST",
      headers: SB_HEADERS,
      body: JSON.stringify({ key, value, updated_at: new Date().toISOString() })
    });
  };

  // ── PERSISTENCE HELPERS ────────────────────────────────────────────────────
  const showSaved = () => {
    setSaveIndicator("✓ Saved");
    setTimeout(() => setSaveIndicator(""), 1800);
  };

  const persist = async (key, value) => {
    try { await sbSet(key, value); } catch(e) { console.error("Save failed:", key, e); }
  };

  const savePlayers            = (val) => { setPlayers(val);            persist("app:players", val).then(showSaved); };
  const saveMatches            = (val) => { setMatches(val);            persist("app:matches", val).then(showSaved); };
  const saveOppProfiles        = (val) => { setOppProfiles(val);        persist("app:oppProfiles", val).then(showSaved); };
  const saveSessions           = (val) => { setSessions(val);           persist("app:sessions", val).then(showSaved); };
  const saveTrainingAttendance = (val) => { setTrainingAttendance(val); persist("app:trainingAttendance", val).then(showSaved); };
  const savePotmAwards         = (val) => { setPotmAwards(val);         persist("app:potmAwards", val).then(showSaved); };
  const saveMatchReviews       = (val) => { setMatchReviews(val);       persist("app:matchReviews", val).then(showSaved); };

  // ── LOAD ALL DATA ON MOUNT ─────────────────────────────────────────────────
  const saveOppBadges = (val) => { setOppBadges(val); persist("app:oppBadges", val).then(showSaved); };

  const loadAll = async () => {
    const keys    = ["app:players","app:matches","app:oppProfiles","app:sessions","app:trainingAttendance","app:potmAwards","app:matchReviews","app:squadNews","app:oppBadges"];
    const setters = [setPlayers,   setMatches,   setOppProfiles,   setSessions,   setTrainingAttendance,   setPotmAwards,   setMatchReviews,   setSquadNews,   setOppBadges];
    for (let i = 0; i < keys.length; i++) {
      try {
        const val = await sbGet(keys[i]);
        if (val !== null) setters[i](val);
      } catch(e) { console.error("Load failed:", keys[i], e); }
    }
    setLoaded(true);
  };
  const [leagueData] = useState([
    { position: 1, team: "Ballyoulster United FC", played: 13, won: 12, drawn: 0, lost: 1,  points: 36 },
    { position: 2, team: "Knocklyon United FC",    played: 15, won: 11, drawn: 0, lost: 4,  points: 33 },
    { position: 3, team: "Kilnamanagh AFC",        played: 14, won: 7,  drawn: 1, lost: 6,  points: 22 },
    { position: 4, team: "Cabinteely FC",          played: 13, won: 6,  drawn: 3, lost: 4,  points: 21 },
    { position: 5, team: "Parkvale FC",            played: 15, won: 5,  drawn: 1, lost: 9,  points: 16 },
    { position: 6, team: "Clontarf FC",            played: 7,  won: 3,  drawn: 1, lost: 3,  points: 10 },
    { position: 7, team: "Maynooth Town FC",       played: 12, won: 3,  drawn: 0, lost: 9,  points: 9  },
    { position: 8, team: "Tolka Rovers AFC",       played: 13, won: 1,  drawn: 0, lost: 12, points: 3  },
  ]);

  // Match attendance — derived from real match data (excl. cancelled)
  const matchApps = (pid) => matches.filter(m => !m.cancelled && m.playerStats[pid]?.played).length;
  const matchTotal = matches.filter(m => !m.cancelled).length;
  const matchAttPct = (pid) => matchTotal === 0 ? 0 : Math.round((matchApps(pid) / matchTotal) * 100);

  // Training attendance — stored per session id in trainingAttendance state
  const trainingAttPct = (pid) => {
    const total = sessions.length;
    if (total === 0) return 0;
    const attended = sessions.filter(s => trainingAttendance[s.id]?.[pid]).length;
    return Math.round((attended / total) * 100);
  };
  const POSITION_ORDER = { GK: 1, CB: 2, RB: 3, LB: 4, CDM: 5, CM: 6, CAM: 7, RW: 8, LW: 9, ST: 10 };
  const filteredPlayers = players
    .filter(p => p.name.toLowerCase().includes(searchPlayer.toLowerCase()))
    .sort((a, b) => (POSITION_ORDER[a.position] || 99) - (POSITION_ORDER[b.position] || 99));

  const playerSeasonStats = (pid) => {
    let apps = 0, starts = 0, goals = 0, assists = 0, yellows = 0, reds = 0, rSum = 0, rCount = 0;
    matches.forEach(m => { const s = m.playerStats[pid]; if (s?.played) { apps++; if (s.started) starts++; goals += s.goals; assists += s.assists; if (s.yellowCard) yellows++; if (s.redCard) reds++; if (s.rating) { rSum += s.rating; rCount++; } } });
    return { apps, starts, goals, assists, yellows, reds, avgRating: rCount ? (rSum / rCount).toFixed(1) : "—" };
  };

  const blankStats = () => { const s = {}; players.forEach(p => { s[p.id] = { played: false, started: false, goals: 0, assists: 0, yellowCard: false, redCard: false, rating: 0 }; }); return s; };

  const addMatch = () => {
    if (!newMatch.date || !newMatch.opponent) return;
    const id = matches.length ? Math.max(...matches.map(m => m.id)) + 1 : 1;
    const match = { ...newMatch, id, goalsFor: parseInt(newMatch.goalsFor) || 0, goalsAgainst: parseInt(newMatch.goalsAgainst) || 0, playerStats: blankStats() };
    const updated = [...matches, match];
    saveMatches(updated);
    setNewMatch({ date: "", opponent: "", venue: "Home", goalsFor: "", goalsAgainst: "" });
    setShowAddMatch(false);
    setSelectedMatch(match);
    setEditingStats(id);
    setDraftStats(blankStats());
  };

  const startEditing = (match) => {
    setEditingStats(match.id);
    const d = {}; players.forEach(p => { d[p.id] = { ...(match.playerStats[p.id] || { played: false, started: false, goals: 0, assists: 0, yellowCard: false, redCard: false, rating: 0 }) }; });
    setDraftStats(d);
  };

  const saveStats = () => {
    const updated = matches.map(m => m.id === editingStats ? { ...m, playerStats: { ...draftStats } } : m);
    saveMatches(updated);
    setSelectedMatch(prev => prev ? { ...prev, playerStats: { ...draftStats } } : prev);
    setEditingStats(null);
  };

  const updateDraft = (pid, field, value) => {
    setDraftStats(prev => {
      const u = { ...prev[pid], [field]: value };
      if (field === "started" && value) u.played = true;
      if (field === "played" && !value) { u.started = false; u.goals = 0; u.assists = 0; u.yellowCard = false; u.redCard = false; u.rating = 0; }
      return { ...prev, [pid]: u };
    });
  };

  const handlePhotoUpload = (matchId, e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const dataUrl = ev.target.result;
      setMatchPhotos(prev => ({ ...prev, [matchId]: dataUrl }));
      try { await sbSet(`matchphoto:${matchId}`, dataUrl); } catch(err) { console.error("Photo save failed", err); }
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = async (matchId) => {
    setMatchPhotos(prev => { const n = { ...prev }; delete n[matchId]; return n; });
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/app_data?key=eq.matchphoto:${matchId}`, { method: "DELETE", headers: SB_HEADERS });
    } catch(err) {}
  };

  const updateSessionDrills = (sessionId, drillIds) => {
    const updated = sessions.map(s => s.id === sessionId ? { ...s, drills: drillIds } : s);
    saveSessions(updated);
    setSelectedSession(prev => prev?.id === sessionId ? { ...prev, drills: drillIds } : prev);
  };

  const updateSessionPlan = (sessionId, field, value) => {
    const updated = sessions.map(s => s.id === sessionId ? { ...s, [field]: value } : s);
    saveSessions(updated);
    setSelectedSession(prev => prev?.id === sessionId ? { ...prev, [field]: value } : prev);
  };

  const toggleTraining = (sessionId, pid) => {
    const sess = { ...(trainingAttendance[sessionId] || {}) };
    sess[pid] = !sess[pid];
    const updated = { ...trainingAttendance, [sessionId]: sess };
    saveTrainingAttendance(updated);
  };

  const loadPhotos = async () => {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/app_data?key=like.matchphoto:*&select=key,value`, { headers: SB_HEADERS });
      const rows = await r.json();
      const loaded = {};
      for (const row of (rows || [])) {
        const matchId = parseInt(row.key.replace("matchphoto:", ""));
        if (!isNaN(matchId)) loaded[matchId] = row.value;
      }
      setMatchPhotos(loaded);
    } catch(e) { console.error("Photo load failed", e); }
  };

  useEffect(() => { loadAll(); loadPhotos(); loadPotmVotes(); }, []);

  // ── POTM VOTING (shared storage) ──────────────────────────────────────────
  const [potmPolls, setPotmPolls] = useState({}); // { matchId: { open: bool, nominees: [pid] } }
  const [potmVotes, setPotmVotes] = useState({}); // { matchId: { pid: count } } — loaded from shared storage
  const [myVotes, setMyVotes] = useState({});      // { matchId: pid } — this device's votes

  const loadPotmVotes = async () => {
    try {
      const polls = await sbGet("potm:polls");
      if (polls) setPotmPolls(polls);

      const awards = await sbGet("potm:awards");
      if (awards) setPotmAwards(awards);

      // Load vote tallies
      const r = await fetch(`${SUPABASE_URL}/rest/v1/app_data?key=like.potmvote:*&select=key,value`, { headers: SB_HEADERS });
      const rows = await r.json();
      const tally = {};
      for (const row of (rows || [])) {
        const parts = row.key.split(":");
        if (parts.length >= 3) {
          const matchId = parts[1];
          const pid = parts[2];
          if (!tally[matchId]) tally[matchId] = {};
          tally[matchId][pid] = (tally[matchId][pid] || 0) + 1;
        }
      }
      setPotmVotes(tally);

      const myRes = await sbGet("potm:myvotes");
      if (myRes) setMyVotes(myRes);
    } catch(e) { console.error("POTM load failed", e); }
  };

  const savePoll = async (matchId, nominees, open) => {
    const updated = { ...potmPolls, [matchId]: { nominees, open } };
    setPotmPolls(updated);
    try { await sbSet("potm:polls", updated); } catch(e) {}
  };

  const castVote = async (matchId, pid) => {
    if (myVotes[matchId]) return;
    const deviceKey = `potmvote:${matchId}:${pid}:${Date.now()}`;
    try {
      await sbSet(deviceKey, 1);
      setPotmVotes(prev => ({ ...prev, [matchId]: { ...(prev[matchId]||{}), [pid]: ((prev[matchId]||{})[pid]||0) + 1 } }));
      const updated = { ...myVotes, [matchId]: pid };
      setMyVotes(updated);
      await sbSet("potm:myvotes", updated);
    } catch(e) { console.error("Vote failed", e); }
  };

  const awardPotm = (matchId, pid) => {
    const updated = { ...potmAwards, [matchId]: pid };
    savePotmAwards(updated);
    savePoll(matchId, potmPolls[matchId]?.nominees || [], false);
  };

  const [editingMatchScore, setEditingMatchScore] = useState(null);
  const [matchScoreDraft, setMatchScoreDraft] = useState({ gf: 0, ga: 0 });
  const [oppBadges, setOppBadges] = useState({});

  const switchView = (v) => {
    setView(v);
    if (v === "player") setTab("player_home");
    else if (v === "parent") setTab("parent_home");
    else setTab("squad");
    setSelectedPlayer(null);
    setSelectedMatch(null);
    setSelectedSession(null);
  };

  const startEditPlayer = (p) => {
    const notesObj = typeof p.notes === "string"
      ? { "Kevin Baker": p.notes, "James Drinan": "" }
      : { ...p.notes };
    setPlayerDraft({
      name: p.name, position: p.position, number: p.number,
      notes: notesObj,
      goals: p.goals.map(g => typeof g === "string" ? { id: g, text: g, progress: 0 } : { ...g }),
      development: { ...p.development },
      roles: { ...(p.roles || {}) },
      secondPosition: p.secondPosition || ""
    });
    setEditingPlayer(p.id);
  };

  const savePlayer = () => {
    const updated = players.map(p => p.id === editingPlayer ? { ...p, ...playerDraft, secondPosition: playerDraft.secondPosition || "" } : p);
    savePlayers(updated);
    setSelectedPlayer(prev => prev?.id === editingPlayer ? { ...prev, ...playerDraft } : prev);
    setEditingPlayer(null);
  };

  const [squadNews, setSquadNews] = useState([]);
  const saveSquadNews = (val) => { setSquadNews(val); persist("app:squadNews", val).then(showSaved); };

  const coachTabs = [{ id: "squad", label: "Squad" }, { id: "matches", label: "Matches" }, { id: "stats", label: "Stats" }, { id: "compare", label: "Compare" }, { id: "formation", label: "Formation" }, { id: "fixtures", label: "Fixtures" }, { id: "opposition", label: "Opposition" }, { id: "league", label: "League" }, { id: "sessions", label: "Sessions" }, { id: "drills", label: "Drills" }, { id: "news", label: "📢 News" }];
  const playerTabs = [{ id: "player_home", label: "My Stats" }, { id: "player_matches", label: "My Matches" }, { id: "player_goals", label: "My Goals" }];
  const parentTabs = [{ id: "parent_home", label: "My Child" }, { id: "parent_results", label: "Results" }, { id: "parent_fixtures", label: "Fixtures" }, { id: "parent_potm", label: "🏆 POTM" }, { id: "parent_news", label: "News" }];
  const tabs = view === "coach" ? coachTabs : view === "player" ? playerTabs : parentTabs;

  const S = {
    page: { fontFamily: "'DM Sans', system-ui, sans-serif", background: "#0a1a0f", minHeight: "100vh", color: "#E8F5E9" },
    card: { background: "#112318", border: "1px solid #1e3d28", borderRadius: 12 },
    inset: { background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 8 },
  };

  return (
    <div style={S.page}>
      {!loaded && (
        <div style={{ position: "fixed", inset: 0, background: "#0a1a0f", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⚽</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: "#c8e6c9", marginBottom: 8 }}>Knocklyon United</div>
          <div style={{ fontSize: 13, color: "#4d7a5a" }}>Loading squad data…</div>
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a1a0f; } ::-webkit-scrollbar-thumb { background: #2d5a3d; border-radius: 2px; }
        .tab-btn { background: none; border: none; cursor: pointer; padding: 8px 16px; border-radius: 8px; font-family: inherit; font-size: 13px; font-weight: 600; transition: all 0.2s; }
        .tab-btn.active { background: #1e7a3e; color: white; }
        .tab-btn:not(.active) { color: #4d7a5a; } .tab-btn:not(.active):hover { color: #86b598; background: #1e3d28; }
        .pill { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; }
        .view-toggle { display: flex; background: #112318; border: 1px solid #1e3d28; border-radius: 10px; padding: 3px; gap: 2px; }
        .view-btn { background: none; border: none; cursor: pointer; padding: 6px 14px; border-radius: 7px; font-family: inherit; font-size: 12px; font-weight: 600; transition: all 0.2s; }
        .view-btn.active { background: #1e3d28; color: #c8e6c9; } .view-btn:not(.active) { color: #4d7a5a; }
        input[type="text"], input[type="date"], input[type="number"], select { background: #112318; border: 1px solid #1e3d28; border-radius: 8px; padding: 8px 12px; color: #E8F5E9; font-family: inherit; font-size: 13px; outline: none; width: 100%; }
        input:focus, select:focus { border-color: #1e7a3e; } select option { background: #1e3d28; }
        .player-row { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; cursor: pointer; transition: background 0.15s; }
        .player-row:hover { background: #1e3d28; } .player-row.sel { background: #1a3d25; border-left: 3px solid #1e7a3e; }
        .btn-p { background: #1e7a3e; border: none; color: white; padding: 8px 18px; border-radius: 8px; cursor: pointer; font-family: inherit; font-size: 13px; font-weight: 600; }
        .btn-p:hover { background: #166332; }
        .btn-g { background: #112318; border: 1px solid #1e3d28; color: #86b598; padding: 7px 14px; border-radius: 8px; cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 500; }
        .match-card { background: #112318; border: 1px solid #1e3d28; border-radius: 12px; padding: 16px; cursor: pointer; transition: border-color 0.2s; }
        .match-card:hover { border-color: #2d5a3d; } .match-card.sel { border-color: #1e7a3e; background: #1a3d25; }
        .stat-in { background: #0a1a0f; border: 1px solid #1e3d28; border-radius: 6px; padding: 4px 4px; color: #E8F5E9; font-family: inherit; font-size: 12px; width: 42px; text-align: center; outline: none; }
        .stat-in:focus { border-color: #1e7a3e; }
        .chk { width: 15px; height: 15px; accent-color: #1e7a3e; cursor: pointer; }
        .drill-card { background: #112318; border: 1px solid #1e3d28; border-radius: 10px; padding: 14px; }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e3d28", padding: "0 20px", background: "#0d1f12" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="https://theclubapp-photos-production.s3.eu-west-1.amazonaws.com/wsns00siicvc196s84hic56uf6al"
              alt="Knocklyon United FC"
              style={{ width: 40, height: 40, objectFit: "contain", borderRadius: 6 }}
              onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
            />
            <div style={{ display:"none", width: 40, height: 40, background: "linear-gradient(135deg,#1e7a3e,#c9a84c)", borderRadius: 8, alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚽</div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: "#c8e6c9" }}>Knocklyon United</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ fontSize: 11, color: "#4d7a5a" }}>U14 Girls · Player Development Hub</div>
                {saveIndicator && <span style={{ fontSize: 11, color: "#10B981", fontWeight: 700, background: "#10B98122", padding: "2px 8px", borderRadius: 20 }}>{saveIndicator}</span>}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {view === "coach" && (
              <div style={{ display: "flex", background: "#112318", border: "1px solid #1e3d28", borderRadius: 10, padding: 3, gap: 2 }}>
                {COACHES.map(c => (
                  <button key={c} onClick={() => setActiveCoach(c)}
                    style={{ background: activeCoach === c ? "#1e3d28" : "none", border: "none", cursor: "pointer", padding: "5px 12px", borderRadius: 7, fontFamily: "inherit", fontSize: 11, fontWeight: 600, color: activeCoach === c ? "#E8F5E9" : "#4d7a5a", whiteSpace: "nowrap" }}>
                    {c.split(" ")[0]}
                  </button>
                ))}
              </div>
            )}
            <div className="view-toggle">
              <button className={`view-btn ${view === "coach" ? "active" : ""}`} onClick={() => switchView("coach")}>Coach</button>
              <button className={`view-btn ${view === "player" ? "active" : ""}`} onClick={() => switchView("player")}>Player</button>
              <button className={`view-btn ${view === "parent" ? "active" : ""}`} onClick={() => switchView("parent")}>Parent</button>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", gap: 4 }}>
          {tabs.map(t => <button key={t.id} className={`tab-btn ${tab === t.id ? "active" : ""}`} onClick={() => { setTab(t.id); if (view === "coach") { setSelectedMatch(null); setSelectedSession(null); } }}>{t.label}</button>)}
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>

        {/* ── SQUAD (Coach) ── */}
        {tab === "squad" && view === "coach" && (
          <div style={{ display: "grid", gridTemplateColumns: selectedPlayer ? "1fr 1.4fr" : "1fr", gap: 16 }}>
            <div>
              <div style={{ marginBottom: 12 }}><input type="text" placeholder="Search player…" value={searchPlayer} onChange={e => setSearchPlayer(e.target.value)} /></div>
              <div style={{ ...S.card, padding: 8 }}>
                {filteredPlayers.map(p => {
                  const ss = playerSeasonStats(p.id);
                  return (
                    <div key={p.id} className={`player-row ${selectedPlayer?.id === p.id ? "sel" : ""}`} onClick={() => setSelectedPlayer(p)}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: POSITION_COLORS[p.position] + "22", border: `1.5px solid ${POSITION_COLORS[p.position]}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: POSITION_COLORS[p.position], flexShrink: 0 }}>{p.number}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, color: "#f0faf1", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3 }}>
                          <span className="pill" style={{ background: POSITION_COLORS[p.position] + "22", color: POSITION_COLORS[p.position] }}>{p.position}</span>
                          {p.secondPosition && <span className="pill" style={{ background: POSITION_COLORS[p.secondPosition] + "11", color: POSITION_COLORS[p.secondPosition], opacity: 0.7, border: `1px dashed ${POSITION_COLORS[p.secondPosition]}66` }}>{p.secondPosition}</span>}
                          {p.roles?.captain && <span style={{ fontSize: 10, fontWeight: 800, color: "#F59E0B" }}>🅒</span>}
                          {p.roles?.viceCaptain && <span style={{ fontSize: 10, fontWeight: 800, color: "#86b598" }}>🅥</span>}
                          <span style={{ fontSize: 11, color: "#4d7a5a" }}>{ss.goals}G · {ss.assists}A · {ss.apps} apps</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ display: "flex", gap: 8 }}>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: matchAttPct(p.id) >= 80 ? "#10B981" : matchAttPct(p.id) >= 60 ? "#F59E0B" : "#EF4444" }}>{matchAttPct(p.id)}%</div>
                            <div style={{ fontSize: 9, color: "#4d7a5a" }}>matches</div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: trainingAttPct(p.id) >= 80 ? "#10B981" : trainingAttPct(p.id) >= 60 ? "#F59E0B" : "#EF4444" }}>{trainingAttPct(p.id)}%</div>
                            <div style={{ fontSize: 9, color: "#4d7a5a" }}>training</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Roles Overview — shown when no player selected */}
            {!selectedPlayer && (
              <div style={{ ...S.card, padding: 18, marginTop: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Squad Roles Overview</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Leadership","Distribution","Set Pieces","Throw-ins"].map(group => (
                    <div key={group}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#2d5a3d", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 6 }}>{group}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        {ROLES.filter(r => r.group === group).map(role => {
                          const assigned = players.filter(p => p.roles?.[role.key]);
                          return (
                            <div key={role.key} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 10px", ...S.inset }}>
                              <span style={{ fontSize: 12, minWidth: 16 }}>{role.emoji}</span>
                              <span style={{ fontSize: 12, color: "#4d7a5a", flex: 1 }}>{role.label}</span>
                              {assigned.length === 0
                                ? <span style={{ fontSize: 11, color: "#2d5a3d", fontStyle: "italic" }}>Unassigned</span>
                                : <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                                    {assigned.map(p => (
                                      <span key={p.id} style={{ background: POSITION_COLORS[p.position] + "22", color: POSITION_COLORS[p.position], border: `1px solid ${POSITION_COLORS[p.position]}44`, padding: "2px 8px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>
                                        {p.name.split(" ")[0]}
                                      </span>
                                    ))}
                                  </div>
                              }
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedPlayer && (() => {
              const ss = playerSeasonStats(selectedPlayer.id);
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ ...S.card, padding: 18 }}>
                    {editingPlayer === selectedPlayer.id ? (
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Edit Player</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                          <div><div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Name</div><input type="text" value={playerDraft.name} onChange={e => setPlayerDraft(p => ({ ...p, name: e.target.value }))} /></div>
                          <div><div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>#</div><input type="number" value={playerDraft.number} onChange={e => setPlayerDraft(p => ({ ...p, number: parseInt(e.target.value) || 0 }))} /></div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                          <div>
                            <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Primary Position</div>
                            <select value={playerDraft.position} onChange={e => setPlayerDraft(p => ({ ...p, position: e.target.value }))}>
                              {["GK","CB","RB","LB","CDM","CM","CAM","RW","LW","ST"].map(pos => <option key={pos}>{pos}</option>)}
                            </select>
                          </div>
                          <div>
                            <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Secondary Position</div>
                            <select value={playerDraft.secondPosition || ""} onChange={e => setPlayerDraft(p => ({ ...p, secondPosition: e.target.value }))}>
                              <option value="">None</option>
                              {["GK","CB","RB","LB","CDM","CM","CAM","RW","LW","ST"].filter(pos => pos !== playerDraft.position).map(pos => <option key={pos}>{pos}</option>)}
                            </select>
                          </div>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px" }}>Coach Notes</div>
                          <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                            {COACHES.map(c => (
                              <button key={c} onClick={() => setActiveCoach(c)}
                                style={{ background: activeCoach === c ? "#1e7a3e" : "#0a1a0f", border: `1px solid ${activeCoach === c ? "#1e7a3e" : "#1e3d28"}`, color: activeCoach === c ? "white" : "#4d7a5a", padding: "4px 12px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: 600 }}>
                                {c}
                              </button>
                            ))}
                          </div>
                          <textarea
                            value={(typeof playerDraft.notes === "object" ? playerDraft.notes[activeCoach] : playerDraft.notes) || ""}
                            onChange={e => setPlayerDraft(p => ({
                              ...p,
                              notes: typeof p.notes === "object"
                                ? { ...p.notes, [activeCoach]: e.target.value }
                                : { "Kevin Baker": e.target.value, "James Drinan": "" }
                            }))}
                            placeholder={`${activeCoach}'s notes about this player…`}
                            style={{ background: "#112318", border: "1px solid #1e3d28", borderRadius: 8, padding: "8px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 13, outline: "none", width: "100%", minHeight: 80, resize: "vertical" }} />
                        </div>
                        {/* Development sliders */}
                        <div style={{ marginBottom: 14 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px" }}>Development Profile</div>
                          {Object.entries(playerDraft.development || {}).map(([key, val]) => (
                            <div key={key} style={{ marginBottom: 10 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                <span style={{ fontSize: 12, color: "#86b598", textTransform: "capitalize" }}>{key}</span>
                                <span style={{ fontSize: 12, fontWeight: 700, color: FOCUS_COLORS[key.charAt(0).toUpperCase() + key.slice(1)] || "#1e7a3e" }}>{val}</span>
                              </div>
                              <input type="range" min="0" max="100" value={val}
                                onChange={e => setPlayerDraft(p => ({ ...p, development: { ...p.development, [key]: parseInt(e.target.value) } }))}
                                style={{ width: "100%", accentColor: FOCUS_COLORS[key.charAt(0).toUpperCase() + key.slice(1)] || "#1e7a3e", cursor: "pointer" }} />
                            </div>
                          ))}
                        </div>

                        {/* Development Goals */}
                        <div style={{ marginBottom: 14 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px" }}>Development Goals</div>
                          {playerDraft.goals.map((g, i) => (
                            <div key={i} style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                <span style={{ fontSize: 12, color: "#c8e6c9", fontWeight: 500, flex: 1 }}>{g.text}</span>
                                <button onClick={() => setPlayerDraft(p => ({ ...p, goals: p.goals.filter((_, gi) => gi !== i) }))}
                                  style={{ background: "none", border: "none", color: "#4d7a5a", cursor: "pointer", fontSize: 14, marginLeft: 8 }}>×</button>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <input type="range" min="0" max="100" step="5" value={g.progress || 0}
                                  onChange={e => setPlayerDraft(p => { const gs = [...p.goals]; gs[i] = { ...gs[i], progress: parseInt(e.target.value) }; return { ...p, goals: gs }; })}
                                  style={{ flex: 1, accentColor: "#1e7a3e", cursor: "pointer" }} />
                                <span style={{ fontSize: 12, fontWeight: 700, color: (g.progress || 0) >= 100 ? "#10B981" : (g.progress || 0) >= 50 ? "#F59E0B" : "#1e7a3e", minWidth: 36, textAlign: "right" }}>{g.progress || 0}%</span>
                              </div>
                            </div>
                          ))}
                          {/* Goal picker grouped by category */}
                          <div style={{ marginTop: 10 }}>
                            <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 6 }}>Add a goal from the library:</div>
                            {["Technical","Tactical","Physical","Mental"].map(cat => {
                              const catGoals = DEVELOPMENT_GOALS.filter(g => g.category === cat && !playerDraft.goals.find(pg => pg.id === g.id));
                              if (!catGoals.length) return null;
                              return (
                                <div key={cat} style={{ marginBottom: 8 }}>
                                  <div style={{ fontSize: 10, fontWeight: 700, color: FOCUS_COLORS[cat], textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 4 }}>{cat}</div>
                                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                    {catGoals.map(g => (
                                      <button key={g.id} onClick={() => setPlayerDraft(p => ({ ...p, goals: [...p.goals, { id: g.id, text: g.text, progress: 0 }] }))}
                                        style={{ background: "none", border: "1px solid #1e3d28", color: "#4d7a5a", borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontFamily: "inherit", fontSize: 11, textAlign: "left", transition: "all 0.15s" }}
                                        onMouseEnter={e => { e.target.style.borderColor = "#1e7a3e"; e.target.style.color = "#86b598"; }}
                                        onMouseLeave={e => { e.target.style.borderColor = "#1e3d28"; e.target.style.color = "#4d7a5a"; }}>
                                        + {g.text}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        {/* Roles & Responsibilities */}
                        <div style={{ marginBottom: 14 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px" }}>Roles & Responsibilities</div>
                          {["Leadership","Distribution","Set Pieces","Throw-ins"].map(group => (
                            <div key={group} style={{ marginBottom: 10 }}>
                              <div style={{ fontSize: 10, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 6 }}>{group}</div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                {ROLES.filter(r => r.group === group).map(role => {
                                  const active = playerDraft.roles?.[role.key] || false;
                                  return (
                                    <button key={role.key} onClick={() => setPlayerDraft(p => ({ ...p, roles: { ...p.roles, [role.key]: !active } }))}
                                      style={{ background: active ? "#1e7a3e22" : "#0a1a0f", border: `1px solid ${active ? "#1e7a3e" : "#1e3d28"}`, color: active ? "#1e7a3e" : "#4d7a5a", padding: "5px 12px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: active ? 700 : 500, display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s" }}>
                                      <span>{role.emoji}</span>
                                      {role.label}
                                      {active && <span style={{ fontSize: 10 }}>✓</span>}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button className="btn-p" onClick={savePlayer}>Save</button>
                          <button className="btn-g" onClick={() => setEditingPlayer(null)}>Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 12, background: POSITION_COLORS[selectedPlayer.position] + "22", border: `2px solid ${POSITION_COLORS[selectedPlayer.position]}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: POSITION_COLORS[selectedPlayer.position], flexShrink: 0 }}>{selectedPlayer.number}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: "#f0faf1" }}>{selectedPlayer.name}</div>
                          <div style={{ display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }}>
                            <span className="pill" style={{ background: POSITION_COLORS[selectedPlayer.position] + "22", color: POSITION_COLORS[selectedPlayer.position] }}>{selectedPlayer.position}</span>
                            <span className="pill" style={{ background: "#10B98122", color: "#10B981" }}>⚽ {matchAttPct(selectedPlayer.id)}% matches</span>
                            <span className="pill" style={{ background: "#1e7a3e22", color: "#1e7a3e" }}>🏃 {trainingAttPct(selectedPlayer.id)}% training</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button className="btn-g" onClick={() => startEditPlayer(selectedPlayer)}>✏️ Edit</button>
                          <button onClick={() => setSelectedPlayer(null)} style={{ background: "none", border: "none", color: "#4d7a5a", cursor: "pointer", fontSize: 18 }}>×</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div style={{ ...S.card, padding: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Season Stats</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                      {[["Apps", ss.apps], ["Goals", ss.goals], ["Assists", ss.assists], ["Avg Rtg", ss.avgRating]].map(([l, v]) => (
                        <div key={l} style={{ textAlign: "center", padding: "10px 4px", ...S.inset }}>
                          <div style={{ fontSize: 20, fontWeight: 800, color: "#f0faf1" }}>{v}</div>
                          <div style={{ fontSize: 10, color: "#4d7a5a", marginTop: 2 }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    {(ss.yellows > 0 || ss.reds > 0) && <div style={{ display: "flex", gap: 10, marginTop: 10 }}>{ss.yellows > 0 && <span style={{ fontSize: 12, color: "#F59E0B" }}>🟨 {ss.yellows}</span>}{ss.reds > 0 && <span style={{ fontSize: 12, color: "#EF4444" }}>🟥 {ss.reds}</span>}</div>}
                  </div>
                  <div style={{ ...S.card, padding: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Development Profile</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <RadarChart data={selectedPlayer.development} />
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                        {Object.entries(selectedPlayer.development).map(([k, v]) => (
                          <div key={k}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                              <span style={{ fontSize: 12, color: "#86b598" }}>{k.charAt(0).toUpperCase() + k.slice(1)}</span>
                              <span style={{ fontSize: 12, fontWeight: 700, color: FOCUS_COLORS[k.charAt(0).toUpperCase() + k.slice(1)] || "#1e7a3e" }}>{v}</span>
                            </div>
                            <StatBar value={v} color={FOCUS_COLORS[k.charAt(0).toUpperCase() + k.slice(1)] || "#1e7a3e"} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ ...S.card, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px" }}>Coach Notes</div>
                      <div style={{ display: "flex", gap: 4 }}>
                        {COACHES.map(c => (
                          <button key={c} onClick={() => setActiveCoach(c)}
                            style={{ background: activeCoach === c ? "#1e7a3e22" : "none", border: `1px solid ${activeCoach === c ? "#1e7a3e" : "#2d5a3d"}`, color: activeCoach === c ? "#1e7a3e" : "#4d7a5a", padding: "3px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 10, fontWeight: 600 }}>
                            {c.split(" ")[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                    {(() => {
                      const notesObj = selectedPlayer.notes;
                      const noteText = typeof notesObj === "object" ? notesObj[activeCoach] : notesObj;
                      return noteText
                        ? <p style={{ fontSize: 13, color: "#86b598", lineHeight: 1.6 }}>{noteText}</p>
                        : <p style={{ fontSize: 13, color: "#2d5a3d", fontStyle: "italic" }}>{activeCoach} hasn't added notes yet.</p>;
                    })()}
                  </div>
                  {/* Roles Card */}
                  {(() => {
                    const activeRoles = ROLES.filter(r => selectedPlayer.roles?.[r.key]);
                    if (!activeRoles.length) return null;
                    return (
                      <div style={{ ...S.card, padding: 18 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Roles & Responsibilities</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {activeRoles.map(r => (
                            <span key={r.key} style={{ background: "#1e7a3e22", border: "1px solid #1e7a3e44", color: "#4ade80", padding: "4px 10px", borderRadius: 7, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                              {r.emoji} {r.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  <div style={{ ...S.card, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px" }}>Development Goals</div>
                    </div>
                    {selectedPlayer.goals.length === 0 && <div style={{ fontSize: 12, color: "#4d7a5a", ...S.inset, padding: "10px 14px" }}>No goals set yet. Click Edit to add goals.</div>}
                    {selectedPlayer.goals.map((g, i) => {
                      const goal = typeof g === "string" ? { text: g, progress: 0 } : g;
                      const prog = goal.progress || 0;
                      const progColor = prog >= 100 ? "#10B981" : prog >= 50 ? "#F59E0B" : "#1e7a3e";
                      return (
                        <div key={i} style={{ ...S.inset, padding: "10px 14px", marginBottom: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontSize: 12, color: "#c8e6c9", fontWeight: 500, flex: 1 }}>{goal.text}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: progColor, marginLeft: 10 }}>{prog === 100 ? "✓ Done" : `${prog}%`}</span>
                          </div>
                          <div style={{ height: 4, background: "#1e3d28", borderRadius: 2, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${prog}%`, background: progColor, borderRadius: 2, transition: "width 0.4s ease" }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ── NEWS COMPOSER (coach) ── */}
        {tab === "news" && view === "coach" && <NewsComposer squadNews={squadNews} saveSquadNews={saveSquadNews} activeCoach={activeCoach} S={S} />}

        {/* ── MATCHES ── */}
        {tab === "matches" && view === "coach" && (
          <div>
            {showAddMatch && (
              <div style={{ ...S.card, padding: 18, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f0faf1", marginBottom: 14 }}>Add New Match</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <div><div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Date</div><input type="date" value={newMatch.date} onChange={e => setNewMatch(p => ({ ...p, date: e.target.value }))} style={{ colorScheme: "dark" }} /></div>
                  <div>
                    <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Opponent</div>
                    <select value={newMatch.opponent} onChange={e => setNewMatch(p => ({ ...p, opponent: e.target.value }))}>
                      <option value="">Select opponent…</option>
                      <option>Ballyoulster United FC</option>
                      <option>Cabinteely FC</option>
                      <option>Clontarf FC</option>
                      <option>Kilnamanagh AFC</option>
                      <option>Maynooth Town FC</option>
                      <option>Parkvale FC</option>
                      <option>Tolka Rovers AFC</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div><div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Venue</div><select value={newMatch.venue} onChange={e => setNewMatch(p => ({ ...p, venue: e.target.value }))}><option>Home</option><option>Away</option><option>Neutral</option></select></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                  <div><div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Our Goals</div><input type="number" min="0" value={newMatch.goalsFor} onChange={e => setNewMatch(p => ({ ...p, goalsFor: e.target.value }))} /></div>
                  <div><div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>Their Goals</div><input type="number" min="0" value={newMatch.goalsAgainst} onChange={e => setNewMatch(p => ({ ...p, goalsAgainst: e.target.value }))} /></div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-p" onClick={addMatch}>Save & Add Player Stats</button>
                  <button className="btn-g" onClick={() => setShowAddMatch(false)}>Cancel</button>
                </div>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: selectedMatch ? "280px 1fr" : "1fr", gap: 16 }}>
              <div>
                {!showAddMatch && <button className="btn-p" style={{ width: "100%", marginBottom: 12 }} onClick={() => { setShowAddMatch(true); setSelectedMatch(null); setEditingStats(null); }}>+ Add Match</button>}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {matches.length === 0 && <div style={{ textAlign: "center", color: "#4d7a5a", padding: "40px 0", fontSize: 13 }}>No matches yet.</div>}
                  {[...matches].sort((a, b) => new Date(b.date) - new Date(a.date)).map(m => (
                    <div key={m.id} className={`match-card ${selectedMatch?.id === m.id ? "sel" : ""}`} onClick={() => { setSelectedMatch(m); setEditingStats(null); }}>
                      {/* Date + badges row */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <div style={{ fontSize: 13, color: "#4d7a5a", fontWeight: 500 }}>{new Date(m.date).toLocaleDateString("en-IE", { day: "numeric", month: "short", year: "numeric" })}</div>
                        <div style={{ display: "flex", gap: 6 }}>
                          {m.friendly && <span className="pill" style={{ background: "#c9a84c22", color: "#c9a84c", fontSize: 11 }}>Friendly</span>}
                          {m.cup && <span className="pill" style={{ background: "#F59E0B22", color: "#F59E0B", fontSize: 11 }}>Cup</span>}
                          {m.forfeit && <span className="pill" style={{ background: "#EF444422", color: "#EF4444", fontSize: 11 }}>Forfeit</span>}
                          {m.cancelled && <span className="pill" style={{ background: "#4d7a5a22", color: "#4d7a5a", fontSize: 11 }}>N/A</span>}
                          <span className="pill" style={{ background: "#1e3d28", color: "#4d7a5a", fontSize: 11 }}>{m.venue}</span>
                          {!m.cancelled && <ResultBadge gf={m.goalsFor} ga={m.goalsAgainst} />}
                        </div>
                      </div>

                      {/* Teams row — centred, badges + names + score */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                        {/* Home team (us) */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: 1 }}>
                          <TeamBadge name="Knocklyon United FC" size={72} />
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#86b598", textAlign: "center", lineHeight: 1.3 }}>Knocklyon Utd</div>
                        </div>

                        {/* Score */}
                        <div style={{ textAlign: "center", flex: 1 }}>
                          {m.cancelled
                            ? <div style={{ fontSize: 13, color: "#4d7a5a", fontStyle: "italic" }}>N/A</div>
                            : m.forfeit
                            ? <div style={{ fontSize: 28, fontWeight: 900, color: "#EF4444", letterSpacing: "-1px" }}>0 – 3<div style={{ fontSize: 11, color: "#EF4444", fontWeight: 500, marginTop: 2 }}>w/o</div></div>
                            : <div style={{ fontSize: 38, fontWeight: 900, color: "#f0faf1", letterSpacing: "-2px", lineHeight: 1 }}>{m.goalsFor} <span style={{ color: "#2d5a3d", fontWeight: 400 }}>–</span> {m.goalsAgainst}</div>
                          }
                          {/* Scorers */}
                          {!m.cancelled && !m.forfeit && (() => {
                            const scorers = [];
                            players.forEach(p => {
                              const s = m.playerStats[p.id];
                              if (s?.goals > 0) for (let i = 0; i < s.goals; i++) scorers.push(p.name.split(" ")[0]);
                            });
                            return scorers.length > 0 ? (
                              <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
                                {scorers.map((name, i) => (
                                  <span key={i} style={{ fontSize: 22, fontWeight: 600, color: "#86b598" }}>⚽ {name}</span>
                                ))}
                              </div>
                            ) : null;
                          })()}
                        </div>

                        {/* Opponent */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: 1 }}>
                          <TeamBadge name={m.opponent} size={72} />
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#4d7a5a", textAlign: "center", lineHeight: 1.3 }}>{m.opponent.replace(" FC","").replace(" AFC","").replace(" United","").replace(" Town","")}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {matches.length > 0 && (() => {
                  const league = matches.filter(m => !m.friendly && !m.cancelled && !m.cup);
                  const w = league.filter(m => m.goalsFor > m.goalsAgainst).length;
                  const d = league.filter(m => m.goalsFor === m.goalsAgainst).length;
                  const l = league.filter(m => m.goalsFor < m.goalsAgainst).length;
                  const gf = league.reduce((a, m) => a + m.goalsFor, 0);
                  const ga = league.reduce((a, m) => a + m.goalsAgainst, 0);
                  return (
                    <div style={{ ...S.card, padding: 14, marginTop: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>Season</div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                        {[["W", w, "#10B981"], ["D", d, "#F59E0B"], ["L", l, "#EF4444"], ["GF", gf, "#1e7a3e"], ["GA", ga, "#4d7a5a"], ["GD", gf - ga >= 0 ? "+" + (gf - ga) : gf - ga, gf - ga >= 0 ? "#10B981" : "#EF4444"]].map(([label, val, color]) => (
                          <div key={label} style={{ textAlign: "center", padding: "7px 4px", ...S.inset }}>
                            <div style={{ fontSize: 17, fontWeight: 800, color }}>{val}</div>
                            <div style={{ fontSize: 10, color: "#4d7a5a" }}>{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {selectedMatch && (
                <div>
                  <div style={{ ...S.card, padding: 20, marginBottom: 12 }}>
                    {(() => {
                      // Build scorers list
                      const scorers = [];
                      players.forEach(p => {
                        const s = selectedMatch.playerStats[p.id];
                        if (s?.goals > 0) {
                          for (let i = 0; i < s.goals; i++) scorers.push(p.name.split(" ")[0] + " " + (p.name.split(" ")[1]?.[0] || "") + ".");
                        }
                      });
                      const potmId = potmAwards[selectedMatch.id];
                      const potmPlayer = potmId ? players.find(p => p.id === potmId) : null;
                      return (
                        <>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            {/* Left — match info */}
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 4 }}>{new Date(selectedMatch.date).toLocaleDateString("en-IE", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} · {selectedMatch.venue}</div>
                              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
                          <TeamBadge name={selectedMatch.opponent} size={44} />
                          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#f0faf1" }}>vs {selectedMatch.opponent}</div>
                        </div>
                              {/* Score */}
                              <div style={{ fontSize: 36, fontWeight: 900, color: "#f0faf1", letterSpacing: "-1px", marginTop: 6, marginBottom: 6, display: "flex", alignItems: "center", gap: 12 }}>
                                {selectedMatch.cancelled ? <span style={{ fontSize: 14, color: "#4d7a5a", fontStyle: "italic" }}>Did not go ahead</span> :
                                  selectedMatch.forfeit ? <span style={{ fontSize: 18, color: "#EF4444" }}>0 – 3 <span style={{ fontSize: 11 }}>(w/o)</span></span> :
                                  editingMatchScore === selectedMatch.id ? (
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                      <input type="number" min="0" value={matchScoreDraft.gf} onChange={e => setMatchScoreDraft(p => ({ ...p, gf: e.target.value }))}
                                        style={{ width: 52, background: "#0a1a0f", border: "1px solid #1e7a3e", borderRadius: 8, padding: "4px 8px", color: "#f0faf1", fontFamily: "inherit", fontSize: 28, fontWeight: 900, textAlign: "center", outline: "none" }} />
                                      <span style={{ color: "#2d5a3d", fontWeight: 400 }}>–</span>
                                      <input type="number" min="0" value={matchScoreDraft.ga} onChange={e => setMatchScoreDraft(p => ({ ...p, ga: e.target.value }))}
                                        style={{ width: 52, background: "#0a1a0f", border: "1px solid #1e7a3e", borderRadius: 8, padding: "4px 8px", color: "#f0faf1", fontFamily: "inherit", fontSize: 28, fontWeight: 900, textAlign: "center", outline: "none" }} />
                                      <button onClick={() => {
                                        const updated = matches.map(m => m.id === selectedMatch.id ? { ...m, goalsFor: parseInt(matchScoreDraft.gf)||0, goalsAgainst: parseInt(matchScoreDraft.ga)||0 } : m);
                                        saveMatches(updated);
                                        setSelectedMatch(prev => ({ ...prev, goalsFor: parseInt(matchScoreDraft.gf)||0, goalsAgainst: parseInt(matchScoreDraft.ga)||0 }));
                                        setEditingMatchScore(null);
                                      }} style={{ background: "#1e7a3e", border: "none", color: "white", padding: "6px 12px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 700 }}>✓</button>
                                      <button onClick={() => setEditingMatchScore(null)} style={{ background: "#112318", border: "1px solid #1e3d28", color: "#4d7a5a", padding: "6px 10px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>✕</button>
                                    </div>
                                  ) : (
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                      {selectedMatch.goalsFor} <span style={{ color: "#2d5a3d", fontWeight: 400 }}>–</span> {selectedMatch.goalsAgainst} <ResultBadge gf={selectedMatch.goalsFor} ga={selectedMatch.goalsAgainst} />
                                      <button onClick={() => { setEditingMatchScore(selectedMatch.id); setMatchScoreDraft({ gf: selectedMatch.goalsFor, ga: selectedMatch.goalsAgainst }); }}
                                        style={{ background: "none", border: "1px solid #1e3d28", color: "#4d7a5a", padding: "3px 8px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11 }}>✏️</button>
                                    </div>
                                  )
                                }
                              </div>
                              {/* Scorers — Sky Sports style */}
                              {scorers.length > 0 && (
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
                                  {scorers.map((name, i) => (
                                    <span key={i} style={{ fontSize: 22, fontWeight: 600, color: "#86b598", display: "flex", alignItems: "center", gap: 4 }}>
                                      ⚽ {name}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Right — POTM + Edit */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, marginLeft: 16 }}>
                              {editingStats !== selectedMatch.id && <button className="btn-g" onClick={() => startEditing(selectedMatch)}>✏️ Edit Stats</button>}
                              {/* POTM */}
                              <div style={{ textAlign: "right" }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 5 }}>🏆 Player of the Match</div>
                                {potmAwards[selectedMatch.id] ? (
                                  <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "flex-end" }}>
                                    <div style={{ textAlign: "right" }}>
                                      <div style={{ fontWeight: 700, fontSize: 13, color: "#F59E0B" }}>{players.find(p=>p.id===potmAwards[selectedMatch.id])?.name}</div>
                                      <div style={{ fontSize: 10, color: "#4d7a5a" }}>Official Award</div>
                                    </div>
                                    <div style={{ fontSize: 24 }}>🏆</div>
                                    <button onClick={() => (() => { const n={...potmAwards}; delete n[selectedMatch.id]; savePotmAwards(n); })()}
                                      style={{ background: "none", border: "none", color: "#2d5a3d", cursor: "pointer", fontSize: 14 }}>×</button>
                                  </div>
                                ) : (
                                  <div>
                                    {potmPolls[selectedMatch.id]?.open ? (
                                      <span style={{ fontSize: 11, color: "#10B981", fontWeight: 700 }}>🟢 Voting open</span>
                                    ) : (
                                      <button onClick={() => {
                                        const nominees = players.filter(p => selectedMatch.playerStats[p.id]?.played).map(p => p.id);
                                        savePoll(selectedMatch.id, nominees, true);
                                      }} style={{ background: "#1e7a3e22", border: "1px solid #1e7a3e44", color: "#4ade80", padding: "5px 12px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: 700 }}>
                                        Open Vote
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>

                  <div style={{ ...S.card, padding: 18, overflowX: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px" }}>Player Stats</div>
                      {editingStats === selectedMatch.id && (
                        <div style={{ display: "flex", gap: 8 }}>
                          <button className="btn-p" onClick={saveStats}>Save</button>
                          <button className="btn-g" onClick={() => setEditingStats(null)}>Cancel</button>
                        </div>
                      )}
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid #1e3d28" }}>
                          {["Player", "Played", "Started", "Goals", "Assists", "🟨", "🟥", "Rating"].map(h => (
                            <th key={h} style={{ textAlign: h === "Player" ? "left" : "center", padding: "6px 8px", fontSize: 10, color: "#4d7a5a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", whiteSpace: "nowrap" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {players.map(p => {
                          const s = editingStats === selectedMatch.id ? draftStats[p.id] : selectedMatch.playerStats[p.id];
                          if (!s) return null;
                          return (
                            <tr key={p.id} style={{ borderBottom: "1px solid #0a1a0f", opacity: s.played ? 1 : 0.4 }}>
                              <td style={{ padding: "8px 8px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                                  <span style={{ width: 22, height: 22, borderRadius: 5, background: POSITION_COLORS[p.position] + "22", border: `1px solid ${POSITION_COLORS[p.position]}44`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: POSITION_COLORS[p.position] }}>{p.number}</span>
                                  <span style={{ color: "#c8e6c9", fontWeight: 500, whiteSpace: "nowrap" }}>{p.name}</span>
                                </div>
                              </td>
                              {editingStats === selectedMatch.id ? (
                                <>
                                  <td style={{ textAlign: "center" }}><input type="checkbox" className="chk" checked={s.played} onChange={e => updateDraft(p.id, "played", e.target.checked)} /></td>
                                  <td style={{ textAlign: "center" }}><input type="checkbox" className="chk" checked={s.started} onChange={e => updateDraft(p.id, "started", e.target.checked)} /></td>
                                  <td style={{ textAlign: "center" }}><input type="number" className="stat-in" min="0" value={s.goals} onChange={e => updateDraft(p.id, "goals", parseInt(e.target.value) || 0)} /></td>
                                  <td style={{ textAlign: "center" }}><input type="number" className="stat-in" min="0" value={s.assists} onChange={e => updateDraft(p.id, "assists", parseInt(e.target.value) || 0)} /></td>
                                  <td style={{ textAlign: "center" }}><input type="checkbox" className="chk" checked={s.yellowCard} onChange={e => updateDraft(p.id, "yellowCard", e.target.checked)} /></td>
                                  <td style={{ textAlign: "center" }}><input type="checkbox" className="chk" checked={s.redCard} onChange={e => updateDraft(p.id, "redCard", e.target.checked)} /></td>
                                  <td style={{ textAlign: "center" }}><input type="number" className="stat-in" min="0" max="10" value={s.rating} onChange={e => updateDraft(p.id, "rating", parseInt(e.target.value) || 0)} /></td>
                                </>
                              ) : (
                                <>
                                  <td style={{ textAlign: "center", color: s.played ? "#10B981" : "#EF4444" }}>{s.played ? "✓" : "–"}</td>
                                  <td style={{ textAlign: "center", color: s.started ? "#10B981" : "#4d7a5a" }}>{s.started ? "✓" : s.played ? "Sub" : "–"}</td>
                                  <td style={{ textAlign: "center", fontWeight: 700, color: s.goals > 0 ? "#f0faf1" : "#2d5a3d" }}>{s.played ? s.goals : "–"}</td>
                                  <td style={{ textAlign: "center", fontWeight: 700, color: s.assists > 0 ? "#f0faf1" : "#2d5a3d" }}>{s.played ? s.assists : "–"}</td>
                                  <td style={{ textAlign: "center" }}>{s.yellowCard ? "🟨" : "–"}</td>
                                  <td style={{ textAlign: "center" }}>{s.redCard ? "🟥" : "–"}</td>
                                  <td style={{ textAlign: "center", fontWeight: 700, color: s.rating >= 8 ? "#10B981" : s.rating >= 6 ? "#F59E0B" : s.rating ? "#EF4444" : "#2d5a3d" }}>{s.played && s.rating ? `${s.rating}/10` : "–"}</td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Match Review */}
                  <div style={{ ...S.card, padding: 18, marginTop: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px" }}>📝 Match Review</div>
                      <div style={{ display: "flex", gap: 4 }}>
                        {COACHES.map(c => (
                          <button key={c} onClick={() => setActiveCoach(c)}
                            style={{ background: activeCoach === c ? "#1e7a3e22" : "none", border: `1px solid ${activeCoach === c ? "#1e7a3e" : "#2d5a3d"}`, color: activeCoach === c ? "#1e7a3e" : "#4d7a5a", padding: "3px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 10, fontWeight: 600 }}>
                            {c.split(" ")[0]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review sections */}
                    {[
                      { key: "performance",  label: "Overall Performance",     placeholder: "How did the team perform overall? What was the general feeling?" },
                      { key: "positives",    label: "Positives",               placeholder: "What went well? Highlight moments, patterns or individual performances..." },
                      { key: "improvements", label: "Areas for Improvement",   placeholder: "What do we need to work on in training before the next game?" },
                      { key: "nextGame",     label: "Preparation for Next Game", placeholder: "What's the focus for the next session? Any specific tactical changes?" },
                    ].map(({ key, label, placeholder }) => {
                      const reviewKey = `${selectedMatch.id}:${activeCoach}:${key}`;
                      const value = matchReviews[reviewKey] || "";
                      return (
                        <div key={key} style={{ marginBottom: 14 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a", fontWeight: 600, marginBottom: 5 }}>{label}</div>
                          <textarea
                            value={value}
                            onChange={e => setMatchReviews(prev => ({ ...prev, [reviewKey]: e.target.value }))}
                            onBlur={e => saveMatchReviews({ ...matchReviews, [reviewKey]: e.target.value })}
                            placeholder={placeholder}
                            rows={3}
                            style={{ background: "#0a1a0f", border: "1px solid #1e3d28", borderRadius: 8, padding: "8px 12px", color: "#E8F5E9", fontFamily: "inherit", fontSize: 12, outline: "none", width: "100%", resize: "vertical", lineHeight: 1.6 }}
                            onFocus={e => e.target.style.borderColor = "#1e7a3e"}
                          />
                          {/* Show other coach's review read-only if they have one */}
                          {COACHES.filter(c => c !== activeCoach).map(otherCoach => {
                            const otherKey = `${selectedMatch.id}:${otherCoach}:${key}`;
                            const otherVal = matchReviews[otherKey];
                            if (!otherVal) return null;
                            return (
                              <div key={otherCoach} style={{ marginTop: 6, padding: "8px 12px", background: "#112318", borderRadius: 7, borderLeft: "3px solid #2d5a3d" }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: "#2d5a3d", marginBottom: 3 }}>{otherCoach.split(" ")[0]}'s notes:</div>
                                <p style={{ fontSize: 12, color: "#4d7a5a", lineHeight: 1.6 }}>{otherVal}</p>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  {/* POTM Voting Panel (coach) */}
                  {potmPolls[selectedMatch.id] && (
                    <div style={{ ...S.card, padding: 18, marginTop: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px" }}>🏆 POTM Voting Results</div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: potmPolls[selectedMatch.id]?.open ? "#10B981" : "#EF4444" }}>
                            {potmPolls[selectedMatch.id]?.open ? "🟢 Voting open" : "🔴 Voting closed"}
                          </span>
                          <button onClick={() => savePoll(selectedMatch.id, potmPolls[selectedMatch.id]?.nominees || [], !potmPolls[selectedMatch.id]?.open)}
                            style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11 }}>
                            {potmPolls[selectedMatch.id]?.open ? "Close" : "Reopen"}
                          </button>
                          <button onClick={() => loadPotmVotes()} style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11 }}>↻ Refresh</button>
                        </div>
                      </div>
                      {(() => {
                        const nominees = potmPolls[selectedMatch.id]?.nominees || [];
                        const voteTally = potmVotes[selectedMatch.id] || {};
                        const totalVotes = Object.values(voteTally).reduce((s,v) => s+v, 0);
                        const sorted = [...nominees].sort((a,b) => (voteTally[b]||0) - (voteTally[a]||0));
                        return sorted.length === 0
                          ? <div style={{ fontSize: 13, color: "#4d7a5a", fontStyle: "italic" }}>No players nominated yet.</div>
                          : sorted.map((pid, i) => {
                              const p = players.find(pl => pl.id === pid);
                              if (!p) return null;
                              const votes = voteTally[pid] || 0;
                              const pct = totalVotes > 0 ? Math.round((votes/totalVotes)*100) : 0;
                              const isWinner = i === 0 && votes > 0;
                              return (
                                <div key={pid} style={{ marginBottom: 10 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                      {isWinner && <span style={{ fontSize: 14 }}>🏆</span>}
                                      <span style={{ fontSize: 13, fontWeight: isWinner ? 700 : 500, color: isWinner ? "#F59E0B" : "#E8F5E9" }}>{p.name}</span>
                                      <span style={{ fontSize: 10, color: "#4d7a5a" }}>#{p.number}</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                      <span style={{ fontSize: 13, fontWeight: 700, color: isWinner ? "#F59E0B" : "#86b598" }}>{votes} vote{votes !== 1 ? "s" : ""}</span>
                                      {!potmAwards[selectedMatch.id] && (
                                        <button onClick={() => awardPotm(selectedMatch.id, pid)}
                                          style={{ background: "#F59E0B22", border: "1px solid #F59E0B44", color: "#F59E0B", padding: "3px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: 700 }}>Award 🏆</button>
                                      )}
                                    </div>
                                  </div>
                                  <div style={{ height: 6, background: "#0a1a0f", borderRadius: 3, overflow: "hidden" }}>
                                    <div style={{ height: "100%", width: `${pct}%`, background: isWinner ? "#F59E0B" : "#1e7a3e", borderRadius: 3, transition: "width 0.5s ease" }} />
                                  </div>
                                </div>
                              );
                            });
                      })()}
                      {potmAwards[selectedMatch.id] && (
                        <div style={{ marginTop: 12, padding: "10px 14px", background: "#F59E0B11", border: "1px solid #F59E0B33", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 20 }}>🏆</span>
                          <div>
                            <div style={{ fontSize: 11, color: "#4d7a5a", fontWeight: 700 }}>OFFICIAL AWARD</div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: "#F59E0B" }}>{players.find(p=>p.id===potmAwards[selectedMatch.id])?.name}</div>
                          </div>
                          <button onClick={() => (() => { const n={...potmAwards}; delete n[selectedMatch.id]; savePotmAwards(n); })()}
                            style={{ marginLeft: "auto", background: "none", border: "none", color: "#2d5a3d", cursor: "pointer", fontSize: 16 }}>×</button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Matchday Photo */}
                  <div style={{ ...S.card, padding: 18, marginTop: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Matchday Photo</div>
                    {matchPhotos[selectedMatch.id] ? (
                      <div>
                        <img src={matchPhotos[selectedMatch.id]} alt="Matchday" style={{ width: "100%", borderRadius: 8, maxHeight: 340, objectFit: "cover", display: "block" }} />
                        <button onClick={() => removePhoto(selectedMatch.id)} style={{ marginTop: 10, background: "none", border: "1px solid #2d5a3d", color: "#4d7a5a", padding: "5px 14px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12 }}>Remove photo</button>
                      </div>
                    ) : (
                      <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "32px 16px", border: "2px dashed #1e3d28", borderRadius: 10, cursor: "pointer", transition: "border-color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "#1e7a3e"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "#1e3d28"}>
                        <div style={{ fontSize: 28 }}>📷</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#86b598" }}>Upload matchday photo</div>
                        <div style={{ fontSize: 11, color: "#4d7a5a" }}>JPG, PNG or HEIC</div>
                        <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => handlePhotoUpload(selectedMatch.id, e)} />
                      </label>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── STATS ── */}
        {tab === "stats" && view === "coach" && (() => {
          const league = matches.filter(m => !m.friendly && !m.cancelled && !m.cup);
          const goalsScored = league.reduce((s,m) => s + m.goalsFor, 0);
          const goalsConceded = league.reduce((s,m) => s + m.goalsAgainst, 0);
          const wins = league.filter(m => m.goalsFor > m.goalsAgainst).length;
          const cleanSheets = league.filter(m => m.goalsAgainst === 0).length;
          const winRate = league.length ? Math.round((wins / league.length) * 100) : 0;

          const topScorers = [...players].map(p => ({ p, g: matches.reduce((s,m) => s + (m.playerStats[p.id]?.goals||0), 0) })).filter(x=>x.g>0).sort((a,b)=>b.g-a.g).slice(0,5);
          const topAssists = [...players].map(p => ({ p, a: matches.reduce((s,m) => s + (m.playerStats[p.id]?.assists||0), 0) })).filter(x=>x.a>0).sort((a,b)=>b.a-a.a).slice(0,5);
          const topContrib = [...players].map(p => ({ p, c: matches.reduce((s,m) => s + (m.playerStats[p.id]?.goals||0) + (m.playerStats[p.id]?.assists||0), 0) })).filter(x=>x.c>0).sort((a,b)=>b.c-a.c).slice(0,5);
          const topRating = [...players].map(p => {
            let sum=0, cnt=0;
            matches.forEach(m => { const s=m.playerStats[p.id]; if(s?.played && s.rating) { sum+=s.rating; cnt++; } });
            return { p, avg: cnt ? (sum/cnt).toFixed(1) : null, cnt };
          }).filter(x=>x.avg && x.cnt>=2).sort((a,b)=>b.avg-a.avg).slice(0,5);
          const topApps = [...players].map(p => ({ p, apps: matches.filter(m=>!m.cancelled && m.playerStats[p.id]?.played).length })).filter(x=>x.apps>0).sort((a,b)=>b.apps-a.apps).slice(0,5);
          const potmRanking = Object.entries(potmAwards).reduce((acc,[,pid]) => { acc[pid]=(acc[pid]||0)+1; return acc; }, {});
          const topPotm = Object.entries(potmRanking).map(([pid,n]) => ({ p: players.find(p=>p.id===parseInt(pid)), n })).filter(x=>x.p).sort((a,b)=>b.n-a.n).slice(0,5);
          const cleanSheetPlayers = [...players].filter(p => p.position === "GK").map(p => ({ p, cs: matches.filter(m=>!m.cancelled && m.goalsAgainst===0 && m.playerStats[p.id]?.played).length }));
          const topReliable = [...players].map(p => ({ p, pct: matchAttPct(p.id) })).sort((a,b)=>b.pct-a.pct).slice(0,5);

          const StatCard = ({ title, rows, cols, emptyMsg }) => (
            <div style={{ ...S.card, padding: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>{title}</div>
              {rows.length === 0 ? (
                <div style={{ fontSize: 12, color: "#2d5a3d", fontStyle: "italic" }}>{emptyMsg || "No data yet"}</div>
              ) : rows.map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < rows.length-1 ? "1px solid #0a1a0f" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#2d5a3d", width: 16, textAlign: "right" }}>{i+1}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#E8F5E9" }}>{row.name}</span>
                    {row.sub && <span style={{ fontSize: 10, color: "#4d7a5a" }}>{row.sub}</span>}
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: row.color || "#1e7a3e" }}>{row.value}</span>
                </div>
              ))}
            </div>
          );

          return (
            <div>
              {/* Team summary bar */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
                {[
                  { label: "Goals Scored", val: goalsScored, color: "#10B981" },
                  { label: "Goals Against", val: goalsConceded, color: "#EF4444" },
                  { label: "Clean Sheets", val: cleanSheets, color: "#1e7a3e" },
                  { label: "Wins", val: wins, color: "#F59E0B" },
                  { label: "Win Rate", val: winRate + "%", color: "#1e7a3e" },
                ].map(x => (
                  <div key={x.label} style={{ ...S.card, padding: "14px 18px", flex: "1 1 120px", textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: x.color, fontFamily: "'Space Grotesk',sans-serif" }}>{x.val}</div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.6px", marginTop: 4 }}>{x.label}</div>
                  </div>
                ))}
              </div>

              {/* Stat cards grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 }}>
                <StatCard title="⚽ Top Scorers" rows={topScorers.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], sub: `#${x.p.number}`, value: x.g, color: "#10B981" }))} />
                <StatCard title="🎯 Top Assists" rows={topAssists.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], sub: `#${x.p.number}`, value: x.a, color: "#1e7a3e" }))} />
                <StatCard title="🏅 Goal Contributions" rows={topContrib.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], sub: `#${x.p.number}`, value: x.c, color: "#F59E0B" }))} />
                <StatCard title="⭐ Best Avg Rating" rows={topRating.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], sub: `${x.cnt} games`, value: x.avg, color: "#F59E0B" }))} emptyMsg="Ratings not entered yet" />
                <StatCard title="🏆 Player of the Match" rows={topPotm.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], value: x.n + "x", color: "#F59E0B" }))} emptyMsg="No POTM awarded yet" />
                <StatCard title="📋 Most Appearances" rows={topApps.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], sub: `#${x.p.number}`, value: x.apps, color: "#1e7a3e" }))} />
                <StatCard title="🧤 Clean Sheets (GK)" rows={cleanSheetPlayers.filter(x=>x.cs>0).map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], value: x.cs, color: "#10B981" }))} emptyMsg="No clean sheet data" />
                <StatCard title="📅 Most Reliable" rows={topReliable.map(x=>({ name: x.p.name.split(" ")[0]+" "+x.p.name.split(" ")[1], sub: `#${x.p.number}`, value: x.pct + "%", color: "#10B981" }))} />
              </div>
            </div>
          );
        })()}

        {/* ── LEAGUE TABLE ── */}
        {tab === "league" && view === "coach" && <LeagueTab leagueData={leagueData} />}

        {/* ── SESSIONS ── */}
        {tab === "sessions" && (
          <div style={{ display: "grid", gridTemplateColumns: selectedSession ? "280px 1fr" : "repeat(auto-fill,minmax(260px,1fr))", gap: 14, alignItems: "start" }}>

            {/* ── SESSION LIST ── */}
            <div>
              {!selectedSession && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 }}>
                  {sessions.map(s => {
                    const isPast = new Date(s.date) < new Date();
                    const attended = players.filter(p => trainingAttendance[s.id]?.[p.id]).length;
                    const d1 = DRILLS.find(d => d.id === s.drill1);
                    const d2 = DRILLS.find(d => d.id === s.drill2);
                    return (
                      <div key={s.id} onClick={() => { setSelectedSession(s); setEditingSessionDrills(false); }}
                        style={{ ...S.card, padding: 18, cursor: "pointer", opacity: isPast ? 0.5 : 1, transition: "box-shadow 0.15s" }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 0 1px #1e7a3e"}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = ""}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a" }}>{new Date(s.date).toLocaleDateString("en-IE", { weekday: "short", day: "numeric", month: "short" })}</div>
                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            {isPast && <span style={{ fontSize: 9, fontWeight: 700, color: "#2d5a3d", textTransform: "uppercase" }}>past</span>}
                            <span className="pill" style={{ background: (FOCUS_COLORS[s.focus] || "#1e7a3e") + "22", color: FOCUS_COLORS[s.focus] || "#1e7a3e" }}>{s.focus}</span>
                          </div>
                        </div>
                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16, color: "#f0faf1", marginBottom: 6 }}>{s.title}</div>
                        <div style={{ fontSize: 12, color: "#4d7a5a", marginBottom: 12, display: "flex", gap: 12 }}>
                          <span>&#9201; {s.duration} mins</span>
                          <span style={{ color: attended > 0 ? "#10B981" : "#4d7a5a" }}>&#128101; {attended}/{players.length}</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                          <div style={{ fontSize: 11, color: "#4d7a5a", display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 9, fontWeight: 700, color: "#F59E0B", minWidth: 60 }}>WARM-UP</span><span>{s.warmup ? (DRILLS.find(d=>d.id===s.warmup)?.name || "—") : <span style={{color:"#2d5a3d",fontStyle:"italic"}}>Standard warm-up</span>}</span></div>
                          <div style={{ fontSize: 11, color: "#4d7a5a", display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 9, fontWeight: 700, color: "#1e7a3e", minWidth: 60 }}>DRILL 1</span><span>{d1 ? d1.name : <span style={{color:"#2d5a3d",fontStyle:"italic"}}>Not set</span>}</span></div>
                          <div style={{ fontSize: 11, color: "#4d7a5a", display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 9, fontWeight: 700, color: "#1e7a3e", minWidth: 60 }}>DRILL 2</span><span>{d2 ? d2.name : <span style={{color:"#2d5a3d",fontStyle:"italic"}}>Not set</span>}</span></div>
                          <div style={{ fontSize: 11, color: "#4d7a5a", display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 9, fontWeight: 700, color: "#10B981", minWidth: 60 }}>GAME</span><span>{s.game ? (DRILLS.find(d=>d.id===s.game)?.name || "—") : <span style={{color:"#2d5a3d",fontStyle:"italic"}}>Small-sided game</span>}</span></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {selectedSession && (
                <div>
                  <button onClick={() => { setSelectedSession(null); setEditingSessionDrills(false); }} className="btn-g" style={{ marginBottom: 12, fontSize: 12 }}>&#8592; All Sessions</button>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {sessions.map(s => {
                      const isPast = new Date(s.date) < new Date();
                      const isSelected = selectedSession?.id === s.id;
                      return (
                        <div key={s.id} onClick={() => { setSelectedSession(s); setEditingSessionDrills(false); }}
                          style={{ padding: "10px 14px", borderRadius: 8, cursor: "pointer", background: isSelected ? "#1a3d25" : "transparent", borderLeft: `3px solid ${isSelected ? "#1e7a3e" : "transparent"}`, opacity: isPast ? 0.5 : 1 }}>
                          <div style={{ fontWeight: 600, fontSize: 13, color: isSelected ? "#E8F5E9" : "#86b598" }}>{s.title}</div>
                          <div style={{ fontSize: 11, color: "#4d7a5a" }}>{new Date(s.date).toLocaleDateString("en-IE", { weekday: "short", day: "numeric", month: "short" })}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ── SESSION DETAIL ── */}
            {selectedSession && (() => {
              // Always read from live sessions array so plan updates reflect immediately
              const ss = sessions.find(s => s.id === selectedSession.id) || selectedSession;
              const attended = players.filter(p => trainingAttendance[ss.id]?.[p.id]).length;
              const isPast = new Date(ss.date) < new Date();

              const DrillSlot = ({ label, labelColor, slotKey, minsLabel, emptyText }) => {
                const drillId = ss[slotKey];
                const drill = drillId ? DRILLS.find(d => d.id === drillId) : null;
                const [picking, setPicking] = React.useState(false);
                const [srch, setSrch] = React.useState("");
                const [cat, setCat] = React.useState("All");
                const cats = ["All","Technical","Attacking","Defending","Tactical","Physical","Set Pieces"];
                const filtD = DRILLS.filter(d => (cat==="All"||d.category===cat) && d.name.toLowerCase().includes(srch.toLowerCase()));
                return (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: labelColor, textTransform: "uppercase", letterSpacing: "0.8px" }}>{label}</span>
                        <span style={{ fontSize: 10, color: "#4d7a5a" }}>{minsLabel}</span>
                      </div>
                      <button className="btn-g" style={{ fontSize: 11, padding: "3px 10px" }} onClick={() => setPicking(p => !p)}>
                        {picking ? "Done" : drill ? "Change" : "+ Add"}
                      </button>
                    </div>
                    {drill && !picking && (
                      <div style={{ padding: "12px 14px", ...S.inset, display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 4 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <div style={{ fontWeight: 600, fontSize: 14, color: "#E8F5E9" }}>{drill.name}</div>
                            <div style={{ display: "flex", gap: 5 }}>
                              <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: (FOCUS_COLORS[drill.category]||"#1e7a3e")+"22", color: FOCUS_COLORS[drill.category]||"#1e7a3e" }}>{drill.category}</span>
                            </div>
                          </div>
                          <p style={{ fontSize: 12, color: "#4d7a5a", lineHeight: 1.5, margin: "0 0 4px" }}>{drill.description}</p>
                          <div style={{ fontSize: 11, color: "#4d7a5a" }}>&#9201; {drill.duration} mins &middot; &#128101; {drill.players}</div>
                          {drill.coachingPoints && (
                            <div style={{ marginTop: 8 }}>
                              <div style={{ fontSize: 10, fontWeight: 700, color: "#1e7a3e", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 4 }}>&#127919; Coaching Points</div>
                              <ul style={{ margin: 0, paddingLeft: 16 }}>{drill.coachingPoints.slice(0,3).map((pt,i) => <li key={i} style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 2 }}>{pt}</li>)}</ul>
                            </div>
                          )}
                        </div>
                        <button onClick={() => updateSessionPlan(ss.id, slotKey, null)}
                          style={{ background: "#EF444422", border: "1px solid #EF444433", color: "#EF4444", borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontFamily: "inherit", fontSize: 12, flexShrink: 0 }}>&#10005;</button>
                      </div>
                    )}
                    {!drill && !picking && (
                      <div style={{ padding: "14px 16px", ...S.inset, textAlign: "center", marginBottom: 4 }}>
                        <div style={{ fontSize: 12, color: "#2d5a3d", fontStyle: "italic" }}>{emptyText}</div>
                      </div>
                    )}
                    {picking && (
                      <div style={{ ...S.inset, padding: 12, marginBottom: 4 }}>
                        <input value={srch} onChange={e => setSrch(e.target.value)} placeholder="Search drills..."
                          style={{ width: "100%", background: "#0A1628", border: "1px solid #1e3d28", borderRadius: 6, color: "#E8F5E9", padding: "6px 10px", fontSize: 12, fontFamily: "inherit", boxSizing: "border-box", marginBottom: 8 }} />
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 8 }}>
                          {cats.map(c => (
                            <button key={c} onClick={() => setCat(c)}
                              style={{ background: cat===c?"#1e7a3e":"#112318", border:`1px solid ${cat===c?"#1e7a3e":"#1e3d28"}`, color: cat===c?"white":"#4d7a5a", padding: "3px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: 10, fontWeight: 600 }}>{c}</button>
                          ))}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 3, maxHeight: 240, overflowY: "auto" }}>
                          {filtD.map(d => (
                            <div key={d.id} onClick={() => { updateSessionPlan(ss.id, slotKey, d.id); setPicking(false); setSrch(""); setCat("All"); }}
                              style={{ padding: "8px 10px", borderRadius: 6, cursor: "pointer", background: ss[slotKey]===d.id?"#1a3d25":"transparent", border:`1px solid ${ss[slotKey]===d.id?"#1e7a3e":"transparent"}` }}
                              onMouseEnter={e => { if(ss[slotKey]!==d.id) e.currentTarget.style.background="#0a1a0f"; }}
                              onMouseLeave={e => { if(ss[slotKey]!==d.id) e.currentTarget.style.background="transparent"; }}>
                              <div style={{ fontWeight: 600, fontSize: 13, color: "#E8F5E9" }}>{d.name}</div>
                              <div style={{ fontSize: 11, color: "#4d7a5a" }}>{d.category} &middot; {d.duration} mins &middot; {d.intensity}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              };

              return (
                <div style={{ ...S.card, padding: 22 }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, color: "#f0faf1" }}>{ss.title}</div>
                      <div style={{ fontSize: 12, color: "#4d7a5a", marginTop: 4 }}>
                        {new Date(ss.date).toLocaleDateString("en-IE", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} &middot; {ss.duration} mins
                        {isPast && <span style={{ marginLeft: 8, fontSize: 10, color: "#2d5a3d", fontWeight: 700, textTransform: "uppercase" }}>&middot; past</span>}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span className="pill" style={{ background: (FOCUS_COLORS[ss.focus]||"#1e7a3e")+"22", color: FOCUS_COLORS[ss.focus]||"#1e7a3e" }}>{ss.focus}</span>
                    </div>
                  </div>

                  {/* Edit meta */}
                  {editingSessionDrills && (
                    <div style={{ ...S.inset, padding: 14, marginBottom: 18 }}>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                        <div style={{ flex: 2, minWidth: 160 }}>
                          <div style={{ fontSize: 10, color: "#4d7a5a", marginBottom: 4 }}>Title</div>
                          <input value={ss.title} onChange={e => updateSessionPlan(ss.id, "title", e.target.value)}
                            style={{ width: "100%", background: "#0A1628", border: "1px solid #1e3d28", borderRadius: 6, color: "#E8F5E9", padding: "6px 10px", fontSize: 13, fontFamily: "inherit", boxSizing: "border-box" }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 110 }}>
                          <div style={{ fontSize: 10, color: "#4d7a5a", marginBottom: 4 }}>Focus</div>
                          <select value={ss.focus} onChange={e => updateSessionPlan(ss.id, "focus", e.target.value)}
                            style={{ width: "100%", background: "#0A1628", border: "1px solid #1e3d28", borderRadius: 6, color: "#E8F5E9", padding: "6px 10px", fontSize: 13, fontFamily: "inherit" }}>
                            {["Technical","Tactical","Physical","Attacking","Defending","Set Pieces"].map(f => <option key={f} value={f}>{f}</option>)}
                          </select>
                        </div>
                        <div style={{ width: 90 }}>
                          <div style={{ fontSize: 10, color: "#4d7a5a", marginBottom: 4 }}>Mins</div>
                          <input type="number" value={ss.duration} onChange={e => updateSessionPlan(ss.id, "duration", parseInt(e.target.value)||60)}
                            style={{ width: "100%", background: "#0A1628", border: "1px solid #1e3d28", borderRadius: 6, color: "#E8F5E9", padding: "6px 10px", fontSize: 13, fontFamily: "inherit" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                    <button className="btn-g" style={{ fontSize: 11, padding: "4px 12px" }} onClick={() => setEditingSessionDrills(!editingSessionDrills)}>
                      {editingSessionDrills ? "&#10003; Done Editing" : "&#9998;&#65039; Edit Session"}
                    </button>
                  </div>

                  {/* ── ATTENDANCE ── */}
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>
                    Attendance &mdash; {attended}/{players.length} present
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
                    {players.map(p => {
                      const here = trainingAttendance[ss.id]?.[p.id] || false;
                      return (
                        <div key={p.id} onClick={() => toggleTraining(ss.id, p.id)}
                          style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, cursor: "pointer", background: here ? "#10B98122" : "#0a1a0f", border: `1px solid ${here ? "#10B981" : "#1e3d28"}`, transition: "all 0.15s" }}>
                          <span style={{ width: 20, height: 20, borderRadius: 5, background: POSITION_COLORS[p.position]+"22", border: `1px solid ${POSITION_COLORS[p.position]}44`, display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize: 9, fontWeight: 700, color: POSITION_COLORS[p.position] }}>{p.number}</span>
                          <span style={{ fontSize: 12, fontWeight: 500, color: here ? "#10B981" : "#4d7a5a" }}>{p.name.split(" ")[0]}</span>
                          {here && <span style={{ fontSize: 10, color: "#10B981" }}>&#10003;</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* ── SESSION PLAN ── */}
                  <div style={{ borderTop: "1px solid #1e3d28", paddingTop: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 18 }}>Session Plan</div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                      {/* Warm-up */}
                      <div style={{ display: "flex", gap: 0, marginBottom: 18 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 14, paddingTop: 2 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F59E0B22", border: "2px solid #F59E0B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>&#128293;</div>
                          <div style={{ width: 2, flex: 1, background: "#1e3d28", marginTop: 4 }} />
                        </div>
                        <div style={{ flex: 1, paddingBottom: 4 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                            <div>
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>Warm-Up</span>
                              <span style={{ fontSize: 11, color: "#4d7a5a", marginLeft: 8 }}>10 mins</span>
                            </div>
                            {editingSessionDrills && (
                              <DrillSlot label="" labelColor="#F59E0B" slotKey="warmup" minsLabel="" emptyText="" />
                            )}
                          </div>
                          {!editingSessionDrills && (() => {
                            const drill = ss.warmup ? DRILLS.find(d => d.id === ss.warmup) : null;
                            return drill ? (
                              <div style={{ padding: "10px 14px", ...S.inset }}>
                                <div style={{ fontWeight: 600, fontSize: 14, color: "#E8F5E9", marginBottom: 3 }}>{drill.name}</div>
                                <div style={{ fontSize: 11, color: "#4d7a5a" }}>&#9201; {drill.duration} mins &middot; &#128101; {drill.players}</div>
                              </div>
                            ) : (
                              <div style={{ padding: "10px 14px", ...S.inset }}>
                                <div style={{ fontSize: 12, color: "#4d7a5a" }}>Dynamic warm-up &mdash; jogging, stretches, activation</div>
                              </div>
                            );
                          })()}
                          {editingSessionDrills && (() => {
                            const drill = ss.warmup ? DRILLS.find(d => d.id === ss.warmup) : null;
                            return !drill ? (
                              <div style={{ padding: "10px 14px", ...S.inset }}>
                                <div style={{ fontSize: 12, color: "#2d5a3d", fontStyle: "italic" }}>Click + Add to assign a warm-up drill, or leave for standard warm-up</div>
                              </div>
                            ) : null;
                          })()}
                        </div>
                      </div>

                      {/* Drill 1 */}
                      <div style={{ display: "flex", gap: 0, marginBottom: 18 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 14, paddingTop: 2 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1e7a3e22", border: "2px solid #1e7a3e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#1e7a3e", flexShrink: 0 }}>1</div>
                          <div style={{ width: 2, flex: 1, background: "#1e3d28", marginTop: 4 }} />
                        </div>
                        <div style={{ flex: 1, paddingBottom: 4 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: editingSessionDrills ? 0 : 8 }}>
                            <div>
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#1e7a3e" }}>Drill 1</span>
                              <span style={{ fontSize: 11, color: "#4d7a5a", marginLeft: 8 }}>15&ndash;20 mins</span>
                            </div>
                          </div>
                          {editingSessionDrills ? (
                            <DrillSlot label="" labelColor="#1e7a3e" slotKey="drill1" minsLabel="" emptyText="Select a drill from the library" />
                          ) : (() => {
                            const drill = ss.drill1 ? DRILLS.find(d => d.id === ss.drill1) : null;
                            return drill ? (
                              <div style={{ padding: "12px 14px", ...S.inset }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                  <div style={{ fontWeight: 600, fontSize: 14, color: "#E8F5E9" }}>{drill.name}</div>
                                  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: (FOCUS_COLORS[drill.category]||"#1e7a3e")+"22", color: FOCUS_COLORS[drill.category]||"#1e7a3e" }}>{drill.category}</span>
                                </div>
                                <p style={{ fontSize: 12, color: "#4d7a5a", lineHeight: 1.5, margin: "0 0 6px" }}>{drill.description}</p>
                                <div style={{ fontSize: 11, color: "#4d7a5a" }}>&#9201; {drill.duration} mins &middot; &#128101; {drill.players}</div>
                                {drill.coachingPoints && (
                                  <div style={{ marginTop: 8 }}>
                                    <div style={{ fontSize: 10, fontWeight: 700, color: "#1e7a3e", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 4 }}>Coaching Points</div>
                                    <ul style={{ margin: 0, paddingLeft: 16 }}>{drill.coachingPoints.slice(0,3).map((pt,i) => <li key={i} style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 2 }}>{pt}</li>)}</ul>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div style={{ padding: "12px 14px", ...S.inset }}><div style={{ fontSize: 12, color: "#2d5a3d", fontStyle: "italic" }}>No drill set &mdash; click Edit Session to add one</div></div>
                            );
                          })()}
                        </div>
                      </div>

                      {/* Drill 2 */}
                      <div style={{ display: "flex", gap: 0, marginBottom: 18 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 14, paddingTop: 2 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1e7a3e22", border: "2px solid #1e7a3e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#1e7a3e", flexShrink: 0 }}>2</div>
                          <div style={{ width: 2, flex: 1, background: "#1e3d28", marginTop: 4 }} />
                        </div>
                        <div style={{ flex: 1, paddingBottom: 4 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: editingSessionDrills ? 0 : 8 }}>
                            <div>
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#1e7a3e" }}>Drill 2</span>
                              <span style={{ fontSize: 11, color: "#4d7a5a", marginLeft: 8 }}>15&ndash;20 mins</span>
                            </div>
                          </div>
                          {editingSessionDrills ? (
                            <DrillSlot label="" labelColor="#1e7a3e" slotKey="drill2" minsLabel="" emptyText="Select a drill from the library" />
                          ) : (() => {
                            const drill = ss.drill2 ? DRILLS.find(d => d.id === ss.drill2) : null;
                            return drill ? (
                              <div style={{ padding: "12px 14px", ...S.inset }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                  <div style={{ fontWeight: 600, fontSize: 14, color: "#E8F5E9" }}>{drill.name}</div>
                                  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: (FOCUS_COLORS[drill.category]||"#1e7a3e")+"22", color: FOCUS_COLORS[drill.category]||"#1e7a3e" }}>{drill.category}</span>
                                </div>
                                <p style={{ fontSize: 12, color: "#4d7a5a", lineHeight: 1.5, margin: "0 0 6px" }}>{drill.description}</p>
                                <div style={{ fontSize: 11, color: "#4d7a5a" }}>&#9201; {drill.duration} mins &middot; &#128101; {drill.players}</div>
                                {drill.coachingPoints && (
                                  <div style={{ marginTop: 8 }}>
                                    <div style={{ fontSize: 10, fontWeight: 700, color: "#1e7a3e", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 4 }}>Coaching Points</div>
                                    <ul style={{ margin: 0, paddingLeft: 16 }}>{drill.coachingPoints.slice(0,3).map((pt,i) => <li key={i} style={{ fontSize: 11, color: "#4d7a5a", marginBottom: 2 }}>{pt}</li>)}</ul>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div style={{ padding: "12px 14px", ...S.inset }}><div style={{ fontSize: 12, color: "#2d5a3d", fontStyle: "italic" }}>No drill set &mdash; click Edit Session to add one</div></div>
                            );
                          })()}
                        </div>
                      </div>

                      {/* Game */}
                      <div style={{ display: "flex", gap: 0 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 14, paddingTop: 2 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#10B98122", border: "2px solid #10B981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>&#9917;</div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: editingSessionDrills ? 0 : 8 }}>
                            <div>
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#10B981" }}>Game / SSG</span>
                              <span style={{ fontSize: 11, color: "#4d7a5a", marginLeft: 8 }}>10&ndash;20 mins</span>
                            </div>
                          </div>
                          {editingSessionDrills ? (
                            <DrillSlot label="" labelColor="#10B981" slotKey="game" minsLabel="" emptyText="Select a conditioned game or SSG" />
                          ) : (() => {
                            const drill = ss.game ? DRILLS.find(d => d.id === ss.game) : null;
                            return drill ? (
                              <div style={{ padding: "12px 14px", ...S.inset }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                  <div style={{ fontWeight: 600, fontSize: 14, color: "#E8F5E9" }}>{drill.name}</div>
                                  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: (FOCUS_COLORS[drill.category]||"#10B981")+"22", color: FOCUS_COLORS[drill.category]||"#10B981" }}>{drill.category}</span>
                                </div>
                                <p style={{ fontSize: 12, color: "#4d7a5a", lineHeight: 1.5, margin: "0 0 6px" }}>{drill.description}</p>
                                <div style={{ fontSize: 11, color: "#4d7a5a" }}>&#9201; {drill.duration} mins &middot; &#128101; {drill.players}</div>
                              </div>
                            ) : (
                              <div style={{ padding: "12px 14px", ...S.inset }}><div style={{ fontSize: 12, color: "#4d7a5a" }}>Small-sided game or conditioned game to apply the session theme &mdash; click Edit Session to assign a specific drill</div></div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── SESSION NOTES ── */}
                  <div style={{ borderTop: "1px solid #1e3d28", paddingTop: 18, marginTop: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Session Notes</div>
                    {COACHES.map(coach => (
                      <div key={coach} style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#4d7a5a", marginBottom: 6 }}>{coach}</div>
                        <textarea
                          value={matchReviews[`${ss.id}:${coach}:notes`] || ""}
                          onChange={e => setMatchReviews(prev => ({ ...prev, [`${ss.id}:${coach}:notes`]: e.target.value }))}
                          onBlur={e => saveMatchReviews({ ...matchReviews, [`${ss.id}:${coach}:notes`]: e.target.value })}
                          placeholder={activeCoach === coach ? "Key observations, things to work on, what went well..." : ""}
                          readOnly={activeCoach !== coach}
                          rows={3}
                          style={{ width: "100%", background: activeCoach===coach?"#0A1628":"#0A1628AA", border:`1px solid ${activeCoach===coach?"#1e3d28":"#0a1a0f"}`, borderRadius: 6, color: activeCoach===coach?"#E8F5E9":"#4d7a5a", padding: "8px 10px", fontSize: 12, fontFamily: "inherit", resize: "vertical", boxSizing: "border-box", lineHeight: 1.5 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ── DRILLS ── */}
        {tab === "drills" && (
          <DrillsTab drills={DRILLS} focusColors={FOCUS_COLORS} />
        )}

        {/* ── FORMATION VIEWER ── */}
        {tab === "formation" && view === "coach" && <FormationTab players={players} positionColors={POSITION_COLORS} />}

        {/* ── PLAYER COMPARISON ── */}
        {tab === "compare" && view === "coach" && <CompareTab players={players} matches={matches} positionColors={POSITION_COLORS} focusColors={FOCUS_COLORS} playerSeasonStats={playerSeasonStats} />}

        {/* ── FIXTURES CALENDAR ── */}
        {tab === "fixtures" && view === "coach" && <FixturesTab matches={matches} sessions={sessions} />}

        {/* ── OPPOSITION PROFILES ── */}
        {tab === "opposition" && view === "coach" && <OppositionTab matches={matches} leagueData={leagueData} oppProfiles={oppProfiles} setOppProfiles={saveOppProfiles} oppBadges={oppBadges} saveOppBadges={saveOppBadges} />}

        {/* ── PLAYER VIEW ── */}
        {view === "player" && (() => {
          if (!selectedPlayer) return (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>👋</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#E8F5E9", marginBottom: 8 }}>Who are you?</div>
              <div style={{ fontSize: 13, color: "#4d7a5a", marginBottom: 20 }}>Select your name to see your profile</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 480, margin: "0 auto" }}>
                {players.map(p => (
                  <button key={p.id} onClick={() => { setSelectedPlayer(p); setTab("player_home"); }}
                    style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: POSITION_COLORS[p.position]||"#1e7a3e", fontWeight: 800 }}>#{p.number}</span> {p.name}
                  </button>
                ))}
              </div>
            </div>
          );

          const ss = playerSeasonStats(selectedPlayer.id);
          const playerMatches = matches.filter(m => !m.cancelled && m.playerStats[selectedPlayer.id]?.played).sort((a,b) => new Date(b.date)-new Date(a.date));
          const color = POSITION_COLORS[selectedPlayer.position] || "#1e7a3e";

          return (
            <div>
              {/* Player header */}
              <div style={{ ...S.card, padding: 18, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: color+"22", border: `2px solid ${color}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color }}>{selectedPlayer.number}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#f0faf1" }}>{selectedPlayer.name}</div>
                    <span style={{ background: color+"22", color, padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{selectedPlayer.position}</span>
                  </div>
                </div>
                <button onClick={() => { setSelectedPlayer(null); setTab("player_home"); }} style={{ background: "none", border: "none", color: "#4d7a5a", cursor: "pointer", fontSize: 13 }}>← Change</button>
              </div>

              {/* My Stats tab */}
              {tab === "player_home" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ ...S.card, padding: 18, gridColumn: "1/-1" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Season Stats</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                      {[["Apps", ss.apps, "⚽"], ["Goals", ss.goals, "🎯"], ["Assists", ss.assists, "🅰️"], ["Avg Rating", ss.avgRating, "⭐"]].map(([l,v,ico]) => (
                        <div key={l} style={{ textAlign: "center", padding: "14px 8px", ...S.inset, borderRadius: 10 }}>
                          <div style={{ fontSize: 22, marginBottom: 4 }}>{ico}</div>
                          <div style={{ fontSize: 22, fontWeight: 800, color: "#f0faf1" }}>{v}</div>
                          <div style={{ fontSize: 10, color: "#4d7a5a", marginTop: 2 }}>{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ ...S.card, padding: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Development</div>
                    {Object.entries(selectedPlayer.development).map(([k, v]) => (
                      <div key={k} style={{ marginBottom: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                          <span style={{ fontSize: 12, color: "#86b598" }}>{k.charAt(0).toUpperCase()+k.slice(1)}</span>
                          <span style={{ fontSize: 13, fontWeight: 800, color: v >= 80 ? "#10B981" : v >= 60 ? "#F59E0B" : "#86b598" }}>{v}</span>
                        </div>
                        <div style={{ height: 8, background: "#0a1a0f", borderRadius: 4, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${v}%`, background: v >= 80 ? "#10B981" : v >= 60 ? "#1e7a3e" : "#c9a84c", borderRadius: 4, transition: "width 0.6s" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ ...S.card, padding: 18, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>Profile Radar</div>
                    <DualRadar dataA={selectedPlayer.development} dataB={selectedPlayer.development} colorA={color} colorB={color} />
                  </div>
                  {(() => {
                    const wins = Object.entries(potmAwards).filter(([,pid]) => pid === selectedPlayer.id).length;
                    return wins > 0 ? (
                      <div style={{ ...S.card, padding: 18, gridColumn: "1/-1", display: "flex", alignItems: "center", gap: 14 }}>
                        <span style={{ fontSize: 36 }}>🏆</span>
                        <div>
                          <div style={{ fontSize: 11, color: "#4d7a5a", fontWeight: 700, textTransform: "uppercase" }}>Player of the Match</div>
                          <div style={{ fontSize: 22, fontWeight: 800, color: "#c9a84c" }}>{wins} time{wins > 1 ? "s" : ""} this season</div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}

              {/* My Matches tab */}
              {tab === "player_matches" && (
                <div style={{ ...S.card, padding: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>My Match History ({playerMatches.length} appearances)</div>
                  {playerMatches.length === 0 && <div style={{ fontSize: 13, color: "#4d7a5a" }}>No appearances yet.</div>}
                  {playerMatches.map((m, i) => {
                    const st = m.playerStats[selectedPlayer.id];
                    const result = m.goalsFor > m.goalsAgainst ? "W" : m.goalsFor < m.goalsAgainst ? "L" : "D";
                    const rc = result === "W" ? "#10B981" : result === "L" ? "#EF4444" : "#F59E0B";
                    const isPotm = potmAwards[m.id] === selectedPlayer.id;
                    return (
                      <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < playerMatches.length-1 ? "1px solid #1e3d28" : "none" }}>
                        <span style={{ width: 28, height: 28, borderRadius: 7, background: rc+"22", color: rc, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{result}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#E8F5E9" }}>vs {m.opponent} <span style={{ fontSize: 11, color: "#4d7a5a" }}>{m.venue}</span></div>
                          <div style={{ fontSize: 11, color: "#4d7a5a" }}>{new Date(m.date).toLocaleDateString("en-IE", { day:"numeric", month:"short", year:"numeric" })}</div>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {st.started ? <span style={{ fontSize: 10, background: "#1e7a3e22", color: "#4ade80", padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>STARTED</span> : <span style={{ fontSize: 10, background: "#0a1a0f", color: "#4d7a5a", padding: "2px 7px", borderRadius: 20 }}>SUB</span>}
                          {st.goals > 0 && <span style={{ fontSize: 11, color: "#c9a84c", fontWeight: 700 }}>⚽ {st.goals}</span>}
                          {st.assists > 0 && <span style={{ fontSize: 11, color: "#86b598", fontWeight: 700 }}>🅰 {st.assists}</span>}
                          {st.rating > 0 && <span style={{ fontSize: 11, fontWeight: 800, color: "#E8F5E9" }}>{st.rating}<span style={{ fontSize: 9, color: "#4d7a5a" }}>/10</span></span>}
                          {isPotm && <span style={{ fontSize: 14 }}>🏆</span>}
                          <span style={{ fontSize: 12, fontWeight: 700, color: rc }}>{m.goalsFor}–{m.goalsAgainst}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* My Goals tab */}
              {tab === "player_goals" && (
                <div style={{ ...S.card, padding: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>My Development Goals</div>
                  {selectedPlayer.goals.length === 0 && <div style={{ fontSize: 13, color: "#4d7a5a", fontStyle: "italic" }}>No goals set yet — ask your coach!</div>}
                  {selectedPlayer.goals.map((g, i) => {
                    const goal = typeof g === "string" ? { text: g, progress: 0 } : g;
                    const prog = goal.progress || 0;
                    const progColor = prog >= 100 ? "#10B981" : prog >= 60 ? "#F59E0B" : "#1e7a3e";
                    return (
                      <div key={i} style={{ padding: "14px 0", borderBottom: i < selectedPlayer.goals.length-1 ? "1px solid #1e3d28" : "none" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ fontSize: 14, color: "#c8e6c9", fontWeight: 500 }}>{goal.text}</span>
                          <span style={{ fontSize: 14, fontWeight: 800, color: progColor }}>{prog >= 100 ? "✅ Done!" : `${prog}%`}</span>
                        </div>
                        <div style={{ height: 10, background: "#0a1a0f", borderRadius: 5, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${prog}%`, background: progColor, borderRadius: 5, transition: "width 0.6s" }} />
                        </div>
                        {goal.category && <div style={{ fontSize: 11, color: "#4d7a5a", marginTop: 6 }}>{goal.category}</div>}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}

        {/* ── PARENT VIEW ── */}
        {view === "parent" && (() => {
          const today = new Date(); today.setHours(0,0,0,0);
          const upcomingMatches = matches.filter(m => !m.cancelled && new Date(m.date) >= today).sort((a,b) => new Date(a.date)-new Date(b.date));
          const upcomingSessions = sessions.filter(s => new Date(s.date) >= today).sort((a,b) => new Date(a.date)-new Date(b.date));
          const pastMatches = matches.filter(m => !m.cancelled && new Date(m.date) < today).sort((a,b) => new Date(b.date)-new Date(a.date));
          const child = selectedParentChild;
          const fmt = (d) => new Date(d).toLocaleDateString("en-IE", { weekday:"short", day:"numeric", month:"short" });

          if (!child && tab === "parent_home") return (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>👨‍👩‍👧</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#E8F5E9", marginBottom: 8 }}>Select your child</div>
              <div style={{ fontSize: 13, color: "#4d7a5a", marginBottom: 20 }}>to view their profile</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 480, margin: "0 auto" }}>
                {players.map(p => (
                  <button key={p.id} onClick={() => setSelectedParentChild(p)}
                    style={{ background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: POSITION_COLORS[p.position]||"#1e7a3e", fontWeight: 800 }}>#{p.number}</span> {p.name}
                  </button>
                ))}
              </div>
            </div>
          );

          return (
            <div>
              {/* Child profile tab */}
              {tab === "parent_home" && child && (() => {
                const ss = playerSeasonStats(child.id);
                const color = POSITION_COLORS[child.position] || "#1e7a3e";
                const childMatches = matches.filter(m => !m.cancelled && m.playerStats[child.id]?.played).sort((a,b)=>new Date(b.date)-new Date(a.date));
                return (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div style={{ ...S.card, padding: 18, gridColumn: "1/-1", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div style={{ width: 56, height: 56, borderRadius: 14, background: color+"22", border: `2px solid ${color}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color }}>{child.number}</div>
                        <div>
                          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#f0faf1" }}>{child.name}</div>
                          <span style={{ background: color+"22", color, padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{child.position}</span>
                        </div>
                      </div>
                      <button onClick={() => setSelectedParentChild(null)} style={{ background: "none", border: "none", color: "#4d7a5a", cursor: "pointer", fontSize: 13 }}>← Change</button>
                    </div>
                    <div style={{ ...S.card, padding: 18, gridColumn: "1/-1" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Season Stats</div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                        {[["Apps", ss.apps, "⚽"], ["Goals", ss.goals, "🎯"], ["Assists", ss.assists, "🅰️"], ["Avg Rating", ss.avgRating, "⭐"]].map(([l,v,ico]) => (
                          <div key={l} style={{ textAlign: "center", padding: "14px 8px", ...S.inset, borderRadius: 10 }}>
                            <div style={{ fontSize: 20, marginBottom: 4 }}>{ico}</div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: "#f0faf1" }}>{v}</div>
                            <div style={{ fontSize: 10, color: "#4d7a5a", marginTop: 2 }}>{l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ ...S.card, padding: 18 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Development</div>
                      {Object.entries(child.development).map(([k, v]) => (
                        <div key={k} style={{ marginBottom: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: "#86b598" }}>{k.charAt(0).toUpperCase()+k.slice(1)}</span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: v>=80?"#10B981":v>=60?"#F59E0B":"#86b598" }}>{v}</span>
                          </div>
                          <div style={{ height: 8, background: "#0a1a0f", borderRadius: 4, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${v}%`, background: v>=80?"#10B981":"#1e7a3e", borderRadius: 4 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ ...S.card, padding: 18 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Development Goals</div>
                      {child.goals.length === 0 && <div style={{ fontSize: 12, color: "#4d7a5a", fontStyle: "italic" }}>No goals set yet</div>}
                      {child.goals.map((g, i) => {
                        const goal = typeof g === "string" ? { text: g, progress: 0 } : g;
                        const prog = goal.progress || 0;
                        const pc = prog >= 100 ? "#10B981" : prog >= 60 ? "#F59E0B" : "#1e7a3e";
                        return (
                          <div key={i} style={{ marginBottom: 10 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                              <span style={{ fontSize: 12, color: "#c8e6c9" }}>{goal.text}</span>
                              <span style={{ fontSize: 12, fontWeight: 700, color: pc }}>{prog >= 100 ? "✅" : `${prog}%`}</span>
                            </div>
                            <div style={{ height: 6, background: "#0a1a0f", borderRadius: 3, overflow: "hidden" }}>
                              <div style={{ height: "100%", width: `${prog}%`, background: pc, borderRadius: 3 }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Recent appearances */}
                    <div style={{ ...S.card, padding: 18, gridColumn: "1/-1" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>Recent Appearances</div>
                      {childMatches.slice(0,5).map((m, i) => {
                        const st = m.playerStats[child.id];
                        const result = m.goalsFor > m.goalsAgainst ? "W" : m.goalsFor < m.goalsAgainst ? "L" : "D";
                        const rc = result==="W"?"#10B981":result==="L"?"#EF4444":"#F59E0B";
                        return (
                          <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i<Math.min(childMatches.length,5)-1?"1px solid #1e3d28":"none" }}>
                            <span style={{ width: 26, height: 26, borderRadius: 6, background: rc+"22", color: rc, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{result}</span>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 600, color: "#E8F5E9" }}>vs {m.opponent}</div>
                              <div style={{ fontSize: 11, color: "#4d7a5a" }}>{fmt(m.date)}</div>
                            </div>
                            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              {st.goals > 0 && <span style={{ fontSize: 11, color: "#c9a84c", fontWeight: 700 }}>⚽ {st.goals}</span>}
                              {st.assists > 0 && <span style={{ fontSize: 11, color: "#86b598", fontWeight: 700 }}>🅰 {st.assists}</span>}
                              {potmAwards[m.id] === child.id && <span>🏆</span>}
                              <span style={{ fontSize: 12, fontWeight: 700, color: rc }}>{m.goalsFor}–{m.goalsAgainst}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              {/* Results tab */}
              {tab === "parent_results" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 4 }}>Match Results</div>
                  {pastMatches.length === 0 && <div style={{ fontSize: 13, color: "#4d7a5a" }}>No results yet.</div>}
                  {pastMatches.map(m => {
                    const result = m.goalsFor > m.goalsAgainst ? "W" : m.goalsFor < m.goalsAgainst ? "L" : "D";
                    const rc = result==="W"?"#10B981":result==="L"?"#EF4444":"#F59E0B";
                    const scorers = players.filter(p => m.playerStats[p.id]?.goals > 0);
                    const assists = players.filter(p => m.playerStats[p.id]?.assists > 0);
                    const potmP = potmAwards[m.id] ? players.find(p=>p.id===potmAwards[m.id]) : null;
                    return (
                      <div key={m.id} style={{ ...S.card, padding: 16 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                          <span style={{ width: 32, height: 32, borderRadius: 8, background: rc+"22", color: rc, fontSize: 13, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{result}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: 14, color: "#E8F5E9" }}>vs {m.opponent} <span style={{ fontSize: 12, color: "#4d7a5a" }}>{m.venue}</span></div>
                            <div style={{ fontSize: 11, color: "#4d7a5a" }}>{fmt(m.date)}</div>
                          </div>
                          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 800, color: rc }}>{m.goalsFor}–{m.goalsAgainst}</span>
                        </div>
                        {(scorers.length > 0 || assists.length > 0 || potmP) && (
                          <div style={{ paddingTop: 8, borderTop: "1px solid #1e3d28", display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {scorers.map(p => <span key={p.id} style={{ fontSize: 11, background: "#c9a84c22", color: "#c9a84c", padding: "3px 8px", borderRadius: 20, fontWeight: 600 }}>⚽ {p.name.split(" ")[0]} {m.playerStats[p.id].goals > 1 ? `x${m.playerStats[p.id].goals}` : ""}</span>)}
                            {assists.map(p => <span key={p.id} style={{ fontSize: 11, background: "#86b59822", color: "#86b598", padding: "3px 8px", borderRadius: 20, fontWeight: 600 }}>🅰 {p.name.split(" ")[0]}</span>)}
                            {potmP && <span style={{ fontSize: 11, background: "#F59E0B22", color: "#F59E0B", padding: "3px 8px", borderRadius: 20, fontWeight: 700 }}>🏆 {potmP.name.split(" ")[0]}</span>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Fixtures tab */}
              {tab === "parent_fixtures" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Upcoming Matches */}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>⚽ Upcoming Matches</div>
                    {upcomingMatches.length === 0 ? (
                      <div style={{ ...S.card, padding: 16, fontSize: 13, color: "#4d7a5a", fontStyle: "italic" }}>No upcoming matches scheduled.</div>
                    ) : upcomingMatches.map((m, i) => {
                      const days = Math.ceil((new Date(m.date) - today) / 86400000);
                      const color = m.cup ? "#F59E0B" : m.friendly ? "#10B981" : "#1e7a3e";
                      return (
                        <div key={m.id} style={{ ...S.card, padding: 16, marginBottom: 8, borderLeft: `3px solid ${color}` }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: 15, color: "#E8F5E9" }}>vs {m.opponent}</div>
                              <div style={{ fontSize: 12, color: "#4d7a5a", marginTop: 3 }}>
                                {fmt(new Date(m.date))} · {m.venue}
                                {m.cup && <span style={{ marginLeft: 8, fontSize: 10, background: "#F59E0B22", color: "#F59E0B", padding: "1px 6px", borderRadius: 10, fontWeight: 700 }}>CUP</span>}
                                {m.friendly && <span style={{ marginLeft: 8, fontSize: 10, background: "#10B98122", color: "#10B981", padding: "1px 6px", borderRadius: 10, fontWeight: 700 }}>FRIENDLY</span>}
                              </div>
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 700, color: days <= 1 ? "#EF4444" : days <= 3 ? "#F59E0B" : "#4d7a5a" }}>
                              {days === 0 ? "TODAY" : days === 1 ? "Tomorrow" : `${days}d`}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Upcoming Training */}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>🏃 Training Sessions</div>
                    {upcomingSessions.length === 0 ? (
                      <div style={{ ...S.card, padding: 16, fontSize: 13, color: "#4d7a5a", fontStyle: "italic" }}>No training sessions scheduled.</div>
                    ) : upcomingSessions.slice(0, 5).map((s, i) => {
                      const days = Math.ceil((new Date(s.date) - today) / 86400000);
                      return (
                        <div key={s.id} style={{ ...S.card, padding: 16, marginBottom: 8, borderLeft: "3px solid #6366F1" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: 14, color: "#E8F5E9" }}>{s.title}</div>
                              <div style={{ fontSize: 12, color: "#4d7a5a", marginTop: 3 }}>{fmt(new Date(s.date))} · {s.duration} mins</div>
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 700, color: days <= 1 ? "#EF4444" : days <= 3 ? "#F59E0B" : "#4d7a5a" }}>
                              {days === 0 ? "TODAY" : days === 1 ? "Tomorrow" : `${days}d`}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* POTM tab — reuse existing voting UI */}
              {tab === "parent_potm" && (() => {
                const openPolls = Object.entries(potmPolls).filter(([,poll]) => poll?.open);
                const pastWinners = Object.entries(potmAwards).map(([mid, pid]) => ({ match: matches.find(m=>m.id===parseInt(mid)), player: players.find(p=>p.id===pid) })).filter(x=>x.match&&x.player).sort((a,b)=>new Date(b.match.date)-new Date(a.match.date));
                return (
                  <div style={{ maxWidth: 480, margin: "0 auto" }}>
                    {openPolls.length > 0 && openPolls.map(([matchId, poll]) => {
                      const match = matches.find(m => m.id === parseInt(matchId));
                      const hasVoted = !!myVotes[matchId];
                      const myVotePid = myVotes[matchId];
                      const voteTally = potmVotes[matchId] || {};
                      const totalVotes = Object.values(voteTally).reduce((s,v)=>s+v,0);
                      return (
                        <div key={matchId} style={{ ...S.card, padding: 24, marginBottom: 16 }}>
                          <div style={{ textAlign: "center", marginBottom: 20 }}>
                            <div style={{ fontSize: 36, marginBottom: 8 }}>🏆</div>
                            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#E8F5E9" }}>Vote: Player of the Match</div>
                            {match && <div style={{ fontSize: 13, color: "#4d7a5a", marginTop: 4 }}>vs {match.opponent} · {fmt(match.date)}</div>}
                            <div style={{ fontSize: 12, color: "#86b598", marginTop: 4 }}>{totalVotes} vote{totalVotes!==1?"s":""} cast</div>
                          </div>
                          {hasVoted ? (
                            <div>
                              <div style={{ textAlign: "center", marginBottom: 16, padding: "12px", background: "#1e7a3e22", border: "1px solid #1e7a3e44", borderRadius: 10 }}>
                                <div style={{ fontSize: 12, color: "#4ade80", fontWeight: 700 }}>✓ You voted for {players.find(p=>p.id===myVotePid)?.name}</div>
                              </div>
                              {(poll.nominees||[]).sort((a,b)=>(voteTally[b]||0)-(voteTally[a]||0)).map((pid,i) => {
                                const p = players.find(pl=>pl.id===pid);
                                const votes = voteTally[pid]||0;
                                const pct = totalVotes>0?Math.round((votes/totalVotes)*100):0;
                                return (
                                  <div key={pid} style={{ marginBottom: 10 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                      <span style={{ fontSize: 13, color: myVotePid===pid?"#4ade80":"#E8F5E9", fontWeight: myVotePid===pid?700:400 }}>{i===0&&votes>0?"🥇 ":""}{p?.name}</span>
                                      <span style={{ fontSize: 12, color: "#86b598", fontWeight: 700 }}>{votes} ({pct}%)</span>
                                    </div>
                                    <div style={{ height: 8, background: "#0a1a0f", borderRadius: 4, overflow: "hidden" }}>
                                      <div style={{ height: "100%", width: `${pct}%`, background: myVotePid===pid?"#1e7a3e":"#2d5a3d", borderRadius: 4, transition: "width 0.5s" }} />
                                    </div>
                                  </div>
                                );
                              })}
                              <button onClick={loadPotmVotes} style={{ width: "100%", marginTop: 10, background: "#112318", border: "1px solid #1e3d28", color: "#86b598", padding: "9px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>↻ Refresh</button>
                            </div>
                          ) : (
                            <div>
                              <div style={{ fontSize: 13, color: "#86b598", textAlign: "center", marginBottom: 14 }}>Who was your player of the match?</div>
                              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {(poll.nominees||[]).map(pid => {
                                  const p = players.find(pl=>pl.id===pid);
                                  if (!p) return null;
                                  return (
                                    <button key={pid} onClick={() => castVote(matchId, pid)}
                                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#0a1a0f", border: "2px solid #1e3d28", borderRadius: 12, cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}
                                      onMouseEnter={e=>{e.currentTarget.style.borderColor="#1e7a3e";e.currentTarget.style.background="#1e7a3e11";}}
                                      onMouseLeave={e=>{e.currentTarget.style.borderColor="#1e3d28";e.currentTarget.style.background="#0a1a0f";}}>
                                      <div style={{ width: 40, height: 40, borderRadius: 10, background: (POSITION_COLORS[p.position]||"#1e7a3e")+"22", border: `2px solid ${(POSITION_COLORS[p.position]||"#1e7a3e")}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: POSITION_COLORS[p.position]||"#1e7a3e", flexShrink: 0 }}>{p.number}</div>
                                      <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 14, fontWeight: 700, color: "#E8F5E9" }}>{p.name}</div>
                                        <span style={{ fontSize: 11, color: POSITION_COLORS[p.position]||"#1e7a3e", fontWeight: 700 }}>{p.position}</span>
                                      </div>
                                      <span style={{ fontSize: 18, color: "#1e3d28" }}>→</span>
                                    </button>
                                  );
                                })}
                              </div>
                              <div style={{ marginTop: 12, fontSize: 11, color: "#2d5a3d", textAlign: "center" }}>One vote per device</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {/* Past winners */}
                    {pastWinners.length > 0 && (
                      <div style={{ ...S.card, padding: 18 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>🏆 Past Winners</div>
                        {pastWinners.map(({match, player}, i) => (
                          <div key={match.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i<pastWinners.length-1?"1px solid #1e3d28":"none" }}>
                            <span style={{ fontSize: 18 }}>🏆</span>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 700, color: "#c9a84c" }}>{player.name}</div>
                              <div style={{ fontSize: 11, color: "#4d7a5a" }}>vs {match.opponent} · {fmt(match.date)}</div>
                            </div>
                            <span style={{ fontSize: 12, fontWeight: 700, color: match.goalsFor>match.goalsAgainst?"#10B981":match.goalsFor<match.goalsAgainst?"#EF4444":"#F59E0B" }}>{match.goalsFor}–{match.goalsAgainst}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {openPolls.length === 0 && pastWinners.length === 0 && (
                      <div style={{ textAlign: "center", padding: "60px 20px", color: "#4d7a5a" }}>
                        <div style={{ fontSize: 36, marginBottom: 12 }}>🏆</div>
                        <div style={{ fontSize: 14 }}>No votes open yet. Check back after the next match!</div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* News tab */}
              {tab === "parent_news" && (
                <div style={{ maxWidth: 600, margin: "0 auto" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4d7a5a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>📢 Squad News & Messages</div>
                  {squadNews.length === 0 && (
                    <div style={{ textAlign: "center", padding: "40px 20px", color: "#4d7a5a" }}>
                      <div style={{ fontSize: 32, marginBottom: 10 }}>📢</div>
                      <div style={{ fontSize: 14 }}>No messages yet from the coaching team.</div>
                    </div>
                  )}
                  {[...squadNews].reverse().map((msg, i) => (
                    <div key={i} style={{ ...S.card, padding: 18, marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#E8F5E9" }}>{msg.title}</div>
                        <span style={{ fontSize: 11, color: "#4d7a5a", flexShrink: 0, marginLeft: 10 }}>{new Date(msg.date).toLocaleDateString("en-IE", { day:"numeric", month:"short" })}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "#86b598", lineHeight: 1.7 }}>{msg.body}</div>
                      <div style={{ fontSize: 11, color: "#4d7a5a", marginTop: 8 }}>— {msg.author}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
