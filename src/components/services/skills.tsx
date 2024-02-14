import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {technologies_logo} from '@/data/technologies';

function Skills() {
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
          <div className="mt-4 ml-0 sm:ml-4 border-t-4 border-charcoal w-full "></div>
        </div>

        {/* Weird behavior with items-center for the flex */}
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
        {/* NEED TO CENTER THIS HORIZONTALLY */}
        <div className="md:hidden mt-8 grid grid-cols-3 justify-center">
          {technologies_logo.map((techno, index) => (
            <div className="p-6 rounded-full bg-white mb-4 ml-4 mr-4 h-[6em] w-[6em] flex items-center">
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
