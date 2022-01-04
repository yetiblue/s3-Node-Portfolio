import express from "express";
import { uploadFile, viewAlbum } from "./uploadDownload.js";
import multer from "multer";
import path from "path";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";
import * as constants from "./constants.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "/uploads/"));
  },

  filename: function(req, file, cb) {
    /*Appending extension with original name*/
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
// const port = 4000;

app.use(bodyParser.json());

async function findObject(client, genre) {
  // console.log(client, "client");
  console.log(genre, "genre");
  let sendPhotos = await client
    .db("portfolio_images")
    .collection("images")
    .find({ genre: genre }) //USE THIS
    .toArray();
  return sendPhotos;
  // console.log(sendPhotos, "sendPhotos");
}
async function fetchMongo(genreName) {
  //loops thru array and uploads image src to MongoDB
  try {
    await constants.client.connect();
    console.log("connected to mongo");
    let dbResults = await findObject(constants.client, genreName);

    return dbResults;
  } catch (e) {
    console.log(e, "did not connect to mongo client");
  } finally {
    await constants.client.close();
  }
}
// fetchMongo("travel");

app.use(
  cors({
    origin: `http://localhost:3000`,
    // origin: "http://timmyzhou.art/",
  })
);
app.use(express.static(path.join(__dirname))); //for s3 JS files
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/getPhotos/:id", (req, res, err) => {
  let id = req.params.id;
  console.log(id, "req id");
  //id = urban or pastel or landscape etc. Id then passed to fetchMongo
  res.locals.error = err;
  const status = err.status || "200";
  fetchMongo(id)
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/uploadphotos", upload.array("files", 70), async (req, res, err) => {
  res.sendStatus(200);

  var paths = req.files.map((file) => file.path);
  let folder = req.body;
  console.log(paths.length);
  for (let i = 0; i < paths.length; i++) {
    console.log(paths[i], "paths");

    uploadFile(paths[i], folder, req.files[i].originalname);
  }
});
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
