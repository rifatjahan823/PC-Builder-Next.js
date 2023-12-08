// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import slide1 from '@/assets/slider-1.jpeg'

const HeroSection = () => {
  return (
    <div className="w-full mx-auto px-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mySwiper"
        centeredSlides={true}
      >
        <SwiperSlide>
          {" "}
          <Image
            src={slide1}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
