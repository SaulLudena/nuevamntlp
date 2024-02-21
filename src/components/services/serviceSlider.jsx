import { Fragment, useEffect, useRef, useState } from "react";
import ServiceSliderItem from "./serviceSliderItem";
import { Tab } from "@headlessui/react";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { AiOutlineTeam } from "react-icons/ai";
import { MdComputer, MdStars } from "react-icons/md";
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
import "swiper/css/effect-fade";

export default function ServiceSlider({ index, mostradoEnSlide }) {
  const swiperRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(index);

  useEffect(() => {
    setSelectedIndex(index);

    // Al cambiar la prop initialSlide, ajusta el slide actual
    if (swiperRef.current && swiperRef.current.swiper) {
      const slidesPerView = swiperRef.current.swiper.params.slidesPerView;

      // Calcula el índice del slide según la cantidad de elementos por slide
      const adjustedIndex = Math.floor(index / slidesPerView) * slidesPerView;

      swiperRef.current.swiper.slideTo(adjustedIndex);
    }
  }, [index]);

  const handleTabChange = (newIndex) => {
    setSelectedIndex(newIndex);
  };
  return (
    <>
      <Tab.Group selectedIndex={selectedIndex} onChange={handleTabChange}>
        <Tab.List className="flex mb-10 overflow-x-hidden transition-transform duration-300 ease-in-out w-[80%] max-w-[1500px] m-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={90}
            slidesPerView={3}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            ref={swiperRef}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 90,
                navigation: false,
              },
              740: {
                slidesPerView: 1,
                spaceBetween: 90,
                navigation: false,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 90,
                navigation: true,
              },
              1380: {
                slidesPerView: 3,
                spaceBetween: 90,
                navigation: true,
              },
            }}
            className="px-20 pt-10 pb-14 max-md:px-10 max-sm:px-0"
          >
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
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
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Redes sociales"
                      icon={<LuMonitorSmartphone size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Desarrollo de Páginas web"
                      icon={<MdComputer size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Coaching de Marca Personal"
                      icon={<RiTeamFill size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Creación de logos"
                      icon={<MdStars size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Fotografía"
                      icon={<FaCamera size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Videografía"
                      icon={<FaVideo size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Imagen corporativa"
                      icon={<AiOutlineTeam size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Packaing"
                      icon={<FaBox size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <div className="swiper-pagination "></div>
          </Swiper>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Diseño grafico"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Redes sociales"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Desarrollo de Páginas web"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Coaching de Marca Personal"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Creación de logos"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Fotografía"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Videografía"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Imagen corporativa"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ServicesDetailItem
              collageImagen1={collageImagen1}
              title="Packaing"
              paragraph1="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros."
              paragraph2="Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros Diseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otrosDiseño de logotipos, tarjetas de presentación, flyers, banners, publicaciones para redes sociales, entre otros"
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
