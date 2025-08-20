const fs = require("fs");

// fs.writeFile("text.txt", "hello world", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.writeFile("text.txt", "hello world 2", (err) => {
  if (err) throw err;
  console.log("The file has been updated!");
});

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
