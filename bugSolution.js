```javascript
// Correct use of $in operator with an array of ObjectId
const { MongoClient } = require('mongodb');

async function findUsers() {
  const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('yourDatabaseName'); // Replace with your database name
    const collection = db.collection('users');
    const objectIds = [
      new ObjectId("651a7d2c6904787f247f756a"),
      new ObjectId("651a7d2c6904787f247f756b"),
    ];
    const query = { _id: { $in: objectIds } };
    const users = await collection.find(query).toArray();
    console.log(users);
  } finally {
    await client.close();
  }
}

findUsers();
```