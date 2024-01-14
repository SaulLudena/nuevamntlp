import TopnavLogo from "../../assets/TopnavLogo.png";

export default function Topnav() {
  return (
    <div className="fixed z-40 w-full px-10 py-5 text-xl bg-white/50 backdrop-blur-2xl">
      <div className="flex items-center justify-between ">
        <div>
          <img src={TopnavLogo} alt="NuevamenteLogo" className="w-24 h-auto" />
        </div>
        <div>
          <ul className="flex gap-5 text-xl">
            <li className="grid justify-center text-center transition duration-200 border-b-4 border-white/50 hover:border-b-4 hover:border-[#F3CF00] px-5 py-2">
              Inicio
            </li>
            <li className="grid justify-center text-center transition duration-200 border-b-4 border-white/50 hover:border-b-4 hover:border-[#F3CF00] px-5 py-2">
              Nosotros
            </li>
            <li className="grid justify-center text-center transition duration-200 border-b-4 border-white/50 hover:border-b-4 hover:border-[#F3CF00] px-5 py-2">
              Servicios
            </li>
            <li className="grid justify-center text-center transition duration-200 border-b-4 border-white/50 hover:border-b-4 hover:border-[#F3CF00] px-5 py-2">
              Reseñas
            </li>
            <li className="grid justify-center text-center transition duration-200 border-b-4 border-white/50 hover:border-b-4 hover:border-[#F3CF00] px-5 py-2">
              Visión
            </li>
          </ul>
        </div>
        <div className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl">
          Contáctanos
        </div>
      </div>
    </div>
  );
}
