import { FaArrowRight } from "react-icons/fa";
export default function PresentationComplementItem({
  label,
  icon,
  onClick,
  isSelected,
  index,
  onShowIndex,
}) {
  const showIndex = () => {
    onShowIndex();
  };
  return (
    <li onClick={showIndex} className="w-full ">
      <a
        href="#Servicios"
        onClick={onClick}
        className={`border-4 flex w-full items-center ${
          isSelected ? "border-[#dc4242]" : "border-[#EDCA21]"
        } sm:w-auto md:w-auto lg:w-auto xl:w-auto`}
      >
        <div
          className={`${
            isSelected ? "bg-[#dc4242]" : "bg-[#EDCA21]"
          } text-black p-5`}
        >
          {icon}
        </div>
        <div className="flex items-center justify-between w-full px-4">
          <p className="text-white max-sm:text-sm">{label}</p>
          <div className={isSelected ? "text-[#dc4242]" : "text-[#EDCA21]"}>
            <FaArrowRight />
          </div>
        </div>
      </a>
    </li>
  );
}
