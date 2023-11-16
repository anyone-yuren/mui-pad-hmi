import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

import { IActionIconProps } from "./ActionIconProps";
// 新增的icon
function Icon({ isActive = false, fontSize = 58 }: IActionIconProps) {
  return (
    <SvgIcon sx={{ fontSize }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width="58"
        height="32.6153564453125"
        viewBox="0 0 58 32.6153564453125"
      >
        <g>
          <g>
            <rect
              x="0"
              y="18.6153564453125"
              width="16"
              height="14"
              rx="2"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
          <g>
            <rect
              x="0"
              y="0"
              width="16"
              height="14"
              rx="2"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
          <g>
            <rect
              x="21"
              y="18.6153564453125"
              width="16"
              height="14"
              rx="2"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
          <g>
            <rect
              x="21"
              y="0"
              width="16"
              height="14"
              rx="2"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
          <g>
            <rect
              x="42"
              y="18.6153564453125"
              width="16"
              height="14"
              rx="2"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
          <g>
            <rect
              x="42"
              y="0"
              width="16"
              height="14"
              rx="2"
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
