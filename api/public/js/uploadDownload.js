import fs from "fs";
import * as constants from "./constants.js";

let photoArray = []; //holding downoaded photos from the s3 bucket
let previousArray = [];
let searchGenre; // use in retrieving from Mongo to filter out duplicates.
let emptyDBEdgeCase = true; //the first time things run, use the photoArray.
//after that use filterResult
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
    console.log("main connected");
    previousArray = await constants.client
      .db("portfolio_images")
      .collection("images")
      .find({ genre: searchGenre })
      .toArray();
    console.log(previousArray, "after searching");
    console.log(photoArray, "photoarray"); //should have new images
    console.log(previousArray, "previous array"); //should have old images
    const filterResult = photoArray.filter((x) => !previousArray.includes(x)); //should return new images that are in photoArray and not in previousArray
    console.log(filterResult, "filterResult");
    if (emptyDBEdgeCase) {
      for (let i = 0; i < photoArray.length; i++) {
        // console.log(photoArray[i]);
        // console.log(photoArray, "full photoarray");
        await createObject(constants.client, photoArray[i]);
        emptyDBEdgeCase = false;
      }
    } else {
      for (let i = 0; i < filterResult.length; i++) {
        // console.log(photoArray[i]);
        // console.log(photoArray, "full photoarray");
        await createObject(constants.client, filterResult[i]);
      }
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
      if (
        photoUrl ==
        `https://timmyportfolio.s3.us-east-2.amazonaws.com/${albumName}%2F`
      ) {
      } else {
        searchGenre = albumName;
        let incrementID = 0;
        photoArray.push({
          src: photoUrl,
          genre: albumName,
        }); //include param from above that gets filled with the collection name which would be added to tag: key
        // console.log(photoArray, ": photoarray");
        photoArray.forEach((photo, incrementID) => {
          photo.id = incrementID += 1;
        });
      }
    });

    main().catch(console.error);
  });
}
