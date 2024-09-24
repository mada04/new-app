

import { useEffect, useState } from 'react';
import Albinute from '../images/Albinute.jpg'
import Bubu from '../images/Bubu.png'
import Omida from '../images/Omida.jpg'
import Fluturasi from '../images/fluturas.png'

const EducatoareList = ({ educ }) => {
    const grupe = [{ nume: "Omidute", text: "Noi suntem Omidutele Smiley ,cei mai mici din gradinita si incetul cu incetul descoperim ce frumos este la gradinita.Alaturi de copii si educatoare ne simtim confortabil jucandu-ne unii langa altii sau impreuna. In fiecare zi jocul , muzica si miscarea ne insotesc si ne ajuta in acomodarea treptata si prietenoasa in colectivul de copii, fiecare in ritmul propriu de adaptare si integrare.", src: Omida },
    { nume: "Buburuze", text: "Noi suntem Buburuzele vesele", src: Bubu },
    { nume: "Albinute", text: "Noi suntem Albinutele vesele", src: Albinute },
    { nume: "Fluturasi", text: "Noi suntem Fluturasii veseli", src: Fluturasi }]

    const [lista, setLista] = useState([])

    useEffect(() => {
        info()
    }, [educ]);
    const info = () => {
        const educLista = []
        for (var i = 0; i < grupe.length; i++) {
            for (var j = 0; j < educ.length; j++) {
                if (educ[j]["grupa"] === grupe[i]["nume"]) {

                    educLista.push({ nume: educ[j]["nume"], grupa: educ[j]["grupa"], id: educ[j]["id"], src: grupe[i]["src"] })
                }
            }
        }
        setLista(educLista)


    }
  
    
    return (
        <section id="listaCopii"
            className="px-10 w-full flex gap-12 
        justify-center items-center align-center mt-40 
        mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 py-20">
          

<div className='container'>
<div className="row">
{lista && lista.map((e, i) => {
                return (
                    <div  style={{ width: "18rem" }} className="card col-sm-3" key={i}>
                        <img class="card-img-top" src={e.src} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{e.nume}</h5>
                            <p class="card-text">{e.grupa}</p>

                        </div>
                    </div>
                )
            })}
  </div>
</div>
           
        </section>
    )
}
export default EducatoareList;