// 采集数据
import React, { useState, useEffect, memo, useMemo, useReducer } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  useTheme,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Lightbox, { ImagesListType } from "react-spring-lightbox";
import EmptyBox from "../../../Empty";
import { LoadingButton } from "@mui/lab";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const images: ImagesListType = [
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
    loading: "lazy",
    alt: "Windows 10 Dark Mode Setting",
  },
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png",
    loading: "lazy",
    alt: "macOS Mojave Dark Mode Setting",
  },
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg",
    loading: "lazy",
    alt: "Android 9.0 Dark Mode Setting",
  },
];

const ConlectData = (props: any) => {
  const theme = useTheme();
  const title = useMemo(() => {
    return "采集数据";
  }, []);

  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  // const [images, setImages] = useState<ImagesListType>([]);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentIndex(0);
    setIsOpen(false);
  };

  return (
    <StyledBox>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {images.length ? (
          <>
            <Box
              sx={{
                backgroundColor: "#445260",
                height: "100%",
                flexGrow: 1,
                overflow: "auto",
              }}
            >
              <Grid container spacing={2}>
                {images.map((image, index) => (
                  <Grid item xs={4}>
                    <img
                      key={index}
                      src={image.src}
                      alt={`Image ${index}`}
                      onClick={() => openLightbox(index)}
                      style={{ cursor: "pointer", maxWidth: "100%" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            {isOpen ? (
              <>
                <Lightbox
                  isOpen={isOpen}
                  onPrev={gotoPrevious}
                  onClose={closeLightbox}
                  onNext={gotoNext}
                  images={images}
                  currentIndex={currentImageIndex}
                />
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <EmptyBox
            title={
              <>
                <Typography>暂无采集数据内容</Typography>
                点击“开始采集数据”按钮以开始
              </>
            }
          ></EmptyBox>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingButton
            size="large"
            color="primary"
            variant="contained"
            sx={{
              height: "60px",
              color: "#fff",
            }}
            loadingPosition="end"
            onClick={async () => {}}
          >
            开始采集数据
          </LoadingButton>
          <Typography
            sx={{
              ml: 1,
              color: "#fff",
            }}
            variant="subtitle1"
          >
            数据采集数据：
            {count}
          </Typography>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default ConlectData;
