import Image from "next/image";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./stack";
import { protest } from "../fonts";
import ChatBot from "./ChatBot";

export default function About() {

    const about = 'about'.split('');

    useGSAP(() => {
        gsap.registerPlugin(useGSAP, ScrollTrigger);
        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about-image',
                toggleActions: "play reverse play reverse",
                start: "top center",
                end: "bottom center"
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
            <div className="wrapper flex flex-col md:flex-row w-full h-full justify-evenly items-center gap-6">
                <Image src={"/Gaspare-about.png"} height={"200"} width={"200"} alt={"Gaspare's picture with his son Noah"} className="about-image rounded-lg invisible h-1/2 w-full md:w-1/3"/>

                <ChatBot />
            </div>
            <TechStack />
        </>
    )
};