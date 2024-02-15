import TeamMemberItem from "./teamMemberItem";
import memberImage from "../../../public/teammemberexample.png";
export default function Ourteam() {
  return (
    <div className="w-[70%] max-w-[1500px] m-auto py-20 grid gap-10">
      <div className="grid justify-center gap-3 text-center">
        <h1 className="text-8xl better_yesterday text-[#DC4242]">
          Nuestro team
        </h1>
        <h1 className="text-3xl">
          Conoce a los creativos que te ayudan a potenciar tu luz
        </h1>
        <p className="garde_ghotic_semibold">
          Somos un equipo capacitado para entender tus necesidades
        </p>
      </div>
      <ul className="grid grid-cols-4 grid-rows-2 gap-5 ">
        {teamMember.map((member, index) => (
          <TeamMemberItem
            key={index}
            nombre={member.nombre}
            cargo={member.cargo}
            instagram={member.instagram}
            behance={member.behance}
            memberImage={member.memberImage}
          />
        ))}
      </ul>
    </div>
  );
}

const teamMember = [
  {
    nombre: "Jeff Blass",
    cargo: "CEO y Director General",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Rafael del Solar",
    cargo: "Gerente de ventas",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Jesus Villacorta",
    cargo: "Director creativo",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Alba Saavedra",
    cargo: "Content Manager",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Leslie Cervera",
    cargo: "Senior Graphic Designer",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Carlos Pacaya",
    cargo: "Graphic Designer",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Maico Rodriguez",
    cargo: "Video Editor",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
  {
    nombre: "Wilson Cornejo",
    cargo: "Software Developer",
    instagram: "",
    behance: "",
    memberImage: memberImage,
  },
];
