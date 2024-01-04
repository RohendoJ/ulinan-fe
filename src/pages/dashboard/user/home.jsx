import { FooterUser, Navbar } from "../../../components";
import "react-slideshow-image/dist/styles.css";
import { Slideshow } from "./slideshow";
import "react-alice-carousel/lib/alice-carousel.css";
import { CategoryHomepage } from "./category-homepage";

export const Home = () => {
  return (
    <main className="w-full h-auto flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex mt-24 h-[40px] xl:hidden w-full justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F5F6F7] w-[85%] h-full pl-5 rounded-md border focus:outline-slate-400"
        />
      </div>
      <Slideshow />
      <CategoryHomepage heading={"Rekomendasi"} />
      <section className="w-full px-[8%] mt-10 flex justify-center items-center">
        <h1 className="font-bold text-xl">Kategori</h1>
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
