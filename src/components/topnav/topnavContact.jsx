import { FaWhatsapp } from "react-icons/fa";

export default function TopnavContact() {
  return (
    <div className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white max-lg:hidden flex items-center gap-3 justify-center">
      <p>Contáctanos</p>
      <FaWhatsapp />
    </div>
  );
}
