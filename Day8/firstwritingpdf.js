// node firstwritingpdf.js --sourse=teams.json --dest=Worldcup
//npm install pdf-lib
let minimist = require('minimist');
let fs = require('fs');
let path = require('path');
let pdf = require('pdf-lib');


let args = minimist(process.argv)

let teamsJSON = fs.readFileSync(args.sourse,"utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest);
for(let i = 0; i < teams.length; i++) {
    let teamFN = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamFN);
    for(let j=0;j<teams[i].matches.length; j++) {
        let matchFileName = path.join(teamFN, teams[i].matches[j].vs+".pdf");
        createScoreCard(teams[i].name,teams[i].matches[j],matchFileName);


    }   
}
 

async function createScoreCard(teamName,match,matchFileName) {
  
    import { PDFDocument } from 'pdf-lib'
    let pdfDoc = await PDFDocument.load('templete.pdf')
    let pages = pdfDoc.getPages()
    pages[0].drawText('You can modify PDFs too!')
    let pdfBytes = await pdfDoc.save()

}