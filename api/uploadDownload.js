import fs from "fs";
import * as constants from "./constants.js";

let photoArray = []; //downloaded photos from s3 bucket folder (INCLUDES PREVOUS PHOTOS)
let previousArray = []; //query DB first to see what's already there
let previousArraySources = []; //stores just the src's from previousArray -> used as a check against photoArray
let filterResult = []; //filtered version of photoArray without duplicates

let searchGenre; //used to query DB to get values to populate previousArray
let emptyDBEdgeCase; //if previousArray is empty, this will be true. photoArray will be uploaded to DB instead of filteredResult on the first run

async function createObject(client, newObject) {
  //send photo src to MongoDB
  const result = await client
    .db("portfolio_images")
    .collection("images")
    .insertMany(newObject);

  console.log(`new object created with the following id: ${result.insertedId}`);
}
async function main() {
  try {
    await constants.client.connect();
    console.log("main connected");
    //populates previousArray with values from DB
    previousArray = await constants.client
      .db("portfolio_images")
      .collection("images")
      .find({ genre: searchGenre })
      .toArray();
    if (previousArray.length == 0) {
      emptyDBEdgeCase = true;
    }
    console.log(photoArray, "photoarray"); //will include all images from S3 Bucket, including previously submitted ones

    console.log(previousArray, "previous array"); //old values, used to compare against photoArray. Values here will be filtered out of photoArray

    previousArray.forEach((x) => previousArraySources.push(x.src)); //retrieve just the src's from previousArray
    let selectedSource;
    function containsValue(value) {
      //callback function for photoArray.filter below
      if (value.src !== selectedSource) {
        return true;
      } else {
        return false;
      }
    }
    for (let i = 0; i < previousArraySources.length; i++) {
      selectedSource = previousArraySources[i];
      filterResult = photoArray.filter(containsValue);

      photoArray = filterResult; //photoArray will shrink recursively with each iteration
    }
    console.log(filterResult, "filter");

    if (emptyDBEdgeCase) {
      //if the DB is empty of a certain genre, send everything in photoArray

      await createObject(constants.client, photoArray);
      emptyDBEdgeCase = false;
    } else {
      //otherwise if DB is not empty, send the values in filteredResult instead because photoArray will have values already in the DB.

      await createObject(constants.client, filterResult);
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
        `https://timmyportfolio.s3.us-east-2.amazonaws.com/${albumName}%2F` //an object is created where the photoUrl is just the folder/object name without the photo name at the end
      ) {
      } else {
        searchGenre = albumName;

        photoArray.push({
          src: photoUrl,
          genre: albumName,
        }); //include param from above that gets filled with the collection name which would be added to tag: key
        // console.log(photoArray, ": photoarray");
      }
    });

    main().catch(console.error);
  });
}
