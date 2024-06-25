import React from 'react';

const Cards = ({ title, image, subtitle, description }) => {
  return (
    <article className='text-black bg-white shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>{title}</h2>
            <img className='object-cover object-center rounded' src={image}></img>
            <h3 className='text-sm font-semibold text-sky-500'>{subtitle}</h3>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>{description}</p>
            </div>
        </article>
  );
}

export default Cards;
