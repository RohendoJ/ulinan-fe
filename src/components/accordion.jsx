import { useState } from "react";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rounded-lg w-[85vw] shadow-xl ${props.className}`}>
      <div
        className="flex justify-between items-center py-4 cursor-pointer select-none"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium pl-5">{props.title}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 mr-5 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && props.children}
    </div>
  );
}

export default Accordion;
