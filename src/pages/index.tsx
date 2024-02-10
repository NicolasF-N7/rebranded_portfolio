import Image from "next/image";
import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components & sections
import Hero from "@/components/services/hero";
import ServiceSection from "@/components/services/services_section";
import CallToAction from "@/components/services/call_to_action";
import Skills from "@/components/services/skills";
import Page from "@/components/utility/page";




export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let st = ScrollTrigger.create({
      trigger: ".firstCTAButton",
      pin: true,
      start: "bottom bottom",
      end: "+=300px",
      markers: true,
    });
    
  }, []);

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
