const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");
const uri = `${process.env.URI}`;
console.log(uri);
const client = new MongoClient(uri);

const ID = `${process.env.ID}`;
console.log(ID);
const SECRET = `${process.env.SECRET}`;
const BUCKET_NAME = `${process.env.BUCKET_NAME}`;
const fs = require("fs");
const AWS = require("aws-sdk");
const photoArray = ["test1.png", "test2.png", "test3.png", "test4.png"];

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const uploadFile = (fileName) => {
  //filename should include name of the path of the folder before the file.
  //take all the file names and then add on 'folder/' to the start
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
  };
  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
// for (let i = 0; i < photoArray.length; i++) {
//   uploadFile(photoArray[i]);
//   console.log("uploaded", photoArray[i]);
// }

function viewAlbum(albumName) {
  const params = {
    Bucket: BUCKET_NAME,
    Prefix: albumPhotosKey,
  };
  var albumPhotosKey = encodeURIComponent(albumName) + "/";
  console.log(albumPhotosKey);
  s3.listObjects(params, function(err, data) {
    //error with callback somewhere here ^

    if (err) {
      console.log(err.message);
    }
    // 'this' references the AWS.Request instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + BUCKET_NAME + "/";
    // console.log(bucketUrl, "bucketUrl");

    var photos = data.Contents.map(function(photo) {
      var photoKey = photo.Key; //photoKey is set to the name of the file?
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);
      console.log(photoKey, photoUrl, "photokey + photoUrl");
      //take the photoUrl and call Mongo to add it to the database
      //set the ID manually to 1, 2, 3 etc
    });
  });
}

async function main() {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
async function listDatabases(client) {
  databasesList = await client
    .db()
    .admin()
    .listDatabases();
  console.log("Databases: ");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
// viewAlbum("Nature");
