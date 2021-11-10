const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const constants = require("./constants.js");
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

const photoActions = require("./uploadDownload.js");

app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);
app.use(express.static("/client/public"));
app.use(express.static("public")); //for s3 JS files

app.get("/", (req, res) => {
  // res.send("Hello World!");
  let fileName = "./public/static/uploader.html";
  res.sendFile(fileName, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
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
