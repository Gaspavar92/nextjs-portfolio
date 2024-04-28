'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { titan, gloria, yatra } from "../fonts";
import { MouseEventHandler } from "react";

interface props {
    handleClick: MouseEventHandler
}

export default function Introduction({handleClick}: props) {

    useGSAP(() => {
        gsap.registerPlugin(useGSAP,TextPlugin);
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
            text: "Front-End Developer", 
            yoyo: true, 
            repeat: 1, 
            duration: 2, 
            delay: 3,
        }, '<')
        .set('.changingText', { 
            fontFamily: "'Roboto', sans-serif", 
            fontWeight: "600", 
            color: "#4CAF50", 
            repeat: 1 
        }) // Green
        .to('.changingText', { 
            text: "GSAP Composer", 
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
            text: "React Enthusiast", 
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
            text: "Javascript Lover", 
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
            text: "CSS Aficionado", 
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
            text: "Tech Explorer", 
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
        .to('.introduction', {rotateY: 25, rotateX: 20, xPercent: -45, y: 60, delay: 1})
        .to('.hello', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<')
        .to('.my-name-is', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<')
        .to('.name', {rotate: 0, rotateY: 30, rotateX: 20, boxShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<')
        .to('.i-am-a', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<')
        .to('.changingText', {rotateY: 30, rotateX: 20, textShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px"}, '<')
        .to('.text-container', {rotateY: 30, rotateX: 20}, '<')
        .to('.blinker', {rotateY: 30, rotateX: 20, boxShadow: "#000032cc -25px 15px 5px"}, '<')
        .set('.portrait', {xPercent: 200}, '<')
        .to('.portrait', {xPercent: 0, autoAlpha: 1}, '<')
        .fromTo('.ball', {scale:0}, {scale: 1, stagger: 0.2, ease: "back(3)", duration: 0.4}, '<=0.8')
    }, []);
    
    function hover() {
        gsap.to('.name', {rotateX: -5, rotateY: 5, backgroundColor: "rgb(2 132 199)", color: "black", scale: 1.2, boxShadow: "rgba(0, 0, 50, 0.8) -15px 10px 15px -5px", webkitTextStrokeWidth: "2px", webkitTextStrokeColor: "white"})
    }

    function stopHover() {
        gsap.to('.name', {rotateX: 20, rotateY: 35, backgroundColor: "transparent", color: "white", scale: 1, boxShadow: "rgba(0, 0, 50, 0.8) -25px 15px 5px 0px"})
    }

    return (
        <div className="introduction w-[50%] min-w-fit h-full text-center text-white text-2xl flex flex-col gap-2 bg-transparent px-10 py-4 rounded invisible z-10">
            <p className={`${titan.className} hello text-7xl`}>Hello</p>
            <p className={`${gloria.className} my-name-is`}>my name is</p>
            <div className={`${yatra.className} name text-5xl border-sky-600 border-solid border-4 w-fit mx-auto my-5 px-20 py-2 rounded-md rotate-6 shadow-sky-600 shadow-[0px_0px_20px_5px] bg-[#0f133c] cursor-pointer`} onMouseEnter={hover} onMouseLeave={stopHover} onClick={handleClick}><p>GASPARE</p></div>
            <p className={`${gloria.className} i-am-a`}>I am a</p>
            <div className="text-container flex justify-center">
                <p className="changingText text-5xl inline-block"></p><span className="blinker h-10 w-1 ml-1 bg-amber-500 inline-block"></span>
            </div>
        </div>
    )
};