import logo from "@/assets/Logo.png";
import wallet from "@/assets/wallet-logo.svg";
import Image from "next/image";
import heroBgEffect from "@/assets/HeroBGEffect.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container max-w-[1320px] mx-auto py-2 px-3 sm:px-5 flex justify-between items-center">
      <div className="absolute -top-5 md:top-[-10%] -left-5 md:left-0 w-full h-full -z-10">
        <Image
          src={heroBgEffect}
          alt="bg"
          className="w-auto md:w-[400px] lg:w-[420px] 2xl:w-[550px]"
        />
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

      <Link
        href="/wallettutorial"
        className={`relative p-[1px] inline-flex items-center justify-center cursor-pointer hover:scale-105 duration-500 font-bold overflow-hidden group rounded-full `}
      >
        {/* Gradient background */}
        <span className="w-full h-full bg-gradient-to-r from-[#FE7801] to-[#FFE702] absolute"></span>

        {/* Button inner content */}
        <span className="relative px-3 md:px-6 py-3 sm:py-4 transition-all ease-out bg-black/85 rounded-full group-hover:bg-opacity-0 duration-400 w-full">
          <span className="bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent flex items-center justify-center gap-2 w-full">
            <span className="overflow-hidden size-5">
              <Image
                src={wallet}
                alt="wallet"
                className="object-cover w-full h-full"
              />
            </span>
            Connect Wallet
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
