import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { bangers } from "../fonts";

export default function TechStack() {

    const parent = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const tl = gsap.timeline();

    interface stackObj {
        [key: string]: string;
    }

    const stack: Array<stackObj> = [
        {"src": "/html-5.svg", "name": "HTML"},
        {"src": "/css-3.svg", "name": "CSS"},
        {"src": "/sass.svg", "name": "SASS/SCSS"},
        {"src": "/tailwindcss-icon.svg", "name": "Tailwind"},
        {"src": "/greensock-icon.svg", "name": "GSAP"},
        {"src": "/javascript.svg", "name": "Javascript"},
        {"src": "/typescript-icon-round.svg", "name": "Typescript"},
        {"src": "/react.svg", "name": "React"},
        {"src": "/nextjs-icon.svg", "name": "Next.JS"},
        {"src": "/sql-database-generic-svgrepo-com.svg", "name": "SQL"},
        {"src": "/firebase.svg", "name": "Firebase"},
        {"src": "/github-octocat.svg", "name": "GitHub"},
        {"src": "/git-icon.svg", "name": "Git"},
        {"src": "/vercel-icon.svg", "name": "Vercel"},
        {"src": "/vitejs.svg", "name": "Vite"}
];
    
    useGSAP(() => {
        if (containerRef.current) {
            const containerWidth = (containerRef.current as HTMLDivElement).getBoundingClientRect().width;
            tl.to('.tech-stack', {translateX: (-containerWidth), repeat: -1, duration: 15, overwrite: true, ease: "linear"})
        }
    }, []);

    const hover = () => {
        gsap.to(tl, {timeScale: 0, duration: 0.8})
    }

    const hoverStop = () => {
        gsap.to(tl, {timeScale: 1, duration: 0.8})
    }


    return (
        <div ref={parent} className="section image-container flex w-screen relative" onMouseEnter={hover} onMouseLeave={hoverStop}>
            <div className="before absolute w-1/6 h-full z-10 left-0"></div>
            <div ref={containerRef} className={`${bangers.className} tech-stack flex flex-wrap shrink-0 basis-auto py-4 box-border text-xl tracking-wider`}>
                {stack.map(image => {
                    return (
                        <div key={image.name} className="img flex flex-wrap justify-center flex-col relative px-10 py-2">
                            <Image src={image.src} height={50} width={50} alt={`${image.name} icon`} className="tech-icon cursor-pointer duration-200 z-10"/>
                            <div className="img-text whitespace-nowrap absolute left-1/2 z-0 translate-x-[-50%] bottom-0">{image.name}</div>
                        </div>
                    )
                })}
            </div>
            <div ref={containerRef} className={`${bangers.className} tech-stack flex flex-wrap shrink-0 basis-auto py-4 box-border text-xl tracking-wider`}>
                {stack.map(image => {
                    return (
                        <div key={image.name} className="img flex flex-wrap justify-center flex-col relative px-10 py-2">
                            <Image src={image.src} height={50} width={50} alt={`${image.name} icon`} className="tech-icon cursor-pointer duration-200 z-10"/>
                            <div className="img-text whitespace-nowrap absolute left-1/2 z-0 translate-x-[-50%] bottom-0">{image.name}</div>
                        </div>
                    )
                })}
            </div>
            <div className="after absolute w-1/6 h-full z-10 right-0"></div>
        </div>
    )
}