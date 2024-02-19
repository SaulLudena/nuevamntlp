import TopnavLogoSrc from "../../../public/TopnavLogo2.png";

export default function TopnavLogo() {
  return (
    <div>
      <img
        src={TopnavLogoSrc}
        alt="NuevamenteLogo"
        className="w-48 h-auto max-sm:w-20"
      />
    </div>
  );
}
