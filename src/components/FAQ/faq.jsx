import { FaChevronRight, FaWhatsapp } from "react-icons/fa";

import TopnavContact from "../topnav/topnavContact";
import FaqItem from "./faqItem";

export default function Faq() {
  return (
    <div className="w-[80%] max-w-[1500px] m-auto py-20 grid gap-14">
      <div className="flex items-center gap-3">
        <div className="text-[#DC4242] ">
          <FaChevronRight className="text-5xl max-sm:text-5xl" />
        </div>
        <div className="grid gap-2">
          <h1 className="text-6xl max-lg:text-4xl">FAQ</h1>
          <p className="text-md garde_ghotic_semibold max-lg:text-sm max-sm:w-full">
            ¿Dudas? Encuentra respuestas a nuestro flujo de trabajo, tiempo de
            entrega y más.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-10 max-md:p-0 max-lg:grid-cols-1 ">
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
      <div className="grid justify-center gap-5 ">
        <h1 className="text-center better_yesterday text-[#DC4242] text-7xl">
          ¿Absolvimos Tus dudas?
        </h1>
        <p className="text-center garde_ghotic_semibold ">
          Contáctanos si tienes alguna duda más
        </p>
        <div className="flex justify-center ">
          <div className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm  flex items-center gap-3 justify-center">
            <p className="text-lg">Contáctanos</p>
            <FaWhatsapp className="text-2xl max-md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
