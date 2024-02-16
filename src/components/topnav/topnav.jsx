import React from "react";
import TopnavItem from "./topnavItem";
import TopnavLogo from "./topnavLogo";
import TopnavContact from "./topnavContact";
import ResponsiveTopnav from "./responsiveTopnav";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Topnav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = React.useState(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index) => {
    setElementoSeleccionado(index);
    handleOpen();
  };
  const handleClose = () => {
    console.log("cerrado");
    setIsOpen(true);
  };

  const elementos = [
    { href: "#Inicio", label: "Inicio" },
    { href: "#Servicios", label: "Servicios" },
    { href: "#Testimonios", label: "Testimonios" },
  ];

  return (
    <div className="fixed z-40 w-full px-10 py-3 text-xl bg-black ">
      <div className="flex items-center justify-between ">
        <TopnavLogo />
        <div>
          <ul className="flex items-center gap-5 text-xl max-lg:hidden">
            {elementos.map((elemento, index) => (
              <TopnavItem
                key={index}
                href={elemento.href}
                label={elemento.label}
                onClick={() => handleItemClick(index)}
                isSelected={index === elementoSeleccionado}
              />
            ))}
            <TopnavContact />
          </ul>
        </div>

        <div className="hidden max-lg:flex">
          <div
            className="fixed z-50 p-3 text-white transition duration-500 bg-black shadow-xl cursor-pointer select-none rounded-xl top-2 right-10"
            onClick={handleOpen}
          >
            {isOpen ? <IoClose size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>
      <ResponsiveTopnav isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}
