export default function Contact() {
  return (
    <div className="bg-black">
      <div className="w-[80%] max-w-[1500px] m-auto py-20 grid gap-10 ">
        <div className="flex items-center max-lg:flex-col">
          <div className="text-[#EDCA21]  grid gap-5">
            <p className="text-4xl">Mantente informado en todo momento</p>
            <p className="garde_ghotic_semibold">
              Puedes suscribirte a nuesto boletín semanal para recibir las
              últimas noticias y actualizaciones. También puedes seguirnos en
              nuestras redes sociales.
            </p>
          </div>
          <div className="">
            <iframe
              src="https://embeds.beehiiv.com/a4f00b52-829f-437e-90db-14863bc6a19a"
              data-test-id="beehiiv-embed"
              width="480"
              height="320"
              frameBorder="0"
              scrolling="no"
              style={{
                borderRadius: "4px",

                margin: 0,
                backgroundColor: "transparent",
              }}
              className="w-[480px] max-md:w-[100%]"
              title="Embedded Content"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
