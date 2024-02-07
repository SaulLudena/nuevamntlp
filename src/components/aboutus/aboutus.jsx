import PresentationBackground4 from "../../../public/presentationBackground4.png";
import LogoItem from "./logoItem";
export default function Aboutus() {
  return (
    <div className=" bg-[#EDCA21] " id="Nosotros">
      <div className="w-[80%] max-w-[1500px] m-auto grid gap-5  py-20">
        <div className="grid justify-center w-full text-center">
          <h1 className="text-4xl  w-[50rem]">
            Somos la opción #1 de los Networkers más TOP de Venta Directa
            Multinivel
          </h1>
        </div>
        <p className="text-center">
          Ayudamos a nuestros clientes a compartir su luz y mensaje con el mundo
        </p>
        <ul className="grid grid-cols-5 gap-5">
          <LogoItem urlImagen />
          <LogoItem urlImagen />
          <LogoItem urlImagen />
          <LogoItem urlImagen />
          <LogoItem urlImagen />
        </ul>
        <div>
          <img
            src={PresentationBackground4}
            alt=""
            className="object-cover w-full h-80"
          />
        </div>
      </div>
    </div>
  );
}
