import React from "react";

export default function TopnavItem({ href, label, onClick, isSelected }) {
  return (
    <li>
      <a
        href={href}
        className={`grid justify-start px-5 py-2 text-sm text-center transition duration-200 ${
          isSelected ? "text-[#F3CF00]" : "text-white"
        }`}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
}
