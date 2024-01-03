export const Search = ({ onChange, placeholder = "Search" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="lg:w-[24rem] w-[14rem] h-12 lg:text-base text-sm py-2 px-5 placeholder:font-bold font-medium appearance-none focus:outline-none border-2 rounded-md border-[#4D4D4D]"
      onChange={onChange}
    />
  );
};
