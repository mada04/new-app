export default function Skills() {
    const skills = ["Python", "HTML", "CSS", "JavaScript", "React"]
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-purple-700 underline text-opacity-30 font-bold">
                My Skills...
            </h2>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {skills && skills.map((s, i) => {
                    return (<div key={i}
                        className="cursor-pointer px-12 py-10 
                                        rounded bg-purple-500  bg-opacity-30 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl text-white">{s}
                    </div>)
                })}
            </div>
        </section>
    )
}