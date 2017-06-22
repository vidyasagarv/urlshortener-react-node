const Url = require('../models/Url')

module.exports = {
  find: function (params, callback) {
    Url.find(params, function(err, urls){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, urls)
    })
  },
  shorten: function (params, callback) {
    Url.shorten(id, function(err, urls){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, urls)
    })
  },
  expand: function () {

  },
}
