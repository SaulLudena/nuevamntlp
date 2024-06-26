import TeamMemberItem from "./teamMemberItem";

import Jeff from "../../../public/team/Jeff.png";

import Rafael from "../../../public/team/Rafael.png";
import Leslie from "../../../public/team/Leslie.png";
import Alba from "../../../public/team/Alba.png";
import Carlos from "../../../public/team/Carlos.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default function Ourteam() {
  return (
    <>
      <div className="w-[70%] max-w-[1500px] m-auto pt-20 pb-10 grid gap-10">
        <div className="grid justify-center gap-3 text-center">
          <h1 className="text-8xl better_yesterday text-[#DC4242] max-md:mb-4">
            Nuestro team
          </h1>
          <h1 className="text-3xl max-md:text-xl">
            Conoce a los creativos que te ayudan a potenciar tu luz
          </h1>
          <p className="garde_ghotic_semibold max-md:text-sm">
            Somos un equipo capacitado para entender tus necesidades
          </p>
        </div>
        <ul className="grid grid-cols-3 grid-rows-2 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1 max-md:hidden w-[90%]  max-lg:w-[100%] max-w-[1500px] m-auto">
          {teamMember.map((member, index) => (
            <TeamMemberItem
              key={index}
              nombre={member.nombre}
              cargo={member.cargo}
              cargo2={member.cargo2}
              instagram={member.instagram}
              behance={member.behance}
              memberImage={member.memberImage}
            />
          ))}
        </ul>
      </div>
      <div className="w-[80%] max-w-[1500px] m-auto  max-md:w-[100%] max-md:block hidden">
        <Swiper
          className="hiddenmax-md:block" // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
        >
          {teamMember.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMemberItem
                key={index}
                nombre={member.nombre}
                cargo={member.cargo}
                cargo2={member.cargo2}
                instagram={member.instagram}
                behance={member.behance}
                memberImage={member.memberImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

const teamMember = [
  {
    nombre: "Rafael del Solar",
    cargo: "Gerente de ventas",
    cargo2: "",
    instagram: "",
    behance: "",
    memberImage: Rafael,
  },
  {
    nombre: "Leslie Cervera",
    cargo: "Senior Graphic Designer",
    cargo2: "Directora creativa",
    instagram: "https://www.instagram.com/lesliecer/",
    behance: "",
    memberImage: Leslie,
  },
  {
    nombre: "Alba Saavedra",
    cargo: "Content Manager",
    cargo2: "",
    instagram: "",
    behance: "",
    memberImage: Alba,
  },
  {
    nombre: "Carlos Pacaya",
    cargo: "Graphic Designer",
    cargo2: "",
    instagram: "https://www.instagram.com/carlosmanuel.pr/",
    behance: "",
    memberImage: Carlos,
  },
  {
    nombre: "Iván Enciso",
    cargo: "Video Editor",
    cargo2: "",
    instagram: "https://www.instagram.com/ivanencisso/",
    behance: "",
    memberImage: null,
  },
  {
    nombre: "Jeff Blass",
    cargo: "CEO",
    cargo2: "Director General",
    instagram: "https://www.instagram.com/blasjeff/",
    behance: "",
    memberImage: Jeff,
  },
];
