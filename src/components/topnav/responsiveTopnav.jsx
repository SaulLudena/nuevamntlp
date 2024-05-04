import { FaWhatsapp } from "react-icons/fa";
import TopnavContact from "./topnavContact";
import TopnavItem from "./topnavItem";
import TopnavLogoSrc from "../../../public/important_images/TopnavLogo2.png";

export default function ResponsiveTopnav({ isOpen, handleOpen }) {
  const handleItemClick = () => {
    handleOpen();
  };
  const elementos = [
    { href: "/#Inicio", label: "Inicio" },
    { href: "/#Servicios", label: "Servicios" },
    { href: "/#Testimonios", label: "Testimonios" },
  ];

  return (
    <div
      className={`${
        isOpen ? "-translate-x-20 max-md:-translate-x-0" : "-translate-x-[120%]"
      }  w-[80%]  text-xl bg-black backdrop-blur-2xl  transition duration-700 fixed z-50  flex-col items-center justify-start hidden  max-lg:flex h-[100vh] top-0 left-0 border-2 border-black `}
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
            {elementos.map((elemento, index) => (
              <TopnavItem
                key={index}
                href={elemento.href}
                label={elemento.label}
                onClick={handleItemClick}
              />
            ))}
            <TopnavContact />
          </ul>
        </div>
        <div className="flex w-[50%] ">
          <a
            className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm max-lg:flex flex items-center gap-3 justify-center "
            href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
            target="_blank"
            rel="noreferrer"
          >
            <p>Contáctanos</p>
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
