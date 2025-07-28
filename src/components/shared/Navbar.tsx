import logo from "@/assets/Logo.png";
import Image from "next/image";
import { PrimaryButton } from "../ui/Button";
import heroBgEffect from "@/assets/HeroBGEffect.png";

const Navbar = () => {
  return (
    <div className="container max-w-[1320px] mx-auto py-2 px-3 sm:px-5 flex justify-between items-center">
      <div className="absolute -top-5 md:top-[-10%] -left-5 md:left-0 w-full h-full -z-10">
        <Image src={heroBgEffect} alt="bg" className="w-auto md:w-[400px] lg:w-[420px] 2xl:w-[550px]" />
      </div>
      <div className="w-20 md:w-28 overflow-hidden">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      <PrimaryButton title="Connect wallet" />
    </div>
  );
};

export default Navbar;
