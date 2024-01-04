import { CardUser, FooterUser, Navbar } from "../../../components";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <main className="w-screen h-auto flex flex-col">
      <Navbar />

      <section className="w-[85%] mt-32 h-[300px] mx-auto">
        <Fade
          arrows={false}
          autoplay={true}
          transitionDuration={1000}
          duration={2000}
        >
          <div className="w-full h-[300px]">
            <img
              className="w-full h-full object-cover rounded-md"
              src={images[0]}
              alt="slide"
            />
          </div>
          <div className="w-full h-[300px]">
            <img
              className="w-full h-full object-cover rounded-md"
              src={images[1]}
              alt="slide"
            />
          </div>
          <div className="w-full h-[300px]">
            <img
              className="w-full h-full object-cover rounded-md"
              src={images[2]}
              alt="slide"
            />
          </div>
        </Fade>
      </section>

      <section className="w-full ml-[8%] mt-10">
        <h1 className="font-bold text-xl">Rekomendasi</h1>
      </section>

      <section className="min-w-auto h-auto flex pl-[8%] gap-7">
        <CardUser />
      </section>

      <section className="w-full grid place-items-center mt-10">
        <h1 className="font-bold text-xl">Kategori</h1>
      </section>

      <section className="w-full ml-[8%] mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">Paket Event</h1>
        <p className="text-[#2284DF]">See All</p>
      </section>

      <section className="min-w-auto h-auto flex pl-[8%] gap-7">
        <CardUser />
      </section>

      <section className="w-full ml-[8%] mt-10">
        <h1 className="font-bold text-xl">Wisata</h1>
      </section>

      <section className="min-w-auto h-auto flex pl-[8%] gap-7">
        <CardUser />
      </section>

      <section className="w-full ml-[8%] mt-10">
        <h1 className="font-bold text-xl">Event</h1>
      </section>

      <section className="min-w-auto h-auto flex pl-[8%] gap-7">
        <CardUser />
      </section>

      <section className="w-full ml-[8%] mt-10">
        <h1 className="font-bold text-xl">Food</h1>
      </section>

      <section className="min-w-auto h-auto flex pl-[8%] gap-7">
        <CardUser />
      </section>

      <section className="w-full ml-[8%] mt-10">
        <h1 className="font-bold text-xl">Entertaintment</h1>
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
