let input = process.argv;
let n  =  parseInt(input[2]44544);
let isprime = true;
for(let div = 2;div*div<n;div++){
    if(n%div==0){
        isprime = false;
    }
}
if(isprime==true){
    console.log(n+" = Prime no");
}else{
    console.log(n+" = Not a Prime no");
}