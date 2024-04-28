'use client'

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { protest } from "../fonts";

export default function Logo() {
    
    const characters = "Gaspavar.dev".split("");

  
    function charAnimation() {
    gsap.timeline({defaults: {duration:0.3}})
        .to('.characters', {stagger: 0.04, rotateX: 360, color: "orange", y: -10})
        .set('.characters', {rotateX: 0});
}

    function endCharAnimation() {
    gsap.timeline({defaults: {duration:0.3}})
        .to('.characters', {stagger: 0.04, rotateY: 360, color: "white", y: 0})
        .set('.characters', {rotateY: 0})
}

    useGSAP(() => {
        setInterval(() => {
            charAnimation()
            setTimeout(endCharAnimation, 500)
        }, 10000)
    })


    let i = 0;

    return (
        <div className={`${protest.className} logo p-5 text-4xl w-fit invisible px-20`} onMouseEnter={charAnimation} onMouseLeave={endCharAnimation}>
            <Link href={"./"} className="text-white flex">
                {characters.map(char => {
                return <p className="characters inline-block" key={`${char}-${i++}`}>{char}</p>
            })}
            </Link>
            </div>
    )
};