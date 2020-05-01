const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const app = express();

const PORT = 4000;
dotenv.config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');
  next();
});

const posts = require('./routes/posts');
const errorController = require('./controllers/error');


app.use(bodyParser.json());
app.use('/posts', posts);

app.get('/', (req, res) => {
  res.send('We are on home');
});

app.use(errorController.get404);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to db'));

app.listen(PORT);
