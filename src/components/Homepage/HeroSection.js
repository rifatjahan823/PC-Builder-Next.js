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
import styles from '@/styles/Home.module.css'

const HeroSection = () => {
  return (
    <div className="w-full mx-auto px-5 grid grid-cols-5 gap-4 mt-5">
      {/* -----------Main Slider-------------- */}
      <div className="col-span-3 bg-white shadow-md pb-8 relative">
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
              className="w-full h-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={slide2} alt="Picture of the author"  className="w-full h-96"/>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={slide3} alt="Picture of the author"  className="w-full h-96"/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>

      </div>
    </div>
  );
};

export default HeroSection;
