const Overview = ({className}) => {

    const spanHoverClasses = "text-amber-400 duration-200 hover:bg-amber-400 rounded p-1 hover:text-gray-700";
    const spanClasses = "text-amber-400 p-1"


    return (
        <div className={`px-20 ${className}`}>
            <div className={'flex items-center h-screen gap-24'}>
                <div className={"text-xl"}>
                    <div className={"header-text text-4xl font-bold mb-4"}>My Journey</div>
                    <div className={"mb-3"}>
                        I chose to become a web developer because I was captivated by the potential of creating
                        something impactful from scratch.

                    </div>
                    <div className={"mb-3"}>
                        My journey started during a campus seminar where a local
                        innovation group showcased a stunning web interface they had developed. That moment
                        sparked a realization in me: every business, big or small, needs a robust online
                        presence to thrive,
                        especially in a developing country like ours. I saw an opportunity to make a
                        difference by
                        building efficient and attractive websites and applications that could elevate
                        businesses
                        and enhance user experiences.
                    </div>
                    <div className={"mb-3"}>
                        My passion for technology and continuous learning, combined
                        with the ability to solve real-world problems, drives me every day in this field.
                    </div>
                </div>

                <div className={'text-xl'}>
                    <div className={"header-text text-4xl font-bold mb-4"}>Overview</div>
                    <div className={"mb-3"}>
                        Over the past 4 years, I have worked on a variety of projects that have honed my
                        skills
                        and expanded my expertise in web development. I have developed <span
                        className={spanClasses}>e-commerce</span> websites, <span className={spanClasses}>web
                    portals</span>, and <span className={spanClasses}>employee management systems</span>, each
                        presenting unique challenges and learning
                        opportunities.
                    </div>
                    <div className={"mb-3"}>
                        I have designed and implemented efficient <span className={spanClasses}>database</span> schemas,
                        built user authentication
                        systems, and integrated secure <span className={spanClasses}>payment gateways</span>.
                        My ability to manage projects from inception to delivery has been a crucial aspect of my
                        work, ensuring that client requirements are met, and solutions are delivered on time.
                        Additionally, I have configured and maintained <span className={spanClasses}>VPS</span>, set up
                        server environments, and
                        optimized server configurations to ensure smooth operations.
                    </div>
                    <div className={"mb-3"}>
                        Collaboration and <span className={spanClasses}>leadership</span> have played a significant role in
                        my career. I have managed
                        other developers, assisting them with their tasks and ensuring cohesive <span>teamwork</span>.
                        Handling
                        the <span className={spanClasses}>Git</span> process for version control and managing the
                        deployment <span className={spanClasses}>pipeline</span> has been a
                        significant responsibility, ensuring smooth transitions from staging to production
                        environments.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;