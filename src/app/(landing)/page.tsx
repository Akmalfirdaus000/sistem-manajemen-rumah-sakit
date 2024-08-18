import Image from "next/image";
import { Blog, CallToAction, Contact, FAQ, Hero,Services, Testimonials } from "./_sections";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Services/>
    <Testimonials/>
    <CallToAction/>
    <Contact/>
    <Blog/>
    <FAQ/>
   </main>
  );
}
