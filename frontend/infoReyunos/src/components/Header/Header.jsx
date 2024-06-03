import React from 'react'
import logo from '/src/assets/images/caballo.jpg'
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <nav className='flex bg-[#50808e]  w-full'>
        <div>
          <img src={logo} className='w-[140px] '/>
        </div>
        <ul className='flex justify-between items-center gap-4 md:gap-14 w-full'>
            <li className='hover:font-bold cursor_pointer'>Home</li>
            <li className='hover:font-bold cursor_pointer'>Nosotros</li>
            <li className='hover:font-bold cursor_pointer'>Contactanos</li>
        </ul>
        <button className='bg-[#69a297] rounded-full text-white'>
            Encender <MdOutlineLightMode className='ml-3 text-[20px]'/>
        </button>
    </nav>
  )
}

export default Header