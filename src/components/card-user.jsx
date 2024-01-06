import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardUser = ({ title, price, link, image_url }) => {
  return (
    <Link
      to={link}
      className="w-[260px] h-[260px] shadow-md hover:shadow-xl hover:cursor-pointer rounded-md border border-slate-200 mt-3 flex flex-col overflow-hidden">
      <img
        src={
          image_url ||
          "https://images.unsplash.com/photo-1503503330041-4cd943d2b61f?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="card-image"
        className="w-full h-1/2"
      />
      <div className="w-full h-1/2 flex flex-col justify-center pl-5 gap-[0.2rem]">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex gap-1">
          <FaStar className="text-[#F2C219] mt-[2px]" />
          <p className="text-[#F2C219]">5.0</p>
          <p className="text-[#B3B2B2]">(1K)</p>
        </div>
        <p className="text-[#B3B2B2] capitalize">harga tiket perorangan</p>
        <p className="text-[#F46264] font-bold">
          Rp. {price?.toLocaleString("id-ID")}
        </p>
      </div>
    </Link>
  );
};
