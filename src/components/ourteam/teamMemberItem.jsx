import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaBehanceSquare } from "react-icons/fa";
export default function TeamMemberItem({
  nombre,
  cargo,
  cargo2,
  instagram,
  behance,
  memberImage,
}) {
  return (
    <div>
      <div>
        <img
          src={memberImage}
          alt=""
          className="object-cover w-full h-96 max-md:h-[35rem] max-sm:h-[25rem] max-sm:object-top"
        />
      </div>
      <div className="bg-[#EDCA21]">
        <div className="bg-[#EDCA21] p-5 flex flex-col justify-between gap-4">
          <h1 className="text-2xl truncate ">{nombre}</h1>
          <div>
            <h1 className="truncate garde_ghotic_semibold">{cargo}</h1>
            <h1 className="truncate garde_ghotic_semibold">
              {cargo2.length <= 0 ? "‎ " : cargo2}
            </h1>
          </div>
          <ul className="flex justify-end w-full gap-5 ">
            <li>
              <a href={instagram} target="_blank" rel="noreferrer">
                <BiLogoInstagramAlt size={30} />
              </a>
            </li>
            <li>
              <a href={behance} target="_blank" rel="noreferrer">
                <FaBehanceSquare size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
