//node firsttimer --n=10 --d=500
let minimist  = require('minimist');
let agrs = minimist(process.argv);

let count = agrs.n;
let time = agrs.d;
let id  = setInterval(function(){
    console.log(count+ " tus to go.");
    count--;
    
    if(count==0){
        console.log("Timeout.")
        clearInterval(id);
    }

},time);
