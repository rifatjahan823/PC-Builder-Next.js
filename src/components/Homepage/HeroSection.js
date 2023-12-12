// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import slide1 from "@/assets/slider-1.jpeg";
import slide2 from "@/assets/slider-2.jpeg";
import slide3 from "@/assets/slider-3.jpeg";
import rightimg1 from "@/assets/right-slide-1.jpg";
import rightimg2 from "@/assets/right-slide-2.jpeg";
import styles from "@/styles/Home.module.css";

const HeroSection = () => {
  return (
    <div className="w-full mx-auto px-5 grid lg:grid-cols-5 grid-cols-1 gap-4 mt-5 ">
      {/* -----------Main Slider-------------- */}
      <div className="lg:col-span-3 bg-white shadow-md pb-8 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className={`${styles.mySwiper} ${styles.mySwiperPagination}`}
          centeredSlides={true}
        >
          <SwiperSlide>
            {" "}
            <Image
              src={slide1}
              alt="Picture of the author"
              className="w-full h-[500px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slide2}
              alt="Picture of the author"
              className="w-full h-[500px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slide3}
              alt="Picture of the author"
              className="w-full h-[500px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* -------------right-side------------ */}
      <div className="lg:col-span-2">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-none">
          <Image src={rightimg1} alt="" className="w-full lg:h-[266px] h-[200px]" />
          <Image
            src={rightimg2}
            alt=""
            className="w-full lg:h-[266px] h-[200px] lg:shadow-md lg:pb-8 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
