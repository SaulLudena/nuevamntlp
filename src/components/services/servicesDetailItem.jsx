import { FaWhatsapp } from "react-icons/fa";
import TopnavContact from "../topnav/topnavContact";

export default function ServicesDetailItem({
  collageImagen1,
  title,
  paragraph1,
  paragraph2,
}) {
  return (
    <div className="grid grid-cols-12 gap-20 max-xl:flex max-xl:flex-col w-[90%] max-w-[1500px] m-auto ">
      <div className="grid items-center col-span-6 w-[80%] max-w-[1500px] m-auto ">
        <div className="grid px-10 gap-7 max-md:px-0">
          <h1 className="text-5xl text-[#DC4242] max-md:text-4xl">{title}</h1>
          <p className="garde_ghotic_semibold max-md:text-sm">{paragraph1}</p>

          <h2 className="text-[#434343] text-2xl ">Incluye:</h2>
          <p className="garde_ghotic_semibold max-md:text-sm">{paragraph2}</p>
          <div className="w-full h-[2px] bg-[#DC4242] "></div>
          <div className="flex items-center justify-center gap-10">
            <p className="text-5xl better_yesterday ">¿Lo quieres?</p>
            <div className="text-center ">
              <div className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm flex items-center gap-3 justify-center">
                <p>Contáctanos</p>
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6  max-xl:w-[100%] w-[80%] max-w-[1500px] m-auto border-2 border-black">
        <img src={collageImagen1} alt="" className="w-full" />
      </div>
    </div>
  );
}
