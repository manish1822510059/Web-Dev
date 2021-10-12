let minimist = require('minimist');
let fs = require('fs');
let args  = minimist(process.argv);

//read file source
let stext = fs.readFileSync(args.source,'utf8');
console.log(stext);

//Capitalize the text
// let ctext= stext.toUpperCase();
// console.log(ctext);
// fs.writeFileSync(args.dest, ctext, 'utf-8');+

//node firstfile.js --source=f1.txt --dest=f2.txt
// let minimist = require("minimist");
// let fs = require("fs");
// let args = minimist(process.argv);

//read from source
// let stext = fs.readFileSync(args.source,"utf-8")
// console.log(stext);


//Capitalize the filename
// let dtext = stext.toUpperCase();
// console.log(dtext);
//write File  in f2.txt
// fs.writeFileSync(args.dest,dtext,"utf-8");