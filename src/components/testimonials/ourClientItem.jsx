export default function OurClientItem({ clienteImagen }) {
  return (
    <div>
      <img
        src={clienteImagen}
        alt=""
        className="w-[15rem] h-full select-none"
      />
    </div>
  );
}
