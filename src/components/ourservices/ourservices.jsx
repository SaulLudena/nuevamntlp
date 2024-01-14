import CirclesSrc from "../../assets/circles.svg";
import OurServices1Src from "../../assets/ourservices1.png";
export default function Ourservices() {
  return (
    <div className="mt-10 ">
      <div className=" w-[1500px] max-w-full m-auto">
        <div className="px-20 py-20">
          <div>
            <div className="mb-10 text-7xl">
              <h1 className="text-center">NUESTROS SERVICIOS</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-10">
            <div className="flex items-center justify-between col-span-1 bg-white shadow-xl rounded-3xl">
              <div className="grid">
                <div className="flex justify-between">
                  <h1 className="p-10 text-5xl">Servicio 1</h1>
                  <img
                    src={CirclesSrc}
                    alt="circles"
                    className="object-cover w-32 h-32 rounded-tr-3xl"
                  />
                </div>
                <div className="grid gap-5 p-10">
                  <p className="text-2xl text-zinc-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut aliqua. Ut enim ad minim
                    veniam.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#FFF409]"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between col-span-1 row-span-2 bg-white shadow-xl rounded-3xl">
              <div className="grid">
                <div className="flex justify-between">
                  <h1 className="p-10 text-5xl">Servicio 2</h1>
                  <img
                    src={CirclesSrc}
                    alt="circles"
                    className="w-32 h-32 rounded-tr-3xl"
                  />
                </div>
                <div className="grid gap-5">
                  <p className="px-10 text-2xl text-zinc-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut aliqua. Ut enim ad minim
                    veniam.
                  </p>
                  <ul className="px-24">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut aliqua.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut aliqua.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut aliqua.
                    </li>
                  </ul>
                  <div className="flex gap-4 px-10">
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-[#FFF409]"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                  </div>
                  <div className="bottom-0 flex h-60">
                    <img
                      src={OurServices1Src}
                      alt="ourservices1"
                      className="object-cover w-full h-full rounded-b-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between col-span-1 bg-white shadow-xl rounded-3xl">
              <div className="grid">
                <div className="flex justify-between">
                  <h1 className="p-10 text-5xl">Servicio 3</h1>
                  <img
                    src={CirclesSrc}
                    alt="circles"
                    className="object-cover w-32 h-32 rounded-tr-3xl"
                  />
                </div>
                <div className="grid gap-5 p-10">
                  <p className="text-2xl text-zinc-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut aliqua. Ut enim ad minim
                    veniam.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                    <div className="w-5 h-5 rounded-full bg-[#FFF409]"></div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between col-span-2 bg-white shadow-xl rounded-3xl">
              <div className="grid w-full h-full">
                <div className="flex justify-between ">
                  <h1 className="p-10 text-5xl">Servicio 4</h1>
                  <img
                    src={CirclesSrc}
                    alt="circles"
                    className="object-cover w-32 h-32 rounded-tr-3xl"
                  />
                </div>
                <div className="grid gap-5 p-10">
                  <p className="text-2xl text-zinc-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut aliqua. Ut enim ad minim
                    veniam sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut aliqua.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-zinc-800"></div>
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
