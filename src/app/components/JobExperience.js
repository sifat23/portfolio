import Link from "next/link";

const JobExperience = ({className}) => {

    const spanClasses = "text-amber-400 p-1"

    return (
        <div className={`${className} sm:flex sm:items-center sm:h-screen w-full`}>
            <div className={'sm:flex-col sm:grow px-4 sm:px-14'}>
                <div className={"header-text text-4xl font-bold mt-12 mb-4 sm:mb-8"}>Experience</div>

                <div className={"mb-6"}>
                    <Link href={"https://www.upwork.com/freelancers/~0196aa4f3fc9e692b2"} target={"_blank"}>
                        <div
                            className={"p-3 sm:p-6 rounded-lg border border-amber-400 shadow-md hover:shadow-lg duration-200 shadow-amber-400 bg-card"}>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height={"28px"}
                                 viewBox="0 0 102 28" role="img"
                                 aria-hidden="true">
                                <path fill="#fff"
                                      d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path>
                                <path fill="#fff"
                                      d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path>
                                <polygon fill="#fff"
                                         points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon>
                                <path fill="#fff"
                                      d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path>
                                <path fill="#fff"
                                      d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
                            </svg>

                            <div className={"mt-3"}>
                                Working as <span className={spanClasses}>Full-Stack PHP Developer</span>
                            </div>
                            <div className={'text-sm'}>
                                March 2023 - Present
                            </div>
                            <div className={"mt-3"}>
                                I primarily focus on fixing and improving existing projects, as well as handling
                                micro-tasks. I specialize in backend fixes using Laravel, one of the most popular PHP
                                frameworks. Additionally, I have experience working with JavaScript frameworks like Next.js.
                            </div>
                            <div className={"overflow-hidden"}>
                                <ul className={"flex flex-wrap gap-4 mt-3"}>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>Frontend Development</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>Laravel</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>API</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>Payment Gateway</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>HTML</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link href={"https://revo-interactive.com"} target={"_blank"}>
                        <div
                            className={"p-3 sm:p-6 rounded-lg border border-amber-400 shadow-md hover:shadow-lg duration-200 shadow-amber-400 bg-card"}>
                            <img className={"w-[110px] object-contain"}
                                 src={"https://revo-interactive.com/frontend/assets/img/logo-white.png"}
                                 alt={"revo"}/>
                            <div className={"mt-3 text-md tracking-widest"}>
                                Worked as <span className={spanClasses}>Senior Backend Developer</span>
                            </div>
                            <div className={'text-sm'}>
                                March 2020 - November 2024
                            </div>
                            <div className={"mt-3"}>
                                My key responsibilities included communicating with clients and project managers to
                                ensure the best outcomes from my development team. I primarily worked with Laravel,
                                Bootstrap 5, and Vue.js. Additionally, I was involved
                                in planning and managing post-development processes, including server management, as
                                well as collaborating on system and database design.
                            </div>
                            <div className={"overflow-hidden"}>
                                <ul className={"flex flex-wrap gap-4 mt-3"}>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>PHP</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>MySQL</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>Bootstrap</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>Laravel</li>
                                    <li className={"border border-amber-400 px-2 py-1 rounded"}>Server Management</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobExperience;