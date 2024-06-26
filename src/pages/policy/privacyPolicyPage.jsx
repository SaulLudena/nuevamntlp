import Topnav from "../../components/topnav/topnav";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import PrivacyPolicy from "../../components/policy/privacyPolicy/privacyPolicy";
import { useLayoutEffect } from "react";

export default function PrivacyPolicyPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex flex-col justify-between h-[calc(100dvh)] ">
      <Topnav />
      <PrivacyPolicy />
      <Contact />
      <Footer />
    </div>
  );
}
