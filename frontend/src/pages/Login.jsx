import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await API.post('/auth/login', {
        email,
        password,
      })

      localStorage.setItem('token', response.data.token)

      alert('Login Successful')

      navigate('/dashboard')
    } catch (error) {
      console.log(error)

      alert('Login Failed')
    }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow w-96'>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>

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
          onClick={handleLogin}
          className='bg-blue-500 text-white px-4 py-2 w-full'
        >
          Login
        </button>

        <p className='mt-4 text-center'>
          Don't have an account?{' '}
          <a href='/signup' className='text-blue-500'>
            Signup
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login