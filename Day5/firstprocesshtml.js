//npm install jsdom
/// node firstprocesshtml.js --source=download.html

let minimist  = require('minimist');
let fs = require("fs");
let jsdom = require('jsdom');
// will load html and prepare the dom for programmer just like a browser would have


let args = minimist(process.argv);
fs.readFile(args.source,"utf-8",function(err,html){

    let dom = new jsdom.JSDOM(html);
    
    let document = dom.window.document;

        let desc = document.querySelectorAll("div.match-info > div.description");
        for(let i = 0; i < desc.length; i++){ 
            console.log(desc[i].textContent);
        }









//    let b2 = document.querySelector(".b");
//    console.log(b2.textContent);
// let elements = document.querySelectorAll(".b  ");
// console.log(btn.length);
// console.log(btn[0].textContent);
// console.log(btn[1].textContent);
// console.log(elements[0] .textContent);
// console.log(elements[1].textContent);
// console.log(elements[2].textContent);


})
 