const express = require('express')

const router = express.Router()

const {
  getRepositories,
} = require('../controllers/githubController')

router.post('/repos', getRepositories)

module.exports = router