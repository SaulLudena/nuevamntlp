import TestimonialImg from "../../../public/testimonials/Rectangle 227.png";
export default function TestimonialsItem() {
  return (
    <div className="flex border-2 border-black w-[80%] m-auto w-max-[1500px]">
      <div>
        <img src={TestimonialImg} alt="" />
      </div>
      <div>
        <h2>Networker</h2>
        <h1>Jimmy Garcia</h1>
        <div className="w-full h-4 bg-black"></div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eos
          reprehenderit iusto mollitia sint cupiditate vel expedita sit ipsa
          voluptatibus natus perferendis provident velit, assumenda maxime
          voluptas culpa fugit eligendi?
        </p>
      </div>
    </div>
  );
}
