require('express-async-errors');
const winston = require('winston');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
//require routes
const users = require('./routes/user.routes.js');
const citizens = require('./routes/citizen.routes.js');
const inmates = require('./routes/inmate.routes.js');
const auth = require('./routes/auth');
const error = require('./middleware/error');

winston.add(winston.transports.File, { filename: 'logfile.log' });

//connect to mongoDB Atlas
const mongoURL = `mongodb://guest:guest123@cluster0-shard-00-00-iwrit.mongodb.net:27017,cluster0-shard-00-01-iwrit.mongodb.net:27017,cluster0-shard-00-02-iwrit.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (reason) {
  console.log(reason);
});

//console.log when connection is established
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

//middleware
app.use(express.json()); //parses client response json as req.body
app.use(express.urlencoded({ extended: true }));  //parses key=value&key=value
app.use(morgan('tiny'));

//delegate routing
app.use('/api/users', users);
app.use('/api/citizens', citizens);
app.use('/api/inmates', inmates);
app.use('/api/auth', auth);
//handle errors, used by express-async-errors,
//implements our catch block for us on all routes, and uses this middleware inside catch block
app.use(error);

app.get('/api', (req, res) => {
  res.send('Home route, please make valid request');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));


