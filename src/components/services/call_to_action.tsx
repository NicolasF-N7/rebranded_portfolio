import React from "react";
import Link from 'next/link';

function CallToAction() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col sm:flex-row w-full justify-center">
          <div className="mt-4 mb-8 sm:mb-0 sm:mr-4 border-t-4 border-charcoal w-full"></div>
          <p className="w-full font-bold text-2xl md:text-3xl text-charcoal whitespace-nowrap">Discutons de vos besoins !</p>
          <div className="mt-4 ml-4 border-t-4 border-charcoal w-full hidden sm:block"></div>
        </div>

        {/*Wavy animation button for large screens (not phone)*/}
        <div className="mt-12 hidden lg:block wavyButton">
          <Link href="/contact">
            <div className="font-bold px-16 py-6 bg-charcoal border-2 border-pumpkin text-pumpkin hover:bg-zomp transition-colors">
              <p>Contactez moi</p>
            </div>
          </Link>
        </div>

        {/*No animation button for mobile*/}
        <div className="mt-12 lg:hidden growingButton">
          <Link href="/contact">
            <div className="font-bold px-16 py-6 bg-charcoal border-2 border-pumpkin text-pumpkin hover:bg-zomp transition-colors">
              <p>Contactez moi</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
