//t1 = read a file(disk)
//t2 = calculate prime(no)

//node firstlackofcallback.js --source=f1.txt --dest=f2.txt --n=50000
 
function ISPrime(x){
    let isPrime = true;

    for(let div=2;div< x;div++){
        if(x%div == 0){
            isPrime=false;
            break;
        }
    }
    return isPrime;
}



let minimist  = require('minimist');
 let fs  = require('fs');
 let args = minimist(process.argv);

 //task 1 area begin
let t1 = Date.now();
console.log("Starting taskat := "+t1%100000);
 let stext = fs.readFileSync(args.source);
 let t2 = Date.now();
console.log("Finished taskat := "+t2%100000); 
 console.log(t2-t1);
 //task 1 area ends


 //task 2 area start 
 let t3 = Date.now();
console.log("Starting taskat 2:= "+t3%100000);

let arr=[];
for(let i =2;i<args.n;i++) {
    let isPrime = ISPrime(i);
    if(isPrime==true){
        arr.push(i);
    }
}





 let t4 = Date.now();
console.log("Finished taskat 2 := "+t4%100000); 
 console.log(t4-t3);
  //task 2 area ends
  console.log(t4-t1);