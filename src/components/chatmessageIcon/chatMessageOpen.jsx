import Logo from "../../../public/TopnavLogo.png";
import { FaFacebookF, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ChatMessageOpen() {
  return (
    <div className="fixed z-50 select-none bottom-10 right-32">
      <div className="grid w-full gap-2 px-10 py-5 bg-gray-50 ">
        <div>
          <img src={Logo} alt="logo" className="w-20 h-auto" />
        </div>
        <div>
          <h1>Nuestras redes sociales</h1>
          <ul className="mt-5 ">
            <li className="flex items-center gap-2 px-2 py-4 hover:bg-gray-100">
              <FaFacebookF />
              <p>Facebook</p>
            </li>
            <li className="flex items-center gap-2 px-2 py-4 hover:bg-gray-100 ">
              <FaTiktok />
              <p>TikTok</p>
            </li>
            <li className="flex items-center gap-2 px-2 py-4 hover:bg-gray-100">
              <FaInstagram />
              <p>Instagram</p>
            </li>
            <li className="flex items-center gap-2 px-2 py-4 hover:bg-gray-100">
              <FaWhatsapp />
              <p>Whatsapp</p>
            </li>
          </ul>
        </div>
        <div className="bg-white"></div>
      </div>
    </div>
  );
}
