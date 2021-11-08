const dotenv = require("dotenv").config();
// dotenv.config();
const { MongoClient } = require("mongodb");
const uri = `${process.env.URI}`;
const client = new MongoClient(uri);
const ID = `${process.env.ID}`;
const SECRET = `${process.env.SECRET}`;
const BUCKET_NAME = `${process.env.BUCKET_NAME}`; //used to access bucket for files
const NEW_BUCKET_NAME = `${process.env.UPDATED_BUCKET_NAME}`; //used to create new version of s3 object URLs
const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

module.exports = {
  ID,
  SECRET,
  dotenv,
  MongoClient,
  uri,
  client,
  BUCKET_NAME,
  NEW_BUCKET_NAME,
  fs,
  AWS,
  s3,
};
