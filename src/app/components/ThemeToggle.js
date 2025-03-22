import Switch from "react-switch";
import {IoMoon} from "react-icons/io5";
import {BsSunFill} from "react-icons/bs";
import {useState} from "react";
const ThemeToggle = ({ className }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = (checked) => {


        setChecked(checked);
        console.log(checked)
    };

    return (
        <div className={`absolute right-[20px] top-[20px] p-4 ${className}`}>
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
                checked={checked}/>
        </div>
    )
}

export default ThemeToggle;