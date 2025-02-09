import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [sending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Register logic here...
    console.log('register...')
  }

  return (
    <div className='py-16 bg-[whitesmoke] px-3 mt-20'>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md m-auto">
        <h2 className="text-xl font-bold mb-4 text-black font-lato">Register for an account.</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email'
            value={email}
            maxLength={40}
            className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
            name='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder='Username'
            value={username}
            className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
            name='username'
            onChange={e => setUsername(e.target.value)}
            minLength={3}
            maxLength={10}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder='Password'
            minLength={1}
            maxLength={20}
            name='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="bio">Bio (optional)</label>
          <textarea
            id="bio"
            rows="4"
            value={bio}
            className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            maxLength={80}
            name='bio'
            onChange={e => setBio(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending}
          className={`w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition ${sending ? 'opacity-50' : ''}`}
        >
          Register
        </button>
        <p className='mt-5'>
          Already have an account? <Link to='/login' className='text-blue-700'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
