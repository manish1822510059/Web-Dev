//npm init
//npm install minimist
//node firstwritingJSON.js --dest=teams.json
let minimist = require('minimist');
let fs = require('fs');
let args = minimist(process.argv);

// JSON = javascript object Notation
//JSON means saving data in the same format as of javascript object

let s1 = {
    name:"Manish",
    age:22
};0
let s2 = {
    name:"sagar",
    age:25
}

// console.log(s1.name);
// console.log(s1.age);


// let narr = [10,20,30];
// console.log(narr[0]);
// console.log(narr[1]);
// console.log(narr[2]);

// let strkaArrays = ["manish","rahul","jasbir"];
// console.log(strkaArrays[0]);
// console.log(strkaArrays[1]);
// console.log(strkaArrays[2]);

let arrofobject =[
     {
name:"Manish",
age:22
     },
     {
        name:"summit sir",
        age:34
     },

   {name:"jasbir",
   age:24
       
   }
]; 
console.log(arrofobject[0].name);
console.log(arrofobject[0].age);

console.log(arrofobject[1].name);
console.log(arrofobject[1].age);

console.log(arrofobject[2].name);
console.log(arrofobject[2].age);

// let stdntsway1 = [s1,s2];//an array of objects which is again an object =JSO (javascript object)

// let json = JSON.stringify(stdntsway1); //JSO to JSON (javascript object Notation)
// fs.writeFileSync(args.dest,json,"utf-8")