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
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <TestimonialsItem
          color="#DC4242"
          TestomialImage={"someurl"}
          category={"Networker"}
          name={"Jimmy Garcia"}
          testimonial=" “Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus fucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus paucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus arcu libero pellentesque vitae
                  dignissim...”"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem
          color="#EDCA21"
          testimonial=" “Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus fucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus paucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus arcu libero pellentesque vitae
                  dignissim...”"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem
          color="black"
          testimonial=" “Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus fucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus paucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus arcu libero pellentesque vitae
                  dignissim...”"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem
          color="#DC4242"
          testimonial=" “Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus fucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus pucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus paucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus psum dolor sit amet consectetur. Ullamcorper elementum
                  risus faucibus faucibus arcu libero pellentesque vitae
                  dignissim...”"
        />
      </SwiperSlide>
    </Swiper>
  );
}
