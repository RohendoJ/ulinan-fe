import { Spinner } from "./loading";

export const Button = ({ children, loading, type }) => {
  return (
    <button
      type={type}
      className="flex items-center justify-center bg-[#2284DF] rounded-md w-[75%] h-8 text-white">
      {loading ? <Spinner width="w-5" height="h-5" /> : children}
    </button>
  );
};
