"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "../CSS/sliderdual.css";

// import required modules
import { FreeMode, Keyboard, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function SlideDual() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="container">
        <h2 className="text-center text-6xl text-primary mt-10 lg:text-4xl md:text-3xl">
          1967 Mercedes-Benz 250 SL Pagoda
        </h2>
        <h4 className="text-center text-2xl text-grey-title w-5/12 capitalize mt-6 leading-8 mx-auto lg:w-full lg:text-xl md:text-base">
          A largely original example of this stylish 1970s coupe, refinished in
          a classic period colour.
        </h4>
      </div>

      <div
        className="w-[805px] flex m-auto relative rounded-[52px] border-[1px] top-11 z-10 bg-white border-white justify-between items-center lg:w-4/5
      md:px-8 sm:px-6">
        <div className="flex flex-col justify-center items-center p-[21px] pl-[88px] lg:pl-14 md:p-[10px_0px]">
          <span className="text-base text-grey-text tracking-[0.8px] sm:text-xxs">
            ENDS IN
          </span>
          <span className="text-2xl text-red font-medium tracking-wide sm:text-sm">
            6:05:35
          </span>
        </div>
        <hr className="w-[1.8px] h-[46px] bg-grey-keyline md:h-5" />
        <div className="flex flex-col justify-center items-center p-[21px] md:p-[10px_10px]">
          <span className="text-base text-grey-text tracking-[0.8px] sm:text-xxs">
            CURRENT BID
          </span>
          <span className="text-2xl text-black font-medium tracking-wide sm:text-sm">
            £35,000
          </span>
        </div>
        <hr className="w-[1.8px] h-[46px] bg-grey-keyline md:h-5" />
        <div className="flex flex-col justify-center items-center p-[21px] md:p-[10px_10px]">
          <span className="text-base text-grey-text tracking-[0.8px] sm:text-xxs">
            BIDS
          </span>
          <span className="text-2xl text-black font-medium tracking-wide sm:text-sm">
            11
          </span>
        </div>
        <button
          className="flex flex-col justify-center items-center bg-secondary text-primary rounded-r-[52px] py-[25px] pr-[48px] pl-[36px] transition group hover:bg-primary 
        md:hidden">
          <div className="flex items-center">
            <span className="text-xl text-primary font-medium tracking-wide mr-2 group-hover:text-secondary">
              Bid Now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none">
              <path
                d="M8.97707 4.78345L19.6216 7.2203L16.5854 17.9614"
                stroke="#E8DECF"
                strokeWidth="1.5"
                stroke-linecap="square"
                className="group-hover:stroke-secondary"
              />
              <path
                d="M18.1478 7.82175L4.29141 15.8217"
                stroke="#E8DECF"
                strokeWidth="1.5"
                stroke-linecap="square"
                className="group-hover:stroke-secondary"
              />
            </svg>
          </div>
          <span className="text-sm text-cream">(collectingcars.com)</span>
        </button>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-border-radius": "20%",
          "--swiper-pagination-bottom": "-32px",
          "--swiper-pagination-color": "#E3E3E3",
        }}
        spaceBetween={10}
        slidesPerView={1.1}
        loopedSlides={2}
        centeredSlides={true}
        loop={true}
        mousewheel={{ invert: true }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, Keyboard]}
        allowTouchMove={true}
        className="w-full lg:h-[580px] md:h-[370px] sm:h-[197px]"
        pagination={{
          enabled: true,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            pagination: {
              enabled: false,
            },
          },
        }}>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper md:!hidden"
        breakpoints={{
          768: {
            enabled: false,
          },
        }}>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/asset/big-car-img.png"}
            width={1290}
            height={722}
            alt="product image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
