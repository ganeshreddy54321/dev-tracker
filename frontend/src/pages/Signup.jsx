import { useState } from 'react'
import API from '../api/axios'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    try {
      const response = await API.post('/auth/signup', {
        username,
        email,
        password,
      })

      console.log(response.data)

      alert('Signup Successful')
    } catch (error) {
      console.log(error)

      alert('Signup Failed')
    }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow w-96'>
        <h1 className='text-2xl font-bold mb-4'>Signup</h1>

        <input
          type='text'
          placeholder='Username'
          className='border p-2 w-full mb-4'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='email'
          placeholder='Email'
          className='border p-2 w-full mb-4'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          className='border p-2 w-full mb-4'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className='bg-green-500 text-white px-4 py-2 w-full'
        >
          Signup
        </button>
      </div>
    </div>
  )
}

export default Signup