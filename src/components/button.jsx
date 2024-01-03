import { Spinner } from "./loading";

export const Button = ({ children, loading, type }) => {
  return (
    <button
      type={type}
      className="bg-[#2284DF] rounded-md w-[75%] h-8 text-white">
      {loading ? <Spinner /> : children}
    </button>
  );
};
