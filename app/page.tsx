import Image from "next/image";
import Newest from "./components/Newest";
import Hero from "./components/Hero";
export default function Home() {
  return (
     <div> 
        <Hero></Hero>
        <Newest></Newest>
     </div>
  );
}
