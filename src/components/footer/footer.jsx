import FooterBackground from "../../../public/footerbackground.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="grid items-center" id="Inicio">
      <img
        src={FooterBackground}
        alt=""
        className="object-cover w-full select-none h-96 "
      />

      <div className="absolute w-full ">
        <div className=" w-[80%] max-w-[1500px] m-auto  -translate-y-[10%]">
          <div className="flex items-center justify-between ">
            <ul className="flex justify-between w-full text-white border border-white">
              <li>
                <ul>
                  <li>
                    <img src="" alt="awd" />
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet const const const const t cons
                      t cons t cons t cons t cons t cons t cons t cons t cons t
                      cons constttt cons cons cons const consectetur.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Ventana</li>
                  <li>Inicio</li>
                  <li>Servicios</li>
                  <li>Testimonios</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Información</li>
                  <li>Políticas de privacidad</li>
                  <li>Políticas de cookies</li>
                  <li>Libro de reclamaciones</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Contácto</li>
                  <li>
                    <MdEmail /> <p>correo@correo.com</p>
                  </li>
                  <li>
                    <FaPhoneAlt /> <p>+51 999999999</p>
                  </li>
                  <ul className="flex">
                    <li>
                      <AiFillInstagram />
                    </li>
                    <li>
                      <FaTiktok />
                    </li>
                    <li>
                      <IoLogoWhatsapp />
                    </li>
                    <li>
                      <FaFacebook />
                    </li>
                  </ul>
                </ul>
              </li>
              <li>
                <img src="" alt="" />
                <p>Si quieres comunicarte con nosotros da</p>
                <a href="">CLICK aquí</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
