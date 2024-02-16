import React from "react";
import Link from 'next/link';

function CallToAction() {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-between">
        <div className="mb-12 flex flex-col sm:flex-row w-full justify-center">
          <div className="mt-4 mb-8 mr-4 border-t-4 border-charcoal w-full hidden sm:block"></div>
          <p className="w-full font-bold text-2xl md:text-3xl text-charcoal whitespace-nowrap">Discutons de vos besoins !</p>
          <div className="mt-4 ml-0 sm:ml-4 border-t-4 border-charcoal w-full "></div>
        </div>

        {/*Wavy animation button for large screens (not phone)*/}
        <div className="firstCTAButton">
          <div className="hidden lg:block wavyButton ">
            <Link href="/contact">
              <div className="font-bold px-16 py-6 bg-charcoal border-2 border-white text-white hover:bg-zomp transition-colors">
                <p>Contactez moi</p>
              </div>
            </Link>
          </div>

          {/*No animation button for mobile*/}
          <div className="lg:hidden growingButton">
            <Link href="/contact">
              <div className="mb-8 font-bold px-16 py-6 bg-charcoal border-2 border-white text-white hover:bg-zomp transition-colors">
                <p>Contactez moi</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default CallToAction;
