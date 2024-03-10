import { FaWhatsapp } from "react-icons/fa";
import TopnavContact from "../topnav/topnavContact";

export default function ServicesDetailItem({ servicessliderItem }) {
  const { title, paragraph1, include, images } = servicessliderItem;
  console.log(images[0].image1);
  return (
    <div className="grid grid-cols-12 max-xl:gap-20 max-xl:flex max-2xl:flex-col w-full max-w-[2800px] m-auto ">
      <div className="grid items-center col-span-6 w-[80%] max-w-[1500px] m-auto ">
        <div className="grid px-10 gap-7 max-md:px-0">
          <h1 className="text-5xl text-[#DC4242] max-md:text-4xl">{title}</h1>
          <p className="garde_ghotic_semibold max-md:text-sm">{paragraph1}</p>

          <ul className="grid gap-3">
            {include?.map((item, index) => (
              <li key={index} className="garde_ghotic_semibold max-md:text-sm">
                <span className="">
                  <p className="font-bold">• {item.title}:</p>
                  <p className=""> {item.description}</p>
                </span>
              </li>
            ))}
          </ul>
          <div className="w-full h-[2px] bg-[#DC4242] "></div>
          <div className="flex items-center justify-center gap-10">
            <p className="text-5xl better_yesterday ">¿Lo quieres?</p>
            <div className="text-center ">
              <a
                href={`https://api.whatsapp.com/send?phone=+573014000000&text=Hola,%20me%20interesa%20el%20servicio%20de%20${title}%20me%20gustaria%20saber%20mas`}
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-3 bg-gradient-to-r bg-[#dc4242] text-white text-sm flex items-center gap-3 justify-center"
              >
                <p>Contáctanos</p>
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6  max-xl:w-[100%] w-[100%] max-w-[1500px] m-auto grid grid-cols-6 ">
        <div className="col-span-6 ">
          <img src={images[0].image1} alt={images[0].image1} />
        </div>
        <div className="col-span-3 max-md:col-span-6">
          <img src={images[1].image2} alt={images[0].image1} />
        </div>
        <div className="col-span-3 max-md:col-span-6">
          <img src={images[2].image3} alt={images[0].image1} />
        </div>
      </div>
    </div>
  );
}
