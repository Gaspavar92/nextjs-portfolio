'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { Titan_One } from "next/font/google";
import { Gloria_Hallelujah } from "next/font/google";
import { Yatra_One } from "next/font/google";
const titan = Titan_One({weight: "400", subsets: ["latin"]});
const gloria = Gloria_Hallelujah({weight: "400", subsets: ["latin"]});
const yatra = Yatra_One({weight: "400", subsets: ["latin"]});

export default function Introduction() {

    gsap.registerPlugin(useGSAP,TextPlugin);

    useGSAP(() => {
        // gsap.set('.introduction', {xPercent: 30})
        gsap.to('.introduction', {autoAlpha: 1});

        gsap.timeline({ repeat: -1, defaults: { repeat: -1, repeatDelay: 1.5, ease: "sine.inOut" } })
        .set('.changingText', { 
            fontFamily: "'Arial', sans-serif", 
            fontWeight: "600", 
            color: "#ff591c", 
            repeat: 1 
        }) // Orange
        .to('.changingText', { 
            text: "Front-End Maestro", 
            yoyo: true, 
            repeat: 1, 
            duration: 2, 
            delay: 3 
        }, '<')
        .set('.changingText', { 
            fontFamily: "'Roboto', sans-serif", 
            fontWeight: "600", 
            color: "#4CAF50", 
            repeat: 1 
        }) // Green
        .to('.changingText', { 
            text: "GSAP Artist", 
            yoyo: true, 
            repeat: 1, 
            duration: 2 
        }, '<')
        .set('.changingText', { 
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: "600", 
            color: "#2196F3", 
            repeat: 1 
        }) // Blue
        .to('.changingText', { 
            text: "React Rockstar", 
            yoyo: true, 
            repeat: 1, 
            duration: 2 
        }, '<')
        .set('.changingText', { 
            fontFamily: "'Open Sans', sans-serif", 
            fontWeight: "600", 
            color: "#FFC107", 
            repeat: 1 
        }) // Amber
        .to('.changingText', { 
            text: "Javascript Wizard", 
            yoyo: true, 
            repeat: 1, 
            duration: 2 
        }, '<')
        .set('.changingText', { 
            fontFamily: "'Lato', sans-serif", 
            fontWeight: "600", 
            color: "#b541c9", 
            repeat: 1 
        }) // Purple
        .to('.changingText', { 
            text: "CSS Connoisseur", 
            yoyo: true, 
            repeat: 1, 
            duration: 2 
        }, '<')
        .set('.changingText', { 
            fontFamily: "'Montserrat', sans-serif", 
            fontWeight: "600", 
            color: "#E91E63", 
            repeat: 1 
        }) // Pink
        .to('.changingText', { 
            text: "Passionate Innovator", 
            yoyo: true, 
            repeat: 1, 
            duration: 2 
        }, '<');
    
            gsap.to('.name', {y: -10, duration: 2, repeat: -1, yoyo: true, ease: "linear"})

     gsap.timeline({defaults: {duration: 1}})
        .from('.hello', {opacity: 0, y: -200, ease: "back"})
        .from('.my-name-is', {opacity: 0, x: 400, ease: "back", stagger: 0.1, duration:1})
        .from('.i-am-a', {opacity: 0, x: -400, ease: "back", duration:1}, '<')
        .from('.name', {rotate: -360, ease: "back", x:-1500, duration: 1.5}, '<=0.4')
        .to('.introduction', {rotateY: 25, rotateX: 20, xPercent: -30, y: 60, delay: 1})
        .to('.hello', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<') // Dark blue shadow
        .to('.my-name-is', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<') // Dark blue shadow
        .to('.name', {rotate: 0, rotateY: 30, rotateX: 20}, '<')
        .to('.i-am-a', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<') // Dark blue shadow
        .to('.changingText', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<') // Dark blue shadow
        .to('.text-container', {rotateY: 30, rotateX: 20}, '<')
        .to('.blinker', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<') // Dark blue shadow
        .set('.portrait', {xPercent: 200}, '<')
        .to('.portrait', {xPercent: 0, autoAlpha: 1}, '<');
    }, []);
    
    function hover() {
        gsap.to('.name', {rotateX: 0, rotateY: 0, backgroundColor: "rgb(103,232,249)", color: "black"})
    }

    function stopHover() {
        gsap.to('.name', {rotateX: 20, rotateY: 35, backgroundColor: "transparent", color: "white"})
    }

    return (
        <div className="introduction w-[50%] min-w-fit h-full text-center text-white text-2xl flex flex-col gap-2 bg-transparent m-auto px-10 py-4 rounded shadow-cyan-500 invisible">
            <p className={`${titan.className} hello text-7xl`}>Hello</p>
            <p className={`${gloria.className} my-name-is`}>my name is</p>
            <div className={`${yatra.className} name text-5xl border-cyan-300 border-solid border-4 w-fit mx-auto my-5 px-20 py-2 rounded-md rotate-6 shadow-cyan-300 shadow-[0px_0px_20px_5px]`} onMouseEnter={hover} onMouseLeave={stopHover}><p>GASPARE</p></div>
            <p className={`${gloria.className} i-am-a`}>I am a</p>
            <div className="text-container flex justify-center">
                <p className="changingText text-5xl inline-block"></p><span className="blinker h-10 w-1 ml-1 bg-amber-500 inline-block"></span>
            </div>
        </div>
    )
};