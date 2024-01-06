import { Link } from "react-router-dom";
import { FooterUser, Navbar } from "../../../components";
import { CategoryHomepage } from "./category-homepage";
import { useGetCategory } from "../admin/category/hooks";
import { useMemo } from "react";

export const HomeCategory = () => {
  const { data, isLoading } = useGetCategory();

  const category = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  return (
    <main className="w-full xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />
      <section className="text-[#2284DF] mt-[100px] ml-[8%] hover:cursor-pointer">
        <Link to={"/"} className="text-[#807F7F]">
          Home /
        </Link>{" "}
        Kategori
      </section>
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <div className="w-[85%] h-[12rem] px-[8%] mt-10 flex bg-[#F5F6F7] justify-center items-center animate-pulse duration-150"></div>
          <div className="w-[85%] h-[12rem] px-[8%] mt-10 flex bg-[#F5F6F7] justify-center items-center animate-pulse duration-150"></div>
          <div className="w-[85%] h-[12rem] px-[8%] mt-10 flex bg-[#F5F6F7] justify-center items-center animate-pulse duration-150"></div>
        </div>
      ) : (
        category?.map((category) => (
          <CategoryHomepage
            key={category?.id}
            heading={category?.name}
            seeAll
          />
        ))
      )}

      <FooterUser />
    </main>
  );
};
