import NuevamenteLogoSrc from "../../../public/TopnavLogo.png";
export default function Footer() {
  return (
    <div className="bg-white">
      <div className=" w-[1500px] max-w-full m-auto">
        <div className="px-20 py-20">
          <div className="grid gap-20 ">
            <div>
              <img src={NuevamenteLogoSrc} alt="Footer Logo" />
            </div>
            <ul className="flex justify-between">
              <li>
                <ul>
                  <li className="mb-10 text-2xl">Inicio</li>
                  <ul className="grid gap-5 text-zinc-600">
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Reseñas</li>
                    <li>Visión</li>
                  </ul>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mb-10 text-2xl">Redes sociales</li>
                  <ul className="grid gap-5 text-zinc-600">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Tik Tok</li>
                    <li>Whatsapp</li>
                  </ul>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mb-10 text-2xl">En colaboracion con</li>
                  <ul className="grid gap-5 text-zinc-600">
                    <li>Dono dev</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
