import OurClientItem from "./ourClientItem";

import LogoNetworkers1 from "../../../public/logos/fitovit.png";
import LogoNetworkers2 from "../../../public/logos/jeffblas.png";
import LogoNetworkers3 from "../../../public/logos/jimmygarcia.png";
import LogoNetworkers4 from "../../../public/logos/lazaroambulay.png";
import LogoNetworkers5 from "../../../public/logos/legacy.png";
import LogoNetworkers6 from "../../../public/logos/lizethvasquez.png";
import LogoNetworkers7 from "../../../public/logos/marlenigarcia.png";
import LogoNetworkers8 from "../../../public/logos/rosalopez.png";
import LogoNetworkers9 from "../../../public/logos/transformate.png";
import LogoNetworkers10 from "../../../public/logos/unavezmas.png";

export default function OurClients() {
  return (
    <div className="grid justify-center gap-5">
      <h1 className="text-4xl text-center">Nuestros clientes</h1>
      <p className="text-center garde_ghotic_semibold">
        Contamos con más de 10 clientes que ya han confiado en NuevaMnt
      </p>
      <ul className="grid grid-cols-5 gap-5 max-lg:grid-cols-2 max-md:grid-cols-2 max-md:justify-center">
        <OurClientItem clienteImagen={LogoNetworkers6} />
        <OurClientItem clienteImagen={LogoNetworkers2} />
        <OurClientItem clienteImagen={LogoNetworkers7} />
        <OurClientItem clienteImagen={LogoNetworkers3} />
        <OurClientItem clienteImagen={LogoNetworkers9} />
        <OurClientItem clienteImagen={LogoNetworkers1} />
        <OurClientItem clienteImagen={LogoNetworkers4} />
        <OurClientItem clienteImagen={LogoNetworkers5} />
        <OurClientItem clienteImagen={LogoNetworkers10} />
        <OurClientItem clienteImagen={LogoNetworkers8} />
      </ul>
    </div>
  );
}
