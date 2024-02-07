export default function TopnavItem({ href, label }) {
  return (
    <li>
      <a
        href={href}
        className="grid justify-center px-5 py-2 text-center text-white transition duration-200"
      >
        {label}
      </a>
    </li>
  );
}
