const { MongoClient } = require('mongodb');

async function initDB(mongodbURL, dbName) {
  const client = new MongoClient(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
}

exports.initDB = initDB;
