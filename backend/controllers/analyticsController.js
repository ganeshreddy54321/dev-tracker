const { generateSummary } = require('../services/aiService')

const analyzeRepo = async (req, res) => {
  try {
    const { commits } = req.body

    const analysis = await generateSummary(commits)

    res.json({ analysis })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  analyzeRepo,
}