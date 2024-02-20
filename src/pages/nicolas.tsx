import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import Page from "@/components/utility/page";
import EnseeihtLogo from "/public/logos/enseeiht.webp";
import MyNFTLogo from "/public/logos/mynft.png";
import OlyLogo from "/public/logos/oly.png";
import ProtengaLogo from "/public/logos/protenga.webp";
import Prank from "/public/other/prank.webp";
import NicolasNature from "/public/photos_nicolas/nicolas-nature.webp";

function nicolas() {
  useEffect(() => {
    // ===== Computation for mynft scroll distance =====
    const mynftImg = document.querySelector('.mynft-img') as HTMLElement;
    let mynftImgWidth = 0;
    if(mynftImg){
      mynftImgWidth = mynftImg.offsetWidth;
    }
    const mynftImgContainer = document.querySelector('.mynft-img-container') as HTMLElement;
    let mynftImgContainerWidth = 0;
    if(mynftImgContainer){
      mynftImgContainerWidth = mynftImgContainer.offsetWidth;
    }
    const mynftScrollAmount = mynftImgContainerWidth - mynftImgWidth;

    // ===== Computation for Oly scroll distance =====
    const olyImg = document.querySelector('.oly-img') as HTMLElement;
    let olyImgWidth = 0;
    if(olyImg){
      olyImgWidth = olyImg.offsetWidth;
    }
    const olyImgContainer = document.querySelector('.oly-img-container') as HTMLElement;
    let olyImgContainerWidth = 0;
    if(olyImgContainer){
      olyImgContainerWidth = olyImgContainer.offsetWidth;
    }
    const olyScrollAmount = olyImgContainerWidth - olyImgWidth;

    // ===== Computation for Protenga scroll distance =====
    const protengaImg = document.querySelector('.protenga-img') as HTMLElement;
    let protengaImgWidth = 0;
    if(protengaImg){
      protengaImgWidth = protengaImg.offsetWidth;
    }
    const protengaImgContainer = document.querySelector('.protenga-img-container') as HTMLElement;
    let protengaImgContainerWidth = 0;
    if(protengaImgContainer){
      protengaImgContainerWidth = protengaImgContainer.offsetWidth;
    }
    const protengaScrollAmount = protengaImgContainerWidth - protengaImgWidth;

    // N7 image
    const n7Image = document.querySelector('.n7-img') as HTMLElement;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {


      const t1 = gsap.timeline();
      t1.to(".mynft-img",{
        x: mynftScrollAmount,
        scrollTrigger: {
          trigger: '.mynft-img-container',
          scrub: 2,
          start: 'top 70%',
          end: 'bottom 30%',
        }
      }).to(".oly-img",{
        x: olyScrollAmount,
        scrollTrigger: {
          trigger: '.oly-img-container',
          scrub: 2,
          start: 'top 70%',
          end: 'bottom 30%',
        }
      }).to(".protenga-img",{
        x: protengaScrollAmount,
        scrollTrigger: {
          trigger: '.protenga-img-container',
          scrub: 2,
          start: 'top 70%',
          end: 'bottom 30%',
        }
      })
      // Enseeiht image animation
      .to(n7Image, {
        duration: 1,
        rotationY: 360,
        repeat: -1,
        ease: "power1.inOut",
        transformOrigin: "center",
        repeatDelay: 5,
      });
    });
    
    
    return () => {
      ctx.revert();
    }
    
  }, []);

  return (
    <Page
      currentPage="Nicolas"
      meta={{ title: "Qui est Nicolas?", desc: "Présentation de Nicolas" }}>
      
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-charcoal text-4xl font-bold">Qui suis-je?</h1>
      </div>
      
      
      <div className="mx-[3%] sm:mx-[10%] my-4 text-left">
        {/* First section */}
        <div className="p-8 text-black flex flex-col items-center bg-beige border-2 rounded-lg border-goldenrod">
          <h2 className="text-2xl text-charcoal font-bold ">Parcour académique</h2>
          <div className="mt-2 mb-8 h-[1em] w-[50%] border-t-2 border-goldenrod"></div>

          <div>
            <p>Je suis un passionné d'informatique depuis <span className="font-bold">mon plus jeune âge</span>. 
            Au collège, je m'amusais déjà à faire des pièges en écrivant des messages drôles sur les ordinateurs des personnes de mon entourage.</p>
              
            <div className="flex justify-center md:justify-end items-center">
              <Image
                className="mt-4 rounded-sm max-w-[100%] sm:max-w-[80%] md:max-w-[40%] lg:max-w-[30%]"
                blurDataURL="data:..."
                placeholder="blur"
                src={Prank}
                alt="Joke on computer popup"/>
            </div>
            
            <br/>
            <div className="mt-8 flex flex-col md:flex-row justify-between">
              <p>Plus sérieusement... C'est lorsque j'ai compris que l'on pouvait faire bien plus que cela avec l'informatique, 
              j'ai décidé d'entreprendre des études d'<span className="font-bold">ingénieur</span> en logiciel et développement web à l'Enseeiht, à Toulouse à la sortie de ma classe préparatoire maths spé.</p>

                <Image
                className="n7-img w-full mt-4 md:mt-0 md:ml-8 md:w-[40%] md:h-[40%] rounded-sm"
                src={EnseeihtLogo}
                blurDataURL="data:..."
                placeholder="blur"
                alt="Logo of the Enseeiht engineering school"/>
            </div>
            <br />
            <p>J'ai découvert la puissance de l'informatique pour <span className="font-bold">la visibilité en ligne des entreprises</span> et pour <span className="font-bold">tester rapidement une idée de produit</span> au cours de plusieurs expériences en startups à différent stages de développement dans plusieurs pays.</p>
          </div>
        </div>

        {/* Second section: pict + experience */}
        <div className="mt-12 flex flex-col md:flex-row justify-between">
          {/* Picture */}
          <div className="mb-12 md:mb-0 md:max-w-[40%] md:mr-8">
            <Image
              className="rounded-full"
              blurDataURL="data:..."
              placeholder="blur"
              src={NicolasNature}
              alt="Photo of Nicolas"/>
          </div>

          <div className="md:max-w-[60%]">
            {/*Colors darseagreen goldenrod lemonchiffon wheat beige*/}
            <div className="p-8 text-black text-left flex flex-col items-center bg-beige border-2 rounded-lg border-goldenrod">
              <h2 className="text-2xl text-charcoal font-bold">Expériences</h2>
              <div className="mt-2 mb-8 h-[1em] w-[50%] border-t-2 border-goldenrod"></div>

              {/* MyNFT */}
              <div className="flex w-full justify-start items-center mynft-img-container">
                <Image
                className="max-w-[30%] mynft-img"
                blurDataURL="data:..."
                placeholder="blur"
                src={MyNFTLogo}
                alt="Logo of MyNFT"/>
              </div>
              <p>À travers mon expérience, j'ai entre autres développé mon-savoir faire en développement web en travaillant sur des projets innovants, notamment chez <Link className="text-charcoal underline italic" target="_blank" href="https://mynft.com/">MyNFT</Link> en participant à l'élaboration d'un site d'échange de NFT et plusieurs produits associés.</p>
              <br/>

              <div className="flex w-full justify-start items-center oly-img-container">
                <Image
                className="max-w-[20%] oly-img"
                blurDataURL="data:..."
                placeholder="blur"
                src={OlyLogo}
                alt="Logo of Oly platform"/>
              </div>
              <p>Puis chez <Link className="text-charcoal underline italic" target="_blank" href="https://www.oly-platform.com/">Oly</Link> en prototypant un agrégateur de données pour leur logiciel de multi-listing de vêtements de seconde main.</p>
              <br/>
              
              <div className="flex w-full justify-start items-center protenga-img-container">
                <Image
                className="max-w-[50%] protenga-img"
                blurDataURL="data:..."
                placeholder="blur"
                src={ProtengaLogo}
                alt="Logo of Protenga"/>
              </div>
              <p>Et également chez <Link className="text-charcoal underline italic" target="_blank" href="https://www.protenga.com/">Protenga</Link>, qui crée des fermes d'élevage d'insectes high tech, en améliorant un système de comptage d'insectes.</p>

            </div>
          </div>
        </div>
      
        {/* Third Section */}
        <div className="mt-12 p-8 text-black flex flex-col items-center bg-beige border-2 rounded-lg border-goldenrod">
          <h2 className="text-2xl text-charcoal font-bold">Mes motivations</h2>
          <div className="mt-2 mb-8 h-[1em] w-[50%] border-t-2 border-goldenrod"></div>

          <div>
            <p>Ma <span className="font-bold">recherche de sens</span> dans mon travail, m'a amené à travailler pour Oly et Protenga. Et c'est cette envie d'avoir un impact social et écologique positif qui m'anime pour travailler avec mes clients.</p>
            <br />

            <p>Mon esprit entrepreneurial m'a mené à m'installer en tant que freelance pour avoir un réel <span className="font-bold">contact avec les clients</span> qui me manquait dans mes expériences professionelles, mais aussi de mettre à profit mes compétences techniques poussées au service d'autres entrepreneurs et de personnes avec le même état d'esprit que moi.</p>
          </div>
        </div>


      </div>

    </Page>
)};

export default nicolas;