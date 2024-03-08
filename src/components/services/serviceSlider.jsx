import { Fragment, useEffect, useRef, useState } from "react";
import ServiceSliderItem from "./serviceSliderItem";
import { Tab } from "@headlessui/react";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { AiOutlineTeam } from "react-icons/ai";
import { MdComputer, MdStars } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import collageImagen1 from "../../../public/collage_1.png";
import ServicesDetailItem from "./servicesDetailItem";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default function ServiceSlider({ index }) {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(index);

  useEffect(() => {
    setSelectedIndex(index);

    // Al cambiar la prop initialSlide, ajusta el slide actual
    if (swiperRef.current && swiperRef.current.swiper) {
      const slidesPerView = swiperRef.current.swiper.params.slidesPerView;

      // Calcula el índice del slide según la cantidad de elementos por slide
      const adjustedIndex = Math.floor(index / slidesPerView) * slidesPerView;

      swiperRef.current.swiper.slideTo(adjustedIndex);
    }

    //cambiar el index del slide2
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slideTo(index);
    }
  }, [index]);

  const handleTabChange = (newIndex) => {
    setSelectedIndex(newIndex);
    //cambiar el index del slide2
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slideTo(newIndex);
    }
  };
  return (
    <>
      <Tab.Group selectedIndex={selectedIndex} onChange={handleTabChange}>
        <Tab.List className="flex mb-10 overflow-x-hidden  w-[80%] max-w-[1500px] m-auto max-md:w-[95%]">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={90}
            slidesPerView={3}
            navigation
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            ref={swiperRef}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 90,
              },
              740: {
                slidesPerView: 1,
                spaceBetween: 90,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 90,
              },
              1380: {
                slidesPerView: 3,
                spaceBetween: 90,
              },
            }}
            className="px-20 pt-10 pb-14 max-md:px-[3rem]"
          >
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Diseño gráfico"
                      icon={<SiMaterialdesignicons size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Redes sociales"
                      icon={<LuMonitorSmartphone size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Desarrollo de Páginas web"
                      icon={<MdComputer size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Coaching de Marca Personal"
                      icon={<RiTeamFill size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Creación de logos"
                      icon={<MdStars size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Fotografía"
                      icon={<FaCamera size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Videografía"
                      icon={<FaVideo size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Imagen corporativa"
                      icon={<AiOutlineTeam size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <SwiperSlide>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className="w-full outline-none">
                    <ServiceSliderItem
                      selected={selected}
                      label="Packaing"
                      icon={<FaBox size={30} />}
                    />
                  </button>
                )}
              </Tab>
            </SwiperSlide>
            <div className="swiper-pagination "></div>
          </Swiper>
        </Tab.List>
        <Tab.Panels>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            //quiero que al momento de hacer un slide a la izquierda o derecha, el slide 1 tambien se actualice al elemento actual y tambien que el slide 1 haga scroll automatico y que se posicione en el centro
            onSlideChange={(swiper) => {
              setSelectedIndex(swiper.activeIndex);
              if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideTo(swiper.activeIndex);
              }
            }}
            ref={swiperRef2}
          >
            {servicesDetailItems.map((servicessliderItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <ServicesDetailItem servicessliderItem={servicessliderItem} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

const servicesDetailItems = [
  {
    collageImagen1: collageImagen1,
    title: "Diseño grafico",
    paragraph1:
      "Creemos que el diseño gráfico es una poderosa herramienta para comunicar mensajes, valores e información; que represente la identidad de tu marca a tu público objetivo para, así, generar recordación",
    include: [
      {
        title: "Identidad visual",
        description:
          "Creamos logos, paletas de color, establecemos tipografías y otros elementos visuales que representan la esencia de tu marca, haciéndola destacar en un mercado competitivo.",
      },
      {
        title: "Diseño web y aplicaciones",
        description:
          "Desarrollamos sitios web y aplicaciones móviles intuitivas, atractivas y fáciles de usar que generan resultados tangibles para tu negocio",
      },
      {
        title: "Materiales impresos",
        description:
          "Diseñamos brochures, flyers, catálogos, tarjetas de presentación y otros materiales impresos que complementan tu estrategia de comunicación y refuerzan tu imagen de marca.",
      },
      {
        title: "Marketing digital",
        description:
          "Implementamos estrategias de marketing digital, grillas de contenido, análisis de resultados y anuncios personalizados para atraer a tu público objetivo y convertirlo en clientes.",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Redes sociales",
    paragraph1:
      " Conecta con tu Público Objetivo en un Infinito de Posibilidades. En Nuevamente, somos expertos en crear estrategias para redes sociales que te ayudan a",
    include: [
      {
        title: "Expandir tu alcance",
        description:
          "Llega a tu público objetivo en las plataformas digitales más relevantes, ampliando tu comunidad.",
      },
      {
        title: "Generar engagement",
        description:
          "Crea contenido atractivo y relevante que despierte el interés de tu público y fomente la interacción",
      },
      {
        title: "Atraer nuevos clientes",
        description:
          "Convierte a tus seguidores en clientes potenciales y aumenta tus ventas.",
      },
      {
        title: "Fidelizar a tus clientes",
        description:
          "Fortalece la relación con tus clientes y crea una comunidad comprometida con tu marca.",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Desarrollo de Páginas web",
    paragraph1:
      "Tu página web es más que una simple presencia online, es una puerta de entrada a un universo de posibilidades para tu marca. Nuestro equipo de apasionados desarrolladores está listo para crear una página web que te ayude a :",
    include: [
      {
        title: "Atraer a tu público objetivo",
        description:
          "Diseñamos sitios web intuitivos y visualmente atractivos, que captan la atención de tus visitantes y los convierten en clientes.",
      },
      {
        title: "Generar leads y ventas",
        description:
          "Implementamos estrategias de marketing digital que te ayudan a convertir a tus visitantes en clientes potenciales",
      },
      {
        title: "Fortalecer tu marca",
        description:
          "Creamos una experiencia online memorable, que refuerza tu imagen de marca y te diferencia de la competencia",
      },
      {
        title: "Expandir tu negocio",
        description:
          "Te ayudamos a llegar a nuevos mercados y hacer crecer tu negocio a través de una página web optimizada para el SEO",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Coaching de Marca Personal",
    paragraph1:
      "El coaching de marca personal es la llave para desbloquear tu potencial y convertirte en un referente en tu sector. Nuestro equipo de coaches expertos te ayudará a:",
    include: [
      {
        title: "Destacar en tu industria",
        description:
          "Desarrollamos una estrategia de marca personal que te ayuda a destacar en tu industria y atraer nuevas oportunidades",
      },
      {
        title: "Conectar con tu audiencia",
        description:
          "Creamos una presencia online que conecta con tu audiencia y fomenta la interacción",
      },
      {
        title: "Generar oportunidades",
        description:
          "Te ayudamos a construir una red de contactos valiosa y atraer nuevas oportunidades profesionales",
      },
      {
        title: "Construir una reputación sólida",
        description:
          "Creamos una estrategia de comunicación que refuerza tu reputación y te posiciona como un referente en tu industria",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Creación de logos",
    paragraph1:
      "Tu logo es la cara de tu marca, la primera impresión que tus clientes tendrán de ti. Nuestro equipo de diseñadores expertos está listo para ayudarte a:",
    include: [
      {
        title: "Destilar tu esencia",
        description:
          "Creamos logos que reflejan la esencia de tu marca y transmiten tus valores de forma efectiva.",
      },
      {
        title: "Destacar en tu industria",
        description:
          "Diseñamos logos que te diferencian de la competencia y te ayudan a destacar en tu industria.",
      },
      {
        title: "Conectar con tu audiencia",
        description:
          "Creamos logos que conectan con tu audiencia a nivel emocional, generando una conexión profunda y duradera.",
      },
      {
        title: "Expandir tu universo",
        description:
          "Diseñamos logos versátiles que se adaptan a cualquier formato y te permiten expandir tu universo de posibilidades.",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Fotografía",
    paragraph1:
      "Nuestro equipo de fotógrafos apasionados está listo para ayudarte a: ",
    include: [
      {
        title: "Contar tu historia",
        description:
          "Capturamos la esencia de tu marca, producto o evento; a través de imágenes únicas y artísticas que transmitan tu mensaje de forma efectiva.",
      },
      {
        title: "Despertar emociones",
        description:
          "Creamos imágenes que generan impacto y conectan con tu público objetivo a nivel emocional.",
      },
      {
        title: "Preservar tus recuerdos",
        description:
          " Inmortalizamos los momentos más importantes de tu vida con fotografías que te transportarán a ese instante especial cada vez que las veas. ",
      },
      {
        title: "Destacar en el mundo digital",
        description:
          "Creamos contenido visual atractivo que te diferencia de la competencia y te permite conectar con tu público en las redes sociales.",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Videografía",
    paragraph1:
      "Nuestro equipo de apasionados videógrafos está listo para ayudarte a: ",
    include: [
      {
        title: "Promocionar tu producto o servicio",
        description:
          "Creamos videos publicitarios que generan interés en tu producto o servicio, incrementando tus ventas. ",
      },
      {
        title: "Dar vida a tu marca",
        description:
          "Creamos videos impactantes que transmiten la esencia de tu marca, conectando, así, con tu público objetivo a un nivel más profundo.",
      },
      {
        title: "Contar historias memorables",
        description:
          "Desarrollamos guiones originales y utilizamos técnicas de producción innovadoras para crear videos que cautiven a tu audiencia y la inspiren a actuar. ",
      },
      {
        title: "Capturar tus eventos más importantes",
        description:
          "Inmortalizamos los momentos más especiales de tu negocio con videos que te transportarán a ese instante cada vez que los veas.",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Imagen corporativa",
    paragraph1: "Nuestro equipo de artistas visuales te ayudará a: ",
    include: [
      {
        title: "Desenterrar tu esencia",
        description:
          "Definimos tu identidad visual única, extrayendo la esencia de tu marca y traduciéndola en un lenguaje creativo y llamativo. ",
      },
      {
        title: "Tejer historias cautivadoras",
        description:
          "Creamos una narrativa visual que conecta con tu público objetivo a nivel emocional, construyendo una conexión profunda y duradera. ",
      },
      {
        title: "Construir experiencias memorables",
        description:
          "Diseñamos elementos visuales que impactan en cada punto de contacto, desde tu logotipo hasta tu página web, creando una experiencia coherente e inolvidable. ",
      },
      {
        title: "Expandir tu universo",
        description:
          "Implementamos estrategias innovadoras que te permiten llegar a nuevos mercados y explorar un futuro infinito de posibilidades para tu marca.",
      },
    ],
  },
  {
    collageImagen1: collageImagen1,
    title: "Packaing",
    paragraph1: "Nuestro equipo de artistas apasionados te ayudará a: ",
    include: [
      {
        title: "Despertar la curiosidad",
        description:
          "Diseñamos empaques llamativos e innovadores que atraen la atención de tu público objetivo y lo invitan a descubrir tu producto. ",
      },
      {
        title: "Tejer historias cautivadoras",
        description:
          "Creamos una narrativa visual que conecta con tu público objetivo a nivel emocional, transmitiendo los valores y la esencia de tu marca. ",
      },
      {
        title: "Construir experiencias memorables",
        description:
          "Diseñamos empaques que van más allá de lo funcional, creando una experiencia sensorial única que se queda grabada en la memoria de tus clientes.",
      },
      {
        title: "Expandir tu universo",
        description:
          "Implementamos estrategias innovadoras que te permiten llegar a nuevos mercados y explorar un futuro infinito de posibilidades para tu marca.",
      },
    ],
  },
];
