import { Link } from "react-router-dom";

export const ButtonLinkAdmin = ({ href }) => {
  return (
    <Link
      to={href}
      className="flex items-center justify-center border-2 h-11 px-6 rounded-xl text-xl bg-[#2284DF] text-white">
      Tambah
    </Link>
  );
};
