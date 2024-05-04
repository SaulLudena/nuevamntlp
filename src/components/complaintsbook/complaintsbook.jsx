import PresentationBackground4 from "../../../public/important_images/presentationBackground4.jpg";
import ComplaintsbookItem from "./complaintsbookItem";
export default function Complaintsbook() {
  return (
    <>
      <div>
        <div className="grid items-center bg-[#0B0101] pt-16 " id="Inicio">
          <img
            src={PresentationBackground4}
            alt=""
            className="object-cover w-full select-none max-sm:opacity-20 max-lg:opacity-40 max-lg:object-right max-xl:object-cover h-[34rem] opacity-40"
          />

          <div className="absolute top-[10rem] flex items-center justify-center w-full max-xl:top-[13rem]">
            <div className="w-[80%] max-w-[1500px] ">
              <div className="flex items-center justify-between">
                <div className="w-[100rem] max-md:w-full grid gap-6">
                  <h1 className="text-8xl  text-[#EDCA21] max-xl:text-6xl max-lg:text-center max-sm:text-4xl w-[45rem] max-xl:w-[32rem] max-lg:w-full ">
                    Libro de reclamaciones y sugerencias:
                  </h1>
                  <p className="text-3xl text-[#DC4242] garde_ghotic_bold max-lg:text-lg max-lg:text-center max-sm:text-xs w-[40rem] max-lg:w-full ">
                    Fecha de vigencia: 01/24/27
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="w-[80%] max-md:w-[100%] max-w-[1500px] m-auto py-28 gap-16 grid ">
        {complaints_book.map((complaints_book_item) => {
          return (
            <ComplaintsbookItem
              key={complaints_book_item.id}
              complaints_book_item={complaints_book_item}
            />
          );
        })}
      </ul>
    </>
  );
}

const complaints_book = [
  {
    id: 1,
    complaints_book_title:
      "Tus opiniones y sugerencias son muy importantes para nosotros",
    complaints_book_content:
      "Por favor para presentar un reclamo ante nuestro libro de reclamaciones, sírvase a enviarnos un correo a: holanuevamnt@gmail.com",
    complaints_book_more_content: [
      {
        id: 1,
        content: "• Nombres completos",
      },
      {
        id: 2,
        content: "• Fecha de reclamo",
      },
      {
        id: 3,
        content: "• Documento de identidad",
      },
      {
        id: 4,
        content: "• Número de contacto",
      },
      {
        id: 5,
        content: "• Reclamo por escrito",
      },
    ],
    complaints_book_more_text:
      "Gracias, atenderemos su reclamo o solicitud en no más de 72 horas hábiles.",
  },
];
