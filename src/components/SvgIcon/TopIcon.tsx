import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

import { IActionIconProps } from "./ActionIconProps";
// 新增的icon
function Icon({ isActive = false, fontSize = 88 }: IActionIconProps) {
  return (
    <SvgIcon sx={{ fontSize }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width="87"
        height="126.63800048828125"
        viewBox="0 0 87 126.63800048828125"
      >
        <g>
          <rect
            x="0"
            y="0"
            width="87"
            height="126.63800048828125"
            rx="0"
            fill="#000000"
            fillOpacity="1"
          />
          <g>
            <path
              d="M13.163,5.928000488281249L13.163,26.63800048828125L18.141,26.63800048828125L18.141,0.41800048828125025L13.163,0.41800048828125025L8.754999999999999,3.7240004882812503L8.754999999999999,9.12000048828125L13.163,5.928000488281249ZM26.387,5.928000488281249L26.387,26.63800048828125L31.365,26.63800048828125L31.365,0.41800048828125025L26.387,0.41800048828125025L21.979,3.7240004882812503L21.979,9.12000048828125L26.387,5.928000488281249ZM35.278999999999996,21.24200048828125L35.278999999999996,26.63800048828125L40.561,26.63800048828125L40.561,21.24200048828125L35.278999999999996,21.24200048828125ZM35.278999999999996,8.39800048828125L35.278999999999996,13.794000488281249L40.561,13.794000488281249L40.561,8.39800048828125L35.278999999999996,8.39800048828125ZM45.748,25.28900048828125C47.1029,26.46700048828125,49.0095,27.05600048828125,51.467,27.05600048828125C52.9615,27.05600048828125,54.3039,26.74610048828125,55.495,26.125000488281252C56.6855,25.50450048828125,57.6099,24.62400048828125,58.269,23.48400048828125C58.9275,22.34400048828125,59.257,21.00150048828125,59.257,19.45600048828125L59.257,18.73400048828125C59.257,17.26510048828125,58.9589,16.01110048828125,58.364,14.97200048828125C57.7685,13.93350048828125,56.901,13.173500488281249,55.761,12.692000488281248C56.749,12.160000488281248,57.509,11.44450048828125,58.041,10.54500048828125C58.573,9.646100488281249,58.839,8.62600048828125,58.839,7.486000488281251L58.839,6.9160004882812505C58.839,4.8135004882812495,58.1799,3.13500048828125,56.863,1.8810004882812503C55.5455,0.6270004882812499,53.7339,4.88281250099476e-7,51.429,4.88281250099476e-7C49.073,4.88281250099476e-7,47.23,0.6145304882812503,45.9,1.84300048828125C44.57,3.0720604882812506,43.905,4.78800048828125,43.905,6.992000488281249L43.905,7.63800048828125L48.465,7.63800048828125L48.465,6.992000488281249C48.465,6.13110048828125,48.7055,5.4530004882812495,49.187,4.95900048828125C49.6679,4.46500048828125,50.3519,4.21800048828125,51.239,4.21800048828125C52.0999,4.21800048828125,52.778,4.490500488281249,53.272,5.03500048828125C53.766,5.58010048828125,54.013,6.333500488281249,54.013,7.2960004882812495L54.013,7.86600048828125C54.013,8.85400048828125,53.747,9.62710048828125,53.215,10.18400048828125C52.683,10.74150048828125,51.9355,11.020000488281251,50.973,11.020000488281251L49.681,11.020000488281251L49.681,15.238000488281251L51.011,15.238000488281251C52.1255,15.238000488281251,52.9739,15.54200048828125,53.557,16.15000048828125C54.1395,16.75800048828125,54.431,17.63200048828125,54.431,18.77200048828125L54.431,19.45600048828125C54.431,20.49510048828125,54.1585,21.31800048828125,53.614,21.92600048828125C53.0689,22.53400048828125,52.3279,22.83800048828125,51.391,22.83800048828125C50.403,22.83800048828125,49.6489,22.60410048828125,49.13,22.13500048828125C48.6105,21.66650048828125,48.351,20.97600048828125,48.351,20.06400048828125L48.351,19.49400048828125L43.715,19.49400048828125L43.715,20.29200048828125C43.715,22.44550048828125,44.3925,24.11100048828125,45.748,25.28900048828125ZM64.976,24.79500048828125C66.25489999999999,26.302500488281247,68.225,27.056600488281248,70.88499999999999,27.05600048828125C73.545,27.05600048828125,75.5145,26.29600048828125,76.794,24.77600048828125C78.0729,23.25660048828125,78.713,21.00150048828125,78.713,18.01200048828125L78.713,8.74000048828125C78.713,5.85200048828125,78.0729,3.6735004882812508,76.794,2.2040004882812507C75.5145,0.7350604882812499,73.545,4.88281250099476e-7,70.88499999999999,4.88281250099476e-7C68.32589999999999,4.88281250099476e-7,66.382,0.7410004882812498,65.05199999999999,2.223000488281251C63.722,3.70500048828125,63.057,5.87750048828125,63.057,8.74000048828125L63.057,18.01200048828125C63.057,21.02710048828125,63.6965,23.28810048828125,64.976,24.79500048828125ZM73.146,21.56500048828125C72.7529,22.33810048828125,71.9995,22.72400048828125,70.88499999999999,22.72400048828125C69.7955,22.72400048828125,69.05449999999999,22.33810048828125,68.662,21.56500048828125C68.2689,20.79250048828125,68.07300000000001,19.46910048828125,68.07300000000001,17.59400048828125L68.07300000000001,9.46200048828125C68.07300000000001,7.5875004882812505,68.263,6.27000048828125,68.643,5.51000048828125C69.023,4.75000048828125,69.7699,4.370000488281249,70.88499999999999,4.370000488281249C71.9995,4.370000488281249,72.7529,4.75000048828125,73.146,5.51000048828125C73.5385,6.27000048828125,73.735,7.5875004882812505,73.735,9.46200048828125L73.735,17.59400048828125C73.735,19.46910048828125,73.5385,20.79250048828125,73.146,21.56500048828125Z"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
          <g>
            <g>
              <g>
                <rect
                  x="4"
                  y="67.20942902565002"
                  width="4.014337062835693"
                  height="9"
                  rx="2.0071685314178467"
                  fill="#FFFFFF"
                  fillOpacity="1"
                />
              </g>
              <g>
                <rect
                  x="12.028674125671387"
                  y="63.352285623550415"
                  width="4.014337062835693"
                  height="12.857142448425293"
                  rx="2.0071685314178467"
                  fill="#FFFFFF"
                  fillOpacity="1"
                />
              </g>
              <g>
                <rect
                  x="20.057348251342773"
                  y="58.209429025650024"
                  width="4.014337062835693"
                  height="18"
                  rx="2.0071685314178467"
                  fill="#FFFFFF"
                  fillOpacity="1"
                />
              </g>
              <g>
                <rect
                  x="28.086023330688477"
                  y="53.066571950912476"
                  width="4.014337062835693"
                  height="23.14285659790039"
                  rx="2.0071685314178467"
                  fill="#FFFFFF"
                  fillOpacity="1"
                />
              </g>
              <g>
                <rect
                  x="36.11469650268555"
                  y="49.209429025650024"
                  width="4.014337062835693"
                  height="27"
                  rx="2.0071685314178467"
                  fill="#FFFFFF"
                  fillOpacity="1"
                />
              </g>
            </g>
            <g>
              <path
                d="M49.860642700195314,73.55000048828126C50.98064270019531,74.51000048828125,52.500642700195314,74.99000048828125,54.420642700195316,74.99000048828125C56.447142700195315,74.99000048828125,58.03114270019531,74.42500048828126,59.17264270019531,73.29400048828126C60.31364270019532,72.16350048828124,60.884642700195315,70.58500048828125,60.884642700195315,68.55800048828125L60.884642700195315,66.47800048828125C60.884642700195315,64.43000048828125,60.40964270019531,62.85700048828125,59.460642700195315,61.75800048828125C58.511142700195315,60.65950048828125,57.10864270019531,60.11000048828125,55.25264270019531,60.11000048828125C54.01514270019531,60.11000048828125,52.969642700195315,60.45150048828125,52.116642700195314,61.13400048828125L52.116642700195314,56.14200048828125L60.436642700195314,56.14200048828125L60.436642700195314,52.55800048828125L48.500642700195314,52.55800048828125L48.500642700195314,65.13400048828125L52.116642700195314,65.13400048828125C52.564642700195314,64.13150048828125,53.32164270019531,63.630000488281254,54.38864270019531,63.630000488281254C55.22064270019531,63.630000488281254,55.83364270019531,63.881000488281245,56.22864270019531,64.38200048828125C56.62314270019532,64.88350048828124,56.820642700195314,65.65700048828126,56.820642700195314,66.70200048828124L56.820642700195314,68.36600048828126C56.820642700195314,69.36900048828124,56.62314270019532,70.13150048828125,56.22864270019531,70.65400048828124C55.83364270019531,71.17700048828125,55.23114270019531,71.43800048828125,54.420642700195316,71.43800048828125C53.673642700195316,71.43800048828125,53.087142700195315,71.24600048828125,52.66064270019531,70.86200048828125C52.23364270019531,70.47800048828125,52.02064270019531,69.94500048828125,52.02064270019531,69.26200048828125L52.02064270019531,69.07000048828125L48.180642700195314,69.07000048828125L48.180642700195314,69.55000048828126C48.180642700195314,71.25700048828125,48.74064270019531,72.59000048828125,49.860642700195314,73.55000048828126ZM64.08464270019532,66.09400048828125C64.08464270019532,71.96100048828126,66.76164270019531,74.89400048828125,72.11664270019531,74.89400048828125C77.42864270019531,74.89400048828125,80.0846427001953,72.06750048828125,80.0846427001953,66.41400048828125L80.0846427001953,62.63800048828125L72.08464270019532,62.63800048828125L72.08464270019532,66.09400048828125L75.98864270019531,66.09400048828125L75.98864270019531,67.15000048828125C75.98864270019531,68.49400048828124,75.6951427001953,69.49700048828126,75.1086427001953,70.15800048828125C74.52164270019532,70.81950048828125,73.58864270019531,71.15000048828125,72.30864270019532,71.15000048828125C70.94314270019531,71.15000048828125,69.93514270019531,70.75000048828124,69.28464270019532,69.95000048828125C68.63364270019531,69.15000048828125,68.30864270019532,67.84350048828125,68.30864270019532,66.03000048828125L68.30864270019532,61.26200048828125C68.30864270019532,59.36350048828125,68.61264270019531,57.99800048828125,69.22064270019531,57.16600048828125C69.82864270019532,56.33400048828125,70.80464270019532,55.91800048828125,72.14864270019531,55.91800048828125C73.34314270019532,55.91800048828125,74.26564270019531,56.249000488281254,74.91664270019531,56.91000048828125C75.56714270019532,57.57150048828125,75.89264270019531,58.40350048828125,75.89264270019531,59.40600048828125L75.89264270019531,59.630000488281254L80.0846427001953,59.630000488281254L80.0846427001953,59.40600048828125C80.0846427001953,57.16600048828125,79.36964270019531,55.41150048828125,77.94064270019531,54.14200048828125C76.51114270019531,52.87300048828125,74.59114270019532,52.23800048828125,72.1806427001953,52.23800048828125C66.78314270019531,52.23800048828125,64.08464270019532,55.171500488281254,64.08464270019532,61.03800048828125L64.08464270019532,66.09400048828125Z"
                fill="#FFFFFF"
                fillOpacity="1"
              />
            </g>
          </g>
          <g>
            <g>
              <g>
                <rect
                  x="0"
                  y="96.63800048828125"
                  width="80.6727294921875"
                  height="30"
                  rx="3"
                  fill="#D8D8D8"
                  fillOpacity="0"
                />
                <rect
                  x="1"
                  y="97.63800048828125"
                  width="78.6727294921875"
                  height="28"
                  rx="2"
                  fillOpacity="0"
                  stroke-opacity="1"
                  stroke="#FFFFFF"
                  fill="none"
                  stroke-width="2"
                />
              </g>
              <g>
                <path
                  d="M80.6727294921875 104.5327377319336C80.6727294921875 104.5327377319336 80.6727294921875 104.5327377319336 80.6727294921875 104.5327377319336L86.00000190734863 104.5327377319336C86.55228665717942 104.5327377319336 87.00000190734863 104.9804529821028 87.00000190734863 105.5327377319336L87.00000190734863 119.32221221923828C87.00000190734863 119.87449696906907 86.55228665717942 120.32221221923828 86.00000190734863 120.32221221923828L80.6727294921875 120.32221221923828C80.6727294921875 120.32221221923828 80.6727294921875 120.32221221923828 80.6727294921875 120.32221221923828Z"
                  fill="#FFFFFF"
                  fillOpacity="1"
                />
              </g>
            </g>
            <g>
              <rect
                x="4.142857074737549"
                y="100.72890949249268"
                width="44.19047546386719"
                height="21.81818199157715"
                rx="2"
                fill="#00D1D1"
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