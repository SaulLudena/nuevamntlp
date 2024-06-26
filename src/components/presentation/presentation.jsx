import { FaWhatsapp } from "react-icons/fa";
import PresentationBackground from "../../../public/important_images/presentationBackground4.jpg";

export default function presentation() {
  return (
    <div className="grid items-center bg-[#0B0101] pt-16 " id="Inicio">
      <img
        src={PresentationBackground}
        alt=""
        className="object-bottom w-full select-none max-sm:h-[30rem] max-lg:h-[40rem] max-sm:opacity-20 max-lg:opacity-40 max-lg:object-right max-xl:object-cover "
      />

      <div className="absolute top-[30%] flex items-center justify-center w-full ">
        <div className="w-[80%] max-w-[1500px]">
          <div className="flex items-center justify-between">
            <div className="w-[100rem] max-md:w-full grid gap-6">
              <h1 className="text-8xl  text-[#EDCA21] max-xl:text-6xl max-lg:text-center max-sm:text-4xl w-[45rem] max-xl:w-[32rem] max-lg:w-full ">
                El infinito de posibilidades para tu marca
              </h1>
              <p className="text-2xl text-white garde_ghotic_semibold max-lg:text-lg max-lg:text-center max-sm:text-xs w-[40rem] max-lg:w-full ">
                Somos la única aceleradora de negocios especializada en venta
                directa multinivel
              </p>
              <div className="flex max-lg:justify-center">
                <a
                  href={`https://api.whatsapp.com/send?phone=+51972146904&text=Hola,%20me%20interesan%20sus%20servicios.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 bg-gradient-to-r bg-[#dc4242] text-white items-center gap-3 justify-center flex text-xl"
                >
                  <p>Contáctanos</p>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
