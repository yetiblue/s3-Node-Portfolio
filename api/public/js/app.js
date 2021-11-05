const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const constants = require("./constants.js");
async function findObject(client) {
  const result = await client
    .db("portfolio_images")
    .collection("images")
    .find({});
  console.log(result);
}
async function main() {
  //loops thru array and uploads image src to MongoDB
  try {
    await constants.client.connect();
    await findObject(constants.client);
  } catch (e) {
    console.log(e);
  } finally {
    await constants.client.close();
  }
}
main();

const photoActions = require("./uploadDownload.js");

app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);
app.use(express.static("/client/public"));
app.use(express.static("public")); //for s3 JS files

app.get("/", (req, res) => {
  res.send("Hello World!");
  let fileName = "/logo192.png";
  res.sendFile(fileName, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.get("/route1", (req, res) => {
  res.send("Hello from route 1");
  photoActions.viewAlbum("Nature");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
