import React from "react";

type CommonWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`container max-w-[1320px] mx-auto px-4 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;
