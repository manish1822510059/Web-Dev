//node firstfoldercreation.js --source=teams.json --dest=root
//npm install minimist
//npm init
let minimist = require("minimist");
let fs = require("fs");
let path = require("path");

let args = minimist(process.argv);

let teamJSON = fs.readFileSync(args.source, "utf8");
let teams = JSON.parse(teamJSON);

for (let i = 0; i < teams.length; i++) {
  let foldername = path.join(args.dest, teams[i].name);
  fs.mkdirSync(foldername);
}
