import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
export default function PresentationComplementItem({
  label,
  icon,
  onClick,
  isSelected,
}) {
  return (
    <li>
      <a
        href="#Servicios"
        onClick={onClick}
        className={` border-4  flex items-center$ ${
          isSelected ? "border-[#dc4242]" : "border-[#EDCA21]"
        }`}
      >
        <div
          className={`${
            isSelected ? "bg-[#dc4242]" : "bg-[#EDCA21]"
          } text-black p-5`}
        >
          {icon}
        </div>
        <div className="flex items-center justify-between w-full px-4">
          <p className="text-white">{label}</p>
          <div className={isSelected ? "text-[#dc4242]" : "text-[#EDCA21]"}>
            <FaArrowRight />
          </div>
        </div>
      </a>
    </li>
  );
}
