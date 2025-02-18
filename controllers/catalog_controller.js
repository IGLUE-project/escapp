const {models} = require("../models");
const fs = require("fs");
const path = require("path");

exports.upload = async (req, res, next) => {
const data = [];
  req.on("data", (chunk) => {
    data.push(chunk);
  });

  req.on("end", () => {
    let fileData = Buffer.concat(data);
    fs.writeFile(
      path.join(__dirname, "example.pdf"),
      fileData,
      "base64",
      (err) => {
        if (err) {
          res.statusCode = 500;
        }
      }
    );
  });
};

exports.download = async (req, res, next) => {};

exports.show = async (req, res, next) => {};
