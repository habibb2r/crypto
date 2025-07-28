import Image from "next/image";
import wallet from "@/assets/wallet-logo.svg";


interface TableButtonProps {
  title: string;
  className?: string;
  icon?: boolean;
}

export const  TableButton = ({
  title,
  className = "",
  icon = true,
}: TableButtonProps) => {
  return (
   <div
  className={`relative p-[1px] inline-flex items-center justify-center cursor-pointer font-normal overflow-hidden group rounded-full ${className}`}
>
  {/* Gradient background */}
  <span className="w-full h-full bg-gradient-to-r from-[#FF7800] to-[#FFE702] absolute"></span>

  {/* Button inner content */}
  <span className="relative px-4 sm:px-3 py-2 sm:py-3 transition-all ease-out bg-black/60 rounded-full group-hover:bg-opacity-0 duration-400 w-full">
    <span className="text-white whitespace-nowrap text-[10px]  md:text-sm flex items-center justify-center gap-1 sm:gap-2 w-full">
      {icon && (
        <span className="overflow-hidden size-4 sm:size-5 ">
          <Image
            src={wallet}
            alt="wallet"
            className="object-cover w-full h-full"
          />
        </span>
      )}

      {title}
    </span>
  </span>
</div>
  );
};