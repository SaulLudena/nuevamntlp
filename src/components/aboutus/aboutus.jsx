import fourcirclesSrc from "../../../public/fourcircles.png";
import aboutus1src from "../../../public/aboutus1.png";
import aboutus2src from "../../../public/aboutus2.png";
export default function Aboutus() {
  return (
    <div className="relative bg-white mt-72 " id="Nosotros">
      <div className=" w-[1500px] max-w-full m-auto">
        <div className="px-20 py-20">
          <div className="mb-6 ">
            <img
              src={fourcirclesSrc}
              alt="fourcircles"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div>
            <div className="mb-10 text-7xl">
              <h1 data-aos="fade-up" data-aos-duration="2000">
                Brilla con tus ideas
              </h1>
              <h1 data-aos="fade-up" data-aos-duration="2500">
                Alcanza tu potencial !
              </h1>
            </div>
            <div className="grid gap-20">
              <div className="flex items-center gap-20">
                <img src={aboutus1src} alt="" data-aos="zoom-in" />
                <div className="grid gap-10">
                  <h1
                    className="text-5xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Title 1
                  </h1>
                  <ul className="grid gap-2 text-2xl text-zinc-800">
                    <li
                      className="flex gap-5 "
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div>
                        <div className="w-4 h-4 rounded-full bg-[#F3CF00]"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </li>
                    <li
                      className="flex gap-5"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                    >
                      <div>
                        <div className="w-4 h-4 rounded-full bg-[#F3CF00]"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </li>
                    <li
                      className="flex gap-5"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div>
                        <div className="w-4 h-4 rounded-full bg-[#F3CF00]"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-20">
                <img src={aboutus2src} alt="" data-aos="zoom-in" />
                <div className="grid gap-10">
                  <h1
                    className="text-5xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Title 2
                  </h1>
                  <ul className="grid gap-2 text-2xl text-zinc-800">
                    <li
                      className="flex gap-5 "
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div>
                        <div className="w-4 h-4 rounded-full bg-[#F3CF00]"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </li>
                    <li
                      className="flex gap-5"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                    >
                      <div>
                        <div className="w-4 h-4 rounded-full bg-[#F3CF00]"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </li>
                    <li
                      className="flex gap-5"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div>
                        <div className="w-4 h-4 rounded-full bg-[#F3CF00]"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-32">
              <h1
                className="mb-10 text-center text-7xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Nosotros tenemos
              </h1>
              <div className="grid grid-cols-3 gap-10 ">
                <div
                  className="flex items-center justify-between col-span-1 p-10 bg-white shadow-xl rounded-3xl"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="grid gap-3">
                    <h1 className="text-7xl">+3</h1>
                    <p className="text-2xl">Años de experiencia</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#FFF409]"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between col-span-1 p-10 bg-white shadow-xl rounded-3xl"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="grid gap-3">
                    <h1 className="text-7xl">100</h1>
                    <p className="text-2xl">CLIENTES SATISTECHOS</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-[#FFF409]"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between col-span-1 p-10 bg-white shadow-xl rounded-3xl"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  <div className="grid gap-3">
                    <h1 className="text-7xl">+10</h1>
                    <p className="text-2xl">PROFESIONALES A TU SERVICIO</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-[#FFF409]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
