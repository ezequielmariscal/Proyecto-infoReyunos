import React from 'react'
import logo from '/src/assets/images/reyuno.png'

function Header() {
  return (
    <div className='flex'>
        <img src={logo} className='w-[180px]'/>
        <ul>
            <li>Home</li>
            <li>Nosotros</li>
            <li>Contactanos</li>
        </ul>
    </div>
  )
}

export default Header