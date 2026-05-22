const axios = require('axios')

const fetchRepositories = async (token) => {
  const response = await axios.get(
    'https://api.github.com/user/repos',
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )

  return response.data
}

module.exports = {
  fetchRepositories,
}