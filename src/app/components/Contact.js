import {MdOutlineAlternateEmail} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa6";
import {ImFacebook} from "react-icons/im";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

const Contact = ({ className }) => {

    const spanHoverClasses = "text-amber-400 duration-200 hover:bg-amber-400 rounded p-1 hover:text-gray-700";
    const spanClasses = "text-amber-400 p-1"

    const mailTo = () => {
        window.location.href = 'mailto:sendtosifat@gmail.com';
    }

    return (
        <div className={`${className}`}>
            <div className={"sm:flex sm:h-screen sm:items-center"}>
                <div className={"flex sm:block sm:flex-1 justify-center sm:justify-between gap-10 mt-12  sm:ml-20"}>
                    <div className={"flex"}>
                        <Link href="https://www.linkedin.com/in/saleh-ahmad-sifat/" target={"_blank"}>
                            <div className={"border p-3 border-amber-400 shadow shadow-amber-400 rounded-lg hover:shadow-md"}>
                                <div className={"flex justify-center"}>
                                    <FaLinkedinIn className={"text-lg"}/>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className={"flex sm:mt-5"}>
                        <Link href="https://github.com/sifat23" target={"_blank"}>
                            <div className={"border p-3 border-amber-400 shadow shadow-amber-400 rounded-lg hover:shadow-md"}>
                                <div className={"flex justify-center"}>
                                    <GrGithub className={"text-lg"}/>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className={"flex sm:mt-5"}>
                        <Link href="https://www.facebook.com/salehahmed.sifat" target={"_blank"}>
                            <div className={"border border-amber-400 shadow shadow-amber-400 rounded-lg p-3 hover:shadow-md"}>
                                <div className={"flex justify-center"}>
                                    <ImFacebook className={"text-lg"}/>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className={"flex sm:mt-5"}>
                        <div
                            onClick={mailTo}
                            className={"border p-3 border-amber-400 shadow shadow-amber-400 rounded-lg hover:shadow-md hover:cursor-pointer"}>
                            <div className={""}>
                                <MdOutlineAlternateEmail className={"text-lg"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;