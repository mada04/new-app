export default function Contact() {
    return (
        <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-purple-700 text-opacity-50 text-center">Contact</h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                   >
                    Instagram:
                    <span className="font-bold">
                        @gradi_for_children
                    </span>
                </a>
                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                   >
                    Twitter:
                    <span className="font-bold">
                        @gradi.gradi
                    </span>
                </a>
            </div>
        </section>
    )
}