"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import buttonImg from "@/assets/join/downloadbutton.png";
import joinCover from "@/assets/join/pdfimg.png";
import telegramImg from "@/assets/join/telegram.png";
import { PrimaryButton, SecondaryButton } from "../ui/Button";
import cartBgImg from "@/assets/offer-img-by-s/cart-bg.png";

const Join = () => {
  return (
    
    <div className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-stretch">
        {/* -------- Left Section (PDF) -------- */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col space-y-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              alt="Join cover image"
              src={joinCover || "/placeholder.svg"}
              height={300}
              width={400}
              className="rounded-lg mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </motion.div>
          <motion.div
            className="bg-[#2f2218] p-6 shadow-2xl rounded-2xl flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h1
                className="text-center font-bold text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                PDF
              </motion.h1>
              <motion.p
                className="mt-4 text-base font-normal text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              >
                Global Crypto Alliance aims to build a safe, transparent, and
                accessible digital ecosystem for all. Our platform empowers
                individuals to achieve financial freedom, data privacy, and
                career growth through blockchain technology. Download our
                official document to learn how the C3 community operates
                automatically and sustainably.
              </motion.p>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Link href="/">
                {/* <motion.p
                  className="flex-1 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More
                </motion.p>
                <Image
                  src={buttonImg || "/placeholder.svg"}
                  height={28}
                  width={28}
                  alt="Download Icon"
                /> */}
                <SecondaryButton title="View More" className="w-full " />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* -------- Right Section (Telegram) -------- */}
        <motion.div
          className="w-full lg:w-1/2 p-4 sm:p-12 mt-2 shadow-2xl rounded-2xl flex flex-col justify-between h-full md:translate-y-66 lg:translate-y-60 relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Image and Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${cartBgImg.src})`, // Replace with your image URL
              // filter: "brightness(50%)", // Adjust overlay darkness here
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                width={80}
                height={80}
                src={telegramImg || "/placeholder.svg"}
                alt="Telegram Icon"
                className="mx-auto  h-42 w-42  md:h-32 md:w-32"
              />
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-2xl font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              Join Our Telegram
            </motion.h1>
          </motion.div>
          <motion.div
            className="mt-10 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
            viewport={{ once: true }}
          >
           <PrimaryButton title="Click Here " className="w-full" icon={false} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
