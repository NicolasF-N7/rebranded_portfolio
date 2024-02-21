import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface RotatingTextCubeProps {
  texts: string[];
}

const RotatingTextCube: React.FC<RotatingTextCubeProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // BABY STEPS, Make it simple
  useEffect(() => {
    const textElements = document.querySelectorAll('.rotatingHeaderText') as NodeListOf<HTMLElement>;

    let ctx = gsap.context(() => {
      // Create GSAP timeline for each text element
      const tl = gsap.timeline({ repeat: -1});
    
      tl.to(textElements, {
        duration: 0.5,
        rotationX: -90,
        delay: 2,
        opacity: 0,
        ease: "power4.in",
        transformOrigin: "50% 50% -30",
        onComplete: () => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          textElements.forEach((textElement) => {
            textElement.textContent = texts[currentTextIndex];
          });
        }
      });
      tl.to(textElements, {
        duration: 0.5,
        rotationX: 0,
        opacity: 1,
        transformOrigin: "50% 50% -30"
      });
    });
    // End of useEffect
    return () => {
        ctx.revert();
    };
  }, [texts, currentTextIndex]);

  return (
    <div className="inline-block rotatingHeader">
      <h1 className="rotatingHeaderText">{texts[currentTextIndex]}</h1>
    </div>
  );
};

export default RotatingTextCube;
