'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "./logo";
import { bangers } from "../fonts";

export default function Nav() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollToPlugin);
        gsap.timeline()
        .to('.nav', {autoAlpha: 1})
        .from('.nav', {x: 1000, delay: 4, ease: "back(4)", duration: 1.2}, '<')
        .fromTo('.nav', {width: 70, height: 70}, {width: "95%", duration: 1})
        .to('.logo', {autoAlpha: 1}, '<=0.6')
        .to('.close-button', {autoAlpha: 1}, '<')
        .from('.nav-element', {y: -60, stagger: 0.3}, '<=0.5')
        .to('.nav-element', {autoAlpha: 1, stagger: 0.3}, '<')
    });

    function hover(e: React.MouseEvent): void {
        const target = e.currentTarget as HTMLLIElement;
        gsap.to(target.querySelector('.line'), {width: "100%", duration: 0.2})
        gsap.to(target.querySelector('.icon'), {autoAlpha: 1, x: "-30px", duration: 0.2})
    }

    function hoverEnd(e: React.MouseEvent): void {
        const target = e.currentTarget as HTMLLIElement;
        gsap.to(target.querySelector('.line'), {width: "0", duration: 0.2})
        gsap.to(target.querySelector('.icon'), {autoAlpha: 0, x: 0, duration: 0.2})
    }

    function goToSection(e: React.MouseEvent): void {
        const target = e.currentTarget as HTMLElement;
        const id = target.innerText.toLowerCase();
        gsap.to(window, {
            duration: .6,
            scrollTo: {
                y: `#${id}`,
                offsetY: 160
            }
        })
    }

    return (
      <nav className="nav w-[95%] h-[70px] left-1/2 -translate-x-1/2 rounded-full bg-sky-600 flex justify-between shadow-md shadow-[#000032cc] fixed invisible z-50 overflow-hidden">
        <Logo />
        <ul className={`${bangers.className} nav-list flex gap-20 px-20 text-3xl`}>
            <li className="nav-element tracking-wide flex content-center flex-wrap invisible text-white px-2 justify-start cursor-pointer" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={goToSection}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon w-6 h-6 absolute invisible top-1/2 -translate-y-1/2">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <span className="line bg-orange-500 absolute inline-block h-1 rounded-full bottom-4 left-0"></span><p>ABOUT</p>
            </li>
            <li className="nav-element tracking-wide flex content-center flex-wrap invisible text-white px-2 justify-start cursor-pointer" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={goToSection}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon w-6 h-6 absolute invisible top-[50%] translate-y-[-50%]">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
                <span className="line bg-orange-500 absolute inline-block h-1 rounded-full bottom-4 left-0"></span><p>PROJECTS</p>
            </li>
            <li className="nav-element tracking-wide flex content-center flex-wrap invisible text-white px-2 justify-start align-middle cursor-pointer" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={goToSection}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon w-6 h-6 absolute invisible top-[50%] translate-y-[-50%]">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span className="line bg-orange-500 absolute inline-block h-1 rounded-full bottom-4 left-0"></span><p>CONTACT</p>
            </li>
        </ul>
      </nav>
    )
};

