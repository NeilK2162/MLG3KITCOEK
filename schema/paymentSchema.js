
const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  payment_method_id: {
    type: String,
    required: [true, 'Payment ID dya']
  },
  name: {
    type: String,
    required: [true, 'Name dya']
  },
  email: {
    type: String,
    required: [true, 'E-mail dya']
  },
  amount: {
    type: String,
    required: [true, 'Amount dya']
  },
  paymentDate: {
    type: String,
    required: [true, 'Payment dya']
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number dya']
  }

})

module.exports = mongoose.model('Payment', paymentSchema);