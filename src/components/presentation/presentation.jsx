import { useEffect } from "react";
import LogoPresentationSrc from "../../assets/LogoPresentation.png";
import PresentationBackground from "../../assets/presentationBackground.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../animations.css";
export default function presentation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className=" w-[1500px] max-w-full m-auto  h-[80vh] items-center grid"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div>
        <img src={PresentationBackground} alt="" className="select-none" />
      </div>
      <div className="absolute px-20 ">
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
