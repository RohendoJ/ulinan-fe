import { Fade } from "react-slideshow-image";

export const Slideshow = () => {
  const images = [
    "/panorama-1.jpg",
    "/panorama-2.jpg",
    "/panorama-3.jpg",
    "/panorama-4.jpg",
    "/panorama-5.jpeg",
    "https://images.unsplash.com/photo-1615024420475-cc7f2fe24f6e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className="mt-7 xl:mt-28 w-full h-[200px] md:h-[300px] flex justify-center items-center">
      <div className="w-[85%] h-full">
        <Fade
          arrows={false}
          autoplay={true}
          transitionDuration={1000}
          duration={2000}>
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full h-[200px] md:h-[300px] object-cover rounded-md"
              src={images[index]}
              alt="slide"
            />
          ))}
        </Fade>
      </div>
    </section>
  );
};
