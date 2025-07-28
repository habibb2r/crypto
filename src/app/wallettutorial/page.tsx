import Navbar from "@/components/shared/Navbar";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[1320px] mx-auto px-5 pb-5 text-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 my-[5%]">
          <div className="flex flex-col items-center justify-center gap-5 px-5 py-8 border border-[#FF7800] rounded-lg bg-black w-full md:w-auto">
            <h1 className="text-2xl font-semibold">Wallet Tutorial</h1>
            <div className="flex items-center justify-center gap-5 px-10 md:px-20 py-10  rounded-xl bg-gradient-to-r from-[#FF7800] to-[#FFE601] w-full">
              <FaPlayCircle className="text-3xl text-[#FF7800] mb-2 bg-white rounded-full border-4 border-[#f0a15c65]" />
              <h1 className="text-2xl md:text-3xl">Video Tutorial</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 px-5 py-8 border border-[#FF7800] rounded-lg bg-black w-full md:w-auto">
            <h1 className="text-2xl font-semibold">Article</h1>
            <div className="flex items-center justify-center gap-5 px-10 md:px-20 py-10 rounded-xl bg-gradient-to-r from-[#FF7800] to-[#FFE601] w-full">
              <PiArticleNyTimes className="text-3xl text-[#FF7800] mb-2 bg-white rounded-full border-4 border-[#f0a15c65]" />
              <h1 className="text-2xl md:text-3xl">Article</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
