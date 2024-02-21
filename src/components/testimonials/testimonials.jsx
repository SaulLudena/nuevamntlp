import { FaChevronRight } from "react-icons/fa";
import TestimonialCarousel from "./testomonialCarousel";
import OurClients from "./ourClients";

export default function Testimonials() {
  return (
    <>
      <div
        className="w-[80%] max-w-[1500px] pt-32  m-auto grid "
        id="Testimonios"
      >
        <div className="flex items-center gap-3">
          <div className="text-[#DC4242] ">
            <FaChevronRight className="text-5xl max-sm:text-5xl" />
          </div>
          <div className="grid gap-5">
            <h1 className="text-6xl max-lg:text-4xl">Testimonios</h1>
            <p className="text-md garde_ghotic_semibold max-lg:text-sm max-sm:w-[12rem]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] max-sm:w-[100%] max-w-[1500px] m-auto">
        <TestimonialCarousel />
      </div>
      <div className="w-[80%] max-w-[1500px] m-auto  grid gap-10 mt-20">
        <OurClients />
      </div>
    </>
  );
}
