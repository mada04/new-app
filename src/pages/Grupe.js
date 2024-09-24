

import Albinute from '../images/Albinute.jpg'
import Bubu from '../images/Bubu.png'
import Omida from '../images/Omida.jpg'
import Fluturasi from '../images/fluturas.png'

export default function Grupe() {
    // const grupe=["omidute","buburuzelor","albinutelor","fluturasilor"]
    const grupe = [{ nume: "omidute", text: "Noi suntem Omidutele Smiley ,cei mai mici din gradinita si incetul cu incetul descoperim ce frumos este la gradinita.Alaturi de copii si educatoare ne simtim confortabil jucandu-ne unii langa altii sau impreuna. In fiecare zi jocul , muzica si miscarea ne insotesc si ne ajuta in acomodarea treptata si prietenoasa in colectivul de copii, fiecare in ritmul propriu de adaptare si integrare.",src:Omida },
    { nume: "buburuzelor", text: "Noi suntem Buburuzele vesele" ,src:Bubu },
    { nume: "albinutelor", text: "Noi suntem Albinutele vesele",src:Albinute },
    { nume: "fluturasilor", text: "Noi suntem Fluturasii veseli",src:Fluturasi }]
    

    const ocClick=(gr)=>{
        console.log("e",gr)
    }
    
    return (
        <section id="grupe" >

            <div >
               
                {grupe && grupe.map((gr, i) => {
                    return (
                        <div key={i} onClick={()=>ocClick(gr)}>
                            <section 
                                className="px-10 w-full flex flex-col lg:flex-row py-20 
                               align-center bg-blue-600 bg-opacity-25   max-w-5xl mx-auto">
                                <div className="flex-1">
                                    <img src={gr["src"]}
                                alt="About"
                                className="w-full h-full bg-cover" />
                                </div>
                                <div  className="flex-1 flex flex-col justify-center
                                        items-center gap-5 px-6">
                                    <div><h2 className="text-center text-blue-500 
                                               text-5xl font-bold">Grupa {gr["nume"]}</h2></div>

                                    <p className="break-words ">
                                        {gr["text"]}
                                    </p>
                                </div>
                            </section> <br />
                        </div>)
                })}
               
            </div>
        </section>
    )
}