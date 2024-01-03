import { RiEmotionSadLine } from "react-icons/ri";

export const DataNotFound = () => {
  return (
    <section className="container w-full mx-auto my-6 border bg-[#EBEAEA] border-black shadow-md">
      <div className="flex flex-col items-center gap-4 min-w-full w-full h-[20rem] justify-center">
        <RiEmotionSadLine className="text-[#1A69B2] text-9xl" />
        <div className="mx-auto max-w-screen-sm text-center text-[#1A69B2]">
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl ">
            Data kosong
          </p>
          <p className="mb-4 text-lg font-light">
            Maaf, tidak ada data yang tersedia
          </p>
        </div>
      </div>
    </section>
  );
};
