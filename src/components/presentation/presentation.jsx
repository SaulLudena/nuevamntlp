import { FaWhatsapp } from "react-icons/fa";
import PresentationBackground4 from "../../../public/presentationBackground4.jpg";

export default function presentation() {
  return (
    <div className="grid items-center bg-[#0B0101] h-[100vh] " id="Inicio">
      <img
        src={PresentationBackground4}
        alt=""
        className="object-bottom w-full h-screen select-none max-sm:h-[30rem] max-lg:h-[40rem] max-sm:opacity-20 max-lg:opacity-40 max-lg:object-right max-xl:object-cover"
      />

      <div className="absolute w-full h-auto ">
        <div className=" w-[80%]  m-auto    max-w-[1500px]   ">
          <div className="flex items-center justify-between">
            <div className=" w-[100rem] grid  gap-6 ">
              <h1 className="text-8xl  text-[#EDCA21] max-xl:text-6xl max-lg:text-center max-sm:text-4xl ">
                El infinito de posibilidades para tu marca
              </h1>
              <p className="text-2xl text-white garde_ghotic_semibold max-lg:text-lg max-lg:text-center max-sm:text-xs ">
                Somos la única aceleradora de negocios especializada en venta
                directa multinivel
              </p>
              <div className="flex max-lg:justify-center ">
                <div className="px-6 py-4 bg-gradient-to-r bg-[#dc4242] text-white  items-center gap-3  justify-center flex text-xl">
                  <p>Contáctanos</p>
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
