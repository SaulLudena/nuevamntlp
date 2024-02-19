import { FaChevronRight } from "react-icons/fa6";
import ServiceSlider from "./serviceSlider";
export default function Services({ index, mostradoEnSlide }) {
  return (
    <div
      className="w-[80%] max-w-[1500px] m-auto pt-32 pb-20  grid "
      id="Servicios"
    >
      <div className="flex items-center gap-3">
        <div className="text-[#DC4242] ">
          <FaChevronRight className="text-5xl max-sm:text-5xl" />
        </div>
        <div className="grid gap-5 max-sm:gap-2">
          <h1 className="text-6xl max-lg:text-4xl">Servicios</h1>
          <p className="text-md garde_ghotic_semibold max-lg:text-sm max-sm:w-[12rem]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <ServiceSlider index={index} mostradoEnSlide={mostradoEnSlide} />
    </div>
  );
}
