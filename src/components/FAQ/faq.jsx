import { FaChevronRight } from "react-icons/fa";
import TopnavContact from "../Topnav/topnavContact";
import FaqItem from "./faqItem";

export default function Faq() {
  return (
    <div className="w-[80%] max-w-[1500px] m-auto py-20 grid gap-14">
      <div className="flex items-center gap-3">
        <div className="text-[#DC4242]">
          <FaChevronRight size={55} />
        </div>
        <div className="grid gap-2">
          <h1 className="text-6xl">FAQ</h1>
          <p className="text-md garde_ghotic_semibold">
            ¿Dudas? Encuentra respuestas a nuestro flujo de trabajo, tiempo de
            entrega y más.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-10 ">
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
          <TopnavContact />
        </div>
      </div>
    </div>
  );
}
