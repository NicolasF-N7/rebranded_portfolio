import React from "react";
import Link from 'next/link';

function SectionHeader({
  headerText
} : {
  headerText: string
}
) {
  return (
    <>
        <div className="mb-8 flex flex-col sm:flex-row w-full justify-center">
            {/* Left separator */}
            <div className="mt-4 mb-8 mr-4  w-full hidden sm:block">
                <div className="h-1 bg-gradient-to-r from-transparent to-charcoal rounded"></div>
            </div>
            
            <div className="text-charcoal mx-10 font-bold text-2xl lg:text-3xl whitespace-nowrap">
            {headerText}
            </div>

            {/* Right separator */}
            <div className="mt-4 ml-0 sm:ml-4 w-full ">
                <div className="h-1 bg-gradient-to-l from-transparent to-charcoal rounded"></div>
            </div>
        </div>
    </>
  );
}

export default SectionHeader;
