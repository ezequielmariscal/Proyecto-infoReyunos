import React from 'react'
import banner from '/src/assets/images/banner.png'
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='flex justify-center mt-4 flex-col px-[70] md:px-[150px]'>
      <img src={banner} className='rounded-2x1'/>

    </div>
  )
}

export default Search