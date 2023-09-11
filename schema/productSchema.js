const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product Type is required']
  },
  displaySize: {
    type: String,
    required: [true, 'Dispaly Type is required']
  },
  RAMSize: {
    type: String,
    required: [true, 'RAM Number is required']
  },
  internalMemory: {
    type: String,
    required: [true, 'Internal memory type is required']
  },
  brand: {
    type: String,
    required: [true, 'brand of Memory is required']
  },
  serialNumber: {
    type: String,
    required: [true, 'Serial Number is required']
  },
  price: {
    type: String,
    required: [true, 'Price is required']
  },
  imageName: {
    type: String,
    default: "none",
    required: true
},
imageData: {
    type: String,
    required: true
},
count: {
  type: Number,
  required: true
}
})


module.exports = mongoose.model('products', productSchema);