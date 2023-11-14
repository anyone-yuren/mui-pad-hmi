import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import GlobalPanel from "../../GlobalPanel";
import ConlectData from "./components/ConlectData";

const Settings = () => {
  return (
    <Swiper slidesPerView={1} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel delay={100} sx={{ height: "100%", width: "100%" }}>
          <ConlectData></ConlectData>
        </GlobalPanel>
      </SwiperSlide>
    </Swiper>
  );
};

export default Settings;
