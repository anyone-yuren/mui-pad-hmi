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
            id="master_svg0_276_9110"
          >
            <stop offset="0%" stop-color="#ED5300" stop-opacity="1" />
            <stop offset="100%" stop-color="#950000" stop-opacity="1" />
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
              fill="url(#master_svg0_276_9110)"
              fillOpacity="1"
            />
          </g>
          <g>
            <g>
              <path
                d="M54.647800000000004,125.1244Q47.72796,118.2248,43.93171,109.2756Q40,100.00710000000001,40,89.8629Q39.999999523163,79.7187,43.93171,70.4502Q47.72796,61.501000000000005,54.647800000000004,54.6014Q61.5667,47.7027,70.5397,43.91848Q79.8312,40,90,40Q100.1688,40.00000429153,109.4603,43.91849Q118.4334,47.702709999999996,125.3522,54.6014Q132.2721,61.5011,136.0683,70.4502Q140,79.7187,140,89.8629Q140,100.0072,136.0683,109.2756Q132.272,118.2248,125.3522,125.1244C124.7899,125.6851,124.0281,126,123.234,126C121.5772,126,120.234,124.6568,120.234,123C120.234,122.2028,120.5513,121.4384,121.1158,120.8756Q127.206,114.8032,130.5447,106.9325Q134,98.7872,134,89.8629Q134,80.9387,130.5447,72.7933Q127.206,64.92269999999999,121.1158,58.8502Q115.0247,52.7769,107.1288,49.446960000000004Q98.9554,46,90,46Q81.0446,46,72.8712,49.446960000000004Q64.9753,52.7769,58.8842,58.8502Q52.794,64.92269999999999,49.45528,72.7933Q46,80.9387,46,89.8629Q46,98.7872,49.45528,106.9325Q52.794,114.8032,58.8842,120.8756C59.4487,121.4384,59.766,122.2028,59.766,123C59.766,124.6569,58.422799999999995,126,56.766,126C55.9719,126,55.2101,125.6851,54.647800000000004,125.1244Z"
                fillRule="evenodd"
                fill="#FFFFFF"
                fillOpacity="1"
              />
            </g>
            <g>
              <path
                d="M109.91890000000001,101.1699Q113,95.9025,113,89.77459999999999Q113,85.144,111.1974,80.91929999999999Q109.4543,76.8338,106.2727,73.6797Q103.08840000000001,70.52302,98.96029999999999,68.79214Q94.6862,67,90,67Q85.3138,67,81.0397,68.79213Q76.91159999999999,70.52302,73.7273,73.6797Q70.54568,76.8338,68.80255,80.91929999999999Q67,85.144,67,89.77459999999999Q67,95.90870000000001,70.08739,101.1806C70.3567,101.6405,70.49865,102.1637,70.49865,102.69659999999999C70.49865,104.3535,69.1555,105.69659999999999,67.49865,105.69659999999999C66.43348,105.69659999999999,65.44818,105.1318,64.9099,104.2127L64.90922,104.2115Q60.99999809265,97.5356,61,89.77459999999999Q60.999999523163,83.9175,63.28387,78.5647Q65.48775,73.3993,69.50316,69.41867Q73.5158,65.44077,78.7196,63.25885Q84.10679999999999,60.99999809265,90,61Q95.89320000000001,60.999999523163,101.2804,63.25886Q106.4842,65.44077,110.49680000000001,69.41867Q114.51230000000001,73.3993,116.7161,78.5647Q119,83.9175,119,89.77459999999999Q119,97.5335,115.0929,104.2079L115.09049999999999,104.212L115.09049999999999,104.212C114.5518,105.1318,113.56649999999999,105.69659999999999,112.50139999999999,105.69659999999999C110.8445,105.69659999999999,109.50139999999999,104.3535,109.50139999999999,102.69659999999999C109.50139999999999,102.1637,109.64330000000001,101.6404,109.9126,101.1806L109.91890000000001,101.1699Z"
                fillRule="evenodd"
                fill="#FFFFFF"
                fillOpacity="1"
              />
            </g>
            <g>
              <path
                d="M116.31139999999999,132.5275L94.7886,96.6038C92.7086,93.132068,87.2914,93.132068,85.2114,96.6038L63.688649,132.5275C61.6769,135.8854,64.3137,140,68.47724,140L111.52279999999999,140C115.6863,140,118.3231,135.8854,116.31139999999999,132.5275Z"
                fillRule="evenodd"
                fill="#FFFFFF"
                fillOpacity="1"
              />
            </g>
            <g>
              <ellipse
                cx="90"
                cy="90"
                rx="9"
                ry="9"
                fill="#FFFFFF"
                fillOpacity="1"
              />
            </g>
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
}

export default Icon;