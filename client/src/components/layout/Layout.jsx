import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout ({ children }) {
  return (
    <>
      <Header/>
      <main className='w-full min-h-screen relative overflow-hidden mt-16'>{children}</main>
      <Footer/>
    </>
  )
}
