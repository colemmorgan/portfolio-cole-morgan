import React from "react";

type CTAButtonProps = {
  link: string;
  children: React.ReactNode;
  small?: boolean
};

const CTAButton: React.FC<CTAButtonProps> = ({ link, children, small = false }) => {
  return (
    <div
      className="border-dark-100 rounded-md border-2 p-px"
      style={{
        background: "linear-gradient(180deg, #373737,#262626)",
      }}
    >
      <a
        href={link}
        target="_blank"
        className={`${small ? "px-6 py-2 gap-1.5 text-sm" : "px-10 py-2.5 gap-3"} flex cursor-pointer items-center  rounded-[4px]    transition-all hover:brightness-110`}
        style={{
          background: "linear-gradient(180deg, #262626,#353535)",
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default CTAButton;
