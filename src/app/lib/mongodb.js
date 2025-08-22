import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://megamart:0JcaIfZIK4PHTJ88@cluster0.4vfwmjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbconnection(collectionName) {
  // connect client first
  if (!client.isConnected?.()) {
    // MongoDB v5+ optional chaining
    await client.connect();
  }
  return client.db("mega-mart-shop").collection(collectionName);
}
