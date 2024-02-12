import TestimonialsItem from "./testimonialsItem";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function TestimonialCarousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <TestimonialsItem />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem />
      </SwiperSlide>
    </Swiper>
  );
}
