'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";


export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}
