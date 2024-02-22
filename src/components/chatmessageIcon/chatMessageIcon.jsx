import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ChatMessageOpen from "./chatMessageOpen";
export default function ChatMessageIcon() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      {open ? <ChatMessageOpen /> : null}
      <div className="fixed z-50 select-none bottom-10 right-10 max-md:right-5 max-md:bottom-5">
        <div
          className="p-3 text-white bg-[#25D366] rounded-full shadow-xl transition cursor-pointer duration-200"
          onClick={() => handleOpen()}
        >
          {!open ? (
            <div className="transition duration-200 ">
              <FaWhatsapp className="text-5xl max-md:text-4xl" />
            </div>
          ) : (
            <div>
              <IoMdClose className="text-5xl max-md:text-4xl" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
