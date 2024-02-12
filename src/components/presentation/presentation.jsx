import PresentationBackground4 from "../../../public/presentationBackground4.png";
import TopnavContact from "../topnav/topnavContact";

export default function presentation() {
  return (
    <div className="grid items-center" id="Inicio">
      <img
        src={PresentationBackground4}
        alt=""
        className="object-cover w-full h-full select-none "
      />

      <div
        className="absolute w-full "
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className=" w-[80%] max-w-[1500px] m-auto  -translate-y-20">
          <div className="flex items-center justify-between ">
            <div className=" w-[50rem] grid gap-10">
              <h1 className="text-8xl text-[#EDCA21]">
                Comparte tu luz con el mundo
              </h1>
              <p className="text-3xl text-white garde_ghotic_semibold">
                Somos la única aceleradora de negocios especializada en venta
                directa multinivel
              </p>
              <div className="flex">
                <TopnavContact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
