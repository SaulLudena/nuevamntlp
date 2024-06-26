import { FaChevronRight } from "react-icons/fa6";
import ServiceSlider from "./serviceSlider";
export default function Services({ index, mostradoEnSlide }) {
  return (
    <>
      <div
        className="w-[80%] max-md:w-[100%] max-w-[1500px] m-auto pt-32   grid "
        id="Servicios"
      >
        <div className="flex items-center gap-3 ">
          <div className="text-[#DC4242] ">
            <FaChevronRight className="text-6xl max-sm:text-5xl" />
          </div>
          <div className="grid gap-5 max-sm:gap-2">
            <h1 className="text-6xl max-lg:text-4xl">Servicios</h1>
            <p className="text-md garde_ghotic_semibold max-lg:text-sm max-sm:w-[15rem]">
              Te ofrecemos una amplia gama de servicios para tu desarrollo
            </p>
          </div>
        </div>
      </div>
      <ServiceSlider index={index} mostradoEnSlide={mostradoEnSlide} />
    </>
  );
}
