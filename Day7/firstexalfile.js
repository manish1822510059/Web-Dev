//node firstexalfile.js --source=teams.json --dest=team.xls
//npm install excel4node
//npm install minimist
//npm init

let minimist = require('minimist');
let fs  = require('fs');
let excel = require('excel4node');
let agrs = minimist(process.argv);

let teamsJSON = fs.readFileSync(agrs.source,"utf-8");
let teams = JSON.parse(teamsJSON);
 
let wb = new excel.Workbook();
let hstyle = wb.createStyle({
      font:{
          color:"red"
      },
      fill:{
          type:"pattern",
          patternType:"solid",
          fgColor:"green"
      }
});
for(let i=0;i<teams.length;i++){
    let sheet = wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("Opponent").style(hstyle);
    sheet.cell(1,2).string("Result").style(hstyle);;


    sheet.cell(1,4).string("Rank").style(hstyle);;
    sheet.cell(1,5).number(teams[i].rank);

    
    for(let j=0;j<teams[i].matches.length;j++){
      let vs = teams[i].matches[j].vs;
      let result = teams[i].matches[j].result;
       
      sheet.cell(2+j,1).string(vs);
      sheet.cell(2+j,2).string(result);

    }
     
}

wb.write(agrs.dest);