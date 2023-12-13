import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Keyboard, Navigation } from "swiper/modules";

const SwiperSingle = ({ data }) => {
  console.log(data);
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
      {data &&
        data.map((item, index) => (
          <SwiperSlide className="Totooooo">
            <ProductCard
              key={item._id}
              id={item._id}
              imageUrl={item.images[0]}
              EndTime={"6:00:00"}
              CurrentPrice={item.currentBidPrice}
              numberOfBids={item.numberOfBids}
              title={item.title}
              description={item.description}
              driveMode={item.lhdOrRhdDrive}
              numberOfMiles={item.numberOfMiles}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSingle;
