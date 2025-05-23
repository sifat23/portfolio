

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import { Tooltip } from 'react-tooltip'
import Image from "next/image";
const ExpertiseBlock = ({ items }) => {

    return (
        <>
            <li className={'grow'}><span className={"font-bold"}>{items.name}</span></li>
            <li>
                <ul className={"flex sm:flex-row mt-1 gap-1 sm:gap-24"}>
                    {items.sub.length > 0 && items.sub.map((child, key) => {
                        return (
                            <li key={key} className={"pb-3 pt-1 inline-flex"}>
                                <div className={"flex items-center"}>
                                    {/*<span>{child.name}</span>*/}
                                    {/*<div>*/}
                                    {/*    /!*<Image width={"40"} height={"40"} src={child?.logo} alt={child?.name}/>*!/*/}
                                    {/*    <Image*/}
                                    {/*        src={child?.logo}*/}
                                    {/*        width={50}*/}
                                    {/*        height={50}*/}
                                    {/*        alt="Picture of the author"*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                    <div className={"rounded overflow-hidden w-[50px]"}>
                                        <Image width={0}
                                               height={0}
                                               sizes="100vw"
                                               style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                               src={child?.logo} alt={child?.name}
                                        />
                                    </div>
                                    {child.level === 'Expert' && (
                                        <div>
                                            <Tooltip
                                                style={{ backgroundColor: "oklch(.828 .189 84.429)", color: "black", borderRadius: "7px" }}
                                                id="my-tooltip" />
                                            <IoMdCheckmarkCircleOutline
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={child.level}
                                                className={"ml-3 hidden sm:block text-green-500"}/>
                                        </div>
                                    )}

                                    {child.level === "Intermediate" && (
                                        <div>
                                            <Tooltip
                                                style={{ backgroundColor: "oklch(.828 .189 84.429)", color: "black", borderRadius: "7px" }}
                                                id="my-tooltip" />
                                            <IoMdRemoveCircleOutline
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={child.level}
                                                className={"ml-3 text-yellow-500 hidden sm:block"}/>
                                        </div>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </li>
        </>
    )
}


export default ExpertiseBlock;