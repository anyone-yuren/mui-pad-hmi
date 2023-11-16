import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

import { IActionIconProps } from "./ActionIconProps";
// 新增的icon
function Icon({ isActive = false, fontSize = 180 }: IActionIconProps) {
  return (
    <SvgIcon sx={{ fontSize }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width="180"
        height="180"
        viewBox="0 0 180 180"
      >
        <defs>
          <linearGradient
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="1"
            id="master_svg0_332_860"
          >
            <stop
              offset="38.57142925262451%"
              stopColor="#00D1D1"
              stopOpacity="1"
            />
            <stop
              offset="77.85714268684387%"
              stopColor="#0095FF"
              stopOpacity="1"
            />
          </linearGradient>
        </defs>
        <g>
          <g>
            <rect
              x="0"
              y="0"
              width="180"
              height="180.00001525878906"
              rx="30"
              fill="url(#master_svg0_332_860)"
              fillOpacity="1"
            />
          </g>
          <g>
            <path
              d="M97,139.2951C100.9863,141.115,106.0069,139.3287,107.6884,134.8768L139.471,50.734700000000004C141.88,44.35812,135.64190000000002,38.12037,129.2653,40.528949L45.12315,72.3116C40.671318,73.9931,38.88462,79.0137,40.704885,83C41.46525,84.6651,43.26469,85.5432,45.0453,85.9679L78.6793,93.9887C82.3104,94.8546,85.1455,97.6897,86.01140000000001,101.32079999999999L94.0322,134.9547C94.4568,136.7353,95.3349,138.53480000000002,97,139.2951Z"
              fillRule="evenodd"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
}

export default Icon;
