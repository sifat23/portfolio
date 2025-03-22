const Context = ({ className }) => {

    const spanHoverClasses = "text-amber-400 duration-200 hover:bg-amber-400 rounded p-1 hover:text-gray-700";
    const spanClasses = "text-amber-400 p-1"


    return (
        <div className={`text-xl px-10 ${className}`}>
            <div className="font-light text-5xl">
                Hello!
            </div>
            <div className="mt-5">
                <div className={"mb-3"}>
                    I’m Saleh Ahmad, a Web Developer with over five years of experience creating innovative
                    digital solutions.
                </div>
                <div className={"mb-3"}>
                    My journey began with the realization that a strong online presence is
                    vital for businesses today. Specializing in <span
                    className={"text-amber-400"}>backend development</span>,
                    <span className={spanClasses}> database design</span>
                    , and <span className={"text-amber-400"}>server management</span>
                    , I’ve worked on diverse projects like e-commerce platforms, web portals, and
                    employee management systems.
                </div>
                <div className={"mb-3"}>
                    I focus on delivering scalable, secure, and high-performing
                    solutions that meet and exceed client expectations. I’m always eager to
                    learn, adapt, and build amazing things together!
                </div>
            </div>
            <div className="mt-6 flex flex-col">
                <span className="signature text-5xl">Sifat</span>
                <span>Web Developer</span>
            </div>
        </div>
    )
}

export default Context;