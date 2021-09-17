const dotenv = require("dotenv");
dotenv.config();
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
for (let i = 0; i < photoArray.length; i++) {
  uploadFile(photoArray[i]);
  console.log("uploaded", photoArray[i]);
}
