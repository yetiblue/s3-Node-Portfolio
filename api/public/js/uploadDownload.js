// let photoArray = [];
import fs from "fs";
// const constants = require("./constants.js");
import * as constants from "./constants.js";
// const uploadFile = (fileName, folderPath) => {
//   //upload files from page to S3
//   //filename should include name of the path of the folder before the file.
//   //take all the file names and then add on 'folder/' to the start

//   const fileContent = constants.fs.readFileSync(fileName);
//   const fullPath =
//     "/" + encodeURIComponent(folderPath) + "/" + encodeURIComponent(fileName);
//   console.log(fullPath);
//   const params = {
//     Bucket: constants.BUCKET_NAME,
//     Key: fullPath,
//     Body: fileContent,
//   };
//   constants.s3.upload(params, function(err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(`File uploaded successfully. ${data.Location}`);
//   });
// };

// for (let i = 0; i < photoArray.length; i++) {
//   uploadFile(photoArray[i]);
//   console.log("uploaded", photoArray[i]);
// }
let photoArray = [];

async function createObject(client, newObject) {
  //send photo src to MongoDB
  const result = await client
    .db("portfolio_images")
    .collection("images")
    .insertOne(newObject);
  console.log(`new object created with the following id: ${result.insertedId}`);
}
async function main() {
  //loops thru array and uploads image src to MongoDB
  try {
    await constants.client.connect();
    photoArray.splice(0, 1); //the uri for the object/folder instead of the image is included as the first item
    for (let i = 0; i < photoArray.length; i++) {
      console.log(photoArray[i]);
      await createObject(constants.client, photoArray[i]);
    }
  } catch (e) {
    console.log(e);
  } finally {
    await constants.client.close();
  }
}
// export function testFunc(array) {
//   console.log(array.folderName, "folderbane", array.files);
// }

export async function uploadFile(file, folderPath, fileName) {
  const fileContent = fs.readFileSync(file);
  console.log(
    fileContent,
    "filecontent",
    folderPath,
    fileName,
    "function params"
  );
  const fullPath =
    encodeURIComponent(folderPath.folderName) +
    "/" +
    encodeURIComponent(fileName);
  console.log(fullPath, "fullpath");
  const params = {
    Bucket: constants.BUCKET_NAME,
    Key: fullPath,
    Body: fileContent,
  };
  await constants.s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
  viewAlbum(folderPath.folderName);
}

//   //viewAlbum -> Opens album in S3 Bucket, downloads files, and then uploads to MongoDB
function viewAlbum(albumName) {
  // console.log(albumName, "WHAT IS THIS");
  let albumPhotosKey = encodeURIComponent(albumName) + "/";

  const params = {
    Bucket: constants.BUCKET_NAME,
    Prefix: albumPhotosKey,
  };
  constants.s3.listObjects(params, function(err, data) {
    if (err) {
      console.log(err.message);
    }
    console.log(data, "data");
    var newBucketUrl = constants.NEW_BUCKET_NAME + "/"; //new AWS syntax for the bucket

    var photos = data.Contents.map(async function(photo) {
      var photoKey = photo.Key; //name of the file in 'data'
      var photoUrl = newBucketUrl + encodeURIComponent(photoKey);
      await photoArray.push({ src: photoUrl, genre: albumName }); //include param from above that gets filled with the collection name which would be added to tag: key
      console.log(photoArray, ": photoarray");
    });
    // main().catch(console.error);
  });
}
