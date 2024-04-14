import { MongoClient } from 'mongodb';

const express = require('express');
const body = require('body-parser');

async function start() {
  try {

    const app = express();

    const mongo = await MongoClient.connect('mongodb+srv://pmanfern:YWD3Vq0KxWbrQ1O6@cluster0.1fxw79n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    await mongo.connect();

    app.db = mongo.db();

    // body parser

    app.use(body.json({
      limit: '500kb'
    }));

    // Routes

    app.use('/accounts', require('./routes/accounts'));

    // Start server

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  }
  catch(error) {
    console.log(error);
  }
}

start();