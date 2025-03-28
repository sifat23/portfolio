import Switch from "react-switch";
import {IoMoon} from "react-icons/io5";
import {BsSunFill} from "react-icons/bs";
import {useEffect, useState} from "react";
const ThemeToggle = ({ className }) => {

    // const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: light)").matches;

    const [theme, setTheme] = useState("dark");
    const [checked, setChecked] = useState(() => {
        return theme === 'light';
    });


    // useEffect(() => {
    //     document.documentElement.classList.remove("light", "dark");
    //     document.documentElement.classList.add(theme);
    //
    //     if (typeof window !== "undefined") {
    //         localStorage.setItem("theme", theme);
    //     } else {
    //         window.localStorage.setItem("theme", theme);
    //     }
    // }, [theme]);

    const handleChange = () => {
        setChecked(!checked);
        // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className={`z-10 absolute right-[20px] top-[20px] p-4 ${className}`}>
            <Switch
                onColor={"#FFCA28"}
                onChange={handleChange}
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "wheat",
                            paddingRight: 2
                        }}
                    >
                        <IoMoon/>
                    </div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "black",
                            paddingRight: 2
                        }}
                    >
                        <BsSunFill/>
                    </div>
                }
                // checked={theme === 'light'}/>
                 checked={checked}/>
        </div>
    )
}

export default ThemeToggle;