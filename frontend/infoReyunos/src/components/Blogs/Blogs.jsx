import React from 'react'
import reyunos from '/src/assets/images/reyunos1.png'

function Blogs() {
  return (
    <div>
      <article className='text-black'>
          <div>
            <h2>2.Localización</h2>
            <img src={reyunos}></img>
          </div>
            <div>
              <p>
                El embalse los reyunos se ubica a 35 km de la ciudad de San Rafael, Mendoza.
                En el cuál se levanto una presa ubicada sobre el Rio Diamante, comenzo a const
                truirse en 1970 y se culmino en 1984, cuenta con un espejop de agua de 734 Ha
                y una profundidad maxima de 120 m.
              </p>

            </div>
        </article>

    </div>
  )
}

export default Blogs