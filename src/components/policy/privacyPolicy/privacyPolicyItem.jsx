import { FaChevronRight } from "react-icons/fa6";

export default function PrivacyPolicyItem({ privacy_policy_item }) {
  const { id, policy_name, policy_content, policy_more_content } =
    privacy_policy_item;
  return (
    <li>
      <div className="flex gap-3 w-[95%]">
        <div className="text-[#DC4242] ">
          <FaChevronRight className="text-6xl max-sm:text-5xl" />
        </div>
        <div className="grid gap-5 max-sm:gap-2">
          <h1 className="text-3xl max-lg:text-3xl">
            {id + ". " + policy_name}
          </h1>
          <div className="grid gap-5 garde_ghotic_semibold">
            <p className="text-md max-lg:text-sm">{policy_content}</p>
            <div className="grid gap-1">
              {policy_more_content?.map((more_content_item) => {
                return (
                  <p key={more_content_item.id}>{more_content_item.content}</p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
