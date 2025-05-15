const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  password: String, // store hashed
  role: { type: String, enum: ['customer', 'admin', 'vendor'], default: 'customer' },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
