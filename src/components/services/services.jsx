import { FaChevronRight } from "react-icons/fa6";
import ServiceSlider from "./serviceSlider";
export default function Services() {
  return (
    <div
      className="w-[80%] max-w-[1500px] m-auto pt-40 pb-20  grid gap-10"
      id="Servicios"
    >
      <div className="flex items-center gap-3">
        <div className="text-[#DC4242] ">
          <FaChevronRight size={55} />
        </div>
        <div className="grid gap-5">
          <h1 className="text-6xl">Servicios</h1>
          <p className="text-md garde_ghotic_semibold">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <ServiceSlider />
    </div>
  );
}
