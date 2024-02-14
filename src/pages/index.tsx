import Image from "next/image";
import { gsap } from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components & sections
import Hero from "@/components/services/hero";
import ServiceSection from "@/components/services/services_section";
import CallToAction from "@/components/services/call_to_action";
import Skills from "@/components/services/skills";
import ProjectsOverview from "@/components/services/projects_overview";
import Page from "@/components/utility/page";




export default function Home() {
  useEffect(() => {
    // Calculus for technologies scroll distance
    const technoWrapper = document.querySelector('.skillWrapper');
    let technoWrapperWidth = 0;
    if(technoWrapper){
      technoWrapperWidth = technoWrapper.offsetWidth;
    }
    const windowWidth = window.innerWidth;
    const technoScrollAmount = technoWrapperWidth + windowWidth;


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
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
          markers: true,
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
          <div className="customCurvedSeparator h-[150vh] mt-[1800px] md:mt-[1400px] lg:mt-[750px] bg-curvedBackground">
          </div>
        </div>
        
        <div className="pinnedServicesAndCTA"> 
          <ServiceSection />
          <CallToAction />
        </div>
        
        {/* Second half: Skills + Reco + CTA */}
        <Skills />
        <ProjectsOverview />
        
        {/*<Testimonials />*/}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/*<CTA />*/}
    </Page>
  );
}
