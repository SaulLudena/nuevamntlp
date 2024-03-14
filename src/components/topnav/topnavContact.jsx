import { FaWhatsapp } from "react-icons/fa";

export default function TopnavContact({ handleClose }) {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
      target="_blank"
      rel="noreferrer"
      className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm max-lg:hidden flex items-center gap-3 justify-center"
      onClick={handleClose}
    >
      <p className="text-lg">Contáctanos</p>
      <FaWhatsapp className="text-2xl max-md:text-xl" />
    </a>
  );
}
