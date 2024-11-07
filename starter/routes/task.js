const express = require('express')
const router = express.Router()

const { getAllTask, getAllTasks } = require('../controllers/tasks')

router.route('/').get(getAllTasks)

module.exports = router
