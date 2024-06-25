import React from 'react'
import reyunos from '/src/assets/images/reyunos1.png'
import mapaDiamante from '/src/assets/images/mapaDiamante.png'
import embalseReyunos from '/src/assets/images/embalseReyunos.png'
import clima from '/src/assets/images/clima.png'
import geologia from '/src/assets/images/geologia.png'
import mapaFitogeografico from '/src/assets/images/mapaFitogeografico.png'
import tomillo from '/src/assets/images/tomillo.png'
import Cards from '/src/components/Cards/Cards.jsx'

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
            <h2 className='text-xl font-semibold '>5.Geología</h2>
            <img className='object-cover object-center' src={geologia}></img>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>
              La región de los Reyunos pertenece a un relieve montañoso y de pronunciada 
              pendiente, perteneciente al Bloque San Rafael, al cual Feruglio (1946) denominó a esta 
              región Montaña de San Rafael y la consideró parte de un bloque único. Dicha región 
              tiene un rumbo NNO-SSE y está limitada al E por el zócalo de Sierras Pampeanas; al O 
              por la Depresion de los Huarpes y al SO por el Engolfamiento Neuquino.
              <br></br>
              </p>
              <h2 className='p-2 text-xl font-semibold'>Formación Los Reyunos</h2>
              <p>Conglomerados, areniscas, brechas andesíticas, rocas volcaniclásticas, ignimbritas dacíticas a
              riolíticas y material volcánico removido en masa
              </p>
              <h3 className='p-2 text-sa font-semibold'>Antecedentes</h3>
              <p className='text-slate-8'>En un trabajo inédito, esta entidad fue distinguida y 
                nominada por  Rodríguez y Valdiviezo (1970) como Formación Yacimiento Los Reyunos.
               En 1972,Spalletti y Mazzoni publicaron por primera vez el nombre. Al efecto de adecuar
               la designación de la unidad a las disposiciones del Código Argentino de Estratigrafía,
               se substituye el nombre original por el del epígrafe.</p>
              <h3 className='p-2 text-sa font-semibold'>Litogía</h3>
              <p className='text-slate-8'> Los trabajos realizados por la Comisión Nacional de Energía Atómica, para 
              la prospección de uranio, permitieron diferenciar cinco miembros, que se
              interdigitan lateralmente y se repiten en la secuencia, ellos son: Psefítico, Andesítico,
              Toba Vieja Gorda, Debritas Vieja Gorda y Areniscas Atigradas.
              <h3 className='p-2 text-sa font-semibold'>El Miembro Psefítico: </h3>
              Caracterizado por Rodríguez y Valdiviezo (1970) y su nombre publicado por Ortega Furlotti et al. (1974), 
              incluye la Brecha Verde (Dessanti, 1956) o Formación Cerro Colorado (Rolleri y Criado Roque, 1970), los 
              Conglomerados Brechosos del Cerro Colorado (Polanski, 1964) y la Brecha Basal (Dessanti y Caminos, 1967).
              Inicia (aunque no siempre) y se intercala en las partes inferiores de la secuencia. Está integrado por
              conglomerados y fanglomerados polimícticos de textura gruesa, de colores rojo, rojizo verdoso, verde
              oliva y castaño rojizo, constituidos por bloques de hasta más de 1 m3 y clastos angulosos a
              subangulosos, en una matriz arenosa a pelítica, localmente con cemento silíceo. Se intercalan areniscas 
              y areniscas conglomerádicas amarillentas a blanquecinas, lentiformes y con estratificación cruzada
              y escasos niveles piroclásticos. Según Polanski (1964) y Llambías et al. (1993), la entidad corresponde
               a depósitos de abanicos aluviales y/o flujos de detritos.
              <h3 className='p-2 text-sa font-semibold'>El Miembro Andesítico : </h3>
              Definido por Meza(1988) y su nombre publicado por Llambías et al.(1993), contiene la Serie Volcánica de La Josefa(Dessanti, 1956)
              o Formación La Josefa (Criado Roque, 1972). Se desarrolla en la porción inferior dela secuencia y 
              lo componen brechas andesíticas con alternancia de tobas y tobas conglomerádicas, de colores pardo 
              rojizo, violáceo y gris verdoso, mal estratificadas. Las brechas están constituidas por fragmentos 
              de andesitas y de rocas pre-pérmicas que llegan a superar los 2 m de diámetro, inmersos en una matriz
               tobácea de composición andesítica.
              Es común la alteración propilítica. Capas de brechas andesíticas y areniscas epiclásticas asociadas se
              interdigitan también con niveles superiores de la unidad.
              <h3 className='p-2 text-sa font-semibold'>El Miembro Toba Vieja Gorda: </h3>
              Diferenciado por Rodriguez y Valdiviezo (1970) y su designación publicada por Spalletti y Mazzoni (1972),
               incluye a la Serie Volcánica del Cerro Malal (Dessanti, 1956) o Formación Cerro Malal (Criado Roque, 1972).
              Corresponde a una asociación magmática calcoalcalina y se considera como la roca fuente del uranio de los
               yacimientos Dr. Baulíes y Los Reyunos (Kleiman y Salvarredi, 1989). Está compuesta por ignimbritas dacíti
              cas a riolíticas, de colores grises con tonalidades rosadas, liláceas, violáceas y verdosas, con cristales 
              de plagioclasa (oligoclasa-andesina), cuarzo, feldespato potásico (sanidina) y biotita, y titanomagnetita, 
              apatita y circón como minerales accesorios. En algunos niveles es abundante la cantidad de pómez, como así 
              también la de fragmentos líticos de forma irregular y dimensiones variables.
              Los feldespatos suelen presentar alteración arcillosa o carbonática y la biotita cloritización y muscoviti
              zación. La pasta es afanítica y está argilizada. Alteraciones hidrotermales más avanzadas se advierten 
              localmente. El análisis modal señala plagioclasa 25-35%, cuarzo 10-18%, feldespatopotásico 2-8%, biotita 
              2-10%, pómez 0,5-20%, líticos cognados 0,1-28%, líticos accidentales 0,1-12% y pasta 25-40% (Kleiman, 1993).
              Meza (1990) ubicó el posible centro volcánico de estas ignimbritas en las proximidades de la lomaColorada 
              del Infiernillo, sobre el umbral que separa las cuencas oriental y occidental. Llambías et al.(1993) mencio
              naron siete ciclos ignimbríticos, algunos de hasta 200 m de potencia, separados por superficies de erosión 
              o por depósitos clásticos que representan intervalos de nula o poco significativa eruptividad. En los térmi
              nos inferiores del miembro se intercalan depósitos de brechas andesíticas, psefitas y, en menor proporción, 
              areniscas feldespáticas de los miembros Psefítico y Andesítico.
              La parte superior se interdigita con el Miembro Areniscas Atigradas, acuñándose casi radialmente desde la 
              zona de probable ubicación del centro volcánico hacia la periferia. La interdigitación con el Miembro 
              Debritas Vieja Gorda ocurre tanto en la base como en el techo de la unidad.
              <h3 className='p-2 text-sa font-semibold'>El Miembro Debritas Vieja Gorda: </h3> 
              Reconocido por Meza y Mazzoni (1996) y nominado como talpor Salvarredi (1999), se manifiesta intercalado hacia el techo y hacia 
              la base del Miembro Toba Vieja Gorda y vertical y lateralmente con el Miembro Areniscas Atigradas. Está 
              compuesto por paraconglomerados volcánicos, de coloración rojizo grisácea clara, originados por la erosión 
              de las ignimbritas dacíticas del Miembro Toba Vieja Gorda y su remoción en masa que, posteriormente 
              retrabajados, contribuyeron a la génesis de las areniscas que conforman el Miembro AreniscasAtigradas 
              (véase Salvarredi, 1999).
              <h3 className='p-2 text-sa font-semibold'>El Miembro Areniscas Atigradas:  </h3> 
              (Holmberg,  1948) aparece interdigitado desde la base al techo de la unidad en análisis. Está integrado 
              por areniscas feldespáticas, areniscas conglomerádicas y conglomerados polimícticos, de colores amarillo
               claro, grisblanquecino, rosado y verdoso, de grano fino a grueso y estratificación cruzada, con algunas
               intercalaciones de estratos limolíticos y tufíticos. Estas rocas se interpretaron como depósitos eólicos
                y fluviales (Rodríguez y Valdivieso, 1970), como depósitos eólicos de ambiente desértico (Spalletti y 
                Mazzoni, 1972) y comoresultado del retrabajamiento de piroclastitas constituyendo la facies epiclástica 
                del Miembro Toba Vieja Gorda (Salvarredi, 1999). Contiene los yacimientos más importantes del distrito 
                uranífero Sierra Pintada.</p>
              

            </div>
        </article>

        <article className='text-black bg-green shadow overflow-hidden rounded'>
          <div>
            <h2 className='text-xl font-semibold '>6.Dimensión biológica</h2>
            <img className='object-cover object-center' src={mapaFitogeografico}></img>
          </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>
              
              
              A lo largo de todo argentina, se establecieron 12 provincias fitogeográficas, en dónde se 
              especificaron: las ecorregiones que contiene, la vegetación dominante, la superficie 
              aproximada, el clima general, la precipitación anual en milimetros, la temperatura 
              media anual y las especies, géneros y/o familias vegetales endémicos y 
              característicos.<br></br> 
              
              Basándonos en las provincias fitogeográficas de Cabrera (1971), que establece en 
              Mendoza 4 Ecosistemas naturales distintos, podemos decir que por la ubicación del 
              área de estudio (marcada con círculo rojo en el mapa), está presente en la provincia 
              fitogeográficas del Monte (Figura 12).
              </p>

            </div>
        <div>
          <h2 className='text-xl font-semibold '>6.1-Flora</h2>
          
        </div>
            <div className='p-2 space-y-3 leading-snug'>
              <p className='text-slate-8'>
              Las diferentes especies vegetales se distribuyen sobre la tierra de acuerdo a sus 
              exigencias climáticas y edáficas, y también de acuerdo a las oportunidades que hayan 
              tenido para reproducirse y ampliar su área geográfica. Debido a estas 
              variables son las que determinan las especies que se van a establecer en cada espacio, 
              por lo que es importante tener en cuenta la descripción climática, geológica y 
              geomorfológica realizadas anteriormente en la presente página. (Ver Clima-Geología).<br></br>
              </p>

            </div>
        </article>

        <div className="grid">
          <Cards 
            title="Tomillo" 
            image= {tomillo}
            subtitle= "wiiipu"
            description="kgdñgkdflñkgñldfkgdñlk"
          />,
          
        </div>


    

    </div>
  )
}

export default Blogs