import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

import { IActionIconProps } from "./ActionIconProps";
function FirstmaintenanceIcon({
  isActive = false,
  fontSize = 42,
}: IActionIconProps) {
  return (
    <SvgIcon sx={{ fontSize }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width="42"
        height="42"
        viewBox="0 0 42 42"
      >
        <g>
          <path
            d="M35.8472,6.15234C27.6483,-2.05078,14.3512,-2.05078,6.15227,6.15234C-2.05076,14.3514,-2.05076,27.6486,6.15227,35.8477C14.3512,44.0508,27.6483,44.0508,35.8513,35.8477C44.0502,27.6486,44.0502,14.3514,35.8472,6.15234ZM8.89208,22.6078C8.23584,21.9516,8.23584,20.8893,8.89208,20.233C9.54832,19.5768,10.6106,19.5768,11.2669,20.233L17.2182,26.1844L30.3102,13.0922C30.9664,12.4359,32.0287,12.4359,32.685,13.0922C33.3412,13.7484,33.3412,14.8107,32.685,15.467L19.2976,28.8586C18.7234,29.4328,18.0303,29.7199,17.2181,29.7199C16.406,29.7199,15.7129,29.4328,15.1387,28.8586L8.89208,22.6078Z"
            fill-rule="evenodd"
            fill={isActive ? " #00D1D1" : "#a2a9b0"}
            fillOpacity="1"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default FirstmaintenanceIcon;
