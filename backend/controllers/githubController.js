const {
  fetchRepositories,
} = require('../services/githubService')

const getRepositories = async (req, res) => {
  try {
    const { token } = req.body

    const repos = await fetchRepositories(token)

    res.json(repos)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: error.message,
    })
  }
}

module.exports = {
  getRepositories,
}