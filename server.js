const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = express.Router();

//create database connection
const mongoURL = `mongodb://guest:guest123@cluster0-shard-00-00-iwrit.mongodb.net:27017,cluster0-shard-00-01-iwrit.mongodb.net:27017,cluster0-shard-00-02-iwrit.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (reason) {
  console.log(reason);
});

//console.log when connection is established
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

//middleware for parsing body of client response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//use express router middleware
app.use(router);


router.get('/api', (req, res) => {
  res.status(200).send({ message: 'server connection live' })
});


require('./routes/citizen.routes.js')(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

