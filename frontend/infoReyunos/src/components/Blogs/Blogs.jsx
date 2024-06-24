import React from 'react'
import reyunos from '/src/assets/images/reyunos1.png'
import mapaDiamante from '/src/assets/images/mapaDiamante.png'
import embalseReyunos from '/src/assets/images/embalseReyunos.png'
import clima from '/src/assets/images/clima.png'

function Blogs() {
  return (
    <div>
        <article className='text-black bg-green shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>2.Localización</h2>
            <img className='object-cover object-center' src={mapaDiamante}></img>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
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

        <article className='text-black bg-green shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>3.Dique Los Reyunos</h2>
            <img className='object-cover object-center' src={embalseReyunos}></img>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>
                Es una de las primeras presa en ser de bombeo en latinoamerica, es decir, en las 
                horas de menor consumo de energía se invierte el giro de sus turbinas para retornar
                el agua acumulada en el dique compensador hacia el lago principal.<br /><br />
                Tipo de presa: Materiales petreos sueltos compactados con arcilla, (nucleo impermeable)
                y espaldones filtrantes.
                Cuenca: Rio Diamante.
                Altura: 136 metros.
                Longitud: 295 metros.
                Crecida de diseño: 2.071 m3/seg.
                Uso predominante: Riego, generación de energía electrica.
                Vertedero tipo: Ubicado en margen izquierda, canal de descarga a pelo libre, 
                cuatro libre compuertas, sector de 40 t. C/u.
                Capacidad del vertedero: 2.300 m3/seg.
                Central Hidráulica: Edificio externo en hormigón ubicado a pie de presa.
                Túnel de Conducción: Revestido, tub.forz. y bifurcación, long. 450 m.,
                diámetro 9,5 – 8,5 m.
                Potencia instalada: 224 MW.
                Tipo y potencia de turbinas: Dos grupos tipo Francis reversibles 166 r.p.m.
                Energía media anual: 302 Gw/h
                Capacidad del embalse: 220 hm3. 
              </p>

            </div>
        </article>

        <article className='text-black bg-green shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>4.Clima</h2>
            <img className='object-cover object-center' src={clima}></img>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>
              El clima en la zona es característico de las zonas áridas, tipo desérticas. La temperatura 
              media, es de 25° en verano y 5 en invierno. La media anual es de 16°C. con una precipitación 
              media anual de 250 mm.<br /><br />
              Los meses de Octubre a Marzo donde generalmente se presentan las lluvias 
              primaverales y el derretimiento de las nieves en la cordillera, que es cuando se 
              producen aumentos de caudales significativos en sus ríos (de 200 m3/seg.), y un 
              período de estiaje, de Abril a Setiembre, con caudales de alrededor de los 10 m3/seg.<br /><br />
              Un clima de extrema aridez, precipitaciones que no superan los 200 milímetros anuales 
              y tan solo el 3 % del territorio irrigado de la provincia, son motivos suficientes para 
              entender que el aprovechamiento del agua en Mendoza ha sido y es, el recurso esencial 
              para la vida y para el desarrollo económico.
              </p>

            </div>
        </article>

        <article className='text-black bg-green shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>4.Clima</h2>
            <img className='object-cover object-center' src={clima}></img>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>
              El clima en la zona es característico de las zonas áridas, tipo desérticas. La temperatura 
              media, es de 25° en verano y 5 en invierno. La media anual es de 16°C. con una precipitación 
              media anual de 250 mm.<br /><br />
              Los meses de Octubre a Marzo donde generalmente se presentan las lluvias 
              primaverales y el derretimiento de las nieves en la cordillera, que es cuando se 
              producen aumentos de caudales significativos en sus ríos (de 200 m3/seg.), y un 
              período de estiaje, de Abril a Setiembre, con caudales de alrededor de los 10 m3/seg.<br /><br />
              Un clima de extrema aridez, precipitaciones que no superan los 200 milímetros anuales 
              y tan solo el 3 % del territorio irrigado de la provincia, son motivos suficientes para 
              entender que el aprovechamiento del agua en Mendoza ha sido y es, el recurso esencial 
              para la vida y para el desarrollo económico.
              </p>

            </div>
        </article>
    

    </div>
  )
}

export default Blogs