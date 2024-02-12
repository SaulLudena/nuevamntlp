import TestimonialImg from "../../../public/testimonials/testimonialAuthor1.png";
export default function TestimonialsItem() {
  return (
    <div className="grid grid-cols-12 p-10 ">
      <div className="flex justify-end col-span-5 ">
        <img
          src={TestimonialImg}
          alt=""
          className="object-cover h-full w-96 "
        />
      </div>
      <div className="grid items-center h-full col-span-7 py-10">
        <div className="bg-[#DC4242] h-full text-white p-10 grid">
          <p className="text-2xl">Networker</p>
          <h1 className="text-5xl">Jimmy Garcia</h1>
          <div className="w-full h-[0.5px] bg-white"></div>
          <p className=" garde_ghotic_semibold">
            “Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum risus
            faucibus faucibus arcu libero pellentesque vitae dignissim. Mattis
            risus nisi aliquam molestie enim etiam. Facilisis scelerisque
            lacinia augue facilisis placerat eget dui pellentesque gravida.
            Euismod purus turpis odio mi eu eu quam urna et. Penatibus
            adipiscing at non sed vitae a non. Tristique a sollicitudin nunc ac
            sollicitudin. eu eu quam urna et. Penatibus adipiscing at non sed
            vitae a non. Tristique a sollicitudin nunc ac sollic eu eu q n.
            Tristique a sollicitudin nunc ac sollicitudin. eu eu quam urna et.
            Penatibus adipiscing at non sed vitae a non. Tristique a
            sollicitudin nunc ac sollic eu eu quam urna et”
          </p>
        </div>
      </div>
    </div>
  );
}
