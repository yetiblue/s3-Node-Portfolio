import express from "express";
import { uploadFile } from "./uploadDownload.js";
import multer from "multer";
import path from "path";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";
import constants from "constants";
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
const port = 4000;

app.use(bodyParser.json());

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
  let reconfiguredPhotoArray = [];

  var paths = req.files.map((file) => file.path);
  console.log(paths[0], "paths");
  let folder = req.body;
  fs.readFile("./uploads/DSC00645.jpg", (err, data) => {
    console.log(data, "data");
  });
  // console.log(data, "data");
  // let data = constants.fs.createReadStream(paths[0], "utf8");
  // console.log(data);

  // const absolutePath = path.join(__dirname, req.files.path);
  // const jsonString = fs.readFileSync(absolutePath, "utf-8");
  // const jsonObject = JSON.parse(jsonString);
  // console.log(jsonObject, "js object");
  // const fileContent = constants.fs.readFileSync(fileName);
  // const fileContent = constants.fs.readFileSync(fileName);

  // uploadFile(reconfiguredPhotoArray[0].file, folder);
  // console.log(photoArray, "photoarray");
  // testFunc(photoArray);

  // photoArray.files.forEach((photo) =>
  //   reconfiguredPhotoArray.push({
  //     src: photo.src,
  //     folderName: photoArray.folderName,
  //   })
  // );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
