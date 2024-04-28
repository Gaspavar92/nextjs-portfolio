import Image from "next/image";
import gsap from "gsap";
import { MouseEventHandler, useEffect } from "react";

interface props {
    handleClick: MouseEventHandler
}

export default function Portrait({handleClick}: props) {

    return (
        <div className="image-container absolute w-full h-full">
            <div className="ball absolute rounded-full bg-orange-500 h-[400px] w-[400px] right-40 bottom-[-100px]"></div>
            <div className="ball absolute rounded-full bg-sky-600 h-[250px] w-[250px] right-[-10px] bottom-0"></div>
            <div className="ball absolute rounded-full bg-yellow-400 h-[200px] w-[200px] right-20 top-10"></div>
            <Image alt="Gaspare's picture" src="/gaspavar-background-removebg.png" width={200} height={200} className="h-full w-fit portrait grayscale invisible absolute right-0 rounded-full cursor-pointer" onClick={handleClick}/>
        </div>
    )
};