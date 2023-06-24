import React, { useState, useEffect } from "react";

import { Box } from "components/Box";
import { Header } from "components/Header/Header";
import { RequestBetaBtn } from "components/RequestBetaBtn";
import Hero from "components/MainLayout/HomeScreens/Hero/Hero";
import Cases from "components/MainLayout/HomeScreens/Cases/Cases";

// import { Loader } from "components/Loader/Loader";
import HowItWorks from "components/MainLayout/HomeScreens/HowItWorks/HowItWorks";
import Faqs from "components/MainLayout/HomeScreens/Faqs/Faqs";
import Footer from "components/MainLayout/Footer/Footer";

import { getScrollBarWidth } from "helpers";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setScale(window.innerWidth / (1440 - scrollWidth));
  }, [scrollWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScale(window.innerWidth / (1440 - scrollWidth));

      return () => {
        window.removeEventListener("resize", () => {
          setScale(window.innerWidth / (1440 - scrollWidth));
        });
      };
    });
  }, [scrollWidth]);

  useEffect(() => {
    setScrollWidth(getScrollBarWidth());
  }, []);

  // useEffect(() => {
  //   // Симулюємо завантаження даних або інших асинхронних операцій
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      {/* {isLoading ? (
      //   <Loader />
      // ) : ( */}
      <Box position={"relative"} height="auto">
        <Header scale={scale} />

        <Box
          position={"relative"}
          style={{
            transform: `scale(${scale})`,
            width: `${window.innerWidth / scale}px`,
            transformOrigin: "top left",
          }}
        >
          <Hero />
          <Cases />
          <HowItWorks />
          <Faqs />
          <Footer scale={scale} scrollWidth={scrollWidth} />
        </Box>
        <Box
          position={"fixed"}
          bottom={28}
          right={28}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "bottom right",
          }}
        >
          <RequestBetaBtn size={228} />
        </Box>
      </Box>
      {/* // )} */}
    </>
  );
};

export default Home;
