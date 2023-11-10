import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import GlobalPanel from "../../GlobalPanel";

const Settings = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel delay={100} sx={{ height: "100%", width: "100%" }}>
          Online
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={400} sx={{ height: "100%", width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={400} sx={{ height: "100%", width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Settings;
