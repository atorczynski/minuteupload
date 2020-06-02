require('dotenv').config();
const express = require('express');
const path = require('path');
const { initDB } = require('./lib/database');

const morgan = require('morgan');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(morgan('tiny'));

initDB(process.env.MONGO_URI, process.env.DB_NAME).then(async () => {
  console.log(`Connect to ${process.env.DB_NAME}`);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log('server is running');
});
