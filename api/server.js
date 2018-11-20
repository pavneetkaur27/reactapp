const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT =  normalizePort(process.env.PORT || '4000');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const index= require('./routes/index');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/enroll', index);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
