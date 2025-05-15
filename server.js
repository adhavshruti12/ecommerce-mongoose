// Express + Mongoose
const express = require('express');
const router = express.Router();
const Product = require('./models/Product');

// GET /vendor/:vendorId/products
router.get('/vendor/:vendorId/products', async (req, res) => {
  try {
    const products = await Product.find({ vendorId: req.params.vendorId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
