import { CardUser, FooterUser, Navbar } from "../../../components";
import "react-slideshow-image/dist/styles.css";
import { Slideshow } from "./slideshow";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  const items = [
    <CardUser />,
    <CardUser />,
    <CardUser />,
    <CardUser />,
    <CardUser />,
    <CardUser />,
    <CardUser />,
    <CardUser />,
    <CardUser />,
  ];

  return (
    <main className="w-full h-auto flex flex-col">
      <Navbar />
      <Slideshow />

      <div className="w-full mt-10 pl-[8%]">
        <h1 className="font-bold text-xl">Rekomendasi</h1>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-auto pl-[0.5%]">
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
          />
        </div>
      </div>

      <section className="w-full grid place-items-center mt-10">
        <h1 className="font-bold text-xl">Kategori</h1>
      </section>

      <section className="w-full px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">Wisata</h1>
        <Link to={"/category/wisata"} className="text-[#2284DF]">
          See All
        </Link>
      </section>
      <section className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-auto pl-[0.5%]">
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
          />
        </div>
      </section>

      <section className="w-full px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">Food</h1>
        <Link to={"/category/food"} className="text-[#2284DF]">
          See All
        </Link>
      </section>
      <section className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-auto pl-[0.5%]">
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
          />
        </div>
      </section>

      <section className="w-full px-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">Entertainment</h1>
        <Link to={"/category/Entertainment"} className="text-[#2284DF]">
          See All
        </Link>
      </section>
      <section className="w-full h-auto flex justify-center items-center">
        <div className="w-[85%] h-auto pl-[0.5%]">
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
          />
        </div>
      </section>

      <FooterUser />
    </main>
  );
};
