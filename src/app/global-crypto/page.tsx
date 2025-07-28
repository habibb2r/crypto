import Footer from "@/components/shared/Footer";

import { PrimaryButton } from "@/components/ui/Button";
import React from "react";

export default function page() {
  return (
    <div className="container max-w-[1320px] mx-auto pt-6">
        <div className="hidden md:flex justify-end items-center py-4 px-5">
  <PrimaryButton title="Connect wallet" />
</div>
      <div className=" pt-8  text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Title */}
          <div className="mb-4">
            <h1 className="text-2xl md:text-5xl font-light tracking-wide">
              Global Crypto Alliance{" "}
              <span className="text-orange-500 font-medium">PDF</span>
            </h1>
          </div>

          {/* Content Card */}
          <div className="bg-[#1A1A1A] rounded-lg mt-4 md:mt-8 p-8 space-y-6">
            {/* Lorem Ipsum Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-white border-b border-[#FFFFFF] pb-4">
                Lorem Ipsum
              </h2>
              <p className="text-gray-200 font-normal leading-relaxed text-sm md:text-lg">
                Global Crypto Alliance aims to build a safe, transparent and
                accessible digital ecosystem for all, through Genesis, every
                person will be able to ensure a fair opportunity for financial
                freedom, data privacy and a strong career development through
                blockchain technology.
              </p>
            </div>

            {/* Document/Image Placeholder */}
            <div className="bg-[#121212] rounded-2xl mt-8 h-96 flex items-center justify-center ">
              <div className="text-center">
                <p className="text-gray-400 text-lg font-medium tracking-wider">
                  IMAGE/DOCUMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
