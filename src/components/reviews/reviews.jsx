import Client1Src from "../../../public/client1.png";
import Client2Src from "../../../public/client2.png";
import Client3Src from "../../../public/client3.png";
import ReviewItem from "./reviewItem";
export default function Reviews() {
  return (
    <div className="pt-10 bg-white" id="Reseñas">
      <div className=" w-[1500px] max-w-full m-auto">
        <div className="px-20 py-20 ">
          <div className="mb-10 text-7xl">
            <h1
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Reseñas
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <ReviewItem
              image={Client1Src}
              clientName="Client 1"
              clientReview="“Lorem ipsum dolor sit consecteto eiusmod sit amet,conseteto eiusmod”"
              positionIndex={1}
              data_aos_duration_value="2000"
            />
            <ReviewItem
              image={Client2Src}
              clientName="Client 1"
              v
              clientReview="“Lorem ipsum dolor sit consecteto eiusmod sit amet,conseteto eiusmod”"
              positionIndex={2}
              data_aos_duration_value="3000"
            />
            <ReviewItem
              image={Client3Src}
              clientName="Client 1"
              clientReview="“Lorem ipsum dolor sit consecteto eiusmod sit amet,conseteto eiusmod”"
              positionIndex={3}
              data_aos_duration_value="4000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
