//npm install pdf-lib
//node crick.js --excel=Worldcip.csv --dataDir=worldcup --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results



let minimist = require('minimist');
let axios = require('axios');
let jsdom = require('jsdom');
let excel4node = require('excel4node');
let pdf = require('pdf-lib');
let fs = require('fs');
let path = require('path');

//downlod html using axios.
//extract information using jsdom 
//convert matches to teams 
//save teams to excel using excel4node
//create folder  and save pdf using pdf-lib

let args  = minimist(process.argv);

//browser =>url to html (request to response)
let responsekapromise = axios.get(args.source);
responsekapromise.then(function(response){
    let html = response.data;
    
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    let matchScoreDivs = document.querySelectorAll("div.match-score-block");
     let matches = [];
    for(let i=0;i<matchScoreDivs.length;i++){
        let match = {
            t1:"",
            t2:"",
            t1s:"",
            t2s:"",
            result:""
        };
        let teamParas = matchScoreDivs[i].querySelectorAll("div.name-detail>p.name");
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;

        let scoreSpans= matchScoreDivs[i].querySelectorAll("div.score-detail > span.score");
        if(scoreSpans.length==2){
       match.t1s = scoreSpans[0].textContent;
       match.t2s = scoreSpans[1].textContent;
        }else if(scoreSpans.length==1){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = "";

        }else{
            match.t1s = "";
            match.t2s = "";

        }

        let resultSpan = matchScoreDivs[i].querySelector("div.status-text >span");
        match.result =  resultSpan.textContent;

        matches.push(match);

    }
    let matcheskaJson = JSON.stringify(matches);
     fs.writeFileSync("matches.json", matcheskaJson,"utf-8");

     let teams =[];
     for(let i = 0; i < matches.length; i++){
         pushTeamsinTeamsIfNotAlreadyThere(teams,matches[i].t1);
         pushTeamsinTeamsIfNotAlreadyThere(teams,matches[i].t2);
     }
     //push match at appropriate place
     for(let i = 0; i < matches.length; i++){
         pushMatchInAppropriateTeam(teams,matches[i].t1,matches[i].t2,matches[i].t1s,matches[i].t2s,matches[i].result);
         pushMatchInAppropriateTeam(teams,matches[i].t2,matches[i].t1,matches[i].t2s,matches[i].t1s,matches[i].result);
         
     }

     let teamskaJSON = JSON.stringify(teams);
     fs.writeFileSync("teams.json", teamskaJSON,"utf-8");

       prepareExcel(teams,args.excel);
       prepareFolderAndPdfs(teams,args.dataDir)
})
function prepareFolderAndPdfs(teams,dataDir) {
    if(fs.existsSync(dataDir)==true){
        fs.rmdirSync(dataDir,{recursive:true});
    }
        fs.mkdirSync(dataDir);

    for(let i=0;i<teams.length;i++){
      let teamFolderName = path.join(dataDir,teams[i].name);
       
        fs.mkdirSync(teamFolderName);
       
        for(let j=0;j<teams[i].matches.length;j++){
          let match = teams[i].matches[j];
          createMatchScorecardPDF(teamFolderName,teams[i].name,match);
        }
    
    }
} 
function createMatchScorecardPDF(teamFolderName,homeTeam,match){
    let matchFileName = path.join(teamFolderName,match.vs);
    let templatebyte = fs.readFileSync('Template.pdf');
    let pdfdockapromise = pdf.PDFDocument.load(templatebyte);
    pdfdockapromise.then(function(pdfdoc){
       let page = pdfdoc.getPage(0);

       page.drawText(homeTeam,{
           x: 320,
           y:655,
           size:8
       });
       page.drawText(match.vs,{
        x: 320,
        y: 640,
        size:8
    });
       page.drawText(match.selfScore,{
        x: 320,
        y: 625,
        size:8
    });
       page.drawText(match.oppScore,{
        x: 320,
        y: 613,
        size:8
    });
       page.drawText(match.result,{
        x: 320,
        y: 600,
        size:8
    });
      
let changebyteskapromise = pdfdoc.save();
changebyteskapromise.then(function(changedbytes){
    if(fs.existsSync(matchFileName+".pdf")==true){  
       fs.writeFileSync(matchFileName+"1.pdf",changedbytes);
}else {
    fs.writeFileSync(matchFileName+".pdf",changedbytes);
}
})

    })
}

function prepareExcel(teams,excelFileName){
    let wb = new excel4node.Workbook();
    
    for(let i=0;i<teams.length;i++){
        let tsheet = wb.addWorksheet(teams[i].name);

        tsheet.cell(1,1).string("Vs");
        tsheet.cell(1,2).string("SelfScore");
        tsheet.cell(1,3).string("Opp Score");
        tsheet.cell(1,4).string("Result");
        for(let j=0;j<teams[i].matches.length;j++){
            tsheet.cell(2+j,1).string(teams[i].matches[j].vs);
            tsheet.cell(2+j,2).string(teams[i].matches[j].selfScore);
            tsheet.cell(2+j,3).string(teams[i].matches[j].oppScore);
            tsheet.cell(2+j,4).string(teams[i].matches[j].result);
        }
        
    }
    wb.write(excelFileName);
}

function pushMatchInAppropriateTeam(teams,homeTeam,oppTeam,homeScore,oppScore,result) {
    let tidx = -1;
    for(let j = 0; j < teams.length; j++) {
        if(teams[j].name==homeTeam){
            tidx=j;
            break;
        }
    }
    let team =teams[tidx];
    team.matches.push({
        vs:oppTeam,
        selfScore:homeScore,
        oppScore:oppScore,
        result:result
    
    });

}

function pushTeamsinTeamsIfNotAlreadyThere(teams,teamName){
      let t1idx =-1;
      for(let j=0;j<teams.length;j++){
          if(teams[j].name == teamName){
              t1idx=j;
          }
      }
      if(t1idx==-1){
          let team = {
              name:teamName,
              matches:[]
          }
          teams.push(team);
      }


}