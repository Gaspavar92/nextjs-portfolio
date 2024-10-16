import Image from "next/image";
import gsap from "gsap";
import { MouseEventHandler, useEffect } from "react";

interface props {
    handleClick: MouseEventHandler
}

export default function Portrait({handleClick}: props) {

    return (
<div className="image-container portrait relative w-full h-full invisible flex justify-center items-center">
    <div 
        className="ball absolute rounded-full bg-orange-500 h-[280px] lg:h-[360px] w-[280px] lg:w-[360px] -translate-x-[100px] translate-y-[160px] lg:-translate-x-[140px] lg:translate-y-[160px]"
        
    ></div>
    <div 
        className="ball absolute rounded-full bg-sky-600 h-[150px] lg:h-[280px] w-[150px] lg:w-[280px] translate-x-[100px] translate-y-[100px] lg:translate-x-[150px] lg:translate-y-[150px]" 
    ></div>
    <div 
        className="ball absolute rounded-full bg-yellow-400 h-[120px] lg:h-[230px] w-[120px] lg:w-[230px] translate-x-[30px] -translate-y-[40px] lg:translate-x-[50px] lg:-translate-y-[80px]" 
    ></div>
    <Image 
        alt="Gaspare's picture" 
        src="/gaspavar-background-removebg.png" 
        width={200} 
        height={200} 
        className="h-full w-fit portrait grayscale invisible rounded-full cursor-pointer" 
        onClick={handleClick}
    />
</div>
    )
};