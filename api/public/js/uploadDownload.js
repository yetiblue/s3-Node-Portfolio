// let photoArray = [];

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
    photoArray.splice(0, 1); //the uri for the object instead of image is included as the first item
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
export function testFunc() {
  console.log("hello");
}

// module.exports = {
//   // default: "42",
//   testFunc: function() {
//     console.log("hello");
//   },
//   uploadFile: function(fileName, folderPath) {
//     //upload files from page to S3
//     //filename should include name of the path of the folder before the file.
//     //take all the file names and then add on 'folder/' to the start

//     const fileContent = constants.fs.readFileSync(fileName);
//     const fullPath =
//       "/" + encodeURIComponent(folderPath) + "/" + encodeURIComponent(fileName);
//     console.log(fullPath);
//     const params = {
//       Bucket: constants.BUCKET_NAME,
//       Key: fullPath,
//       Body: fileContent,
//     };
//     constants.s3.upload(params, function(err, data) {
//       if (err) {
//         throw err;
//       }
//       console.log(`File uploaded successfully. ${data.Location}`);
//     });
//   },
//   //viewAlbum -> Opens album in S3 Bucket, downloads files, and then uploads to MongoDB
//   viewAlbum: function(albumName) {
//     // console.log(albumName, "WHAT IS THIS");
//     const params = {
//       Bucket: constants.BUCKET_NAME,
//       Prefix: albumPhotosKey, //IS THIS BEING USED?
//     };
//     var albumPhotosKey = encodeURIComponent(albumName) + "/";
//     constants.s3.listObjects(params, function(err, data) {
//       //error with callback somewhere here ^

//       if (err) {
//         console.log(err.message);
//       }
//       // 'this' references the AWS.Request instance that represents the response
//       var href = this.request.httpRequest.endpoint.href;
//       var bucketUrl = href + constants.BUCKET_NAME + "/";
//       var newBucketUrl = constants.NEW_BUCKET_NAME + "/";
//       // console.log(bucketUrl, "bucketUrl");

//       var photos = data.Contents.map(function(photo) {
//         var photoKey = photo.Key; //photoKey is set to the name of the file?
//         var photoUrl = newBucketUrl + encodeURIComponent(photoKey);
//         photoArray.push({ src: photoUrl, genre: albumName }); //include param from above that gets filled with the collection name which would be added to tag: key
//         console.log(photoArray, ": photoarray");
//       });
//       main().catch(console.error);
//     });
//   },
// };
//need function to query from Mongo
