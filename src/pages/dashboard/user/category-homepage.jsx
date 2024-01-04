import { Fragment } from "react";
import "react-slideshow-image/dist/styles.css";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { CardUser } from "../../../components";

export const CategoryHomepage = (props) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  const items = [
    <CardUser key={1} />,
    <CardUser key={2} />,
    <CardUser key={3} />,
    <CardUser key={4} />,
    <CardUser key={5} />,
    <CardUser key={6} />,
    <CardUser key={7} />,
    <CardUser key={8} />,
  ];

  return (
    <Fragment>
      <section className="w-full px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">{props.heading}</h1>
        {props.seeAll && (
          <Link to={"/category/wisata"} className="text-[#2284DF]">
            See All
          </Link>
        )}
      </section>
      <section className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-auto pl-[0.5%]">
          <AliceCarousel
            items={items}
            responsive={responsive}
            autoHeight={true}
            disableDotsControls
            mouseTracking
          />
        </div>
      </section>
    </Fragment>
  );
};
