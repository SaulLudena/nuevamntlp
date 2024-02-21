import { FaWhatsapp } from "react-icons/fa";
import TopnavContact from "./topnavContact";
import TopnavItem from "./topnavItem";
import TopnavLogoSrc from "../../../public/TopnavLogo2.png";

export default function ResponsiveTopnav({ isOpen, handleClose }) {
  return (
    <div
      className={`${
        isOpen ? "-translate-x-20 max-md:-translate-x-0" : "-translate-x-[120%]"
      } z-40 w-[80%]  text-xl bg-black backdrop-blur-2xl  transition duration-700 fixed   flex-col items-center justify-start hidden  max-lg:flex h-[100vh] top-0 left-0 border-2 border-black `}
    >
      <div className="flex flex-col items-center justify-between w-full h-full py-20">
        <div className="">
          <img
            src={TopnavLogoSrc}
            alt="NuevamenteLogo"
            className="w-48 h-auto m-auto max-md:w-[90%]"
          />
        </div>

        <div className="w-[50%]">
          <ul className="flex flex-col justify-around w-full gap-5 text-xl text-left">
            <TopnavItem
              href="#Inicio"
              label="Inicio"
              onItemClick={handleClose}
            />
            <TopnavItem
              href="#Servicios"
              label="Servicios"
              onItemClick={handleClose}
            />
            <TopnavItem
              href="#Testimonios"
              label="Testimonios"
              onItemClick={handleClose}
            />
            <TopnavContact />
          </ul>
        </div>
        <div className="flex w-[50%] ">
          <div
            className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm max-lg:flex flex items-center gap-3 justify-center "
            onClick={handleClose}
          >
            <p>Contáctanos</p>
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}
