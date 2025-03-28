'use client';

import {useState} from "react";
import Projects from "@/app/components/Projects";
import Sidebar from "@/app/components/Sidebar";
import About from "@/app/components/About";
import JobExperience from "@/app/components/JobExperience";
import {motion, AnimatePresence} from "motion/react"
import Header from "@/app/components/Header";
import Head from "next/head";


const Last = () => {
    const [active, setActive] = useState("about-me");

    return (
        <div className="lg:flex h-screen">
            {/*<ThemeToggle className={"hidden sm:block"}/>*/}
            <Header/>
            <Sidebar handleActive={(value) => setActive(value)}/>
            <div className="w-full sm:w-5/8 pb-12">
                <main className="hidden sm:block sm:h-screen">
                    <AnimatePresence mode="wait">
                        {active === "about-me" && (
                            <motion.div
                                className={"fixed"}
                                key="about"
                                transition={{type: "spring", stiffness: 100}}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                            >
                                <About/>
                            </motion.div>
                        )}

                        {active === "experience" && (
                            <motion.div
                                className={"absolute"}
                                key="experience"
                                transition={{type: "spring", stiffness: 100}}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                            >
                                <JobExperience/>
                            </motion.div>
                        )}
                        {active === "live-projects" && (
                            <motion.div
                                className={"absolute"}
                                key="projects"
                                transition={{type: "spring", stiffness: 100}}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                            >
                                <Projects/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
                <main className="block sm:hidden">
                    <motion.div
                        className={""}
                        key="experience"
                        transition={{type: "spring", stiffness: 100}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                    >
                        <JobExperience/>
                    </motion.div>
                    <motion.div
                        key="projects"
                        transition={{type: "spring", stiffness: 100}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                    >
                        <Projects/>
                    </motion.div>
                </main>
            </div>
        </div>
    )
}

export default Last;
