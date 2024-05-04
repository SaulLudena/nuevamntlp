import { Link } from "react-router-dom";
import TopnavLogoSrc from "../../../public/important_images/TopnavLogo2.png";

export default function TopnavLogo() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to="/#Inicio" onClick={scrollToTop}>
      <img
        src={TopnavLogoSrc}
        alt="NuevamenteLogo"
        className="w-48 h-auto max-sm:w-28"
      />
    </Link>
  );
}
