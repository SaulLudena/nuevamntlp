import { FaArrowRight } from "react-icons/fa";

export default function ServiceSliderItem({ selected, label, icon }) {
  return (
    <li
      className={`w-[20rem] border-4 flex items-center cursor-pointer ${
        selected ? "border-[#DC4242] " : "border-[#EDCA21] "
      }`}
    >
      <div
        className={`${
          selected ? "bg-[#DC4242]" : "bg-[#EDCA21]"
        } text-black p-4`}
      >
        {icon}
      </div>
      <div className="flex items-center justify-between w-full px-4">
        <p className="text-black">{label}</p>
        <div className={` ${selected ? "text-[#DC4242]" : "text-[#EDCA21]"}`}>
          <FaArrowRight />
        </div>
      </div>
    </li>
  );
}
