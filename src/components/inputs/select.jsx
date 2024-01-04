import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";

export const Select = ({
  name,
  label,
  options,
  placeholder,
  required,
  errors,
  disabled,
}) => {
  const [isRotate, setIsRotate] = useState(false);
  const [status, setStatus] = useState("Pilih Status");

  const { field } = useController({
    name,
    rules: {
      required,
    },
    disabled,
  });

  const statusColor = (status) => {
    const color =
      status === "Pending"
        ? "text-[#F2C219] font-semibold"
        : status === "Failed"
        ? "text-[#E1272A] font-semibold"
        : status === "Success"
        ? "text-[#077927] font-semibold"
        : status === "Pilih Status"
        ? "text-[#ABA7A7] font-semibold"
        : "text-black";

    return color;
  };

  useEffect(() => {
    if (field.value === "Pending") {
      setStatus("Pending");
    } else if (field.value === "Failed") {
      setStatus("Failed");
    } else if (field.value === "Success") {
      setStatus("Success");
    }
  }, [field.value]);

  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={name} className="md:text-base text-sm font-semibold">
        {label}
      </label>
      <div className="relative w-full">
        <select
          name={name}
          id={name}
          {...field}
          onClick={() => setIsRotate(!isRotate)}
          defaultValue={placeholder}
          className={`w-full flex items-center px-3 py-1.5 border-2 border-black rounded-md appearance-none ${statusColor(
            status
          )}`}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option
              key={option?.value}
              value={option?.value}
              className="text-black flex">
              {option?.name}
            </option>
          ))}
        </select>
        <IoMdArrowDropdown
          className={`absolute top-2 right-2 text-2xl ${
            isRotate ? "rotate-180" : null
          }`}
        />
      </div>

      {errors && (
        <span className="text-red-500 md:text-sm text-xs font-medium ml-1">
          {errors.message}
        </span>
      )}
    </div>
  );
};
