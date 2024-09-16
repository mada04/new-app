import af from '../images/af.gif'
export default function AfterSchool() {
    const ps = ["transport de la scoala", "masa de pranz", "efectuarea temelor", "activitati recreative", "gustare", "personal de specialitate"]
    return (
        <div id="afterSchools">
            <section
                className="px-10 w-full flex flex-col lg:flex-row py-20 
                   align-center bg-blue-600 bg-opacity-25   max-w-5xl mx-auto">
                <div className="flex-1">
                    <img src={af}
                        alt="About"
                        className="w-full h-full bg-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">


                    <p className="break-words ">
                        O motivatie corecta, o stare de spirit buna, o atmosfera relaxata si copii fericiti sunt obiectivele noastre.
                        Lucrand in parteneriat cu invatatori de top din scolile bucurestene va oferim un program care scoate in evidenta diferentele dintre copii in ceea ce priveste deprinderile si obisnuintele intelectuale, tehnicile de invatare, calitatile atentiei, ritmul de gandire.
                        Aceste aspecte tipologice particulare bine evidentiate sunt modelate eficient in folosul copiilor. Un autocontrol motivational eficient este cheia performantelor elevilor si el se manifesta atunci cand ei participa cu bucurie, interes si satisfactie la provocarile activitatilor propuse.
                    </p>
                </div>
            </section>
            <br />
            <section
                className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-blue-600 bg-opacity-25   max-w-5xl mx-auto">
                {/* <div className="flex-1">
                    <img src={af}
                        alt="About"
                        className="w-full h-full bg-cover" />
                </div> */}
                <div className="flex-1 flex flex-col justify-center
                                items-center gap-5 px-6">

<p>Program scurt</p>
                    {ps && ps.map((s, i) => {
                        return (<div key={i}
                        >{s}
                        </div>)
                    })}
                </div>
            </section>
        </div>

    )
}