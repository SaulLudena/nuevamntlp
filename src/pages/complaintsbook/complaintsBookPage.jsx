import Complaintsbook from "../../components/complaintsbook/complaintsbook";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Topnav from "../../components/topnav/topnav";
import { useLayoutEffect } from "react";
export default function ComplaintsBookPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex flex-col justify-between h-[calc(100dvh)] ">
      <Topnav />
      <Complaintsbook />
      <Contact />
      <Footer />
    </div>
  );
}
