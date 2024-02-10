import OurClientItem from "./ourClientItem";
import LogoNetowkers1 from "../../../public/logos/Logo Networkers-1.png";
import LogoNetowkers2 from "../../../public/logos/Logo Networkers-2.png";
import LogoNetowkers3 from "../../../public/logos/Logo Networkers-3.png";
import LogoNetowkers4 from "../../../public/logos/Logo Networkers-4.png";
import LogoNetowkers5 from "../../../public/logos/Logo Networkers-5.png";
import LogoNetworkers6 from "../../../public/logos/Logo Networkers-6.png";
import LogoNetworkers7 from "../../../public/logos/Logo Networkers-7.png";
import LogoNetworkers8 from "../../../public/logos/Logo Networkers-8.png";
import LogoNetworkers9 from "../../../public/logos/Logo Networkers-9.png";
import LogoNetworkers10 from "../../../public/logos/Logo Networkers-10.png";
export default function OurClients() {
  return (
    <div className="grid justify-center gap-5">
      <h1 className="text-4xl text-center">Nuestros clientes</h1>
      <p className="text-center garde_ghotic_semibold">
        Contamos con más de 10 clientes que ya han confiado en NuevaMnt
      </p>
      <ul className="grid grid-cols-5 gap-5">
        <OurClientItem clienteImagen={LogoNetworkers6} />
        <OurClientItem clienteImagen={LogoNetowkers2} />
        <OurClientItem clienteImagen={LogoNetworkers7} />
        <OurClientItem clienteImagen={LogoNetowkers3} />
        <OurClientItem clienteImagen={LogoNetworkers9} />
        <OurClientItem clienteImagen={LogoNetowkers1} />

        <OurClientItem clienteImagen={LogoNetowkers4} />
        <OurClientItem clienteImagen={LogoNetowkers5} />
        <OurClientItem clienteImagen={LogoNetworkers10} />
        <OurClientItem clienteImagen={LogoNetworkers8} />
      </ul>
    </div>
  );
}
