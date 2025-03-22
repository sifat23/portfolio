import Link from "next/link";

const Projects = ({ className }) => {

    const projects = [
        {name: "Remedive", link: "https://remedive.com/", active: "true", logo: 'img/projects/remedive.png'},
        {name: "Thyme", link: "https://thymeapp.jp/", active: "true", logo: "img/projects/thyme.png"},
        {name: "Staffingly, Inc", link: "https://staffingly.com/", active: "true", logo: "img/projects/staffingly.svg"},
        {name: "Hie.li", link: "https://hie.li/", active: "true", height: "w-20", logo: "img/projects/hie-li.png"},
        {name: "Timeclock - EMS", link: "https://timeclock.staffingly.com/", active: "true", height: "w-20", logo: "img/projects/twopm.png"},
        {name: "Fitnation.pro", link: "https://fitnation.pro/", active: "true", logo: "img/projects/fitnation-pro-logo.png"},
        {name: "Steah", link: "https://steah.co.jp/", active: "true", logo: "img/projects/steah.png"},
        // { name: "Thyme", link: "", active: "true" },
        // { name: "Thyme", link: "", active: "true" },
    ]

    return (
        <div className={`${className} mt-12 sm:mt-0`}>
           <div className={'sm:flex sm:items-center sm:h-screen px-4 sm:px-14'}>
              <div>
                  <div className={"header-text text-4xl font-bold mb-4"}>Projects</div>
                  <div className={"sm:flex sm:flex-wrap sm:gap-8 sm:pt-2"}>
                      {/*<div className={"sm:w-[220px] border rounded-lg h-2 sm:h-32 p-8 sm:flex sm:justify-center sm:items-center border-amber-400 shadow-md shadow-amber-400 hover:shadow-lg duration-200"}>*/}
                      {/*    <Link target="_blank" href="">*/}
                      {/*        /!*{project.name}*!/*/}
                      {/*        <img className={`object-contain w-20 invert`} src={"img/projects/twopm.png"} alt={""}/>*/}
                      {/*    </Link>*/}
                      {/*</div>*/}

                      {projects.length > 0 && projects.map((project, key) => {
                          return (
                              <div className={"sm:w-[220px] mb-6 border rounded-lg h-20 sm:h-32 p-8 flex justify-center items-center border-amber-400 shadow-md shadow-amber-400 hover:shadow-lg duration-200"} key={key}>
                                  <Link target="_blank" href={project.link}>
                                      {/*{project.name}*/}
                                      <img className={`object-contain invert ${project?.height ? project?.height : 'w-32 sm:w-48'}`} src={project?.logo} alt={project.name + "-logo"}/>
                                  </Link>
                              </div>
                          )
                      })}
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Projects;