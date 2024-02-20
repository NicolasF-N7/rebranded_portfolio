import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Zoom, A11y } from 'swiper/modules';
import github_logo from '/public/icons/github-f.svg'
import type {ProjectDataType} from '@/data/types/projectDataType';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortfolioSlide = ({project_data} : {project_data: ProjectDataType}) => {
  return (
      <>
        <div className="flex-col p-4 lg:p-8 pb-0 h-full">
          {/* Title */}
          <h2 className="text-center text-black font-bold text-xl mb-4">{project_data.title} - {project_data.project_recipient}</h2>

          <div className="flex lg:flex-row flex-col items-center h-[90%] lg:mt-16">
          {/*Screenshots swiper*/}
            <div className="flex-1 slide-swiper-container self-center">
              <Swiper
                className="slide-swiper"
                modules={[ Navigation, Pagination, Zoom, A11y ]}
                spaceBetween={"25em"}
                zoom={{
                    maxRatio: 2,
                    minRatio: 1
                }}
                slidesPerView={1}
                loop={false}
                navigation
                pagination={{clickable: true}}>


                {project_data.screenshots.map((image, index) => (
                  <SwiperSlide className="" key={`project-screenshots-${index}`}>
                    <div className="h-full flex justify-center items-center pb-[10%]">
                      <div className="swiper-zoom-container">
                        <Image
                          className="rounded m-auto slider-image"
                          src={image.src}
                          alt={image.alt}/>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/*Project information*/}
            <div className="flex-1 lg:pl-4 lg:mt-4 self-center pb-[5%]">
              {/*Tech stack + github*/}
              <div className="lg:mt-6 flex flex-wrap items-start">
                {project_data.tech_stack.map((techno, index) => (
                  <div className="text-xs text-black font-semibold p-2 rounded-md mr-2 mb-2 bg-darkseagreen hover:bg-olivine whitespace-no-wrap">{techno}</div>
                ))}


                {project_data.github && (<div className="ml-auto transform hover:scale-110 transition-transform duration-300">
                  <Link target="_blank" href={project_data.github}>
                    <Image
                      src={github_logo}
                      alt="Github Icon"
                      width={32}
                      height={32}
                      className="object-contain"/>
                  </Link>
                </div>)}
              </div>

              {/*Description*/}
              <div className="p-4 lg:px-8 bg-charcoal text-white">
                <h2 className="text-center font-bold text-xl">Le projet</h2>
                <p className="text-left">{project_data.proj_desc}</p>
              </div>

              
              
            </div>

          </div>
        </div>
      </>
  );
};

export default PortfolioSlide;