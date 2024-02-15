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

  const handleItemClick = (index) => {
    setElementoSeleccionado(index);
  };
  const iconSize = 30;
  const items = [
    {
      to: "/",
      label: "Diseño Gráfico",
      icon: <SiMaterialdesignicons size={iconSize} />,
    },
    {
      to: "/",
      label: "Diseño Web",
      icon: <MdComputer size={iconSize} />,
    },
    {
      to: "/",
      label: "Diseño de Apps",
      icon: <LuMonitorSmartphone size={iconSize} />,
    },
    {
      to: "/",
      label: "Fotografía",
      icon: <FaCamera size={iconSize} />,
    },
    {
      to: "/",
      label: "Video",
      icon: <FaVideo size={iconSize} />,
    },
    {
      to: "/",
      label: "Redes Sociales",
      icon: <RiTeamFill size={iconSize} />,
    },
    {
      to: "/",
      label: "Estrategia de Ventas",
      icon: <MdStars size={iconSize} />,
    },
    {
      to: "/",
      label: "Desarrollo de Marca",
      icon: <FaBox size={iconSize} />,
    },
    {
      to: "/",
      label: "Capacitación",
      icon: <AiOutlineTeam size={iconSize} />,
    },
  ];

  return (
    <>
      <div className="bg-[#130202] w-full h-full relative flex items-center justify-center">
        <img src={bloque2} alt="" className="w-full h-[50rem] object-cover" />
        <div className="absolute w-full h-full pt-32 pb-20 border-2 border-black">
          <div className="w-[80%] max-w-[1500px] m-auto grid gap-10">
            <div className="grid justify-center w-full">
              <img src={TopnavLogo2} alt="" className="w-[40rem]" />
            </div>
            <div className="w-[50rem] text-center m-auto">
              <p className="text-center text-white garde_ghotic_semibold ">
                Somos una agencia creativa, con más de 5 años en el mercado,
                especializada en generar CREATIVIDAD e INNOVACIÓN para la venta
                directa multinivel. Brindamos los siguientes servicios:
              </p>
            </div>
            <ul className="grid grid-cols-3 grid-rows-3 gap-5">
              {items.map((item, index) => (
                <PresentationComplementItem
                  key={index}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                  onClick={() => handleItemClick(index)}
                  isSelected={index === elementoSeleccionado}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Aboutus />
      <Services />
    </>
  );
}
