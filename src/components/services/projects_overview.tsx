import React from "react";
import Link from 'next/link';
import ProjectCard from '@/components/services/project_card';
import { portfolio_proj_data } from '@/data/projects_data';
import SectionHeader from "@/components/services/section_header";

function ProjectsOverview() {

  return (
    <>
      {/* Section Title */}
      <div className="flex flex-col items-center">
        <SectionHeader headerText="Quelques projets" />

        {/* Content */}
        <div className="flex flex-col lg:flex-row lg:justify-center items-start mb-12">
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

        {/* More project button */}
        <div className="growingButton align-center w-[40%]">
            <Link href="/contact">
              <div className="mb-8 font-bold px-16 py-6 bg-charcoal border-2 border-white text-white hover:bg-zomp transition-colors">
                <p>Plus de projets</p>
              </div>
            </Link>
          </div>

      </div>
    </>
  );
}

export default ProjectsOverview;
