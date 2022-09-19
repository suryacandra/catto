const express = require('express')
const router = express.Router()
const getOneImageController = require('../../controllers/getOneImageController')

router.route('/source/:name')
    .get(getOneImageController)

module.exports = router
