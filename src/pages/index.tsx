import Image from "next/image";
import { gsap } from 'gsap';
import { useEffect } from "react";
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

    let ctx = gsap.context(() => {
  
      ScrollTrigger.create({
        trigger: ".firstCTAButton",
        pin: ".pinnedServicesAndCTA",
        start: "bottom bottom",
        end: "+=900",
      });
    });

    return () => {
      ctx.revert();
    }
    
  }, []);

  return (
    <Page currentPage="Accueil" meta={{ desc: "Je suis Nicolas Foin, je crée des sites web pour les PME/TPE, commerces et startups" }}>
      <Hero />
      <div className=" mt-0 sm:mt-24 space-y-32 ">
        {/* First half: Services + CTA */}
        <div className="curvedSeparatorContainer">
          <div className="customCurvedSeparator h-[150vh] mt-[1400px] lg:mt-[750px] bg-curvedBackground">
          </div>
        </div>
        
        <div className="pinnedServicesAndCTA"> 
          <ServiceSection />
          <CallToAction />
        </div>
        
        {/* Second half: Skills + Reco + CTA */}
        <div className="">
          <Skills />
        </div>
        
        {/*<Testimonials />*/}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/*<CTA />*/}
    </Page>
  );
}
