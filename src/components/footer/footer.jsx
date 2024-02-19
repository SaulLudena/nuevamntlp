import FooterBackground from "../../../public/footerbackground.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import FooterLogo from "../../../public/TopnavLogo2.png";
import { FaWhatsapp } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="grid items-center" id="Inicio">
      <img
        src={FooterBackground}
        alt=""
        className="object-cover w-full select-none h-96 max-xl:h-[40rem]"
      />

      <div className="absolute w-full ">
        <div className=" w-[90%] max-w-[1700px] m-auto  -translate-1/2">
          <div className="flex items-center justify-between ">
            <ul className="flex justify-between w-full gap-20 text-sm text-white max-xl:grid max-2xl:grid-cols-3 max-xl:justify-center max-md:grid-cols-2">
              <li className="">
                <ul>
                  <li className="mb-5">
                    <img
                      src={FooterLogo}
                      alt="awd"
                      className="w-[20rem] h-full"
                    />
                  </li>
                  <li>
                    <p className="garde_ghotic_semibold">
                      Lorem ipsum dolor sit amet consectetur. Praesent imperdiet
                      sodales nec nibh eu turpis id.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="grid gap-5">
                  <li className="text-2xl text-[#EDCA21]">Ventana</li>
                  <li className="garde_ghotic_semibold">Inicio</li>
                  <li className="garde_ghotic_semibold">Servicios</li>
                  <li className="garde_ghotic_semibold">Testimonios</li>
                </ul>
              </li>
              <li>
                <ul className="grid gap-5">
                  <li className="text-2xl text-[#EDCA21]">Información</li>
                  <li className="garde_ghotic_semibold">
                    Políticas de privacidad
                  </li>
                  <li className="garde_ghotic_semibold">
                    Políticas de cookies
                  </li>
                  <li className="garde_ghotic_semibold">
                    Libro de reclamaciones
                  </li>
                </ul>
              </li>
              <li>
                <ul className="grid gap-5">
                  <li className="text-2xl text-[#EDCA21]">Contácto</li>
                  <li className="flex items-center gap-2 ">
                    <MdEmail size={20} className="text-[#EDCA21]" />
                    <p className="garde_ghotic_semibold">correo@correo.com</p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <FaPhoneAlt size={20} className="text-[#EDCA21]" />
                    <p className="garde_ghotic_semibold">+51 999999999</p>
                  </li>
                  <ul className="flex gap-5 text-[#EDCA21]">
                    <li>
                      <AiFillInstagram size={30} />
                    </li>
                    <li>
                      <FaTiktok size={30} />
                    </li>
                    <li>
                      <IoLogoWhatsapp size={30} />
                    </li>
                    <li>
                      <FaFacebook size={30} />
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="text-[#]">
                  <FaWhatsapp size={150} />
                </div>
                <div>
                  <p className="text-[#E6CF32]">
                    Si quieres comunicarte con nosotros da
                  </p>
                  <a href="">CLICK aquí</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
