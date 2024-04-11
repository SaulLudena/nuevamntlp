import Topnav from "../components/topnav/topnav";
import Footer from "../components/footer/footer";
import Presentation from "../components/presentation/presentation";
import PresentationComplement from "../components/presentation/presentationComplement";
import ChatMessageIcon from "../components/chatmessageIcon/chatMessageIcon";
import Ourteam from "../components/ourteam/ourteam";
import Contact from "../components/contact/contact";
import Testimonials from "../components/testimonials/testimonials";
import Faq from "../components/FAQ/faq";
import { useLayoutEffect } from "react";
export default function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Topnav />
      <Presentation />
      <PresentationComplement />
      <Ourteam />
      <Contact />
      <Testimonials />
      <Faq />
      <Footer />
      <ChatMessageIcon />
    </div>
  );
}
