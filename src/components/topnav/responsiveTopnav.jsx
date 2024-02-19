import { FaWhatsapp } from "react-icons/fa";
import TopnavContact from "./topnavContact";
import TopnavItem from "./topnavItem";
import TopnavLogoSrc from "../../../public/TopnavLogo2.png";

export default function ResponsiveTopnav({ isOpen, handleClose }) {
  return (
    <div
      className={`${
        isOpen ? "-translate-x-[15rem] " : "-translate-x-[120%]"
      } z-40 w-full  text-xl bg-black backdrop-blur-2xl  transition duration-700 fixed   flex-col items-center justify-center hidden  max-lg:flex h-[100vh] top-0 left-0 border-2 border-black px-5`}
    >
      <div className="flex flex-col items-center justify-between h-full py-20">
        <div className="px-32">
          <img
            src={TopnavLogoSrc}
            alt="NuevamenteLogo"
            className="w-48 h-auto m-auto "
          />
        </div>

        <div>
          <ul className="flex flex-col justify-around text-xl text-left h-[30vh]">
            <TopnavItem
              href="#Inicio"
              label="Inicio"
              handleClose={handleClose}
            />
            <TopnavItem
              href="#Servicios"
              label="Servicios"
              handleClose={handleClose}
            />
            <TopnavItem
              href="#Testimonios"
              label="Testimonios"
              handleClose={handleClose}
            />
            <TopnavContact />
          </ul>
        </div>
        <div
          className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm max-lg:flex flex items-center gap-3 justify-center"
          onClick={handleClose}
        >
          <p>Contáctanos</p>
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
}
