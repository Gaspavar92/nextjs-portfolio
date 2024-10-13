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
                start: "top 70%",
                end: "bottom 80%"
            },
            translateX: -200,
            duration: 0.7,
            ease: "back",
            autoAlpha: 0
        })
    }, []);

    return(
        <>
            <div id="about" className="about wrapper flex w-full justify-between">
                <Image src={"/Gaspare-about.png"} height={"600"} width={"400"} alt={"Gaspare's picture with his son Noah"} className="about-image rounded-full invisible"/>
                <div className="about-text w-1/2 self-center">
                    <p>I love coding, obviously. But my life journey has provided me with a lot of experiences in different fields. My personal and professional life has been fun and full of learnings. Care to know more? Ask my chatbot.</p>
                </div>
            </div>
            <TechStack />
        </>
    )
};