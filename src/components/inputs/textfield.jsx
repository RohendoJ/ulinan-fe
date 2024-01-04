import { Fragment } from "react";
import { useController } from "react-hook-form";

export const TextField = ({
  name,
  label,
  placeholder,
  required,
  type = "text",
  errors,
  disabled,
  isTextArea,
}) => {
  const { field } = useController({
    name,
    rules: {
      required,
    },
    disabled,
  });

  return (
    <div className="relative flex flex-col gap-2.5">
      <label
        className="md:text-base text-sm font-semibold text-[#1B4242]"
        htmlFor={name}>
        {label}
      </label>
      {isTextArea && (
        <textarea
          id={name}
          placeholder={placeholder}
          {...field}
          rows={4}
          cols={50}
          className="border-2 border-black md:py-2 py-1 px-3.5 text-base text-black rounded-md h-[8rem]"
        />
      )}

      {!isTextArea && (
        <Fragment>
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            {...field}
            className="border-2 border-black py-1 px-4 text-base text-black rounded-md"
          />
        </Fragment>
      )}

      {errors && (
        <span className="text-red-800 md:text-sm text-xs font-medium ml-1">
          {errors.message}
        </span>
      )}
    </div>
  );
};
