import Image from "next/image";
import gsap from "gsap";
import { MouseEventHandler, useEffect } from "react";

interface props {
    handleClick: MouseEventHandler
}

export default function Portrait({handleClick}: props) {

    return (
        <div className="image-container portrait relative w-full h-full invisible">
            <div className="ball absolute rounded-full bg-orange-500 h-[400px] lg:h-[450px] w-[400px] lg:w-[450px] right-40 lg:right-48 bottom-[-100px] lg:bottom-[-120px]"></div>
            <div className="ball absolute rounded-full bg-sky-600 h-[250px] lg:h-[300px] w-[250px] lg:w-[300px] right-[-10px] lg:right-[-25px] bottom-0 lg:-bottom-6"></div>
            <div className="ball absolute rounded-full bg-yellow-400 h-[200px] lg:h-[250px] w-[200px] lg:w-[250px] right-20 lg:right-16 top-10 lg:top-4"></div>
            <Image alt="Gaspare's picture" src="/gaspavar-background-removebg.png" width={200} height={200} className="h-full w-fit portrait grayscale invisible absolute right-0 rounded-full cursor-pointer" onClick={handleClick}/>
        </div>
    )
};