import TeamMemberItem from "./teamMemberItem";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default function OurteamSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <TeamMemberItem color="#DC4242" />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberItem color="#DC4242" />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberItem color="#DC4242" />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberItem color="#DC4242" />
      </SwiperSlide>
      <SwiperSlide>
        <TeamMemberItem color="#DC4242" />
      </SwiperSlide>
    </Swiper>
  );
}
