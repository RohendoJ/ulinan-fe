import { Navbar } from "../../components";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <main className="w-screen h-[100dvh] md:h-screen flex flex-col">
      <Navbar />

      <section className="w-[85%] mx-auto mt-7 z-0">
        <Fade
          arrows={false}
          autoplay={true}
          transitionDuration={1000}
          duration={2000}>
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
    </main>
  );
};
