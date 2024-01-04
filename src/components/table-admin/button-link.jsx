import { Link } from "react-router-dom";

export const ButtonLinkAdmin = ({
  href,
  children = "Tambah",
  backgroundColor = "bg-[#2284DF]",
  textSize = "text-xl",
}) => {
  return (
    <Link
      to={href}
      className={`flex items-center justify-center border-2 h-11 px-6 rounded-xl ${textSize} ${backgroundColor} text-white`}>
      {children}
    </Link>
  );
};
