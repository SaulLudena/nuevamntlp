export default function LogoItem({ urlImagen }) {
  return (
    <li className="grid justify-center ">
      <img src={urlImagen} alt="" className="w-full select-none" />
    </li>
  );
}
