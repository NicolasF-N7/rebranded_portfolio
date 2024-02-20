import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import type {StaticImageData} from "@/data/types/static_image"

const FlippingImage = ({
  src_initial,
  alt_initial,
  src_flipped,
  alt_flipped,
}: {
  src_initial: StaticImageData;
  alt_initial: string;
  src_flipped: StaticImageData;
  alt_flipped: string;
}) => {
  const mainImgRef = useRef<HTMLDivElement>(null);
  const flippedImgRef = useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);

  const toggleIsHovered = () => {
    setHovered(!isHovered);

    if (isHovered) {
      gsap.to(mainImgRef.current, { rotateY: 0, opacity: 1, duration: 0.15 });
      gsap.to(flippedImgRef.current, { rotateY: 180, opacity: 0, duration: 0.15 });
    } else {
      gsap.to(mainImgRef.current, { rotateY: 180, opacity: 0, duration: 0.15 });
      gsap.to(flippedImgRef.current, { rotateY: 0, opacity: 1, duration: 0.15 });
    }
  };

  return (
    // Funny without onMouseLeave={toggleIsHovered}, keeps state
    <div
      onMouseEnter={toggleIsHovered}
      onMouseLeave={toggleIsHovered}
      className="w-full h-full flip-card-inner">

      <div className="w-full h-full relative">
        <div ref={mainImgRef} className="w-full h-full absolute">
          <Image
            height={128}
            width={128}
            className="w-full h-full object-cover rounded-full"
            src={src_initial}
            alt={alt_initial}/>
        </div>

        <div ref={flippedImgRef} className="w-full h-full" style={{ opacity: 0 }}>
          <Image
            height={128}
            width={128}
            src={src_flipped}
            alt={alt_flipped}
            className="w-full h-full object-fit rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default FlippingImage;
