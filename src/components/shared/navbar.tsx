import Link from "next/link";
import React from "react";
import { routes } from "@/data/shared";

function Navbar({ currentPage } : {currentPage: string}) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 scale-90 transform hover:scale-100 transition-transform duration-500"
              src="/favicon/favicon-180.png"
              width="80"/>

            {"Nicolas".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-sunglow hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
            &nbsp;
            {"Foin".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-sunglow hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
