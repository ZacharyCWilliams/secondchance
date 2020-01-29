const express = require('express');
const cors = require('cors');
const app = express();

// app.use(cors());

app.get('/api', (req, res) => {
  res.json({ 'testkey' : 'test data value' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

