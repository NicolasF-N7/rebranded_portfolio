import React, { useEffect } from "react";
import Page from "@/components/utility/page";
import Link from "next/link";
import Image from "next/image";

import { IoIosMail } from "react-icons/io";
import WhatsappLogo from "/public/logos/whatsapp.png";

function contact() {

  return (
    <Page
      currentPage="Contact"
      meta={{ title: "Me contacter", desc: "Contactez moi pour discuter de vos besoins." }}>
        <div className="mt-8 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl text-charcoal font-bold mb-6">Écrivez moi</h1>
          {/* Direct contacts */}
          <div className="mt-8 text-white flex flex-row items-center justify-center">
            {/* Email */}
            <div className="w-[25%] mr-[15%]">
              
              <Link
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#110;&#105;&#99;&#111;&#108;&#97;&#115;&#64;&#102;&#111;&#105;&#110;&#45;&#100;&#101;&#118;&#45;&#119;&#101;&#98;&#46;&#102;&#114;" target="_blank" rel="noopener noreferrer">
                  <IoIosMail size="100%"/>
               </Link>
            </div>

            {/* Whatsapp */}
            <div className="w-[25%] ">
              <Link
                href="https://wa.me/601139713120" target="_blank" rel="noopener noreferrer">
                <Image
                    className="w-full rounded-full"
                    blurDataURL="data:..."
                    placeholder="blur"
                    src={WhatsappLogo}
                    alt="Whatsapp logo"/>
              </Link>
            </div>
          </div>
        </div>
    
    </Page>
)};

export default contact;