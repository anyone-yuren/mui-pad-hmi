import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
  IconButton,
} from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import GlobalPanel from "../../GlobalPanel";

const Settings = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel delay={100} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent" }}
          >
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar
                    alt="Ted talk"
                    src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                  />
                )
              }
              action={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                )
              }
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  "Ted"
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  "5 hours ago"
                )
              }
            />
            {loading ? (
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <CardMedia
                component="img"
                height="140"
                image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                alt="Nicola Sturgeon on a TED talk stage"
              />
            )}
            <CardContent>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  {
                    "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                  }
                </Typography>
              )}
            </CardContent>
          </Card>
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
