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
      className="absolute z-40 border-2 border-black top-1/2 text-[#DC4242]"
    >
      <GrFormPrevious size={110} />
    </div>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 border-2 border-black top-1/2 text-[#DC4242]"
    >
      <MdNavigateNext size={110} />
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
