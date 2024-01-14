export default function ReviewItem({
  image,
  clientName,
  clientReview,
  positionIndex,
}) {
  return (
    <div className="shadow-2xl rounded-2xl ">
      <div>
        <div>
          <img
            src={image}
            alt=""
            className="select-none rounded-t-2xl"
            draggable={false}
          />
        </div>
        <div className="grid gap-5 p-10">
          <div>
            <h1 className="text-5xl">{clientName}</h1>
          </div>
          <div>
            <p className="text-xl text-zinc-800">{clientReview}</p>
          </div>
          <div className="flex gap-4">
            <div
              className={`w-5 h-5 rounded-full ${
                positionIndex === 1 ? "bg-[#00E477]" : "bg-zinc-800"
              }`}
            ></div>
            <div
              className={`w-5 h-5 rounded-full ${
                positionIndex === 2 ? "bg-[#00E477]" : "bg-zinc-800"
              }`}
            ></div>
            <div
              className={`w-5 h-5 rounded-full ${
                positionIndex === 3 ? "bg-[#00E477]" : "bg-zinc-800"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
