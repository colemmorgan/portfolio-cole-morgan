import React from "react";
import useTheme from "../hooks/useTheme";

type CTAButtonProps = {
  link: string;
  children: React.ReactNode;
  small?: boolean;
};

const CTAButton: React.FC<CTAButtonProps> = ({
  link,
  children,
  small = false,
}) => {
  const {theme} = useTheme()

  const getButtonBorder = () => {
    return theme === "dark" ? "#202020" : "#e5e5e5";
  };

  const getInnerBorder = () => {
    return theme === "dark" ? "linear-gradient(180deg, #373737,#262626)" : "linear-gradient(180deg, #f5f5f5, #ebebeb)";
  }

   const getBg = () => {
    return theme === "dark" ? "linear-gradient(180deg, #262626,#353535)" : "linear-gradient(180deg, #ebebeb, #f5f5f5)";
  }

  return (
    <div
      className="rounded-md p-0.5"
      style={{
        background: `${getButtonBorder()}`,
      }}
    >
      <div
        className="rounded-[4px] p-px"
        style={{
          background: `${getInnerBorder()}`,
        }}
      >
        <a
          href={link}
          target="_blank"
          className={`${small ? "gap-1.5 px-6 py-2 text-sm" : "gap-2 px-10 py-2.5"} flex cursor-pointer items-center rounded-[3px] transition-all`}
          style={{
            background: `${getBg()}`,
          }}
        >
          {children}
        </a>
      </div>
    </div>
  );
};

export default CTAButton;