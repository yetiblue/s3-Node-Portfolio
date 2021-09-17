// const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();
const ID = `${process.env.ID}`;
const SECRET = `${process.env.SECRET}`;
const BUCKET_NAME = `${process.env.BUCKET_NAME}`;
const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});
// const params = {
//   Bucket: BUCKET_NAME,
//   CreateBucketConfiguration: {
//     LocationConstraint: "us-east-2",
//   },
// };
const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: BUCKET_NAME,
    Key: "test.jpg",
    Body: fileContent,
  };
  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
uploadFile("test.png");
// s3.createBucket(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log("Bucket Created Successfully", data.Location);
// });
