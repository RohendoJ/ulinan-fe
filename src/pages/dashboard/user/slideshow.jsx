import { Fade } from "react-slideshow-image";

export const Slideshow = () => {
  const images = ["/tour/tour1.png", "/tour/tour2.png", "/tour/tour3.png"];

  return (
    <section className="mt-7 xl:mt-28 w-full h-[200px] md:h-[300px] flex justify-center items-center">
      <div className="w-[85%] h-full">
        <Fade
          arrows={false}
          autoplay={true}
          transitionDuration={1000}
          duration={2000}
        >
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
