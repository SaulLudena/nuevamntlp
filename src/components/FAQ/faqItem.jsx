import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

export default function FaqItem() {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left text-black bg-[#EDCA21] focus:outline-none  ">
              <span>
                Lorem ipsum dolor sit amet consectetur. Sed phasellus lorem
                fusce interdum.
              </span>
              <FaChevronUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm  bg-[#EDCA21] text-[#434343]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                eligendi. Et nostrum, eaque optio iste earum dolores nihil,
                deserunt quo, totam ad itaque ab placeat minus veritatis unde
                quod harum earum dolores nihil, deserunt quo, totam ad itaque ab
                placeat minus veritatis unde quod harum earum dolores nihil,
                deserunt quo, totam ad itaque ab placeat minus veritatis unde
                quod harum?
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
