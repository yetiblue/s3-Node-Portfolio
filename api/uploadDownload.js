const dotenv = require("dotenv");
dotenv.config();
const ID = `${process.env.ID}`;
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
    });
  });
}
viewAlbum("Nature");
