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
 

function createScoreCard(teamName,match,matchFileName) {
  //this fn creates pdf for match in appropriate folder with correct details
  //here we will use pdf-lib to create the pdf file
  
   
   let t1 = teamName;
   let t2 = match.vs;
   let result = t1+ " " +match.result;
   let templateBytes = fs.readFileSync("templete.pdf");
   let promisetoloadbytes = pdf.PDFDocument.load(templateBytes);
   promisetoloadbytes.then(function(pdfdoc){
       let page = pdfdoc.getPage(0);
       page.drawText(t1,{
           x:320,
           y:704,
           size:10
       });
       page.drawText(t2,{
           x:320,
           y:695,
           size:10
       });
       page.drawText(result,{
           x:320,
           y:690,
           size:10
       });
         let promisetosave = pdfdoc.save();
         promisetosave.then(function(changedbytes){
              fs.writeFileSync(matchFileName,changedbytes);
         });

   });



}