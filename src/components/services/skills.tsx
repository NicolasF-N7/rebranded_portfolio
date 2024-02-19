import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {technologies_logo} from '@/data/technologies';
import SectionHeader from "@/components/services/section_header";

function Skills() {
  return (
    <>
      <div>
        <SectionHeader headerText="Technologies maitrisées" />

        {/* Desktop */}
        <div className="skillWrapper ml-2 w-[150%] hidden md:flex flex-row justify-between">
          {technologies_logo.map((techno, index) => (
            <div className="p-3 sm:p-8 rounded-full bg-white ml-4 mr-4 h-[5em] w-[5em] sm:h-[10em] sm:w-[10em] flex-shrink-0 flex items-center">
              <Image
                className=""
                height="128"
                src={techno.src}
                alt={techno.alt}/>
            </div>
          ))}
        </div>
        
        {/* Mobile */}
        <div className="md:hidden mt-8 grid grid-cols-3 place-items-center">
          {technologies_logo.map((techno, index) => (
            <div key={index} className="flex items-center p-6 rounded-full bg-white m-4 mt-0 h-[6em] w-[6em]">
              <Image
                className=""
                height="128"
                src={techno.src}
                alt={techno.alt}/>
            </div>
          ))}
        </div>
        

      </div>
    </>
  );
}

export default Skills;
