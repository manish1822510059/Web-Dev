let minimist = require('minimist');
let axios = require('axios');
let fs = require('fs');
let args =minimist(process.argv)

let dwnlodpromise = axios.get(args.url);
dwnlodpromise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest,html,'utf-8')
})

// node datafromweb.js --url=https://www.pepcoding.com/ --dest="download.html"