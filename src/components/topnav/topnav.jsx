import TopnavLogo from "./topnavLogo";
import TopnavItem from "./topnavItem";
import React from "react";
import TopnavContact from "./topnavContact";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ResponsiveTopnav from "./responsiveTopnav";

export default function Topnav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="fixed z-40 w-full px-10 py-5 text-xl bg-black ">
      <div className="flex items-center justify-between ">
        <TopnavLogo />
        <div>
          <ul className="flex items-center gap-5 text-xl max-lg:hidden">
            <TopnavItem href="#Inicio" label="Inicio" />
            <TopnavItem href="#Servicios" label="Servicios" />
            <TopnavItem href="#Testimonios" label="Testimonios" />

            <TopnavContact />
          </ul>
        </div>

        <div className="hidden max-lg:flex">
          <div
            className="p-3 rounded-xl bg-[#F3CF00] shadow-xl cursor-pointer fixed top-8 right-10 z-50 transition duration-500 select-none"
            onClick={() => {
              handleOpen();
            }}
          >
            {isOpen ? <IoClose size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>
      <ResponsiveTopnav isOpen={isOpen} />
    </div>
  );
}
