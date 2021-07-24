const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

const PORT = 5000;

app.use('/api/v1/csv', require('./routes/csvParser'));

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
