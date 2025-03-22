import {MdOutlineAlternateEmail} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa6";
import {ImFacebook} from "react-icons/im";
import Link from "next/link";

const Contact = ({ className }) => {

    const spanHoverClasses = "text-amber-400 duration-200 hover:bg-amber-400 rounded p-1 hover:text-gray-700";
    const spanClasses = "text-amber-400 p-1"

    const mailTo = () => {
        window.location.href = 'mailto:sendtosifat@gmail.com';
    }

    return (
        <div className={`px-10 ${className} h-screen flex items-center justify-center`}>
            <div className={"grid grid-cols-3 gap-24"}>
                <div
                    onClick={mailTo}
                    className={"border border-amber-400 shadow-md shadow-amber-400 rounded-lg p-6 hover:shadow-lg hover:cursor-pointer"}>
                    <div className={"flex justify-center"}>
                        <MdOutlineAlternateEmail className={"text-5xl"}/>
                    </div>
                    <div className={"mt-4 text-center"}>
                        Contact through <span className={spanClasses}>Email</span>
                    </div>
                </div>
                <Link href="https://www.linkedin.com/in/saleh-ahmad-sifat/" target={"_blank"}>
                    <div className={"border border-amber-400 shadow-md shadow-amber-400 rounded-lg p-6 hover:shadow-lg"}>
                        <div className={"flex justify-center"}>
                            <FaLinkedinIn className={"text-5xl"}/>
                        </div>
                        <div className={"mt-4 text-center"}>
                            Connect me through <span className={spanClasses}>Linkedin</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/salehahmed.sifat" target={"_blank"}>
                    <div className={"border border-amber-400 shadow-md shadow-amber-400 rounded-lg p-6 hover:shadow-lg"}>
                        <div className={"flex justify-center"}>
                            <ImFacebook className={"text-5xl"}/>
                        </div>
                        <div className={"mt-4 text-center"}>
                            Find me on <span className={spanClasses}>Facebook</span>
                        </div>
                    </div>
                </Link>
            </div>

            {/*<div className={"flex justify-center items-center gap-24 w-3xl"}>*/}
            {/*    <div className={"border border-amber-400 rounded-lg p-3 "}>*/}
            {/*        <div className={"flex justify-center"}>*/}
            {/*            <MdOutlineAlternateEmail className={"text-5xl"}/>*/}
            {/*        </div>*/}
            {/*        <div className={"mt-4"}>*/}
            {/*            mail me on : sendtosifat@gmail.com*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={"border border-amber-400 rounded-lg p-3 "}>*/}
            {/*        <div className={"flex justify-center"}>*/}
            {/*            <FaLinkedinIn className={"text-5xl"}/>*/}
            {/*        </div>*/}
            {/*        <div className={"mt-4"}>*/}
            {/*            mail me on : sendtosifat@gmail.com*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={"border border-amber-400 rounded-lg p-3 "}>*/}
            {/*        <div className={"flex justify-center"}>*/}
            {/*            <ImFacebook className={"text-5xl"}/>*/}
            {/*        </div>*/}
            {/*        <div className={"mt-4"}>*/}
            {/*            mail me on : sendtosifat@gmail.com*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}