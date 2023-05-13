import * as React from "react";

import { SvgIconProps } from "@/types/icons/icon.types";

const SharpjsIcon: React.FC<SvgIconProps> = ({
  color = "#FFF",
  size = 15,
  stroke = 80,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="86 86 550 550"
    width={size}
    height={size}
  >
    <path
      fill="none"
      stroke="#9c0"
      strokeWidth={80}
      d="m258.411 285.777 200.176-26.8M244.113 466.413 451.44 438.66m.001 0V238.484m0-150.121v171.572l178.725-23.917m-359.843 19.584V477.22m2.387 156.95V462.591L93.984 486.515"
    />
    <path
      fill="none"
      stroke="#090"
      strokeWidth={80}
      d="M451.441 610.246V438.66l178.725-23.91M269.688 112.59v171.58L90.964 308.093"
    />
  </svg>
);
export default SharpjsIcon;
