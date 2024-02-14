import React from "react";
import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function ProjectsOverview() {

  return (
    <>
      {/* Section Title */}
      <div className="">
        <div className="flex flex-col sm:flex-row w-full justify-center">
          {/* Left separator */}
          <div className="mt-4 mb-8 mr-4 border-t-4 border-charcoal w-full hidden sm:block"></div>
          
          <div className="w-full text-charcoal font-bold text-2xl md:text-3xl whitespace-nowrap">
          Quelques projets
          </div>

          {/* Right separator */}
          <div className="mt-4 ml-0 sm:ml-4 border-t-4 border-charcoal w-full "></div>
        </div>

        {/* Content */}
        <div className="flex flex-row justify-center items-center h-[35em]">
          <div className="h-full w-[25%] bg-charcoal mr-8">
          </div>
          <div className="h-full w-[25%] bg-charcoal mr-8">
          </div>
          <div className="h-full w-[25%] bg-charcoal">
          </div>

        </div>
        
        

      </div>
    </>
  );
}

export default ProjectsOverview;
