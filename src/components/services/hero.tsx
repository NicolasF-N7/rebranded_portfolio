import React from "react";
import RotatingTextCube from "@/components/services/rotating_text_cube";

function Hero() {
  return (
    <>
      <div
        className="text-zomp relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Je suis Nicolas Foin,</p>
        <RotatingTextCube texts={["entreprise", "commerce", 'startup']}/>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
          Je crée des <span className="heroShiny1 text-charcoal">sites web</span> pour votre{" "}
          <span className="heroShiny2 text-charcoal">entreprise</span>.
          <img
            className="sqD w-16 top-[-45%] right-[20%] sm:top-[-90px] sm:right-[20%] opacity-40"
            style={{ animationDelay: "0.1s"}}
            src="/hero-icons/cart.svg"
          />
          <img
            className="sqD w-[15%] left-[5%] bottom-[120%] sm:bottom-[110%]  opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/hero-icons/code.svg"
          />
          <img
            className="sqD w-[15%] left-[10%] bottom-[-80px] sm:bottom-[-80%] opacity-40"
            style={{ animationDelay: "0.5s" }}
            src="/hero-icons/js.svg"
          />
          <img
            className="sqD w-[20%] opacity-40 bottom-[-130px] sm:bottom-[-135%] right-[30%]"
            style={{ animationDelay: "1.0s" }}
            src="/hero-icons/store.svg"
          />
          <img
            className="sqD bottom-[-55%] right-[-5%] sm:bottom-[-75%] sm:right-[+5%] w-[20%] opacity-40"
            style={{ animationDelay: "0.3s" }}
            src="/hero-icons/mobile.svg"
          />
          <img
            className="sqD w-[15%] right-[0%] bottom-[+110%] opacity-40"
            style={{ animationDelay: "0.7s" }}
            src="/hero-icons/coin.svg"
          />
          
        </h1>
      </div>
    </>
  );
}

export default Hero;

// 