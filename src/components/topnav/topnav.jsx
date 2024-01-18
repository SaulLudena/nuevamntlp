import TopnavLogo from "./topnavLogo";
import TopnavItem from "./topnavItem";
import React from "react";
import TopnavContact from "./topnavContact";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ResponsiveTopnav from "./responsiveTopnav";
export default function Topnav() {
  const [topnavItems, setTopnavItems] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  React.useEffect(() => {
    const fetchingTopnavItems = async () => {
      const response = await fetch("../../../src/data/nuevamenteData.json");
      const { topnavitems } = await response.json();

      setTopnavItems(topnavitems);
    };
    fetchingTopnavItems();
  }, []);
  return (
    <div className="fixed z-40 w-full px-10 py-5 text-xl bg-white/50 backdrop-blur-2xl ">
      <div className="flex items-center justify-between ">
        <TopnavLogo />
        <div>
          <ul className="flex text-xl max-lg:hidden">
            {topnavItems.map((item, index) => {
              return (
                <TopnavItem key={index} href={item.href} label={item.label} />
              );
            })}
          </ul>
        </div>
        <TopnavContact />
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
      <ResponsiveTopnav isOpen={isOpen} topnavItems={topnavItems} />
    </div>
  );
}
