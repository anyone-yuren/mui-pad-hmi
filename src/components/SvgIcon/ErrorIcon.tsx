import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

import { IActionIconProps } from "./ActionIconProps";
function ErrorIcon({ isActive = false, fontSize = 45 }: IActionIconProps) {
  return (
    <SvgIcon sx={{ fontSize }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width="49.56521987915039"
        height="45"
        viewBox="0 0 49.56521987915039 45"
      >
        <g>
          <path
            d="M48.5633,33.75L31.2687,3.75162C29.9279,1.42988,27.4593,0,24.7826,0C22.1059,0,19.6325,1.42988,18.2965,3.75162L1.00195,33.75C-0.333984,36.0717,-0.333984,38.9266,1.00195,41.2484C2.34273,43.5701,4.81131,45,7.48803,45L42.0772,45C44.7539,45,47.2273,43.5701,48.5633,41.2484C49.8992,38.9267,49.8992,36.0717,48.5633,33.75ZM24.7826,35.7373C23.4128,35.7373,22.3043,34.6273,22.3043,33.2556C22.3043,31.8839,23.4128,30.7739,24.7826,30.7739C26.1524,30.7739,27.2609,31.8887,27.2609,33.2556C27.2609,34.6273,26.1524,35.7373,24.7826,35.7373ZM27.2609,24.3225C27.2609,25.6942,26.1524,26.8042,24.7826,26.8042C23.4128,26.8042,22.3043,25.6942,22.3043,24.3225L22.3043,15.8838C22.3043,14.5121,23.4128,13.4021,24.7826,13.4021C26.1524,13.4021,27.2609,14.5121,27.2609,15.8838L27.2609,24.3225Z"
            fillRule="evenodd"
            fill="#FF2200"
            fillOpacity="1"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default ErrorIcon;
