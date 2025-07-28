import React from "react";

type ContainereWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const ContainereWrapper: React.FC<ContainereWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`px-4  mx-auto w-11/12 md:w-10/12 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default ContainereWrapper;
