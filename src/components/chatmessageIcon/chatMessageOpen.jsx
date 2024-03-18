import Logo from "../../../public/TopnavLogo.png";
import { FaFacebookF, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
export default function ChatMessageOpen() {
  return (
    <div className="fixed z-30 select-none bottom-10 right-32 max-md:bottom-24 max-md:w-full max-md:right-0">
      <div className="grid w-full gap-2 py-3 px-7 bg-gray-50 max-md:w-[90%] max-md:max-w-[1500px] max-md:m-auto">
        <div>
          <img src={Logo} alt="logo" className="w-20 h-auto" />
        </div>
        <div>
          <h1>Nuestras redes sociales</h1>
          <ul className="mt-5 ">
            <li>
              <a
                href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-2 py-4 hover:bg-[#DC4242] hover:text-white"
              >
                <IoLogoWhatsapp />
                <p>Whatsapp</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nuevamnt?igsh=MWRqMXJ5ajFpd2tvbA=="
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-2 py-4 hover:bg-[#DC4242] hover:text-white"
              >
                <BiLogoInstagramAlt />
                <p>Instagram</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@nuevamnt?_t=8kIPxEILRq9&_r=1 "
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-2 py-4 hover:bg-[#DC4242] hover:text-white "
              >
                <FaTiktok />
                <p>TikTok</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/nuevamnt?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-2 py-4 hover:bg-[#DC4242] hover:text-white"
              >
                <FaFacebookF />
                <p>Facebook</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white"></div>
      </div>
    </div>
  );
}
