import * as React from "react";
import { SvgIconProps } from "@/types/icons/icon.types";

const PWAIcon: React.FC<SvgIconProps> = ({
  color = "#000",
  size = 15,
  stroke = 80,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 512 512"
    width={size}
    height={size}
  >
    <defs>
      <style>{".cls-1{fill:#3d3d3d}"}</style>
    </defs>
    <title>{"pwa"}</title>
    <path
      d="m376.82 158.24 14.79-37.4h42.71L414.05 64.1 439.4 0 512 192.77h-53.54l-12.41-34.53Z"
      className="cls-1"
    />
    <path
      d="M331.14 192.77 408.86 0h-51.52l-53.17 124.57L266.36 0h-39.61l-40.59 124.57-28.63-56.76-25.91 79.81 26.31 45.15h50.71l36.68-111.71 35 111.71Z"
      style={{
        fill: "#5a0fc8",
      }}
    />
    <path
      d="M48.91 126.59h31.74a93.79 93.79 0 0 0 25.68-3.21l8.21-25.29 22.94-70.68a55.61 55.61 0 0 0-6-7.85Q113.84 0 79.8 0H0v192.77h48.91Zm42-82.24q6.9 6.94 6.9 18.59t-6.06 18.61q-6.65 7.64-24.5 7.64H48.91V37.4h18.48q16.61 0 23.53 6.95Z"
      className="cls-1"
    />
  </svg>
);
export default PWAIcon;
