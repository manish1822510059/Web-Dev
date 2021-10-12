let input = process.argv;
let  n = parseInt(input[2]);
let arr = [];
for (let i = 0; i < n; i++){
let value = parseInt(input[i+3])
          arr[i] =value;
}
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);
console.log(arr.length);






// let input = process.argv;
// let  n  = parseInt(input[2]);
// let arr =[];
// for(let i = 0; i < n; i++) {
//     let value = parseInt(input[i+3]);
//     arr[i] = value;
// }
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr);
// console.log(arr.length);