import Image from "next/image";
import { gsap } from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components & sections
import Page from "@/components/utility/page";
import Hero from "@/components/services/hero";
import ServiceSection from "@/components/services/services_section";
import CallToAction from "@/components/services/call_to_action";
import Skills from "@/components/services/skills";
import ProjectsOverview from "@/components/services/projects_overview";
import Recommendations from "@/components/services/recommendations";





export default function Home() {
  useEffect(() => {
    // Calculus for technologies scroll distance
    const technoWrapper = document.querySelector('.skillWrapper') as HTMLElement;
    let technoWrapperWidth = 0;
    if(technoWrapper){
      technoWrapperWidth = technoWrapper.offsetWidth;
    }
    const windowWidth = window.innerWidth;
    const technoScrollAmount = technoWrapperWidth;


    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {


      const t1 = gsap.timeline();
      t1.to(".firstCTAButton", {
        scrollTrigger: {
          trigger: ".firstCTAButton",
          pin: ".pinnedServicesAndCTA",
          start: "bottom bottom",
          end: "+=900",
        }
      })// Create timeline, when pin finish: .to horiz scroll
      .to(".skillWrapper", {
        x: -technoScrollAmount,
        scrollTrigger: {
          trigger: '.skillWrapper',
          scrub: 1,
          start: 'top 80%',
          end: 'bottom 30%',
        }
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
          <div className="customCurvedSeparator h-[150vh] mt-[1800px] md:mt-[1400px] lg:mt-[750px]">
          </div>
        </div>
        
        <div className="pinnedServicesAndCTA"> 
          <ServiceSection />
          <CallToAction headerText="Discutons de vos besoins !" buttonText="Contactez moi" />
        </div>
        
        {/* Second half: Skills + Reco + CTA */}
        <Skills />
        <ProjectsOverview />
        
        {/*<Testimonials />*/}
        <Recommendations />
        <CallToAction headerText="Convaincu cette fois ?" buttonText="Contactez moi" />
      </div>
      {/*<CTA />*/}
    </Page>
  );
}
