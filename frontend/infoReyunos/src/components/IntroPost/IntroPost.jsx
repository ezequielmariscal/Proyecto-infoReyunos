import React from 'react'

const introReyu = <p className='p-2 text-sa font-semibold'>Bienvenido a la zona de reyunos este es un blog donde se explican sus caracteristicas</p>


function IntroPost() {

  return (
    
    <div className='text-black'>
      <h1 className='text-4xl font-semibold'>Introducción Embalse los Reyunos</h1>
      {introReyu}
      <h3 className='p-2 space-y-3 leading-normal'>El presente trabajo se ha realizadoo para aportar conocimiento acerca de 
        la cuenca el diamante y principalmente sobre "Los Reyunos", surge a travéz
        de exposiciones verbales implementada en la zona turistica para socabar dudas
        que puedan surgir.
        <br></br>
        Dicho lugar se encuentra ubicado al sur de la provincia de Mendoza y su conoci
        miento es de gran importancia para la puesta de valor tanto natural como cultural.
        <br></br>
        En ésta pagina se busca contribuir sobre el cuidado y toma ded conciencia sobre la
        biodiversidad de flora y fauna de la provincia.
      </h3>
        <article>
          <div><img></img></div>
            <div>

            </div>
        </article>

    </div>
  )
}

export default IntroPost