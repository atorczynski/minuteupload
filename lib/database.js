const { MongoClient, ObjectId } = require('mongodb');

let db = null;

async function initDB(mongodbURL, dbName) {
  const client = new MongoClient(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection(collectionName) {
  if (!db) {
    throw new Error('Init DB first');
  }
  return db.collection(collectionName);
}

async function addImage(document, cb) {
  const collection = await getCollection('minuteupload');
  collection.insertOne(document);
  cb();
}

async function getImage(documentID, cb) {
  const collection = await getCollection('minuteupload');

  const result = collection.findOne({ name: documentID }, cb);
  return result;
}

exports.initDB = initDB;
exports.addImage = addImage;
exports.getImage = getImage;
exports.getCollection = getCollection;
