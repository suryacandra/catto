const express = require('express')
const router = express.Router()
const getRandomImageController = require('../../controllers/getRandomImageController')

router.route('/random')
    .get(getRandomImageController)

module.exports = router
