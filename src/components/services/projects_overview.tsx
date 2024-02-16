import React from "react";
import Link from 'next/link';
import ProjectCard from '@/components/services/project_card';
import { portfolio_proj_data } from '@/data/projects_data';


function ProjectsOverview() {

  return (
    <>
      {/* Section Title */}
      <div className="">
        <div className="mb-8 flex flex-col sm:flex-row w-full justify-center">
          {/* Left separator */}
          <div className="mt-4 mb-8 mr-4 border-t-4 border-charcoal w-full hidden sm:block"></div>
          
          <div className="w-full text-charcoal font-bold text-2xl lg:text-3xl whitespace-nowrap">
          Quelques projets
          </div>

          {/* Right separator */}
          <div className="mt-4 ml-0 sm:ml-4 border-t-4 border-charcoal w-full "></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row lg:justify-center items-center">
          <div className="mb-8 mx-8 lg:mb-0">
            <ProjectCard project={portfolio_proj_data[0]}/>
          </div>
          <div className="mb-8 mx-8 lg:mb-0">
            <ProjectCard project={portfolio_proj_data[1]}/>
          </div>
          <div className="mb-8 mx-8 lg:mb-0">
            <ProjectCard project={portfolio_proj_data[4]}/>
          </div>
        </div>

      </div>
    </>
  );
}

export default ProjectsOverview;
