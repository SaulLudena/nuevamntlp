import { useEffect } from "react";
import Topnav from "./components/topnav/topnav";
import Presentation from "./components/presentation/presentation";
import Aboutus from "./components/aboutus/aboutus";
import Ourservices from "./components/ourservices/ourservices";
import Reviews from "./components/reviews/reviews";
import Vision from "./components/vision/vision";
import Footer from "./components/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Topnav />

      <Presentation />
      <Aboutus />
      <Ourservices />
      <Reviews />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;
