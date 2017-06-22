const express = require('express')
const router = express.Router()
const UrlController = require('../controllers/UrlController')

router.get('/*', function (req, res, next) {
  let url = req.url.replace()
  UrlController.find(req.query, function(err, results){
    if (err) {
      res.json({
        confirmation: 'fail',
        message: 'URL not found'
      })
    }
    res.json({
      confirmation: 'success',
      resource: resource
    })
  })
})

router.get('/:resource', function (req, res, next) {
  let resource = req.params.resource
  res.json({
    confirmation: 'success',
    resource: resource
  })
})

module.exports = router
