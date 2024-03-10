import { useEffect, useState } from "react";

import Link from "next/link";
import { routes } from "@/data/shared";
// TO RE ENABLE ONCE WORKING WITHOUT
// import useDelayedRender from "use-delayed-render";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /*const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );*/

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${isMenuOpen && 'bg-menu-bg'} p-5`}
        style={{ zIndex: 101 }}>

        <li className="list-none font-bold text-lg">
          <Link href="/">
            <img
              className="mr-3"
              src="/previews/mobile_header_thumbnail.png"
              width="160"/>

          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}>

          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuOpen && (
        <ul
          className={`menu flex flex-col absolute bg-menu-bg
            ${isMenuOpen && "menuRendered"}`}>

          {routes.map((item, index) => {
            return (
              <li
                className="w-full border-b border-zomp text-charcoal text-sm font-semibold"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
                key={index}>

                <div className="flex w-auto pb-4">
                  <Link href={item.path}>
                    {item.title}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

type menuProps = {
  "data-hide": boolean;
}

function MenuIcon(props : menuProps) {
  return (
    <svg
      className="h-5 w-5 absolute text-charcoal"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 17.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props : menuProps) {
  return (
    <svg
      className="h-5 w-5 absolute text-charcoal"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
