let fs = require("fs");
let readLine = require("readline");
let input = process.argv.slice(2);
let path = input[1];
console.log("Executed before file reading\n \n");
   let data = readLine.createInterface({
      input: fs.createReadStream(path),
      output: process.stdout,
      terminal: false
  });

  data.on('line', (line) => { 
     let i = 1 , s = 0;
     if(line.length > 0){
         if(s > 0){
            console.log();
            console.log(i++,"",line);
            lb=0;
         }
         else
         s++;
     }
   // var spc = data.toString().split('\n'),
   //      names = [];
   //  for (var i in spc) {
   //      if (spc[i].length !== 0) {
   //          names.push(spc[i].trim());
   //      }

   //  }
   //  console.log(line); 
}); 
    console.log(" \n \n Executed After file reading");