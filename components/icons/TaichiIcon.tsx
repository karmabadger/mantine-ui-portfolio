import React, { FC } from "react";
import { SvgIconProps } from "@/types/icons/icon.types";

const TaichiIcon: FC<SvgIconProps> = ({
  color = "black",
  size = 28,
  stroke = 80,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M20.7 6.2c0 2.1-1.1 3.9-3 5.1-1.6 1.1-3.3 2.2-4.9 3.4-2.6 2-4.2 4.6-4.3 7.9-.1 3.6 1.6 6.4 4.6 8.4.1 0 .1.1.2.1.3.2.5.4.3.7-.1.1-.2.1-.3.1H13c-1.6-.4-3.2-1-4.6-1.9-4.7-2.9-7.4-7-8-12.4C0 14 .8 10.2 2.9 7.1 4.9 4 8 1.6 11.6.5c1.8-.6 3.7-.7 5.5.1 1.1.5 2.1 1.3 2.8 2.3.5.9.9 2.1.8 3.3zM31.7 18.6c0 1.4-.4 3-1.9 4.1-1.8 1.3-4 1.2-5.4-.2-.4-.4-.7-.9-.9-1.4-.2-.5-.2-1.1-.2-1.7.1-.6.3-1.1.6-1.6s.7-.9 1.2-1.2l.6-.3c1.6-.9 2.3-2.3 2.3-4 0-.3.3-.5.6-.3 2 1.6 3.1 3.8 3.1 6.6z" />
  </svg>
);

export default TaichiIcon;
