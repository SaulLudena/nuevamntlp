import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsItem from "./testimonialsItem";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute z-40 top-1/2 text-[#DC4242] -translate-x-32"
    >
      <GrFormPrevious size={150} />
    </div>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0  top-1/2 text-[#DC4242] translate-x-32 "
    >
      <MdNavigateNext size={210} />
    </div>
  );
}
export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-[80%] w-max-[1500px] m-auto slider-container  ">
      <Slider {...settings}>
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
      </Slider>
    </div>
  );
}
