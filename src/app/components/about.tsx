import Image from "next/image";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./stack";
import { protest } from "../fonts";

export default function About() {

    const about = 'about'.split('');

    useGSAP(() => {
        gsap.registerPlugin(useGSAP, ScrollTrigger);
        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about',
                toggleActions: "play reverse play reverse",
                start: "top 20%",
                end: "bottom 50%",
                // markers: true
            },
            translateX: -200,
            duration: 0.7,
            ease: "back",
            autoAlpha: 0
        })

        gsap.from('.about-letter', {
            scrollTrigger: {
                trigger: '.about-text',
                toggleActions: "play none none reverse",
                start: "20px 200px"
            },
            translateY: 200,
            duration: 0.4,
            stagger: 0.1,
            ease: "back(3)",
            autoAlpha: 0
        })
    }, []);

    return(
        <>
            <div id="about" className={`${protest.className} about about-text section-title text-[25vw] md:h-screen h-[60vh] flex items-center w-screen`}>{about.map((letter, index) => {
                return <p key={index} className="about-letter inline-block invisible">{letter}</p>
            })}</div>
            <div className="wrapper flex flex-col md:flex-row w-full h-full justify-between">
                <Image src={"/Gaspare-about.png"} height={"200"} width={"200"} alt={"Gaspare's picture with his son Noah"} className="about-image rounded-lg invisible h-full w-full md:w-1/3"/>
                <div className="about-text h-1/2 w-1/2 self-center relative">
                    <p>I love coding, obviously. But my life journey has provided me with a lot of experiences in different fields. My personal and professional life has been fun and full of learnings. Care to know more? Ask my chatbot.</p>
                </div>
            </div>
            <TechStack />
        </>
    )
};