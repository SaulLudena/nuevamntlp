import { FaChevronRight } from "react-icons/fa";

export default function ComplaintsbookItem({ complaints_book_item }) {
  const {
    complaints_book_title,
    complaints_book_content,
    complaints_book_more_content,
    complaints_book_more_text,
  } = complaints_book_item;
  return (
    <li>
      <div className="flex gap-3 w-[95%]">
        <div className="text-[#DC4242] ">
          <FaChevronRight className="text-6xl max-sm:text-5xl" />
        </div>
        <div className="grid gap-5 max-sm:gap-2">
          <h1 className="text-3xl max-lg:text-3xl">{complaints_book_title}</h1>
          <div className="grid gap-5 garde_ghotic_semibold">
            <p className="text-md max-lg:text-sm">{complaints_book_content}</p>
            <div className="grid gap-1">
              {complaints_book_more_content?.map((more_content_item) => {
                return (
                  <p key={more_content_item.id} className="font-bold">
                    {more_content_item.content}
                  </p>
                );
              })}
            </div>
          </div>
          <p>{complaints_book_more_text}</p>
        </div>
      </div>
    </li>
  );
}
