const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  //read
  let fs = require("fs");
  fs.readFile("log.txt", function (err, buf) {
    console.log(buf.toString());
  });

  //write
  let data = "New File Contents";
  fs.writeFile("temp.txt", data, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
});
