
import gradi from '../images/gradi.gif'
export default function About() {
    return (
        <section id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                   align-center bg-blue-600 bg-opacity-25   max-w-5xl mx-auto">
            <div className="flex-1">
                <img src={gradi}
                    alt="About"
                    className="w-full h-full bg-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div><h2 className="text-center text-blue-500 
                                   text-5xl font-bold">De ce gradinita noastra</h2></div>
                <p> Mediul educational permite dezvoltarea libera a copilului, explorarea activa si interactiunea variata cu materialele, cu ceilalti copii si cu adultii.</p>
                <p className="break-words ">
                Misiunea gradinitei noastre este aceea de a asigura un invatamant prescolar la nivel european: un curriculum diferentiat, centrat pe nevoile curente si de viitor ale copiilor si parintilor, care sa contribuie la integrarea si adaptarea cu succes in activitatea scolara si in societate.
                </p>
            </div>
        </section>
    )
}