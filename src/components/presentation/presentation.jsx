import LogoPresentationSrc from "../../../public/LogoPresentation.png";
import PresentationBackground from "../../../public/presentationBackground.png";

export default function presentation() {
  return (
    <div
      className=" w-[1500px] max-w-full m-auto  h-[80vh] items-center grid pt-32 max-2xl:pt-52 mb-20"
      id="Inicio"
    >
      <div>
        <img
          src={PresentationBackground}
          alt=""
          className="object-cover w-full h-full select-none"
        />
      </div>
      <div
        className="absolute px-20 "
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="flex items-center ">
          <div className="grid gap-5">
            <div>
              <h1 className="text-9xl">COMPARTE TU LUZ</h1>
              <h1 className="text-9xl">CON EL MUNDO</h1>
            </div>
            <div className="w-2/3">
              <p className="text-2xl">
                SOMOS LA ÚNICA ACELERADORA DE NEGOCIOS ESPECIALIZADA EN VENTA
                DIRECTA MULTINIVEL
              </p>
            </div>
            <div className="flex">
              <div className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl">
                Contáctanos
              </div>
            </div>
          </div>
          <div>
            <img src={LogoPresentationSrc} alt={LogoPresentationSrc} />
          </div>
        </div>
      </div>
    </div>
  );
}
