import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
export const uri = `${process.env.URI}`;
const connection = new MongoClient(uri);
export const client = connection;
export const ID = `${process.env.ID}`;
export const SECRET = `${process.env.SECRET}`;
export const BUCKET_NAME = `${process.env.BUCKET_NAME}`; //used to access bucket for files
export const NEW_BUCKET_NAME = `${process.env.UPDATED_BUCKET_NAME}`; //used to create new version of s3 object URLs
import AWS from "aws-sdk";
export const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

// module.exports = {
//   ID,
//   SECRET,
//   dotenv,
//   MongoClient,
//   uri,
//   client,
//   BUCKET_NAME,
//   NEW_BUCKET_NAME,
//   fs,
//   AWS,
//   s3,
// };
