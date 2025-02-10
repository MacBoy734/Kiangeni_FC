import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='mt-16 bg-[whitesmoke] min-h-[80vh] text-center flex items-center justify-center flex-col gap-3'>
        <div className='text-[3em] font-bold text-red-500'>404</div>
        <h1 className='mb-3 font-roboto'>This page doesn't exist or was deleted, that's all we know!</h1>
        <Link to='/' className='text-white bg-sky-500 p-2 rounded-lg text-lg bg'>Go Home</Link>
    </div>
  )
}

export default NotFound