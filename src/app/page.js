import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { NewArrival } from "@/components/new-arrival";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <Navbar/>
      <NewArrival/>
      <Footer/>
      
    </main>
  );
}
