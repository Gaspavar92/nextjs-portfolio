import Image from "next/image";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./stack";

export default function About() {

    useGSAP(() => {
        gsap.registerPlugin(useGSAP, ScrollTrigger);
        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about',
                toggleActions: "play reverse play reverse",
                start: "top 20%",
                end: "bottom 50%",
                markers: true
            },
            translateX: -200,
            duration: 0.7,
            ease: "back",
            autoAlpha: 0
        })
    }, []);

    return(
        <>
            <div id="about" className="about wrapper flex w-full h-full justify-between">
                <Image src={"/Gaspare-about.png"} height={"200"} width={"200"} alt={"Gaspare's picture with his son Noah"} className="about-image rounded-lg invisible h-full w-1/3"/>
                <div className="about-text w-1/2 self-center relative">
                    <p>I love coding, obviously. But my life journey has provided me with a lot of experiences in different fields. My personal and professional life has been fun and full of learnings. Care to know more? Ask my chatbot.</p>
                </div>
            </div>
            <TechStack />
        </>
    )
};