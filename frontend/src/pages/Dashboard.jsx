import { useState } from 'react'
import API from '../api/axios'

function Dashboard() {
  const [token, setToken] = useState('')
  const [repos, setRepos] = useState([])

  const fetchRepos = async () => {
    try {
      const response = await API.post('/github/repos', {
        token,
      })

      setRepos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-6 min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6'>
        DevTrackr Dashboard
      </h1>

      <input
        type='text'
        placeholder='Enter GitHub Token'
        className='border p-2 w-full mb-4 rounded'
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <button
        onClick={fetchRepos}
        className='bg-blue-500 text-white px-4 py-2 rounded mb-6'
      >
        Fetch Repositories
      </button>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {repos.map((repo) => (
          <div
            key={repo.id}
            className='bg-white shadow p-4 rounded'
          >
            <h2 className='text-xl font-bold mb-2'>
              {repo.name}
            </h2>

            <p className='mb-2'>
              Visibility: {repo.visibility}
            </p>

            <p className='mb-2'>
              Default Branch: {repo.default_branch}
            </p>

            <a
              href={repo.html_url}
              target='_blank'
              rel='noreferrer'
              className='text-blue-500'
            >
              Open Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard