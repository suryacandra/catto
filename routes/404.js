const express = require('express')
const router = express.Router()
const notFoundController = require('../controllers/notFoundController')

router.route('*')
      .get(notFoundController)

module.exports = router