const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = express.Router();


// mongoose.connection.once('open', () => {
//   console.log('connected to database');
// })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

router.get('/api', (req, res) => {
  res.status(200).send({ message: 'Database connection live' })
});


require('./routes/citizen.routes.js')(app);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

