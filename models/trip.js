const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String, 
        required: true},
    days: {
      type: Number,
      required: true},
    createdAt: {
      type: Date,
      default: Date.now
    },
    note: {
      type: String,
      required: true}
});

module.exports = mongoose.model('Trip', tripSchema);