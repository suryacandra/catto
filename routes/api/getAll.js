const express = require('express')
const router = express.Router()
const getAllController = require('../../controllers/getAllController')

router.route('/images')
    .get(getAllController)

module.exports = router
