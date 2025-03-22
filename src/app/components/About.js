import ExpertiseBlock from "@/app/components/ExpertiseBlock";

const About = ({ className }) => {
    const expertise = [
        {
            name: "Technologies",
            sub: [
                {logo: "tech/js.png", name: "JavaScript", level: "Expert"},
                {logo: "tech/html.png", name: "HTML", level: "Expert"},
                {logo: "tech/css.png", name: "CSS", level: "Expert"},
                {logo: "tech/php.png", name: "PHP", level: "Expert"},
                {logo: "tech/vue.png", name: "VueJs", level: "Intermediate"},
                {logo: "tech/react.png", name: "ReactJs", level: "Intermediate"},
            ]
        },
        {
            name: "Frameworks / Libraries",
            sub: [
                {logo: "tech/laravel.png", name: "Laravel", level: "Expert"},
                {logo: "tech/jquery.png", name: "jQuery", level: "Expert"},
                {logo: "tech/nuxt.png", name: "Nuxt.js", level: "Intermediate"},
                {logo: "tech/next.png", name: "Next.js", level: "Intermediate"},
            ]
        },
        {
            name: "Database",
            sub: [
                {logo: "tech/mysql.png", name: "MySQL", level: "Expert"},
            ]
        },
        {
            name: "Version Control",
            sub: [
                {logo: "tech/git.png", name: "Git", level: "Intermediate"}
            ]
        }
    ]

    const spanHoverClasses = "text-amber-400 duration-200 hover:bg-amber-400 rounded p-1 hover:text-gray-700";
    const spanClasses = "text-amber-400 p-1"

    return (
        <div className={`${className}`}>
            <div className={`text-xl px-4 sm:px-14 pt-4 sm:h-screen sm:flex sm:items-center`}>
                <div>
                    <div className={"sm:pr-36 mt-8"}>
                        <div className={"header-text text-4xl font-bold sm:mb-4 block"}>About Me</div>
                        <div className={"text-lg w-full"}>
                            <div className={"my-1"}>
                                I'm Saleh Ahmad.
                            </div>
                            <div className={"mb-1"}>
                                A genius <span className={spanClasses}>software engineer</span> with
                                over 4 years of experience in developing
                                and maintaining web applications.
                            </div>
                            <div className={"mb-1"}>
                                I love building new things that bring satisfaction to people.
                                I have worked primarily with foreign clients, including those from the USA and Japan.
                            </div>
                            <div className={"mb-1"}>
                                My expertise spans the <span className={spanClasses}>full stack</span>,
                                from <span className={spanClasses}>frontend</span> to <span
                                className={spanClasses}>backend</span> development, along with <span
                                className={spanClasses}>server management</span>
                                ensure robust and scalable solutions.
                            </div>
                            <div className={"mb-1"}>
                                Additionally, I have expanded my skill set to
                                <span className={spanClasses}>mobile app development</span>
                                by building cross-platform applications using the
                                <span className={spanClasses}>Ionic Framework</span>.
                            </div>
                            <div className={"mb-1"}>
                                After graduating from <span className={spanClasses}>DIU</span>, I started my career as a
                                Junior Developer at
                                <span className={spanClasses}>Revo-Interactive</span>,
                                where
                                I honed my skills and grew into the developer I am today.
                            </div>
                        </div>
                    </div>


                    <div className={'mt-4 sm:mt-8 pr-36'}>
                        <div className={"header-text text-4xl mt-8 mb-2 font-bold sm:mb-4"}>Expertise</div>
                        <div>
                            <ul className={""}>
                                {expertise.length > 0 && expertise.map((items, key) => {
                                    return (
                                        <ExpertiseBlock
                                            key={key}
                                            items={items}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;