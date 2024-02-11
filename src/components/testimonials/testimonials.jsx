import { FaChevronRight } from "react-icons/fa";
import TestimonialCarousel from "./testomonialCarousel";
import OurClients from "./ourClients";
export default function Testimonials() {
  return (
    <>
      <div className="w-[80%] max-w-[1500px] m-auto py-20 grid gap-10">
        <div className="flex items-center gap-3">
          <div className="text-[#DC4242]">
            <FaChevronRight size={55} />
          </div>
          <div className="grid gap-2">
            <h1 className="text-6xl">Testimonios</h1>
            <p className="text-md garde_ghotic_semibold">
              Enterate de las experiencias de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <TestimonialCarousel />
      <div className="w-[80%] max-w-[1500px] m-auto py-20 grid gap-10">
        <OurClients />
      </div>
    </>
  );
}
