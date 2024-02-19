export default function ServiceSliderItem({ selected, label, icon }) {
  return (
    <li
      className={`w-full border-4 flex items-center cursor-pointer  ${
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
        <p className="text-left text-black text-ellipsis">{label}</p>
      </div>
    </li>
  );
}
