import { HashLink as Link } from "react-router-hash-link";
export default function TopnavItem({ href, label, onClick, isSelected }) {
  const handleItemClick = () => {
    onClick();
  };
  return (
    <li onClick={handleItemClick}>
      <Link
        to={href}
        className={`grid justify-start px-5 py-2 text-sm text-center transition duration-200 garde_ghotic_semibold hover:text-[#F3CF00] text-white ${
          isSelected ? "text-[#F3CF00]" : "text-white"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
