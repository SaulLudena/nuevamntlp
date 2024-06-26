import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
export default function TestimonialsItem({
  color,
  category,
  name,
  testimonial,
  testominalImage,
}) {
  const [toggleText, setToggleText] = useState(false);
  const shortTestimonial = testimonial.split(" ").slice(0, 25).join(" ");

  let backgroundColorClass = "";

  if (color === "#DC4242") {
    backgroundColorClass = "bg-[#DC4242] text-white";
  } else if (color === "#EDCA21") {
    backgroundColorClass = "bg-[#EDCA21] text-black";
  } else if (color === "black") {
    backgroundColorClass = "bg-black text-white";
  } else {
    backgroundColorClass = "bg-[#DC4242] text-white";
  }

  const toggleTextHandler = () => {
    setToggleText(!toggleText);
  };

  return (
    <div className="w-[90%] max-w-[1500px] m-auto max-sm:w-[100%]">
      <div className="grid grid-cols-12 p-10 max-lg:flex max-lg:flex-col max-sm:px-0 max-sm:pt-10">
        <div className="flex justify-end col-span-5">
          <img
            src={testominalImage}
            alt=""
            className="object-cover max-sm:object-top max-md:object-center object-top w-96 max-lg:w-full max-lg:h-[37rem] max-sm:h-[35rem] max-sm:w-full "
          />
        </div>
        <div
          className={
            name === "Kennet Mansilla"
              ? ` py-32 max-lg:py-0 grid  col-span-7`
              : ` py-28 max-lg:py-0 grid col-span-7 items-center`
          }
        >
          <div
            className={` col-span-7 py-10  ${backgroundColorClass} p-10 max-sm:p-6 `}
          >
            <div className="mb-8 max-md:mb-5">
              <p className="mb-4 text-lg max-sm:text-sm ">{category}</p>
              <h1 className="text-5xl max-sm:text-3xl">{name}</h1>
            </div>
            <div
              className={`w-full h-[3px] mb-8 max-md:mb-5 ${
                (color === "black" ? "bg-white" : "bg-black",
                color === "#EDCA21" ? "bg-black" : "bg-white")
              } `}
            ></div>
            <div className="w-full">
              <p className="garde_ghotic_semibold max-sm:text-md max-sm:hidden">
                {testimonial}
              </p>

              <div className="flex-col hidden max-sm:flex">
                <p className="garde_ghotic_semibold max-sm:text-md">
                  {toggleText ? testimonial : shortTestimonial + "..."}
                </p>
                {testimonial.split(" ").length > 25 ? (
                  <div
                    className="grid justify-center py-3 cursor-pointer"
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
