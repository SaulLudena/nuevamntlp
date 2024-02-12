import { Fragment, useRef } from "react";
import ServiceSliderItem from "./serviceSliderItem";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Tab } from "@headlessui/react";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdStars } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import collageImagen1 from "../../../public/collage_1.png";
import ServicesDetailItem from "./servicesDetailItem";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function ServiceSlider() {
  const containerRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 450;
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 450;
    }
  };
  return (
    <>
      <div className="flex justify-center gap-3 ">
        <div
          className="bg-[#EDCA21] p-3  cursor-pointer select-none"
          onClick={handlePrevious}
        >
          <FaAngleLeft />
        </div>
        <div
          className="bg-[#EDCA21] p-3 cursor-pointer select-none"
          onClick={handleNext}
        >
          <FaAngleRight />
        </div>
      </div>
      <Tab.Group>
        <Tab.List
          className="flex gap-5 overflow-x-hidden transition-transform duration-300 ease-in-out "
          ref={containerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Diseño gráfico"
                  icon={<SiMaterialdesignicons size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Redes sociales"
                  icon={<LuMonitorSmartphone size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Desarrollo de Páginas web"
                  icon={<MdComputer size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Coaching de Marca Personal"
                  icon={<RiTeamFill size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Creación de Logos"
                  icon={<MdStars size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Fotografía"
                  icon={<FaCamera size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Videografía"
                  icon={<FaVideo size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Imagen corporativa"
                  icon={<AiOutlineTeam size={30} />}
                />
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="outline-none">
                <ServiceSliderItem
                  selected={selected}
                  label="Packaing"
                  icon={<FaBox size={30} />}
                />
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ServicesDetailItem collageImagen1={collageImagen1} />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem collageImagen1={collageImagen1} />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem collageImagen1={collageImagen1} />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem collageImagen1={collageImagen1} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/*
	      <Tab.Group>
        <Tab.List className="flex overflow-x-hidden transition-transform duration-300 ease-in-out ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            navigation
            pagination
            slidesPerView={3}
          >
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Diseño gráfico"
                      icon={<SiMaterialdesignicons size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Diseño gráfico"
                      icon={<SiMaterialdesignicons size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Diseño gráfico"
                      icon={<SiMaterialdesignicons size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Diseño gráfico"
                      icon={<SiMaterialdesignicons size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
          </Swiper>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <p>hijo 1</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>hijo 2</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>hijo 3</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
	*/}
    </>
  );
}
