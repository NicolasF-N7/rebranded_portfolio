import React from "react";
import Image from "next/image";
import Link from "next/link";
import type {ProjectDataType} from '@/data/types/projectDataType';


function ProjectCard({ project } : {project: ProjectDataType}) {
let thumbnailImage = project.thumbnail.src;
let thumbnailImageAlt = project.thumbnail.alt;

  return (
    <div className=" mx-auto flex flex-col md:justify-center">
      
      {project.github ? (
        /* Project github link on image thumbnail */
        <Link
          href={project.live_preview ? project.live_preview : project.github}
          target="_blank"
          className={`w-full rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-charcoal`}>
          <Image
            className="w-full rounded-md"
            src={thumbnailImage}
            alt={thumbnailImageAlt}/>
        </Link>
      ) : (
        /* Project thumbnail image */
        <div className={`w-full rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-charcoal`}>
          <Image
            className="w-full rounded-md"
            src={thumbnailImage}
            alt={thumbnailImageAlt}/>
        </div>
      )}

      <div className="w-full mt-5">
        {/* Project title */}
        <div className="flex justify-between">

          {project.live_preview && (
            <a href={project.live_preview} target="_blank">
              <h3 className="text-lg text-black font-bold">{project.title}</h3>
            </a>
          )}
          
          {!project.live_preview && project.github && (
            <a href={project.github} target="_blank">
              <h3 className="text-lg text-black font-bold">{project.title}</h3>
            </a>
          )}
          
          {!project.live_preview && !project.github && (
            <h3 className="text-lg text-black font-bold">{project.title}</h3>
          )}
        </div>

        {/* Project gist */}
        <p className="text-charcoal text-left text-sm">{project.gist}</p>
        
        {/* Technologies */}
        <div className="lg:mt-6 flex flex-wrap items-start">
          {project.tech_stack.map((techno, index) => (
            <div className="text-xs text-black font-semibold p-2 rounded-md mr-2 mb-2 bg-darkseagreen hover:bg-olivine whitespace-no-wrap">{techno}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
