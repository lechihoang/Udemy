const fs = require("fs");

// fs.writeFile("message.txt", "Hello from Nodejs !", (err) => {
//     if (err) throw (err);
//     console.log("err");
// });


fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});