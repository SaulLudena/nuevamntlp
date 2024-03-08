import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

export default function FaqItem({ label, detail }) {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="px-7 py-5 flex justify-between w-full  text-sm font-medium text-left text-black bg-[#EDCA21] focus:outline-none  ">
              <p className="text-2xl max-md:text-xl">{label}</p>
              <FaChevronUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-7 pb-5  bg-[#EDCA21] text-[#434343]">
              <ul className="grid gap-3 px-3">
                {detail?.map((item, index) => {
                  return (
                    <li key={index} className="font-light">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
