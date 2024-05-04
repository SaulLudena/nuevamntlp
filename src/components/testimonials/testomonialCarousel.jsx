import TestimonialsItem from "./testimonialsItem";
import JuanDiegoNicoLalde from "../../../public/testimonials/Juan-Diego-Nicolalde.png";
import KennetMansilla from "../../../public/testimonials/Kennet-mansilla.png";
import RafaelLabarta from "../../../public/testimonials/Rafael-Labarta.png";
import RosaLopez from "../../../public/testimonials/Rosa-Lopez.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function TestimonialCarousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className="mx-20 swiper-testimonials max-md:mx-0"
      style={{
        "--swiper-navigation-size": "25px",
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialsItem
            color={testimonial.color}
            category={testimonial.category}
            name={testimonial.name}
            testominalImage={testimonial.testominalImage}
            testimonial={testimonial.testimonial}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const testimonials = [
  {
    color: "#DC4242",

    category: "Country manager Legacy Ecuador – Networker ",
    name: "Juan Diego Nicolalde",
    testominalImage: JuanDiegoNicoLalde,
    testimonial:
      "❝Mi experiencia trabajando con Nuevamente ha sido excepcional. A pesar de la distancia entre Ecuador y Perú, todos los procesos se han desarrollado de manera fluida y eficiente, siempre en base a lo planificado. Lo que más valoro es su disposición constante para adaptarse a los cambios necesarios, lo cual ha contribuido enormemente a tener un crecimiento orgánico adecuado en nuestras redes y en nuestra comunicación con cada uno de nuestros clientes y prospectos.  como cliente  de nuevamente siento que su servicio verdaderamente ahora es imprescindible para el dia a dia de Legacy Ecuador.❞",
  },
  {
    color: "#EDCA21",

    category: "Networker ",
    name: "Rosa López",

    testominalImage: RosaLopez,
    testimonial:
      "❝Mi experiencia con esta empresa fue simplemente fenomenal. Desde la fase inicial hasta la entrega final, cada etapa fue manejada con un profesionalismo excepcional. Me impresionó la habilidad del equipo para comprender y llevar a cabo mis ideas de manera creativa. Estoy completamente satisfecho con los resultados obtenidos y definitivamente consideraré trabajar con ellos en futuros proyectos.❞",
  },
  {
    color: "black",

    category: "Country manager Legacy Bolivia – Networker",
    name: "Kennet Mansilla",

    testominalImage: KennetMansilla,
    testimonial:
      "❝Agradecer es una virtud fundamental en el desarrollo profesional. Una experiencia excepcional en el servicio al cliente, productos y servicios competitivos, cumplimiento a calidad de plazos.❞",
  },
  {
    color: "#DC4242",

    category: "Socio fundador de Light – Trader ",
    name: "Emilio Labarta",

    testominalImage: RafaelLabarta,
    testimonial:
      "❝La alianza que hemos mantenido desde hace más de un año con Nuevamente ha sido un impulso para la academia. Su creatividad, organización y enfoque han llevado la marca a nuevos públicos y estamos encantados con los resultados y sin duda lo recomendaría a otros emprendedores y empresa que quieran impactar en las redes.❞",
  },
];
