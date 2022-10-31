const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const logger = require('morgan');
const Trip = require('./models/trip');
// const methodOverride = require('method-override');


// Always require and configure near the top
require('dotenv').config();

// Connect to the database
require('./config/database');


const app = express();

// Check if token and create req.user
// app.use(require('./config/checkToken'));

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Protect the API routes below from anonymous users
// const ensureLoggedIn = require('./config/ensureLoggedIn');
// app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
// app.use('/api/trips', ensureLoggedIn, require('./routes/api/trips'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

// -------------------------
// Mongoose Connection Stuff
// -------------------------

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// mongoose.connection.once('open', ()=> {
//   console.log('connected to mongo');
// });

// -------------------------
// Setting Up View Engine
// -------------------------

// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

// -------------------------
// Setting Up Body Parser
// -------------------------

// app.use(express.urlencoded({extended:false}));

// -------------------------
// Method Override
// -------------------------

// app.use(methodOverride('_method'));

// -------------------------
// Trip Routes
// -------------------------

// Index

app.get('/trips', (req, res) => {
  Trip.find({}, (error, allTrips) => {
    res.render('trips/Index', {
      trips: allTrips
    });
  })
});

// // New

app.get('/trips/new', (req, res) => {
  res.render('trips/new');
});

// // Create

app.post('/trips', (req, res) => {
  Trip.create(req.body, (error, createdTrip) => {
    res.redirect('/trips')
  })
});

// // Delete

app.delete('/trips/:id', (req, res) => {
  Trip.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('/trips');
  })
});

// // Update

app.put('/trips/:id', (req, res) => {
  Trip.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/trips/$req.params.id`);
    }
  });
});

// // Edit

app.get('/trips/:id/edit', (req, res) => {
  Trip.findOne({
    _id: req.params.id
  }, (error, foundTrip) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('trips/Edit', { trip: foundTrip });
    }
  })
});

// // Show

app.get('/trips/:id', (req, res) => {
  Trip.findOne({ _id: req.params.id }, (error, foundTrip) => {
    res.render('trips/details', { trip: foundTrip});
  });
});