import React from "react";
import Link from 'next/link';
import SectionHeader from "@/components/services/section_header";

function CallToAction({
  headerText,
  buttonText
} : {
  headerText: string,
  buttonText: string
}
) {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-between">
        <SectionHeader headerText={headerText} />

        {/*Wavy animation button for large screens (not phone)*/}
        <div className="firstCTAButton">
          <div className="hidden lg:block wavyButton">
            <Link href="/contact">
              <div className="font-bold px-16 py-6 bg-deepPumpkin hover:bg-pumpkin border-2 border-charcoal text-white transition-colors">
                <p>{buttonText}</p>
              </div>
            </Link>
          </div>

          {/*No animation button for mobile*/}
          <div className="lg:hidden growingButton">
            <Link href="/contact">
              <div className="mb-8 font-bold px-16 py-6 bg-deepPumpkin border-2 border-charcoal text-white transition-colors">
                <p>{buttonText}</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default CallToAction;
