import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI; // gets it from mongoDB uri

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
    },
  });

  global._mongoClientPromise = client.connect();
  console.log('DB connected'); // check
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
