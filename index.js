// const name = "Vijay";
// console.log(name);
const fs = require("fs");
// console.log(fs.writeFileSync("read.txt", "Creating a new file using sync"));
// console.log(
//   fs.writeFileSync(
//     "read.txt",
//     "first time creating new file with default data second tme update the pre-existing data"
//   )
// );
// console.log(
//   fs.appendFileSync("read.txt", " append new data into the existing file")
// );
// const buffer_data = fs.readFileSync("read.txt");
// console.log(buffer_data.toString());
// console.log(fs.renameSync("readWrite.txt", "readWrite.txt"));
console.log(fs.writeFileSync("express.js", "hello express"));
