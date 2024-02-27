import TestimonialsItem from "./testimonialsItem";

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
      pagination={{ clickable: true }}
      className="mx-20 max-md:mx-0"
      breakpoints={{
        320: {
          navigation: {
            enabled: false,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        740: {
          navigation: {
            enabled: false,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        1280: {
          navigation: {
            enabled: true,
          },
        },
        1380: {
          navigation: {
            enabled: true,
          },
        },
      }}
    >
      <SwiperSlide>
        <TestimonialsItem
          color="#DC4242"
          TestomialImage={"someurl"}
          category={"Networker"}
          name={"Jimmy Garcia"}
          testimonial=" “Quiero expresar mi gratitud hacia esta increíble empresa. Desde el primer contacto, su equipo demostró un compromiso excepcional. La atención meticulosa a los detalles y la calidad del trabajo entregado superaron ampliamente mis expectativas. Cada miembro del equipo mostró una dedicación impresionante, lo que convirtió mi proyecto en un verdadero éxito. ¡Recomendaré sus servicios a todos mis colegas y amigos!”"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem
          color="#EDCA21"
          testimonial=" “Mi experiencia con esta empresa fue simplemente fenomenal. Desde la fase inicial hasta la entrega final, cada etapa fue manejada con un profesionalismo excepcional. Me impresionó la habilidad del equipo para comprender y llevar a cabo mis ideas de manera creativa. Estoy completamente satisfecho con los resultados obtenidos y definitivamente consideraré trabajar con ellos en futuros proyectos.”"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem
          color="black"
          testimonial=" “Contratar a este equipo fue la mejor decisión que tomé para mi proyecto. La atención personalizada y la comunicación clara hicieron que todo el proceso fuera fluido y sin complicaciones. Su capacidad para enfrentar desafíos y encontrar soluciones efectivas fue destacable. Los resultados finales superaron mis expectativas y dejaron una impresión duradera. ¡Gracias por transformar mi visión en realidad!”"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsItem
          color="#DC4242"
          testimonial=" “No tengo más que elogios para esta empresa. Su enfoque centrado en el cliente y su dedicación incansable se reflejaron en cada fase de nuestro proyecto conjunto. La calidad del trabajo entregado habla por sí misma, y estoy agradecido por el nivel de compromiso que demostraron. Trabajar con ellos fue una experiencia gratificante, y no dudaré en recomendar sus servicios a otros.”"
        />
      </SwiperSlide>
    </Swiper>
  );
}
