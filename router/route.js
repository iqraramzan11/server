const express = require('express');
const router = express.Router()
const myLogic = require('../controllers/controller')
router.get('/myroute', myLogic)
module.exports = router