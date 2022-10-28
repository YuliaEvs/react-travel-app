const Trip = require('../../models/trip');


createTrip.get('/trips/new', (req, res) => {
    res.render('trips/New')
  });

updateTrip.put = (req, res) => {
    
}

const deleteTrip = (req, res) => {
    
}

  module.exports = {
    createTrip,
    updateTrip,
    deleteTrip

  };