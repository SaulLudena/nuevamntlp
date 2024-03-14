import Networkers from "../../../public/logos/Networkers.png";
import LazaroAmbulay from "../../../public/logos/lazaroambulay.png";
import RosaLopez from "../../../public/logos/rosalopez.png";
import UnaVezMas from "../../../public/logos/unavezmas.png";
import MarleniGarcia from "../../../public/logos/marlenigarcia.png";
import JimmyGarcia from "../../../public/logos/jimmygarcia.png";
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

        <div>
          <img
            src={Networkers}
            alt="networkers"
            className="object-cover max-md:w-[80rem] w-full h-full select-none"
          />
        </div>
      </div>
    </div>
  );
}
