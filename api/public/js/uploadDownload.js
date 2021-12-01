import fs from "fs";
import * as constants from "./constants.js";

let photoArray = []; //holding downoaded photos from the s3 bucket

async function createObject(client, newObject) {
  //send photo src to MongoDB
  const result = await client
    .db("portfolio_images")
    .collection("images")
    .insertOne(newObject);
  // console.log(`new object created with the following id: ${result.insertedId}`);
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

export function uploadFile(file, folderPath, fileName) {
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
  // console.log(fullPath, "fullpath");
  const params = {
    Bucket: constants.BUCKET_NAME,
    Key: fullPath,
    Body: fileContent,
  };
  let s3Upload = constants.s3.upload(params).promise();
  s3Upload
    .then((data) => {
      console.log(`File uploaded successfully. ${data.Location}`);
    })
    .catch((err) => {
      console.log(err);
    });
  Promise.all([s3Upload]).then(() => {
    viewAlbum(folderPath.folderName);
  });
}

//   //viewAlbum -> Opens album in S3 Bucket, downloads files, and then uploads to MongoDB
export function viewAlbum(albumName) {
  let albumPhotosKey = encodeURIComponent(albumName) + "/";

  const params = {
    Bucket: constants.BUCKET_NAME,
    Prefix: albumPhotosKey,
  };
  constants.s3.listObjects(params, function(err, data) {
    if (err) {
      console.log(err.message);
    }
    var newBucketUrl = constants.NEW_BUCKET_NAME + "/"; //new AWS syntax for the bucket

    var photos = data.Contents.map(function(photo) {
      var photoKey = photo.Key; //name of the file in 'data'
      var photoUrl = newBucketUrl + encodeURIComponent(photoKey);
      photoArray.push({ src: photoUrl, genre: albumName }); //include param from above that gets filled with the collection name which would be added to tag: key
      // console.log(photoArray, ": photoarray");
    });
    main().catch(console.error);
  });
}
