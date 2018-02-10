const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./models/todoListModel');
const path = require('path');
const bodyParser = require('body-parser');

const userName = 'ford';
const password = 'fwhiv';

// Require routes
// They are yet to be created
// const index = require('./routes/index');
// const api = require('./routes/api/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.all('/*', (req, res, next) => {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${userName}:${password}@ds047940.mlab.com:47940/tp-db`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/todoListRoutes');

// app.use('/', index);
// app.use('/users', users);
// app.use('/api/v1', api)

routes(app);


app.listen(port);


console.log(`todo list RESTful API server started on: ${port}`);
