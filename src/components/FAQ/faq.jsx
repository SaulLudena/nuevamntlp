import { FaChevronRight, FaWhatsapp } from "react-icons/fa";

import FaqItem from "./faqItem";

export default function Faq() {
  return (
    <div className="w-[80%]  max-md:w-[100%]  max-w-[1500px] m-auto py-20 grid gap-14">
      <div className="flex items-center gap-3 ">
        <div className="text-[#DC4242] ">
          <FaChevronRight className="text-5xl max-sm:text-5xl" />
        </div>
        <div className="grid gap-2">
          <h1 className="text-6xl max-lg:text-4xl">FAQ</h1>
          <p className="text-md garde_ghotic_semibold max-lg:text-sm max-sm:w-full">
            ¿Dudas sobre nuestro flujo de trabajo, tiempo de entrega o cualquier
            otro aspecto? Encuentra las respuestas a las preguntas más
            frecuentes aquí:
          </p>
        </div>
      </div>

      {/*consultar a leslie */}
      <div className="  grid grid-cols-1 gap-5  max-md:p-0 max-xl:grid-cols-1  max-md:w-[90%] max-md:m-auto ">
        {FAQInfoDetail.map((faqitem, index) => {
          return (
            <FaqItem
              key={index}
              label={faqitem.titleFaq}
              detail={faqitem.detailFaq}
            />
          );
        })}
      </div>
      <div className="grid justify-center gap-5 ">
        <h1 className="text-center better_yesterday text-[#DC4242] text-7xl">
          ¿Absolvimos Tus dudas?
        </h1>
        <p className="text-center garde_ghotic_semibold ">
          Contáctanos si tienes alguna duda más
        </p>
        <div className="flex justify-center ">
          <a
            className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm  flex items-center gap-3 justify-center"
            href="https://wa.me/51972146904?text=Hola,%20estoy%20interesado%20en%20sus%20servicios"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p className="text-lg">Contáctanos</p>
            <FaWhatsapp className="text-2xl max-md:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

const FAQInfoDetail = [
  {
    titleFaq: "¿Cómo funciona el proceso de trabajo?",
    detailFaq: [
      "a) Una vez que nos contactas y defines tu proyecto, te asignaremos un asesor de proyecto dedicado que te guiará en cada paso del proceso.",
      "b) Trabajaremos en estrecha colaboración contigo para comprender tus necesidades, objetivos y expectativas. ",
      "c) Nuestro equipo creativo desarrollará una propuesta personalizada que se ajuste a tu presupuesto y necesidades. ",
      "d) Una vez que apruebes la propuesta, comenzaremos a trabajar en tu proyecto y te mantendremos actualizado en tiempo real sobre el progreso ",
      "e) Te entregaremos el proyecto final en la fecha acordada y te brindaremos asistencia en caso de que necesites realizar modificaciones. ",
    ],
  },
  {
    titleFaq: "¿Cuánto tiempo se tarda en completar un proyecto?",
    detailFaq: [
      "El tiempo de entrega depende de la complejidad del proyecto, la cantidad de trabajo y la disponibilidad de nuestro equipo. En general, los proyectos se completan entre 2 y 8 semanas.",
    ],
  },
  {
    titleFaq: "¿Qué métodos de pago aceptan?",
    detailFaq: [
      "Aceptamos una variedad de métodos de pago, incluyendo links de pago, tarjeta de crédito y débito, y transferencia bancaria.",
    ],
  },
  {
    titleFaq: "¿Ofrecen algún tipo de garantía?",
    detailFaq: [
      "En Nuevamente, nos comprometemos a entregar un trabajo de alta calidad que cumpla con tus expectativas. Para ello, ofrecemos una política de revisiones que te permite solicitar modificaciones al proyecto final.",
      "a) Una vez que te entreguemos el proyecto final, tendrás un período de tiempo determinado para revisarlo y solicitar modificaciones.",
      "b) Las modificaciones deben ser específicas y estar relacionadas con los objetivos y expectativas del proyecto original.",
      "c) Nuestro equipo revisará tus solicitudes y te dará una respuesta en un plazo razonable.",
      "d) Si las modificaciones son menores, las realizaremos sin costo adicional. ",
      "e) Si las modificaciones son mayores, te enviaremos un presupuesto para cubrir el costo del trabajo adicional. ",
      "f) Nuestro objetivo es trabajar contigo hasta que estés completamente satisfecho con el resultado final. ",
      "Recuerda: Te recomendamos que revises cuidadosamente el proyecto final antes de solicitar modificaciones ",
    ],
  },
  {
    titleFaq: "¿Puedo ver ejemplos de trabajos anteriores?",
    detailFaq: [
      "Sí, por supuesto. Puedes visitar nuestro portafolio online para ver ejemplos de nuestros trabajos en diferentes áreas, como diseño web, branding, marketing digital y desarrollo de software. ",
    ],
  },
  {
    titleFaq: "¿Cómo puedo contactarlos?",
    detailFaq: [
      "Puedes contactarnos a través de nuestro sitio web, correo electrónico, teléfono o redes sociales. Estaremos encantados de responder a tus preguntas y ayudarte a iniciar tu proyecto.  ",
      "Recuerda: Si no encuentras la respuesta a tu pregunta en esta sección, no dudes en contactarnos. ¡Estamos aquí para ayudarte! ",
    ],
  },
];
