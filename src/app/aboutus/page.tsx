import SectionTitle from "@/components/common/SectionTitle";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/aboutcoin.png";
import Footer from "@/components/shared/Footer";


export default function page() {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[1320px] mx-auto px-5 pb-5">
        <SectionTitle title="About Us" />
        <div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 py-10">
            <div className=" border border-[#FF7800] rounded-lg lg:w-1/3 flex flex-col items-center justify-center bg-black">
              <Image
                className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:w-[380px] md:h-[380px] lg:h-full lg:w-full"
                src={aboutImg}
                alt="About Us"
              />
            </div>
            <div className="lg:w-3/4 flex flex-col items-start justify-center mx-auto gap-3 px-2 md:px-5">
              <h1 className="font-medium text-[#FF7800] text-xl py-2">
                Intoduction
              </h1>
              <p className="text-lg">
                C3 Global Crypto Alliance is the leading decentralized platform
                of the world, designed to transform the landscape of blockchain
                technology through innovation, transparency, and financial
                empowerment. Built on the robust BNB Chain through opBNB
                network, it offers a secure, scalable, and globally accessible
                ecosystem that places users in full control of their digital
                assets.
              </p>
              <p className="text-lg">
                What truly sets{" "}
                <span className="text-[#FF7800]">
                  C3 Global Crypto Alliance apart is its 6+ powerful income
                  sources
                </span>
                , carefully crafted to deliver you consistent and sustainable
                financial opportunities. These include:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center px-1 sm:px-3 md:px-5 py-5 text-center bg-[#1A1A1A] rounded-lg">
                <p className="border border-[#FFFFFF] rounded-lg p-2 text-xs sm:text-sm md:text-base md:p-3 ">
                  Prime Starter Bonus
                </p>
                <p className="border border-[#FFFFFF] rounded-lg p-2 text-xs sm:text-sm md:text-base md:p-3 ">
                  Limitless Geration Reward
                </p>
                <p className="border border-[#FFFFFF] rounded-lg p-2 text-xs sm:text-sm md:text-base md:p-3 ">
                  Elite Level Rewards
                </p>
                <p className="border border-[#FFFFFF] rounded-lg p-2 text-xs sm:text-sm md:text-base md:p-3 ">
                  Personal Partner Bonus
                </p>
                <p className="border border-[#FFFFFF] rounded-lg p-2 text-xs sm:text-sm md:text-base md:p-3 ">
                  Auto Global Reward
                </p>
                <p className="border border-[#FFFFFF] rounded-lg p-2 text-xs sm:text-sm md:text-base md:p-3 ">
                  Royalty Crown Bonus
                </p>
                <p className="border border-[#FF7800] text-[#FF7800] rounded-lg p-2 w-full md:w-auto">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <p>
              This dynamic and inclusive structure ensures that everyone from
              individual contributors to team leaders can benefit and grow
              within theecosystem. C3 Global Crypto Alliance is not just a
              project; it’s a revolutionary movement for global financial
              transformation.
            </p>
            <h1 className="font-medium text-xl text-[#FF7800] py-3">
              Decentralized Platform:
            </h1>
            <p>
              Empowering the future with trust and transparency_ <br /> <br />{" "}
              Imagine agreements that execute themselves, precisely as coded.
              That’s the power of decentralized smart contracts. They are
              self-executing contracts with the terms of the agreement directly
              written into lines of code, residing on a blockchain. This
              eliminates the need for intermediaries, ensuring transparency and
              security. <br />
              <br /> C3 Global Crypto Alliance utilizes these smart contracts to
              build a robust and reliable ecosystem. Our contracts are designed
              to automate processes, reduce fraud, and foster trust within our
              community.
            </p>
            <h1 className="font-medium text-xl text-[#FF7800] py-3">
              Mission:
            </h1>
            <p>
              C3 Global Crypto is committed to empowering and unifying a global
              community through its decentralized platform. By leveraging the
              security and efficiency of smart contract technology, we
              facilitate transparent and mutually beneficial interactions,
              fostering a collaborative ecosystem where individuals achieve
              their full potential.
            </p>
            <h1 className="font-medium text-xl text-[#FF7800] py-3">Vision:</h1>
            <p>
              Our vision is to establish C3 Global Crypto Alliance as the
              premier platform that revolutionizes community engagement within
              the decentralized space. We strive to drive collective success and
              spearhead innovation, creating a dynamic and inclusive environment
              where groundbreaking ideas come to life.
            </p>
            <h1 className="font-medium text-xl text-[#FF7800] py-3">
              Core Principles:
            </h1>
            <p>Growing Together Through Mutual Support and Opportunity</p>
            <h1 className="font-medium text-xl text-[#FF7800] py-3">
              Why We Start C3:
            </h1>
            <p>Because the future belongs to those who dare to build it.</p>
          </div>
          <div className="bg-[#1A1A1A] rounded-lg p-5 mt-5">
            <div className="space-y-2 pb-5">
              <p>
                <span className="text-[#FF7800] font-semibold">We believe</span>{" "}
                {"     "} that financial freedom should not be a privilege, but
                a possibility — for everyone.
              </p>
              <p>
                <span className="text-[#FF7800] font-semibold">We see a</span>{" "}
                {"     "} world shifting towards decentralization, where
                technology replaces gatekeepers.
              </p>
              <p>
                <span className="text-[#FF7800] font-semibold">We build</span>{" "}
                {"     "} C3 to empower individuals with tools to create, grow,
                and preserve wealth — transparently.
              </p>
              <p>
                <span className="text-[#FF7800] font-semibold"> We grow</span>{" "}
                {"     "} as a community, not through speculation, but through
                shared value and mutual support.
              </p>
            </div>
            <p>
              Join the generation that’s redefining wealth. Join C3 Global
              Crypto Alliance.
              <br /> <br /> C3 Global Crypto Alliance Terms & Conditions –
              Privacy Policy
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
