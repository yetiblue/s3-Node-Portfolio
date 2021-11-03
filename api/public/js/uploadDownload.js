// const dotenv = require("dotenv");
// dotenv.config();
// const { MongoClient } = require("mongodb");
// const uri = `${process.env.URI}`;
// console.log(uri);
// const client = new MongoClient(uri);

// const ID = `${process.env.ID}`;
// console.log(ID);
// const SECRET = `${process.env.SECRET}`;
// const BUCKET_NAME = `${process.env.BUCKET_NAME}`; //used to access bucket for files
// const NEW_BUCKET_NAME = `${process.env.UPDATED_BUCKET_NAME}`; //used to create new version of s3 object URLs
// const fs = require("fs");
// const AWS = require("aws-sdk");
// // const photoArray = ["test1.png", "test2.png", "test3.png", "test4.png"];
let photoArray = [];

// const s3 = new AWS.S3({
//   accessKeyId: ID,
//   secretAccessKey: SECRET,
// });
const constants = require("./constants.js");
console.log(constants.BUCKET_NAME, "constants");
const phrase = "Is this thing on?";
const uploadFile = (fileName) => {
  //filename should include name of the path of the folder before the file.
  //take all the file names and then add on 'folder/' to the start
  const fileContent = constants.fs.readFileSync(fileName);
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
  };
  constants.s3.upload(params, function(err, data) {
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
    Bucket: constants.BUCKET_NAME,
    Prefix: albumPhotosKey,
  };
  var albumPhotosKey = encodeURIComponent(albumName) + "/";
  console.log(albumPhotosKey);
  constants.s3.listObjects(params, function(err, data) {
    //error with callback somewhere here ^

    if (err) {
      console.log(err.message);
    }
    // 'this' references the AWS.Request instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + constants.BUCKET_NAME + "/";
    var newBucketUrl = constants.NEW_BUCKET_NAME + "/";
    // console.log(bucketUrl, "bucketUrl");

    var photos = data.Contents.map(function(photo) {
      var photoKey = photo.Key; //photoKey is set to the name of the file?
      var photoUrl = newBucketUrl + encodeURIComponent(photoKey);
      console.log(photoKey, photoUrl, "photokey + photoUrl");
      photoArray.push({ src: photoUrl });
    });
    main().catch(console.error);
  });
}
async function createObject(client, newObject) {
  const result = await client
    .db("portfolio_images")
    .collection("images")
    .insertOne(newObject);
  console.log(`new object created with the following id: ${result.insertedId}`);
}
async function main() {
  try {
    await client.connect();
    photoArray.splice(0, 1); //the uri for the object instead of image is included as the first item
    console.log(photoArray);
    for (let i = 0; i < photoArray.length; i++) {
      console.log(photoArray[i]);
      await createObject(constants.client, photoArray[i]);
    }
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
viewAlbum("Nature");

module.exports = {
  testImport: function() {
    return phrase;
  },
  viewAlbum: function() {
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
      var newBucketUrl = NEW_BUCKET_NAME + "/";
      // console.log(bucketUrl, "bucketUrl");

      var photos = data.Contents.map(function(photo) {
        var photoKey = photo.Key; //photoKey is set to the name of the file?
        var photoUrl = newBucketUrl + encodeURIComponent(photoKey);
        console.log(photoKey, photoUrl, "photokey + photoUrl");
        photoArray.push({ src: photoUrl });
      });
      main().catch(console.error);
    });
  },
};
