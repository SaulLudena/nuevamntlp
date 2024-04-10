import PresentationBackground4 from "../../../../public/presentationBackground4.jpg";
import PrivacyPolicyItem from "./privacyPolicyItem.jsx";
export default function PrivacyPolicy() {
  return (
    <>
      <div className="grid items-center bg-[#0B0101] pt-16 " id="Inicio">
        <img
          src={PresentationBackground4}
          alt=""
          className="object-cover w-full select-none max-sm:opacity-20 max-lg:opacity-40 max-lg:object-right max-xl:object-cover h-[34rem] opacity-40"
        />

        <div className="absolute top-[10rem] flex items-center justify-center w-full max-xl:top-[13rem]">
          <div className="w-[80%] max-w-[1500px]">
            <div className="flex items-center justify-between">
              <div className="w-[100rem] max-md:w-full grid gap-6">
                <h1 className="text-8xl  text-[#EDCA21] max-xl:text-6xl max-lg:text-center max-sm:text-4xl w-[45rem] max-xl:w-[32rem] max-lg:w-full ">
                  Política de Privacidad de NuevaMNT:
                </h1>
                <p className="text-3xl text-[#DC4242] garde_ghotic_bold max-lg:text-lg max-lg:text-center max-sm:text-xs w-[40rem] max-lg:w-full ">
                  Fecha de vigencia: 01/24/27
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="w-[80%] max-w-[1500px] m-auto py-28 gap-16 grid">
        {privacy_policys.map((privacy_policy_item) => {
          return (
            <PrivacyPolicyItem
              key={privacy_policy_item.id}
              privacy_policy_item={privacy_policy_item}
            />
          );
        })}
      </ul>
    </>
  );
}

const privacy_policys = [
  {
    id: 1,
    policy_name: "Introducción",
    policy_content:
      "Bienvenido a NuevaMNT. Nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos la información que obtenemos a través de nuestro sitio web ubicado en https://www.nuevamnt.com",
  },
  {
    id: 2,
    policy_name: "Información que recopilamos",
    policy_content:
      "Podemos recopilar información personal y no personal sobre usted. Esto puede incluir, pero no se limita a, su nombre, dirección de correo electrónico, detalles de contacto, preferencias, intereses, y otra información relevante para encuestas y/u ofertas.",
  },
  {
    id: 3,
    policy_name: "Cómo usamos la información que recopilamos",
    policy_content:
      "Utilizamos su información para entender sus necesidades y brindarle un mejor servicio, en particular por las siguientes razones:",
    policy_more_content: [
      {
        id: 1,
        content: "•Mantenimiento interno de registros",
      },
      {
        id: 2,
        content: "•Mejora de nuestros productos y servicios.",
      },
      {
        id: 3,
        content:
          "•Envío periódico de correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información que consideremos   relevante para usted.",
      },
      {
        id: 4,
        content: "•Personalización del sitio web según sus intereses. ",
      },
    ],
  },
  {
    id: 4,
    policy_name: "Seguridad",
    policy_content:
      "Estamos comprometidos a garantizar que su información esté segura. Para prevenir el acceso no autorizado o la divulgación, hemos puesto en marcha procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.",
  },
  {
    id: 5,
    policy_name: "Control de su Información Personal",
    policy_content:
      "	Usted puede optar por restringir la recopilación o el uso de su información personal de las siguientes maneras:",
    policy_more_content: [
      {
        id: 1,
        content:
          "•Siempre que se le pida que complete un formulario en el sitio web, busque la casilla en la que puede hacer clic para indicar que no desea que la información sea utilizada por nadie con fines de marketing directo.",
      },
      {
        id: 2,
        content:
          "•Si previamente ha acordado con nosotros el uso de su información personal para fines de marketing directo, puede cambiar de opinión en cualquier momento escribiéndonos o enviándonos un correo electrónico.",
      },
    ],
  },
  {
    id: 6,
    policy_name: "Enlaces a Otros Sitios Web",
    policy_content:
      "Nuestro sitio web puede contener enlaces a otros sitios web de interés. Sin embargo, una vez que haya utilizado estos enlaces para abandonar nuestro sitio, debe tener en cuenta que no tenemos ningún control sobre ese otro sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que proporcione mientras visita tales sitios y dichos sitios no están gobernados por esta declaración de privacidad.",
  },
  {
    id: 7,
    policy_name: "Cambios a Nuestra Política de Privacidad",
    policy_content:
      "Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, por lo que le recomendamos revisarla frecuentemente. Los cambios y aclaraciones entrarán en vigor inmediatamente después de su publicación en el sitio web.",
  },
  {
    id: 8,
    policy_name: "Contacto",
    policy_content:
      "Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos mediante hola@nuevamnt.com",
  },
];
