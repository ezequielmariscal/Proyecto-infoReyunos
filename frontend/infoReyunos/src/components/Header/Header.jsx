import React from 'react'
import logo from '/src/assets/images/caballo.jpg'
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <nav className='flex justify-between h-15 items-center bg-[#50808e]  w-full px-6'>
        <div>
          <img src={logo} className='w-[70px] '/>
        </div>
        <ul className='flex justify-around items-center gap-4 md:gap-14 w-full'>
            <li className='px-3 py-2 hover:font-bold cursor_pointer'>Home</li>
            <li className='px-3 py-2 hover:font-bold cursor_pointer'>Nosotros</li>
            <li className='px-3 py-2 last:hover:font-bold cursor_pointer'>Contactanos</li>
        </ul>
        <button className='bg-[#69a297] rounded-full text-white'>
             <MdOutlineLightMode className='ml-0.25 text-[20px]'/>
        </button>
    </nav>
  )
}

export default Header