import Link from "next/link";
import React from "react";
import { footer_columns } from "@/data/shared";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t-2 border-pumpkin in z-5 bg-charcoal">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer_columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          className="items-center flex">

                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} alt="icon" width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </Link>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t-2 border-pumpkin">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Réalisé avec{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"/>

                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"/>

                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"/>

                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Fait par Nicolas Foin. Inspiré par {" "}
            <Link
              href="https://braydentw.io/"
              target="_blank"
              className="text-fun-gray-light font-medium">
              Brayden Wright
            </Link>
            . Tout droits réservés
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <Link
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href=""
          target="_blank">
          <span className="ml-2">Siren: 903257194</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
