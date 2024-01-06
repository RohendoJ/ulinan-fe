import { Link } from "react-router-dom";

export const CardAdmin = ({ name, value, icon, link, onClick, isLoading }) => {
  return isLoading ? (
    <div className="w-[18rem] xl:w-[409px] h-[130px] bg-[#EBEAEA] animate-pulse flex cursor-wait duration-300 bg-"></div>
  ) : (
    <Link
      onClick={onClick}
      to={link}
      className="w-[18rem] xl:w-[409px] h-[130px] flex cursor-pointer hover:scale-105 duration-300">
      <div className="w-[1.5%] xl:w-[1%] h-full bg-[#2284DF]"></div>
      <div className="w-full h-full flex items-center justify-between bg-[#EBEAEA] py-4 px-6">
        <div className="flex flex-col justify-center gap-2 ">
          <h1 className="text-2xl font-bold">{name}</h1>
          <span className="text-3xl font-bold">{value}</span>
        </div>
        <span className="text-8xl text-[#63A8E9]">{icon}</span>
      </div>
    </Link>
  );
};
