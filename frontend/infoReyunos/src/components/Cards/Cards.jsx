import React from 'react'

const Cards = ({ title, image, subtitle, description }) => {
  return (
  <div className='flex flex-wrap  '>
    <article className='text-black bg-[#cfe0c3] shadow overflow-hidden rounded'>
          <div className='flex-1'>
            
            <img className='object-cover object-center rounded w-full h-80 ' src={image}></img>
            <h2 className='text-xl font-semibold '>{title}</h2>
            <h3 className='text-sm font-semibold text-sky-500'>{subtitle}</h3>
          </div>
            <div className='p-2 space-y-3 leading-snug flex grow flex-1'>
              <p className='text-slate-8'>{description}</p>
            </div>
        </article>
  </div>
  );
}

export default Cards;
