export default function TopnavItem({ href, label }) {
  return (
    <li>
      <a
        href={href}
        className="grid justify-center text-center transition duration-200 border-b-4 border-white/50 hover:border-b-4 hover:border-[#F3CF00] px-5 py-2"
      >
        {label}
      </a>
    </li>
  );
}
