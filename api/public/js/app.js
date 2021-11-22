import express from "express";
import { uploadFile } from "./uploadDownload.js";
const app = express();
import multer from "multer";
const upload = multer();
const port = 4000;
import path from "path";
import bodyParser from "body-parser";
app.use(bodyParser.json());
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import cors from "cors";
import constants from "constants";

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
app.post("/uploadphotos", upload.array("files", 10), (req, res, err) => {
  res.sendStatus(200);
  console.log(req.files, "request");
  console.log(req.body, "upload");
  // let photoArray = req.body;
  // console.log(photoArray, "photoarray");
  // testFunc(photoArray);
  let reconfiguredPhotoArray = [];
  // photoArray.files.forEach((photo) =>
  //   reconfiguredPhotoArray.push({
  //     src: photo.src,
  //     folderName: photoArray.folderName,
  //   })
  // );
  // reconfiguredPhotoArray.forEach((photo) =>
  //   uploadFile(photo.src, photo.folderName)
  // );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
