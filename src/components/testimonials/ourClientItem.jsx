export default function OurClientItem({ clienteImagen }) {
  return (
    <div className="flex justify-center text-center ">
      <img
        src={clienteImagen}
        alt=""
        className="w-[15rem] h-full select-none "
      />
    </div>
  );
}
