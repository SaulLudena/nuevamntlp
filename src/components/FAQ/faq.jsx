import { FaChevronRight } from "react-icons/fa";
import FaqItem from "./faqItem";

export default function Faq() {
  return (
    <div className="w-[80%] max-w-[1500px] m-auto py-20 grid gap-10">
      <div className="flex items-center gap-3">
        <div className="text-[#DC4242]">
          <FaChevronRight size={55} />
        </div>
        <div className="grid gap-2">
          <h1 className="text-6xl">FAQ</h1>
          <p className="text-md">
            ¿Dudas? Encuentra respuestas a nuestro flujo de trabajo, tiempo de
            entrega y más.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 ">
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
    </div>
  );
}
