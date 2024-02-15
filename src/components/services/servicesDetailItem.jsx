import TopnavContact from "../topnav/topnavContact";

export default function ServicesDetailItem({
  collageImagen1,
  title,
  paragraph1,
  paragraph2,
}) {
  return (
    <div className="grid grid-cols-12 gap-20">
      <div className="grid items-center col-span-6 ">
        <div className="grid gap-12 px-10">
          <h1 className="text-5xl text-[#DC4242] ">{title}</h1>
          <p className="garde_ghotic_semibold animate-fadeIn">{paragraph1}</p>

          <h2 className="text-[#434343] text-2xl animate-fadeIn">Incluye:</h2>
          <p className="garde_ghotic_semibold animate-fadeIn">{paragraph2}</p>
          <div className="w-full h-[2px] bg-[#DC4242] animate-fadeIn"></div>
          <div className="flex items-center justify-center gap-10 animate-fadeIn">
            <p className="text-5xl better_yesterday animate-fadeIn">
              ¿Lo quieres?
            </p>
            <div className="text-center animate-fadeIn">
              <TopnavContact />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 animate-fadeIn">
        <img src={collageImagen1} alt="" className="w-full" />
      </div>
    </div>
  );
}
