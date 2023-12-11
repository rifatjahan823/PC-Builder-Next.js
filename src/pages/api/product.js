
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.7b7ma7m.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
    const productCollection = client.db('products').collection('product');

    // Retrieve products from MongoDB
    const products = await productCollection.find({}).toArray();

    // Send products as a JSON response
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
   on
 
  }
}

export default run;

