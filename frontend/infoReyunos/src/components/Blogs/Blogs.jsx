import React from 'react'
import reyunos from '/src/assets/images/reyunos1.png'
import mapaDiamante from '/src/assets/images/mapaDiamante.png'

function Blogs() {
  return (
    <div>
        <article className='text-black bg-green shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>2.Localización</h2>
            <img className='object-cover object-center' src={mapaDiamante}></img>
          </div>
            <div className='p-5 space-y-3 leading-normal'>
              <p className='text-slate-8'>
                El embalse los reyunos se ubica a 35 km de la ciudad de San Rafael, Mendoza.
                En el cuál se levanto una presa ubicada sobre el Rio Diamante, comenzo a const
                truirse en 1970 y se culmino en 1984, cuenta con un espejop de agua de 734 Ha
                y una profundidad maxima de 120 m.
                Su presa cuenta con 295 m. de largo, 134 m. de altura, diametro 9 m. de ancho en
                el coronamiento, cuenta con su respectivo tunel, aliviadero y central de generación
                de energía electrica.comienza a construirse en 1978 la Presa Embalse Los Reyunos, 
                que fue realizada por Skoda-AFNE-Saim-Somerfin S.A para la Empresa Agua y Energía 
                Eléctrica S.E. Concluyendo su presa en 1980 y su central, compuesta por 2 turbinas 
                comienza a operar en 1983, con una potencia instalada de 224 MW.
              </p>

            </div>
        </article>
    

    </div>
  )
}

export default Blogs