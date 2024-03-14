import TestimonialsItem from "./testimonialsItem";
import testominalAuthor1 from "../../../public/testimonials/1.png";
import testominalAuthor2 from "../../../public/testimonials/2.jpg";
import testominalAuthor3 from "../../../public/testimonials/3.jpg";
import testominalAuthor4 from "../../../public/testimonials/4.jpg";

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
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialsItem
            color={testimonial.color}
            TestomialImage={testimonial.TestomialImage}
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

    category: "Light – Trading ",
    name: "Rafael Labarta",
    testominalImage: testominalAuthor1,
    testimonial:
      "La alianza que hemos mantenido desde hace más de un año con Nuevamente ha sido un impulso para la academia. Su creatividad, organización y enfoque han llevado la marca a nuevos públicos y estamos encantados con los resultados y sin duda lo recomendaría a otros emprendedores y empresa que quieran impactar en las redes.",
  },
  {
    color: "#EDCA21",

    category: "Networker ",
    name: "Sara Smith",

    testominalImage: testominalAuthor2,
    testimonial:
      "Mi experiencia con esta empresa fue simplemente fenomenal. Desde la fase inicial hasta la entrega final, cada etapa fue manejada con un profesionalismo excepcional. Me impresionó la habilidad del equipo para comprender y llevar a cabo mis ideas de manera creativa. Estoy completamente satisfecho con los resultados obtenidos y definitivamente consideraré trabajar con ellos en futuros proyectos.",
  },
  {
    color: "black",

    category: "Networker ",
    name: "John Doe",

    testominalImage: testominalAuthor3,
    testimonial:
      "Contratar a este equipo fue la mejor decisión que tomé para mi proyecto. La atención personalizada y la comunicación clara hicieron que todo el proceso fuera fluido y sin complicaciones. Su capacidad para enfrentar desafíos y encontrar soluciones efectivas fue destacable. Los resultados finales superaron mis expectativas y dejaron una impresión duradera. ¡Gracias por transformar mi visión en realidad!",
  },
  {
    color: "#DC4242",

    category: "Networker ",
    name: "Monica Geller",

    testominalImage: testominalAuthor4,
    testimonial:
      "No tengo más que elogios para esta empresa. Su enfoque centrado en el cliente y su dedicación incansable se reflejaron en cada fase de nuestro proyecto conjunto. La calidad del trabajo entregado habla por sí misma, y estoy agradecido por el nivel de compromiso que demostraron. Trabajar con ellos fue una experiencia gratificante, y no dudaré en recomendar sus servicios a otros.",
  },
];
