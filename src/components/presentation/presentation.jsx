import { FaWhatsapp } from "react-icons/fa";
import PresentationBackground4 from "../../../public/presentationBackground4.png";

export default function presentation() {
  return (
    <div className="grid items-center bg-[#0B0101]" id="Inicio">
      <img
        src={PresentationBackground4}
        alt=""
        className="object-cover w-full h-full select-none max-sm:h-[30rem] max-lg:h-[40rem] max-sm:opacity-20 max-lg:opacity-40 max-lg:object-right"
      />

      <div className="absolute w-full ">
        <div className=" w-[80%] max-w-[5500px] m-auto  translate-y-[-20rem]  max-[3020px]:-translate-y-20 max-xl:translate-y-16 max-sm:translate-y-10  max-[3020px]:max-w-[1200px]   max-[3020px]:max-w-[1500px]">
          <div className="flex items-center justify-between ">
            <div className=" w-[200rem] max-[3020px]:w-[50rem] grid gap-14 max-2xl:gap-10 max:[3020px]:gap-10 max-lg:gap-5 ">
              <h1 className="text-[22rem] max-[3020px]:text-8xl max-2xl:text-8xl text-[#EDCA21] max-lg:text-6xl max-lg:w-[35rem] max-sm:text-4xl max-sm:w-[20rem] ">
                Comparte tu luz con el mundo
              </h1>
              <p className="text-[5rem] max-[3020px]:text-3xl text-white garde_ghotic_semibold max-lg:text-lg max-lg:w-[32rem] max-sm:text-xs max-sm:w-[20rem]">
                Somos la única aceleradora de negocios especializada en venta
                directa multinivel
              </p>
              <div className="flex ">
                <div className="text-[5rem] px-40 py-16 max-[3020px]:px-5 max-[3020px]:py-3 max-xl:px-5 max-xl:py-3 bg-gradient-to-r bg-[#dc4242] text-white max:[3000px]:text-sm flex items-center gap-10 max:[3000px]:gap-3 justify-center  max-[3020px]:hidden max-2xl:hidden">
                  <p>Contáctanos</p>
                  <FaWhatsapp />
                </div>
                <div className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white  items-center gap-5  justify-center hidden max-[3020px]:flex">
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
