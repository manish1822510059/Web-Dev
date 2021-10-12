//node finalexalfile.js --source=teams.json --dest=team.xls
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
let hs = wb.createStyle({
    font:{
        bold: true,
        underline: true,
        size:15,
        color: 'yellow'
    },
    fill:{
        type:"pattern",
        patternType: "solid",   
        fgColor: "blue"
    }

});

for(let i=0;i<teams.length;i++){
    let sheet = wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("Rank").style(hs);
    sheet.cell(1,2).number(teams[i].rank);

    sheet.cell(2,1).string("VS").style(hs);
    sheet.cell(2,2).string("Result").style(hs);
    for(let j=0;j<teams[i].matches.length;j++){
        sheet.cell(j+3,1).string(teams[i].matches[j].vs)
        sheet.cell(j+3,2).string(teams[i].matches[j].result).style(hs);
    }
}
wb.write(agrs.dest);