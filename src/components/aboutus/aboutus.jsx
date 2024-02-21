import Networkers from "../../../public/logos/Networkers.png";
import LogoNetowkers1 from "../../../public/logos/Logo Networkers-1.png";
import LogoNetowkers2 from "../../../public/logos/Logo Networkers-2.png";
import LogoNetowkers3 from "../../../public/logos/Logo Networkers-3.png";
import LogoNetowkers4 from "../../../public/logos/Logo Networkers-4.png";
import LogoNetowkers5 from "../../../public/logos/Logo Networkers-5.png";
import LogoItem from "./logoItem";
export default function Aboutus() {
  return (
    <div className=" bg-[#EDCA21] " id="Nosotros">
      <div className="w-[80%] max-w-[1500px] m-auto grid gap-5  pt-40 max-lg:pt-20 max-md:pt-10 ">
        <div className="grid justify-center w-full text-center">
          <h1 className="text-5xl  w-[50rem] max-lg:w-auto max-md:text-3xl">
            Somos la opción #1 de los Networkers más TOP de Venta Directa
            Multinivel
          </h1>
        </div>
        <p className="text-2xl text-center max-md:text-sm">
          Ayudamos a nuestros clientes a compartir su luz y mensaje con el mundo
        </p>
        <ul className="grid grid-cols-5 max-md:w-[95%] w-[80%] max-w-[1500px] m-auto">
          <LogoItem urlImagen={LogoNetowkers5} />
          <LogoItem urlImagen={LogoNetowkers4} />
          <LogoItem urlImagen={LogoNetowkers1} />
          <LogoItem urlImagen={LogoNetowkers2} />
          <LogoItem urlImagen={LogoNetowkers3} />
        </ul>
        <div>
          <img
            src={Networkers}
            alt="networkers"
            className="object-cover max-md:w-[70rem] w-full h-full select-none"
          />
        </div>
      </div>
    </div>
  );
}
