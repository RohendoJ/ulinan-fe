import { Fragment, useMemo } from "react";
import "react-slideshow-image/dist/styles.css";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { CardUser } from "../../../components";
import { useGetProducts } from "../admin/product/hooks";
import { FiAlertTriangle } from "react-icons/fi";

export const CategoryHomepage = (props) => {
  const { data } = useGetProducts();

  const products = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const filteredProducts = useMemo(() => {
    return products?.filter((product) => {
      return product?.category === props.heading;
    });
  }, [products, props.heading]);

  const productList = useMemo(() => {
    return filteredProducts?.map((product) => {
      return (
        <CardUser
          key={product?.id}
          image_url={product?.image[0]?.image_url}
          link={`/category/${product?.category}/${product?.id}`}
          title={product?.name}
          price={product?.price}
        />
      );
    });
  }, [filteredProducts]);

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
        {props.seeAll && filteredProducts?.length > 0 && (
          <Link to={`/category/${props.heading}`} className="text-[#2284DF]">
            See All
          </Link>
        )}
      </section>
      <section className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-fit pl-[0.5%]">
          {filteredProducts?.length === 0 ? (
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
