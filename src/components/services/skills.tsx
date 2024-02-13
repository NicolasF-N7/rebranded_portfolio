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
        <div className="skillWrapper m-2 flex flex-row">
          {technologies_logo.map((techno, index) => {
            <Image
              className="p-2 mx-auto"
              height={128}
              width={128}
              src={techno.src}
              alt={techno.alt}/>
          })}
          
          <div className="m-1 h-[5em] w-[5em] bg-charcoal"></div>
        </div>
        

      </div>
    </>
  );
}

export default Skills;
