//Q1- node wcat.js filepath => displays content of the file in the terminal 
let fs = require("fs");
let input = process.argv.slice(2);
let path = input[0];

console.log("Executed before file reading\n \n");
   let data = fs.readFileSync(path, 'utf8');
   console.log(data);
    console.log(" \n \n Executed After file reading");


