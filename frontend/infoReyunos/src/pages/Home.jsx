import React from 'react'
import Search from '../components/Search/Search'
import IntroPost from '../components/IntroPost/IntroPost'
import Blogs from '../components/Blogs/Blogs'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className='bg-[#a3c9a8]'>
        
        <Header/>
        <Search/>
        <IntroPost/>
        <Blogs/>
        <Footer/>

    </div>
  )
}

export default Home