import React from "react";

type CTAButtonProps = {
  link: string;
  children: React.ReactNode;
};

const CTAButton: React.FC<CTAButtonProps> = ({ link, children }) => {
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
        className="flex cursor-pointer items-center gap-3 rounded-[4px] px-10 py-2.5  transition-all hover:brightness-110"
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
