import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const ButtonPaginate = ({
  onFirst,
  onLast,
  onPrevious,
  onNext,
  page,
  total,
  onClickPage,
}) => {
  const generatePageArray = () => {
    const pages = [];
    const middle = Math.floor(total / 6);

    for (let i = page - middle; i <= page + middle; i++) {
      if (i > 0 && i <= total) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="w-fit flex items-center gap-3">
      <div className="flex flex-col md:flex-row gap-2.5">
        <button
          onClick={onFirst}
          disabled={page === 1}
          className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <div className="relative flex justify-center items-center">
            <MdChevronLeft className="relative left-2.5 text-3xl" />
            <MdChevronLeft className="relative right-2.5 text-3xl" />
          </div>
        </button>
        <button
          onClick={onPrevious}
          disabled={page === 1}
          className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <MdChevronLeft className="text-3xl" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        {generatePageArray().map((index) => (
          <button
            key={index}
            onClick={() => onClickPage(index)}
            value={index}
            className={`flex items-center justify-center w-10 h-10 border-2 border-black rounded-md hover:bg-[#1A69B2] hover:text-white  ${
              page === index
                ? "bg-[#1A69B2] text-white border-opacity-0"
                : "border-opacity-30 hover:border-opacity-0"
            }`}>
            {index}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2.5">
        <button
          onClick={onNext}
          disabled={page === total}
          className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <MdChevronRight className="text-3xl" />
        </button>
        <button
          onClick={onLast}
          disabled={page === total}
          className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-30 rounded-md hover:bg-[#1A69B2] hover:text-white duration-200 transition-all disabled:text-[#B3B2B2] disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <div className="relative flex justify-center items-center">
            <MdChevronRight className="relative left-2.5 text-3xl" />
            <MdChevronRight className="relative right-2.5 text-3xl" />
          </div>
        </button>
      </div>
    </div>
  );
};
