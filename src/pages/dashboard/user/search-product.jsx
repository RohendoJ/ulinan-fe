import { Fragment, useMemo } from "react";
import "react-slideshow-image/dist/styles.css";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { CardUser } from "../../../components";
import { FiAlertTriangle } from "react-icons/fi";
import { useGetProducts } from "../admin";
import { useSearchProduct } from "../../../utils/hooks";

export const SearchProduct = (props) => {
  const { getSearch } = useSearchProduct();
  const { data } = useGetProducts({
    search: getSearch,
  });

  const products = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const productList = useMemo(() => {
    return products?.map((product) => {
      return (
        <CardUser
          key={product?.id}
          image_url={product?.image}
          link={`/category/${product?.category}/${product?.id}`}
          title={product?.name}
          price={product?.price}
        />
      );
    });
  }, [products]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  return (
    <Fragment>
      <section className="w-full px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">{props.heading}</h1>
        {props.seeAll && products?.length > 0 && (
          <Link
            to={`/category/${props.heading?.toLowerCase()}`}
            className="text-[#2284DF]">
            See All
          </Link>
        )}
      </section>
      <section className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-auto pl-[0.5%]">
          {products?.length === 0 ? (
            <div className="flex flex-col gap-2 items-center justify-center h-[10rem] mt-3 font-medium">
              <FiAlertTriangle className="text-5xl" />
              <p>Tidak ada product yang tersedia</p>
            </div>
          ) : (
            <AliceCarousel
              items={productList}
              responsive={responsive}
              autoHeight={true}
              disableDotsControls
              mouseTracking
              touchTracking
            />
          )}
        </div>
      </section>
    </Fragment>
  );
};
