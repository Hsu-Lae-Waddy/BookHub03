import React from 'react'
import NavBar from './components/Navbar'
import Home from './page/Home'
import Bookshelf from './page/Bookshelf'
import Reviews from './page/Reviews'
import Downloads from './page/Downloads'
import ContactUs from './page/ContactUs'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Footer from "./components/Footer";



const App= ()=>{

  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path='Bookshelf' element={<Bookshelf/>}></Route>
          <Route path='Reviews' element={<Reviews/>}></Route>
          <Route path='Downloads' element={<Downloads />}></Route>
          <Route path='ContactUs' element={<ContactUs/>}></Route>
      </Route>
    )
  )
  return (
    <> 
        <RouterProvider router={router}></RouterProvider>
        <Footer></Footer>

    </>
  )
}

export default App