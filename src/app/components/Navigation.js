"use client";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {useState} from "react";
import {motion} from "motion/react"


const Navigation = ({ passActive, className }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [menus, setMenus] = useState([
        {value: "about-me", text: "About Me", active: true},
        {value: "experience", text: "Experience", active: false},
        {value: "live-projects", text: "Live Projects", active: false},
    ]);

    const handleMenuClick = (e, key, value) => {
        e.preventDefault();
        const updatedMenus = menus.map(menu => ({
            ...menu,
            active: menu.value === value
        }));

        setMenus(updatedMenus);
        setActiveIndex(key);
        console.log(key)

        passActive(value);
    }

    const tops = {
        0: 0,
        1: 56,
        2: 112,
    }


    return (
        <div className={`mt-6 ${className}`}>
            <ul className={"relative"}>
                <motion.div
                    className="absolute top-[16px] left-[12px]"
                    layout
                    transition={{type: "spring", stiffness: 200, damping: 20}}
                    animate={{ y: tops[activeIndex] }} // Corrected: 'y' instead of 'top'
                >
                    <MdOutlineSubdirectoryArrowRight className={'text-2xl text-amber-400'}/>
                </motion.div>
                {menus.length > 0 && menus.map((menu, key) => {
                    return (
                        <li key={key}
                            onClick={(e) => handleMenuClick(e, key, menu.value)}
                            className={`p-3 duration-200 font-semibold flex items-center rounded text-2xl hover:text-amber-400 hover:cursor-pointer 
                                transition-all ease-in-out
                                ${menu.active ? 'text-amber-400' : 'text-white '}`}>


                            {menu.active && (
                                <MdOutlineSubdirectoryArrowRight className={"opacity-0"}/>
                            )}
                            <motion.div
                                // initial={{ opacity: 0.7, x: -10 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                animate={{ x: activeIndex === key ? 10 : 0 }}
                            >
                                {menu.text}
                            </motion.div>
                            {/*<div className={"pl-3"}>{menu.text}</div>*/}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navigation;
