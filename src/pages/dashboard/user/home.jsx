import { FooterUser, Navbar } from "../../../components";
import "react-slideshow-image/dist/styles.css";
import { Slideshow } from "./slideshow";
import "react-alice-carousel/lib/alice-carousel.css";
import { CategoryHomepage } from "./category-homepage";
import { useGetCategory } from "../admin/category/hooks";
import { Fragment, useEffect, useMemo, useState } from "react";
import { CategoryHomepageRecommendation } from "./category-rekomendasi";
import { useSearchProduct } from "../../../utils/hooks";
import { SearchProduct } from "./search-product";

export const Home = () => {
  const { getSearch, setSearch } = useSearchProduct();

  const { data, isLoading } = useGetCategory();

  const category = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [getSearch]);

  return (
    <main className="w-full h-auto flex flex-col items-center overflow-x-hidden">
      <Navbar onChange={(e) => setSearch(e.target.value)} />
      <div className="flex mt-24 h-[40px] xl:hidden w-full justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F5F6F7] w-[85%] h-full pl-5 rounded-md border focus:outline-slate-400"
        />
      </div>
      <Slideshow />

      {getSearch && <SearchProduct heading={"Hasil pencarian"} />}

      <CategoryHomepageRecommendation heading={"Rekomendasi"} />

      {isLoading ? (
        <div className="w-[85%] h-[12rem] px-[8%] mt-10 flex bg-[#F5F6F7] justify-center items-center animate-pulse duration-150"></div>
      ) : (
        <Fragment>
          <section className="w-full px-[8%] mt-10 flex justify-center items-center">
            <h1 className="font-bold text-xl">Kategori</h1>
          </section>

          {category?.map((category) => (
            <CategoryHomepage
              key={category?.id}
              heading={category?.name}
              seeAll
            />
          ))}
        </Fragment>
      )}

      <FooterUser />
    </main>
  );
};
