'use client'

import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Introduction from "./components/introduction";
import Nav from "./components/navigation";
import Portrait from "./components/portrait";
import About from "./components/about";
import Footer from "./components/Footer";
import Projects from "./components/Projects"

export default function Home() {

  function portraitAnimation(): void {
    gsap.timeline({defaults: {stagger: 0.1}})
        .to('.ball', {scale: 1.2})
        .to('.ball', {scale: 0.8}, '<=0.2')
        .to('.ball', {scale: 1}, '<=0.2')
}

  return (
    <main className="bg w-screen bg-fixed bg-cover pt-10 overflow-x-hidden min-h-screen">
      <Nav />
      <div className="hero my-[100px] mx-auto max-w-[80vw] flex items-center h-[75vh]">
        <div className="h-[450px] w-full flex justify-around content-center">
          <Introduction handleClick={portraitAnimation}/>
          <Portrait handleClick={portraitAnimation}/>
        </div>
      </div>
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
