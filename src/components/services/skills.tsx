import React from "react";
import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // const t1 = gsap.timeline({repeat: -1});
      // t1.to(".technoFirstGroup", {
      //   y: 50,
      //   scrub: 1,
      //   stagger: 0.1,
      //   repeat:-1,
      //   ease: "sine.inOut",
      // }).to(".technoFirstGroup", {
      //   y: -50,
      //   scrub: 1,
      //   stagger: 0.1,
      //   repeat:-1,
      //   ease: "sine.inOut",
      // });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".technoFirstGroup", {
      duration: 1,
      y: "+=50",
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: '.technoFirstGroup',
        scrub: 0.25,
        markers: true,
      }
    })
    // .to(".technoFirstGroup", {
    //   duration: 1,
    //   y: "-=50",
    //   scrub: 1,
    //   ease: "sine.inOut"
    // });

    });

    return () => {
      ctx.revert();
    }
    
  }, []);

  return (
    <>
      <div className="">
        <div className="flex flex-col sm:flex-row w-full justify-center">
          {/* Left separator */}
          <div className="mt-4 mb-8 mr-4 border-t-4 border-charcoal w-full hidden sm:block"></div>
          
          <div className="w-full text-charcoal font-bold text-2xl md:text-3xl whitespace-nowrap">
          Technologies maitrisées
          </div>

          {/* Right separator */}
          <div className="mt-4 ml-4 ml-0 sm:ml-4 border-t-4 border-charcoal w-full "></div>
        </div>

        <div className="technoContainer flex flex-col lg:flex-row items-center">
          <div className=" m-2 flex lg:flex-col flex-row">
            <div className="technoFirstGroup m-8 h-[5em] w-[5em] bg-charcoal"></div>
            <div className="technoFirstGroup m-8 h-[5em] w-[5em] bg-charcoal"></div>
            <div className="technoFirstGroup m-8 h-[5em] w-[5em] bg-charcoal"></div>
          </div>

          <div className="technoSecondGroup m-2 flex lg:flex-col flex-row">
            <div className="m-8 h-[5em] w-[5em] bg-charcoal"></div>
            <div className="m-8 h-[5em] w-[5em] bg-charcoal"></div>
            <div className="m-8 h-[5em] w-[5em] bg-charcoal"></div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Skills;
