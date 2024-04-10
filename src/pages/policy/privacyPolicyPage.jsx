import Topnav from "../../components/topnav/topnav";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import PrivacyPolicy from "../../components/policy/privacyPolicy/privacyPolicy";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
export default function PrivacyPolicyPage() {
  let { pathname } = useLocation();
  console.log(pathname);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Topnav />
      <PrivacyPolicy />
      <Contact />
      <Footer />
    </>
  );
}
