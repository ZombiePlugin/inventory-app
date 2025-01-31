const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided']
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"]
  },
  featured: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: [true, "product description must be provided"]
  },
  image: {
    type: String,
    required: [true, "product image must be provided"]
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Product', productSchema);