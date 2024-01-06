import { Link, useParams } from "react-router-dom";
import { CardUser, FooterUser, Navbar } from "../../../components";
import { useGetCategory, useGetProducts } from "../admin";
import { useMemo } from "react";

export const CategoryDetail = () => {
  const param = useParams();

  const { data } = useGetCategory();

  const category = useMemo(() => {
    return data?.data?.find((item) => item?.name === param.name);
  }, [data?.data, param.name]);

  const { data: product, isLoading } = useGetProducts({
    category_id: Number(category?.id),
  });

  return (
    <main className="w-screen xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="text-[#2284DF] mt-[120px] w-full px-[8%]">
        <Link to={"/"} className="text-[#807F7F] hover:cursor-pointer">
          Home / <Link to={"/category"}>Kategori</Link>
        </Link>{" "}
        / {param.name.charAt(0).toUpperCase() + param.name.slice(1)}
      </section>

      <section className="w-full h-[50px] px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          {param.name.charAt(0).toUpperCase() + param.name.slice(1)}
        </h1>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F5F6F7] h-[75%] pl-5 rounded-md w-[50%] md:w-[40%] lg:w-[30%] border focus:outline-slate-400"
        />
      </section>
      {isLoading ? (
        <div className="max-w-full h-[20rem] flex px-[8%] gap-7 flex-wrap mt-5 bg-[#F5F6F7] animate-pulse duration-150"></div>
      ) : (
        <section className="max-w-full h-auto flex px-[8%] gap-7 flex-wrap mt-5">
          {product?.data?.map((item) => (
            <CardUser
              key={item?.id}
              image_url={item?.image}
              link={`/category/${item?.category}/${item?.id}`}
              {...item}
            />
          ))}
        </section>
      )}

      <section className="w-full h-[300px] bg-[#134F86] mt-10 flex flex-col justify-evenly items-center">
        <FooterUser />
      </section>
    </main>
  );
};
