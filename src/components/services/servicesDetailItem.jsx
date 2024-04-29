import { FaWhatsapp } from "react-icons/fa";

import TestImage from "../../../public/test_image.jpg";
import { Fragment, useEffect, useState } from "react";

import ServicesDetailItemModal from "./servicesDetailItemModal";
import { Dialog, Transition } from "@headlessui/react";

export default function ServicesDetailItem({ servicessliderItem }) {
  const { title, paragraph1, include, images } = servicessliderItem;
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function openModal3() {
    setIsOpen3(true);
  }
  /*max-xl:gap-20 */
  useEffect(() => {
    // Función para deshabilitar el scroll cuando el modal se abre
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    // Función para habilitar el scroll cuando el modal se cierra
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    // Agregar evento al abrir el modal
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Limpiar el efecto al desmontar el componente
    return () => {
      enableScroll(); // Asegúrate de habilitar el scroll al desmontar el componente
    };
  }, [isOpen, isOpen2, isOpen3]);
  return (
    <>
      <div
        className="grid grid-cols-12  max-xl:flex max-2xl:flex-col w-full max-w-[2800px] m-auto h-auto md:h-full "
        id="detail"
      >
        <div className="grid items-center col-span-6 w-[80%] max-w-[1500px] m-auto max-xl:h-[45rem] max-md:h-[40rem] max-sm:h-[48rem] max-sm:items-start">
          <div className="grid px-10 gap-7 max-md:px-0">
            <h1 className="text-5xl text-[#DC4242] max-md:text-4xl">{title}</h1>
            <p className="garde_ghotic_semibold max-md:text-sm">{paragraph1}</p>

            <ul className="grid gap-3">
              {include?.map((item, index) => (
                <li
                  key={index}
                  className="garde_ghotic_semibold max-md:text-sm"
                >
                  <span className="">
                    <p className="font-bold">• {item.title}:</p>
                    <p className=""> {item.description}</p>
                  </span>
                </li>
              ))}
            </ul>
            <div className="w-full h-[2px] bg-[#DC4242] "></div>
            <div className="flex items-center justify-center gap-10">
              <p
                className="text-5xl better_yesterday "
                onClick={() => {
                  openModal();
                }}
              >
                ¿Lo quieres?
              </p>
              <div className="text-center ">
                <a
                  href={`https://api.whatsapp.com/send?phone=+573014000000&text=Hola,%20me%20interesa%20el%20servicio%20de%20${title}%20me%20gustaria%20saber%20mas`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm flex items-center gap-3 justify-center"
                >
                  <p>Contáctanos</p>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6  max-xl:w-[100%] w-[100%] max-w-[1500px] m-auto grid grid-cols-6">
          <div className="col-span-6 ">
            {servicessliderItem.title === "Videografía" ? (
              <>
                <img
                  src={images[0].image1}
                  alt={images[0].image1}
                  className="cursor-pointer"
                  onClick={openModal}
                />
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div
                      className="fixed inset-0 overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <iframe
                              width="100%"
                              height="315"
                              src={
                                servicessliderItem.videos
                                  ? servicessliderItem.videos[0].video_1
                                  : ""
                              }
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            ) : (
              <>
                {images[0].image1 !== undefined ? (
                  <img src={images[0].image1} alt={images[0].image1} />
                ) : (
                  <img src={TestImage} alt={images[0].image1} />
                )}
              </>
            )}
          </div>
          <div className="col-span-3 max-md:col-span-6">
            {servicessliderItem.title === "Videografía" ? (
              <>
                <img
                  src={images[1].image2}
                  alt={images[1].image2}
                  className="cursor-pointer"
                  onClick={openModal2}
                />
                <Transition appear show={isOpen2} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => {
                      setIsOpen2(false);
                    }}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div
                      className="fixed inset-0 overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <iframe
                              width="100%"
                              height="315"
                              src={
                                servicessliderItem.videos
                                  ? servicessliderItem.videos[0].video_2
                                  : ""
                              }
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              onClick={(e) => e.stopPropagation()}
                            ></iframe>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            ) : (
              <>
                {images[1].image2 !== undefined ? (
                  <img src={images[1].image2} alt={images[0].image1} />
                ) : (
                  <img src={TestImage} alt={images[0].image1} />
                )}
              </>
            )}
          </div>
          <div className="col-span-3 max-md:col-span-6">
            {servicessliderItem.title === "Videografía" ? (
              <>
                <img
                  src={images[2].image3}
                  alt={images[2].image3}
                  className="cursor-pointer"
                  onClick={openModal3}
                />
                <Transition show={isOpen3} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => {
                      setIsOpen3(false);
                    }}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <iframe
                              width="100%"
                              height="315"
                              src={
                                servicessliderItem.videos
                                  ? servicessliderItem.videos[0].video_3
                                  : ""
                              }
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              onClick={(e) => e.stopPropagation()}
                            ></iframe>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            ) : (
              <>
                {images[2].image3 !== undefined ? (
                  <img src={images[2].image3} alt={images[0].image1} />
                ) : (
                  <img src={TestImage} alt={images[0].image1} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
