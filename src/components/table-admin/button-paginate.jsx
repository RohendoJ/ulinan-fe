import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const ButtonPaginate = ({ next, previous, page, total }) => {
  const [onPage, setOnPage] = useState(page);
  const [totalPage, setTotalPage] = useState(total);

  const onFirst = () => {
    setOnPage(1);
    console.log(next);
    console.log(previous);
  };

  const onLast = () => {
    setOnPage(total);
  };

  const onPrevious = () => {
    if (onPage === 1) return;
    setOnPage((prev) => prev - 1);
  };

  const onNext = () => {
    if (onPage === total) return;
    setOnPage((prev) => prev + 1);
  };

  const generatePageArray = () => {
    const pages = [];
    const middle = Math.floor(totalPage / 4);

    for (let i = onPage - middle; i <= onPage + middle; i++) {
      if (i > 0 && i <= total) {
        pages.push(i);
      }
    }

    return pages;
  };

  useEffect(() => {
    if (totalPage >= 5) {
      setTotalPage(5);
    }
  }, [totalPage]);

  return (
    <div className="w-fit flex items-center gap-3">
      <button
        onClick={onFirst}
        disabled={onPage === 1}
        className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
        <div className="relative flex justify-center items-center">
          <MdChevronLeft className="relative left-2.5 text-3xl" />
          <MdChevronLeft className="relative right-2.5 text-3xl" />
        </div>
      </button>
      <button
        onClick={onPrevious}
        disabled={onPage === 1}
        className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
        <MdChevronLeft className="text-3xl" />
      </button>

      <div className="flex items-center gap-3">
        {generatePageArray().map((index) => (
          <button
            key={index}
            onClick={() => setOnPage(index)}
            value={index}
            className={`flex items-center justify-center w-10 h-10 border-2 border-black rounded-md hover:bg-[#1A69B2] hover:text-white  ${
              onPage === index
                ? "bg-[#1A69B2] text-white border-opacity-0"
                : "border-opacity-30 hover:border-opacity-0"
            }`}>
            {index}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={onPage === total}
        className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
        <MdChevronRight className="text-3xl" />
      </button>
      <button
        onClick={onLast}
        disabled={onPage === total}
        className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
        <div className="relative flex justify-center items-center">
          <MdChevronRight className="relative left-2.5 text-3xl" />
          <MdChevronRight className="relative right-2.5 text-3xl" />
        </div>
      </button>
    </div>
  );
};
