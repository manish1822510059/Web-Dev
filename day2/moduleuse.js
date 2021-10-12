let input = require('minimist');
let args = input(process.argv);

if(args.age>30){
      console.log("Hello "+args.name+".you must go home");
}else{
    console.log("Heys"+args.name+" .where is the party tonight");
}



// let parser = require('minimist');
// let args = parser(process.argv);
// if(args.age>30){
//     console.log("Hello"+args.name+".you must go home");
// }else{
//     console.log("Heys "+args.name+" .where is the party tonight");
// }
// Terminal to run command
// node moduleuse.js --name="Manish kumar" --age=22