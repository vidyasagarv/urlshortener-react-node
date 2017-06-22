const mongoose = require('mongoose')

const UrlModel = mongoose.Schema({
  _id: {
    type: Number,
    index: true
  },
  long_url: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const CounterModel = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    default: 0
  }
})

// module.exports = mongoose.model('CounterModel', CounterModel)

module.exports = mongoose.model('UrlModel', UrlModel)
