import * as React from "react";
import { SvgIconProps } from "@/types/icons/icon.types";

const PandasIcon: React.FC<SvgIconProps> = ({
  color = "#000",
  size = 15,
  stroke = 80,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="svg5"
    width={size}
    height={size}
    viewBox="0 0 36.663 58.322"
  >
    <defs id="defs2">
      <style id="style149">{".cls-1{fill:#000}"}</style>
    </defs>
    <g id="layer1" transform="translate(-86.751 -145.138)">
      <g id="g183" transform="matrix(.26458 0 0 .26458 77.176 130.482)">
        <path
          id="rect155"
          d="M74.88 68.42h24.09v50.02H74.88z"
          className="cls-1"
        />
        <path
          id="rect157"
          d="M74.88 171.17h24.09v50.02H74.88z"
          className="cls-1"
        />
        <path
          id="rect159"
          d="M74.88 133.04h24.09v23.6H74.88z"
          style={{
            fill: "#ffca00",
          }}
        />
        <path
          id="rect161"
          d="M36.19 109.55h24.09v166.27H36.19z"
          className="cls-1"
        />
        <path
          id="rect163"
          d="M112.78 212.44h24.09v50.02h-24.09z"
          className="cls-1"
        />
        <path
          id="rect165"
          d="M112.78 109.61h24.09v50.02h-24.09z"
          className="cls-1"
        />
        <path
          id="rect167"
          d="M112.78 174.23h24.09v23.6h-24.09z"
          style={{
            fill: "#e70488",
          }}
        />
        <path
          id="rect169"
          d="M150.67 55.39h24.09v166.27h-24.09z"
          className="cls-1"
        />
      </g>
    </g>
  </svg>
);
export default PandasIcon;
