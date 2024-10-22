"use client";
import React from "react";
import Slider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { banner } from "@/data";
const Hero = () => {
  // Navigation, Pagination,
  return (
    <section className="mt-8  w-full h-screen scrollbar-none ">
      <div className="w-full h-[full]">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="w-full scrollbar-none h-full bg-orange-400"
        >
          {banner.map((banr, i) => (
            <SwiperSlide key={i} className="swiperslide relative">
              <Slider
                imagebg={banr.imagebg}
                image={banr.image}
                contour={banr.contour}
                description1={banr.description1}
                emphasytext={banr.emphasytext}
                descri2={banr.descr2}
                position={banr.position}
                description1b={banr.description1b}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
