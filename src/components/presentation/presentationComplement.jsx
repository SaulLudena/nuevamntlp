import { useState } from "react";
import PresentationComplementItem from "./presentationComplementItem";
import TopnavLogo2 from "../../../public/TopnavLogo2.png";
import bloque2 from "../../../public/bloque2.png";
import Aboutus from "../aboutus/aboutus";
import Services from "../services/services";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdStars } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

export default function PresentationComplement() {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);
  const [mostradoEnSlide, setMostradoEnSlide] = useState(1);
  const [presentationItemIndex, setPresentationItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setElementoSeleccionado(index);
  };
  const handleShowIndex = (index, showedInSlide) => {
    setPresentationItemIndex(index);
    setMostradoEnSlide(showedInSlide);
  };
  const iconSize = 30;
  const items = [
    {
      id: 0,
      to: "/",
      label: "Diseño Gráfico",
      icon: <SiMaterialdesignicons size={iconSize} />,
      showedInSlide: 0,
    },
    {
      id: 1,
      to: "/",
      label: "Redes Sociales",
      icon: <MdComputer size={iconSize} />,
      showedInSlide: 0,
    },
    {
      id: 2,
      to: "/",
      label: "Desarrollo de Páginas Web",
      icon: <LuMonitorSmartphone size={iconSize} />,
      showedInSlide: 0,
    },
    {
      id: 3,
      to: "/",
      label: "Coaching de Marca Personal",
      icon: <FaCamera size={iconSize} />,
      showedInSlide: 1,
    },
    {
      id: 4,
      to: "/",
      label: "Creación de Logos",
      icon: <FaVideo size={iconSize} />,
      showedInSlide: 1,
    },
    {
      id: 5,
      to: "/",
      label: "Fotografía",
      icon: <RiTeamFill size={iconSize} />,
      showedInSlide: 1,
    },
    {
      id: 6,
      to: "/",
      label: "Videgrafía",
      icon: <MdStars size={iconSize} />,
      showedInSlide: 2,
    },
    {
      id: 7,
      to: "/",
      label: "Imagen corporativa",
      icon: <FaBox size={iconSize} />,
      showedInSlide: 2,
    },
    {
      id: 8,
      to: "/",
      label: "Packaing",
      icon: <AiOutlineTeam size={iconSize} />,
      showedInSlide: 2,
    },
  ];

  return (
    <>
      <div className="bg-[#130202] w-full h-full relative flex items-center justify-center">
        <img
          src={bloque2}
          alt=""
          className="w-full h-[50rem] object-cover max-xl:h-[60rem] max-lg:h-[85rem]"
        />
        <div className="absolute w-full h-full pt-32 pb-20 ">
          <div className="w-[80%] max-w-[1500px] m-auto grid gap-10 ">
            <div className="grid justify-center w-full">
              <img
                src={TopnavLogo2}
                alt=""
                className="w-[500px] max-lg:w-[400px] "
              />
            </div>
            <div className="m-auto text-center ">
              <p className="text-center text-white garde_ghotic_semibold ">
                Somos una agencia creativa, con más de 5 años en el mercado,
                especializada en generar CREATIVIDAD e INNOVACIÓN para la venta
                directa multinivel. Brindamos los siguientes servicios:
              </p>
            </div>
            <ul className="grid grid-cols-3 grid-rows-3 gap-5 max-xl:grid-cols-2 max-lg:grid-cols-1 ">
              {items.map((item, index) => (
                <PresentationComplementItem
                  key={index}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                  onClick={() => handleItemClick(index)}
                  isSelected={index === elementoSeleccionado}
                  onShowIndex={() => handleShowIndex(index, item.showedInSlide)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Aboutus />
      <Services
        index={presentationItemIndex}
        mostradoEnSlide={mostradoEnSlide}
      />
    </>
  );
}
