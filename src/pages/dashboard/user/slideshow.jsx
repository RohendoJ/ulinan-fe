import { Fade } from "react-slideshow-image";

export const Slideshow = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <section className="mt-28 w-full h-[300px] flex justify-center items-center">
      <div className="w-[85%] h-full">
        <Fade
          arrows={false}
          autoplay={true}
          transitionDuration={1000}
          duration={2000}
        >
          <img
            className="w-full h-[300px] object-cover rounded-md"
            src={images[0]}
            alt="slide"
          />
          <img
            className="w-full h-[300px] object-cover rounded-md"
            src={images[1]}
            alt="slide"
          />
          <img
            className="w-full h-[300px] object-cover rounded-md"
            src={images[2]}
            alt="slide"
          />
        </Fade>
      </div>
    </section>
  );
};
