import React from "react";
import Link from 'next/link';
import {ProjectCard} from '@/components/services/project_card'
import { portfolio_proj_data } from '@/data/projects_data'


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
          <ProjectCard project={portfolio_proj_data[0]}/>
          <ProjectCard project={portfolio_proj_data[1]}/>
          <ProjectCard project={portfolio_proj_data[3]}/>
        </div>
        
        

      </div>
    </>
  );
}

export default ProjectsOverview;
