const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log('Connected to -> MongoDB');
   app.listen(config.port, () => {
    console.log(`Listening to port -> ${config.port}`);
  });
});