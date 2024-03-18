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
        className="object-cover w-full select-none h-[calc(25rem)] max-xl:h-[35rem] max-lg:h-[50rem]  max-sm:h-[75rem]"
      />

      <div className="absolute w-full ">
        <div className=" w-[90%] max-w-[1700px] m-auto  -translate-1/2">
          <div className="flex items-center justify-between ">
            <ul className="flex justify-between w-full gap-20 text-sm text-white max-xl:grid max-2xl:grid-cols-3 max-xl:justify-center max-md:grid-cols-2 max-sm:grid-cols-1 max-md:p-5">
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
                      El infinito de posibilidades para tu marca
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
                    <p className="garde_ghotic_semibold">
                      holanuevamnt@gmail.com
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <a
                      href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FaPhoneAlt size={20} className="text-[#EDCA21]" />
                      <p className="garde_ghotic_semibold">+51 972146904</p>
                    </a>
                  </li>
                  <ul className="flex gap-5 text-[#EDCA21]">
                    <li>
                      <a
                        href="https://www.instagram.com/nuevamnt?igsh=MWRqMXJ5ajFpd2tvbA=="
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <AiFillInstagram size={30} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@nuevamnt?_t=8kIPxEILRq9&_r=1 "
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FaTiktok size={30} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <IoLogoWhatsapp size={30} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/nuevamnt?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FaFacebook size={30} />
                      </a>
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
                  <a
                    href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    CLICK aquí
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
