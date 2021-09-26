const dotenv = require("dotenv");
dotenv.config();
const uri = `${process.env.URI}`;

const { MongoClient } = require("mongodb");

async function createObject(client, newObject) {
  const result = await client
    .db("portfolio_images")
    .collection("images")
    .insertOne(newObject);
  console.log(`new object created with the following id: ${result.insertedId}`);
}
async function main() {
  let arrayOfImages = [
    { name: "Image 1", src: "blah blah balh" },
    { name: "Image 2", src: "blah blah balh2" },
  ];

  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/drivers/node/ for more details
   */
  const uri = `${process.env.URI}`;
  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
   * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
   * pass option { useUnifiedTopology: true } to the MongoClient constructor.
   * const client =  new MongoClient(uri, {useUnifiedTopology: true})
   */
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // await createObject(client, { name: "Image 1", src: "blah blah balh" });
    for (let i = 0; i < arrayOfImages.length; i++) {
      await createObject(client, arrayOfImages[i]);
    }

    // Make the appropriate DB calls
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

// Add functions that make DB calls here
