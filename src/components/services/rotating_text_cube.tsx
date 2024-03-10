import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface RotatingTextCubeProps {
  texts: string[];
}

const RotatingTextCube: React.FC<RotatingTextCubeProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textsMaxCharLength = texts.reduce((max, text) => Math.max(max, text.length), 0);
  
  useEffect(() => {
    const textElements = document.querySelectorAll('.rotatingHeaderText') as NodeListOf<HTMLElement>;

     //make a clone of the h1 tag
		let nextText = document.querySelector(".rotatingNextText");
		let nextTextChars = nextText.querySelectorAll(".chars")
		
    let currentText = document.querySelector(".rotatingCurrentText");
		let currentTextChars = currentText.querySelectorAll(".chars")
    
    let ctx = gsap.context(() => {
      // Create GSAP timeline for each text element
      const tl = gsap.timeline({ repeat: -1});

      // Original animation
      let duration = 0.4
      let stagger = {each:0.02, ease:"power2", from:"start"}

      //initial position of clones
      gsap.set(nextText, {
        rotationX:-90, 
        opacity:0, 
        transformOrigin:"50% 50% -50"
      })
      
      //TAKE BACK HERE, ANALYSE ROATATING
      //build animation
      tl.to(currentTextChars, {
        duration:duration, 
        rotationX:90,
        delay: 2,
        transformOrigin: "50% 50% -50",
        stagger:{each:0.02, ease:"power2", from:"start"}
      });
      tl.to(currentTextChars, {
        duration:duration, 
        opacity:0,
        delay: 2,
        stagger:{each:0.02, ease:"power2", from:"start"}, 
        ease:"power4.in"
      }, 0)
      
      tl.to(nextTextChars, {
        duration:0.05, 
        opacity:1,
        delay: 2,
        stagger:{each:0.02, ease:"power2", from:"start"}
      }, 0.001)
      tl.to(nextTextChars, {
        duration:duration, 
        rotationX:0,
        delay: 2,
        stagger:{each:0.02, ease:"power2", from:"start"}
      }, 0)
    });//End of gsap.context

    // End of useEffect
    return () => {
        ctx.revert();
    };
  }, [texts, currentTextIndex]);

  return (
    <div className="inline-block rotatingHeader">
      {/* Next text, to be coming. */}
      <h1 className="text-left rotatingNextText" style={{ width: `${textsMaxCharLength}ch` }}>
        {texts[(currentTextIndex - 1 + texts.length) % texts.length].split("").map((char, index) => (
          <span className="chars" key={index}>{char}</span>
        ))}
      </h1>
      
      {/* Current text */}
      <h1 className="text-left rotatingCurrentText" style={{ width: `${textsMaxCharLength}ch` }}>
        {texts[currentTextIndex].split("").map((char, index) => (
          <span className="chars" key={index}>{char}</span>
        ))}
      </h1>
    </div>
  );
};

export default RotatingTextCube;
