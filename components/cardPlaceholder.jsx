import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Keyboard, Navigation } from "swiper/modules";
import { Oval } from "react-loader-spinner";

const PlaceholderCard = () => {
  return (
    <div className="bg-white cursor-pointer shadow-t1">
      <div
        className="w-full h-[231px] bg-cover bg-center bg-no-repeat"
        style={{ background: `rgb(218 218 218)` }}
      ></div>
      <div className="relative bottom-[38px] rounded-[50px] shadow-t2 w-[88%] bg-white mx-auto sm:w-[94%]">
        <div
          className={
            "flex justify-center items-center px-[36px] py-[17px] xmd:px-[22px] xmd:py-[14px] sm:px-[16px] sm:py-[11px]"
          }
        >
          <div className="flex justify-between w-full h-[40px]">
            <div className="text-center"></div>
          </div>
        </div>
      </div>

      <div className="flex-col mt-[-20px] justify-center items-center w-[100%] text-center mx-auto sm:w-[94%] sm:mt-[-32px] xmd:mt-[-24px]">
        <div className="w-fit my-[0] mx-auto">
          <Oval
            height={30}
            width={30}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
        <p className="text-grey-title mb-11 h-12 line-clamp-2 xmd:mb-[36px] xmd:h-[42px] sm:h-[38px] sm:text-sm sm:mb-[29px] mt-[20px]">
          Loading
        </p>

        <div className="flex justify-between items-center pb-[29px] xmd:pb-[21px] sm:pb-[16px]"></div>
      </div>
    </div>
  );
};

export default function CardPlaceholderSlider() {
  return (
    <Swiper
      slidesPerView={3.2}
      spaceBetween={24}
      loopedSlides={2}
      centeredSlides={true}
      loop={true}
      navigation={true}
      className="mySwipers !p-[34px_0] xmd:p-5 sm:p-[14px_0_30px]"
      allowTouchMove={true}
      keyboard={{
        enabled: true,
      }}
      followFinger={true}
      modules={[FreeMode, Navigation, Keyboard]}
      breakpoints={{
        1440: {
          slidesPerView: 4.2,
        },
        1280: {
          slidesPerView: 3.2,
        },
        768: {
          slidesPerView: 2.5,
        },
        575: {
          slidesPerView: 1.6,
          spaceBetween: 16,
        },
        420: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        300: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
      }}
    >
      {}
      {[1, 2, 3, 4, 5].map((item, index) => (
        <SwiperSlide>
          <PlaceholderCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
