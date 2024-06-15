'use client'

import gsap from "gsap"
import Introduction from "./components/introduction";
import Nav from "./components/navigation";
import Portrait from "./components/portrait";
import About from "./components/about";

export default function Home() {

  function portraitAnimation(): void {
    gsap.timeline({defaults: {stagger: 0.1}})
        .to('.ball', {scale: 1.2})
        .to('.ball', {scale: 0.8}, '<=0.2')
        .to('.ball', {scale: 1}, '<=0.2')
}

  return (
    <main className="bg h-screen w-screen bg-fixed bg-cover pt-10 overflow-x-hidden">
      <Nav />
      <div className="hero section wrapper flex h-[75vh] pt-10">
        <div className="h-[450px] w-full flex justify-around content-center">
          <Introduction handleClick={portraitAnimation}/>
          <Portrait handleClick={portraitAnimation}/>
        </div>
      </div>
      <About />
    </main>
  );
}
