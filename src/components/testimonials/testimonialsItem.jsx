import { useState } from "react";
import TestimonialImg from "../../../public/testimonials/testimonialAuthor1.png";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
export default function TestimonialsItem({
  color,
  TestomialImage,
  category,
  name,
  testimonial,
}) {
  console.log(testimonial);
  const [toggleText, setToggleText] = useState(false);
  const shortTestimonial = testimonial.split(" ").slice(0, 40).join(" ");

  const backgroundColorClass =
    color === "#DC4242"
      ? "bg-[#DC4242] text-white"
      : color === "#EDCA21"
      ? "bg-[#EDCA21] text-black"
      : color === "black"
      ? "bg-black text-white"
      : "bg-[#DC4242] text-white";
  const toggleTextHandler = () => {
    setToggleText(!toggleText);
  };
  return (
    <div className=" w-[90%] max-w-[1500px] m-auto max-sm:w-[100%] ">
      <div className="grid grid-cols-12 p-10 max-lg:flex max-lg:flex-col max-sm:px-0 max-sm:pt-10">
        <div className="flex justify-end col-span-5">
          <img
            src={TestimonialImg}
            alt=""
            className="object-cover max-sm:object-top max-md:object-center object-top   w-96 max-lg:w-full max-lg:h-[37rem] max-sm:h-[20rem] max-sm:w-full "
          />
        </div>
        <div className="grid items-center col-span-7 py-10 max-lg:py-0">
          <div
            className={`grid items-center  col-span-7 py-10   h-full ${backgroundColorClass} p-10 max-sm:p-6 grid gap-0 max-xl:gap-5`}
          >
            <div>
              <p className="mb-4 text-2xl max-sm:text-sm">{category}</p>
              <h1 className="text-5xl max-sm:text-3xl">{name}</h1>
            </div>
            <div className="w-full h-[0.5px] bg-white "></div>
            <div className="w-full ">
              <p className="garde_ghotic_semibold max-sm:text-md max-sm:hidden">
                {testimonial}
              </p>
              <div className="hidden max-sm:block">
                <p className=" garde_ghotic_semibold max-sm:text-md">
                  {toggleText ? testimonial : shortTestimonial + "..."}
                </p>
                {testimonial.split(" ").length > 40 ? (
                  <div
                    className="grid justify-center py-3 cursor-pointer "
                    onClick={() => {
                      toggleTextHandler();
                    }}
                  >
                    {toggleText ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
