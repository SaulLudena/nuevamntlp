import TopnavLogo2 from "../../../public/TopnavLogo2.png";
import Aboutus from "../aboutus/aboutus";
import Services from "../services/services";
import PresentationComplementItem from "./presentationComplementItem";

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
  return (
    <>
      <div className="bg-[#130202] py-32">
        <div className=" w-[80%] max-w-[1500px] m-auto justify-center grid gap-10">
          <div className="grid justify-center w-full ">
            <img src={TopnavLogo2} alt="" />
          </div>
          <p className="text-center text-white ">
            Somos una agencia creativa, con más de 5 años en el mercado,
            especializada en generar CREATIVIDAD e INNOVACIÓN para la venta
            directa multinivel. Brindamos los siguientes servicios:
          </p>
          <ul className="grid grid-cols-3 grid-rows-3 gap-5">
            <PresentationComplementItem
              to="#awd"
              label="Diseño gráfico"
              icon={<SiMaterialdesignicons size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Redes sociales"
              icon={<LuMonitorSmartphone size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Desarrollo de Páginas web"
              icon={<MdComputer size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Coaching de Marca Personal"
              icon={<RiTeamFill size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Creación de Logos"
              icon={<MdStars size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Fotografía"
              icon={<FaCamera size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Videografía"
              icon={<FaVideo size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Imagen corporativa"
              icon={<AiOutlineTeam size={30} />}
            />
            <PresentationComplementItem
              to="#awd"
              label="Packaing"
              icon={<FaBox size={30} />}
            />
          </ul>
        </div>
      </div>
      <Aboutus />
      <Services />
    </>
  );
}
