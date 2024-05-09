import React from 'react'
import logo from '/src/assets/images/reyuno.png'
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <div className='flex'>
        <img src={logo} className='w-[180px]'/>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor_pointer'>Home</li>
            <li className='hover:font-bold cursor_pointer'>Nosotros</li>
            <li className='hover:font-bold cursor_pointer'>Contactanos</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white'>
            Encender <MdOutlineLightMode className='ml-3 text-[20px]'/>
        </button>
    </div>
  )
}

export default Header