const args = process.argv.slice(2);
const fs = require("fs");

let URL = args[0]

let write = args[1]

const request = require('request');
request(URL, (error, response, body) => {

  fs.writeFile(write, body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(`Downloaded and saved ${(body.length * 1.5)} bytes to ${write}.`)
  });

});
