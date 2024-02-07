import TopnavContact from "./topnavContact";
import TopnavItem from "./topnavItem";
import TopnavLogo from "./topnavLogo";

export default function ResponsiveTopnav({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0  " : "-translate-x-[120%]"
      } z-40 w-full  text-xl bg-white backdrop-blur-2xl  transition duration-700 fixed   flex-col items-center justify-center] hidden  max-lg:flex h-[100vh] top-0 left-0 border-2 border-black`}
    >
      <div className="flex flex-col items-center justify-between h-full py-20">
        <TopnavLogo />

        <div>
          <ul className="flex gap-5 text-xl max-lg:hidden">
            <TopnavItem href="/" label="Inicio" />
            <TopnavItem href="/Servicios" label="Servicios" />
            <TopnavItem href="/Testimonios" label="Testimonios" />
            <TopnavContact />
          </ul>
        </div>
        <div className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl ">
          Contáctanos
        </div>
      </div>
    </div>
  );
}
