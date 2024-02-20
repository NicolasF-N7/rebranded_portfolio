import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {recommendations} from '@/data/recommendations';
import FlippingImage from '@/components/services/flipping_image';
import LinkedInLogo from "/public/social_networks/linkedin-large.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import SectionHeader from "@/components/services/section_header";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Recommendations() {

  function flip() {
    gsap.fromTo(".flipper", { rotationY: 0 }, { rotationY: 180, duration: 0.5, ease: "power2.out" });
  }
  return (
    <>
      <div>
        <SectionHeader headerText="J'ai travaillé pour eux" />

        {/* Desktop */}
        <div className="swiper-container w-[100%] mx-0 md:mx-[3%] md:w-[94%]">
          <Swiper
            className="mt-8 h-full"
            modules={[FreeMode, Navigation, Pagination, Grid, A11y, Mousewheel]}
            spaceBetween={30}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.3
            }}
            loop={false}
            freeMode={false}
            navigation
            pagination={{ clickable: true }}>

            {/* Slide */}
            {recommendations.map((recomm, index) => (
              <SwiperSlide key={index}>

              <div className="flex flex-col justify-center items-center overflow-hidden">
                
                  <Link className="mx-auto" target="_blank" href={recomm.linkedIn_profile}>
                    <div className="h-[12em] py-4">
                      <FlippingImage src_initial={recomm.profile_picture_src} alt_initial={recomm.profile_picture_alt} 
                      src_flipped={LinkedInLogo} alt_flipped="LinkedIn logo" />
                    </div>
                  </Link>

                  <div className="border-b-2 border-goldenrod w-[70%]"></div>
              </div>
              
              </SwiperSlide>
              
            ))}

            {recommendations.map((recomm, index) => (
              <SwiperSlide  key={`${index+recommendations.length}`} className="text-left h-full">
                {/* Quote icon */}
                <div className="flex justify-start items-center text-black">
                  <FaQuoteLeft />
                </div>
                
                <div className="h-full text-charcoal">
                  <p>{recomm.text}</p>
                </div>

                <div className="flex justify-end items-center text-black">
                  <FaQuoteRight />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        

      </div>
    </>
  );
}

export default Recommendations;
