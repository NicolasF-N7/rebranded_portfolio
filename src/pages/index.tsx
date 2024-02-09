import Image from "next/image";
import { gsap } from 'gsap/dist/gsap';
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components & sections
import Hero from "@/components/services/hero";
import ServiceSection from "@/components/services/services_section";
import CallToAction from "@/components/services/call_to_action";
import Skills from "@/components/services/skills";
import Page from "@/components/utility/page";




export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let st = ScrollTrigger.create({
      trigger: ".trigger",
      pin: ".pin",
      start: "bottom center",
      end: "+=500",
      markers: "true",
    });
    
  })

  return (
    <Page currentPage="Accueil" meta={{ desc: "Je suis Nicolas Foin, je crée des sites web pour les PME/TPE, commerces et startups" }}>
      <Hero />
      <div className="mt-0 sm:mt-24 space-y-32">
        <div className="">
          <ServiceSection />
        </div>

        <div className="trigger pin">
          <CallToAction />
        </div>
        
        <Skills />
        {/*<Testimonials />*/}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/*<CTA />*/}
    </Page>
  );
}
