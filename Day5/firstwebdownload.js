//npm install axios
//node firstwebdownload.js --dest="download.html" --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" 

let minimist = require("minimist");
let fs = require("fs");
let axios = require("axios");
let args = minimist(process.argv);

let dwnldpromise = axios.get(args.url);
dwnldpromise.then(function(respone){ 
 let html = respone.data;
 fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){
 console.log(err);
});