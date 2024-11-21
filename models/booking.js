const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  roomno:{type:String,required:true},
  name: { type: String, required: true },
  
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
 
});

module.exports = mongoose.model('Booking', bookingSchema);
