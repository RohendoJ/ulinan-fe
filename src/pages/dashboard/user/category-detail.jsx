import { Link, useParams } from "react-router-dom";
import { CardUser, FooterUser, Navbar } from "../../../components";

export const CategoryDetail = () => {
  const param = useParams();

  return (
    <main className="w-screen xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="text-[#2284DF] mt-[120px] w-full mx-[8%] hover:cursor-pointer">
        <Link to={"/"} className="text-[#807F7F]">
          Home / <Link to={"/category"}>Kategori</Link>
        </Link>{" "}
        / {param.name}
      </section>

      <section className="w-full h-[70px] px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">{param.name}</h1>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F5F6F7] h-[60%] pl-5 rounded-md w-[30%] border focus:outline-slate-400"
        />
      </section>

      <section className="max-w-full h-auto flex flex-wrap px-[8%] gap-7">
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
      </section>

      <section className="w-full h-[300px] bg-[#134F86] mt-10 flex flex-col justify-evenly items-center">
        <FooterUser />
      </section>
    </main>
  );
};
