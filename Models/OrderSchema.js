const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  status: { type: String, enum: ['placed', 'shipped', 'delivered'], default: 'placed' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
