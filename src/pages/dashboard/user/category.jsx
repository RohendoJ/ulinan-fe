import { Link } from "react-router-dom";
import { FooterUser, Navbar } from "../../../components";
import { CategoryHomepage } from "./category-homepage";

export const HomeCategory = () => {
  return (
    <main className="w-full xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="text-[#2284DF] mt-[120px] ml-[8%] hover:cursor-pointer">
        <Link to={"/"} className="text-[#807F7F]">
          Home /
        </Link>{" "}
        Kategori
      </section>

      <CategoryHomepage heading={"Paket Event"} seeAll />
      <CategoryHomepage heading={"Wisata"} seeAll />
      <CategoryHomepage heading={"Event"} seeAll />
      <CategoryHomepage heading={"Food"} seeAll />
      <CategoryHomepage heading={"Entertainment"} seeAll />
      <FooterUser />
    </main>
  );
};
