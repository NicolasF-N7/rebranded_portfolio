import React from "react";
import Page from "@/components/utility/page";
import { portfolio_proj_data } from '@/data/projects_data'

import PortfolioSlide from '@/components/portfolio/portfolio_slide'
import { PiHandSwipeLeftBold } from "react-icons/pi";// horizontal scroll icon as hint for user

import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, A11y, Mousewheel, EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

function portfolio() {
  return (
    <Page
      currentPage="Portfolio"
      meta={{ title: "Portfolio", desc: "Mes précédents projets de développement web" }}>

      <h1> mes proj</h1>

      <div className="mt-6 portfolio-swiper-container">
        <div className="scrollHint flex flex-col items-center">
          <PiHandSwipeLeftBold size="2em"/>
        </div>

        <Swiper
          hidden={true}
          className="portfolio-swiper"
            modules={[EffectCreative, FreeMode, Pagination, A11y, Mousewheel]}
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={1}
            direction='horizontal'
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.5
            }}
            freeMode={false}
            pagination={{ clickable: true }}
            effect={'creative'}
            creativeEffect={{
              limitProgress: 2,
              prev: {
                  shadow: true,
                  scale: 0.5,
                  origin: 'left center',
                  translate: ['-5%', 0, -10],
                  rotate: [0, 0, 0],
              },
              next: {
                  shadow: false,
                  scale: 1.3,
                  origin: 'right center',
                  /* [x, y, z] */
                  translate: ['200%', 0, 50],
                  rotate: [0, 0, 0],
              },
            }}>

            {portfolio_proj_data.map((project, index) => (
              <SwiperSlide className="bg-project-slide-bg rounded portfolio-slides min-h-[60vh]" key={`portfolio-project-${index}`}>
                <div className="my-auto h-full">
                  <PortfolioSlide project_data={project} />
                </div>
              </SwiperSlide>
            ))}
            
        </Swiper>
      </div>

    </Page>
)};

export default portfolio;