import { FaWhatsapp } from "react-icons/fa";

export default function TopnavContact({ handleClose }) {
  return (
    <div
      className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm max-lg:hidden flex items-center gap-3 justify-center"
      onClick={handleClose}
    >
      <p>Contáctanos</p>
      <FaWhatsapp />
    </div>
  );
}
