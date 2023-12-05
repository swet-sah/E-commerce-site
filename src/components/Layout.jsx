import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Chatbot from './Chatbot'
const Layout = () => {
  return (
    <div>
      <Header/>
      <Chatbot/>
      <Outlet/>
      
      <Footer/>
    </div>
  )
}

export default Layout
