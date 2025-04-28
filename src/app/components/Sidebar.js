import Navigation from "@/app/components/Navigation";
import {VscCloudDownload} from "react-icons/vsc";
import Contact from "@/app/components/Contact";
import Image from "next/image";

const Sidebar = ({handleActive}) => {

    const spanHoverClasses = "text-amber-400 duration-200 hover:bg-amber-400 rounded p-1 hover:text-gray-700";
    const spanClasses = "text-amber-400"

    const handleDownloadPDF = async () => {
        try {
            const response = await fetch('/Sifat-CV.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'sifat-cv.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error('Download failed:', error);
        }
    }

    return (
        <aside className={"w-full sm:w-3/8 text-center"}>
            <div className="w-full sm:w-3/8 pl-4 sm:pl-36 pr-4 sm:pr-24 pt-4 sm:pt-20 sm:fixed overflow-auto">
                <div className={"flex flex-col sm:flex-row"}>
                    <div className={'w-full sm:w-10/12'}>
                        <div className={"rounded overflow-hidden w-[170px]"}>
                            <Image width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                                   src={"/img/photo.png"}
                                   alt="Saleh Ahmad"/>
                        </div>
                        <div className={"text-left mt-2"}>
                            <div className={"mb-2 text-lg"}>{"I'm"}</div>
                            <span className={`${spanClasses} text-5xl`}>Saleh Ahmad</span>
                            <div className={"mt-2 text-lg"}>
                                A Passionate <span>Full-Stack Developer</span>, who is born in Bangladesh, specializing
                                in developing
                                and designing exclusive website and web solution using modern technology and <span
                                className={spanClasses}>AI</span>.
                            </div>
                        </div>
                        <Navigation
                            className={"hidden sm:block"}
                            passActive={(value) => handleActive(value)}
                        />
                        <div className={"hidden sm:flex mx-24 mt-32"}>
                            <button
                                onClick={handleDownloadPDF}
                                className={"rounded-lg duration-200 hover:cursor-pointer hover:shadow-md hover:shadow-amber-400 border border-amber-400 flex font-bold  items-center text-amber-400 p-4 w-full justify-center"}>
                                <VscCloudDownload className={"text-2xl"}/>
                                <span className={"ml-2"}>Download My CV</span>
                            </button>
                        </div>
                    </div>
                    <div className={'w-full sm:w-2/12'}>
                        <Contact/>
                    </div>

                    <div className={"flex sm:hidden mx-14 mt-16"}>
                        <button
                            className={"rounded-lg duration-200 hover:cursor-pointer hover:shadow-md hover:shadow-amber-400 border border-amber-400 flex font-bold  items-center text-amber-400 p-4 w-full justify-center"}>
                            <VscCloudDownload className={"text-2xl"}/>
                            <span className={"ml-2"}>Download My CV</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;