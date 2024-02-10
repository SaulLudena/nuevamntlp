import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
export default function PresentationComplementItem({ to, label, icon }) {
  return (
    <li>
      <a href={to} className="border-4 border-[#EDCA21] flex items-center">
        <div className="bg-[#EDCA21] text-black p-5">{icon}</div>
        <div className="flex items-center justify-between w-full px-4">
          <p className="text-white">{label}</p>
          <div className="text-[#EDCA21] ">
            <FaArrowRight />
          </div>
        </div>
      </a>
    </li>
  );
}
