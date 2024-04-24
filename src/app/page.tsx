import Introduction from "./components/introduction";
import Logo from "./components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg h-screen w-screen bg-fixed bg-cover">
      <Logo />
      <div className="hero flex wrapper h-[60vh] relative justify-center">
        <Introduction />
        <Image alt="Gaspare's picture" src="/gaspavar-background-removebg.png" width={200} height={200} className="h-full w-fit portrait grayscale invisible absolute right-0 rounded-full"/>
      </div>
    </main>
  );
}
