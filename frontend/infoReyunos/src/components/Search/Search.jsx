import React from 'react'
import banner from '/src/assets/images/banner.png'
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[150px]'>
      <img src={banner} className='rounded-2x1'/>
      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <IoSearch className='text-[20px] text-gray-400'/> 
        <input type='text' placeholder='Search' 
        className='outline-none ml-2'/>
      </div>
    </div>
  )
}

export default Search