import { Link, useParams } from "react-router-dom";
import { CardUser, FooterUser, Navbar } from "../../../components";

export const CategoryDetail = () => {
  const param = useParams();

  return (
    <main className="w-screen xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="text-[#2284DF] mt-[120px] ml-[8%] hover:cursor-pointer">
        <Link to={"/"} className="text-[#807F7F]">
          Home / Kategori
        </Link>{" "}
        / {param.name}
      </section>

      <section className="w-full ml-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">Paket Event</h1>
        <p className="text-[#2284DF]">See All</p>
      </section>

      <section className="min-w-auto h-auto flex pl-[8%] gap-7">
        <CardUser />
      </section>

      <section className="w-full h-[300px] bg-[#134F86] mt-10 flex flex-col justify-evenly items-center">
        <FooterUser />
      </section>
    </main>
  );
};
