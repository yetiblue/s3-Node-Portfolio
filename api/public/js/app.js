// const express = require("express");
import express from "express";
import { testFunc } from "./uploadDownload.js";
testFunc();
testFunc;
const app = express();
const port = 4000;
// const path = require("path");
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const cors = require("cors");
import cors from "cors";
import constants from "constants";
// const constants = require("./constants.js");
// let sendPhotos = [];
async function findObject(client) {
  let sendPhotos = await client
    .db("portfolio_images")
    .collection("images")
    .find({})
    .toArray();
  return sendPhotos;
}
async function fetchMongo() {
  //loops thru array and uploads image src to MongoDB
  try {
    await constants.client.connect();
    dbResults = await findObject(constants.client);

    return dbResults;
  } catch (e) {
    console.log(e);
  } finally {
    await constants.client.close();
  }
}

// const photoActions = require("./uploadDownload.js");

app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);
app.use(express.static(path.join(__dirname))); //for s3 JS files
// console.log(path.join(__dirname + "../"));

// app.get("/", (req, res) => {
//   // // res.send("Hello World!");
//   // let fileName = "./public/static/uploader.html";
//   // res.sendFile(fileName, function(err) {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log("Sent:", fileName);
//   //   }
//   // });
//   res.sendFile("uploader.html");
// });
app.get("/route1", (req, res, err) => {
  res.locals.error = err;
  const status = err.status || "200";
  fetchMongo()
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
