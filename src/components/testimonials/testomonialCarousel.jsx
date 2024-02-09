import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsItem from "./testimonialsItem";

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[80%] w-max-[1500px] m-auto slider-container h-[150px] ">
      <Slider {...settings}>
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
      </Slider>
    </div>
  );
}
