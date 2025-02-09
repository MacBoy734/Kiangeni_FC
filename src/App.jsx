import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  // SETTING UP THE ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
         <Route index path='/' element={<HomePage />}/>
         <Route path='/login' element={<LoginPage />}/>
         <Route path='/register' element={<RegisterPage />}/>
      </Route>
    )
  )
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
