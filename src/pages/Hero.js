export default function Hero() {
    return (
        <section id="hero"
            className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                    <h4 className="text-center text-xl text-purple-700 text-opacity-75 font-bold">
                        Bine ati venit in gradinita noastra
                    </h4>

                </div>

                <p className="text-center text-purple-700 text-opacity-25 tracking-wider">Gradinita noastra ofera sevicii de ingrijire si educare pentru copii cu varsta cuprinsa intre 1,8 ani si 6 ani.</p>
            </div>
            {/* <div className="flex-1">
                <img src=
                    "https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                    alt="Hello.svg"
                    className="w-full h-full bg-cover" />
            </div> */}
        </section>
    )
}