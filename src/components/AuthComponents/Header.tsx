import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Welcome",
  subtitle = "Create Your Account",
}) => {
  return (
    <header className="w-full py-18 md:py-24 px-6 text-center bg-gradient-to-r from-[#FF7800] from-10% to-[#FFE601]">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 font-jost">
        {title}
      </h1>
      <p className="text-base md:text-xl text-gray-800 font-medium font-jost">
        {subtitle}
      </p>
    </header>
  );
};

export default Header;
