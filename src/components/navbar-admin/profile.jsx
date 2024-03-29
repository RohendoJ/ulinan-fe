import { IoIosArrowDown } from "react-icons/io";
import { DropDown } from "../dropdown";
import { Fragment, useState } from "react";
import { useGetUserMe } from "./hooks";

export const Profile = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const { data } = useGetUserMe();

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <Fragment>
      <button
        onClick={handleDropDown}
        className="relative flex items-center gap-2 md:gap-6 py-2 px-4">
        <div className="flex items-center gap-3">
          <figure>
            <img
              src={data?.avatar}
              className="h-10 w-10 rounded-full bg-gray-400 object-cover bg-center bg-no-repeat"
            />
          </figure>
          <div className="flex flex-col text-sm text-left justify-">
            <h4 className="font-semibold">{data?.fullname}</h4>
            <h5 className="text-xs">{data?.email}</h5>
          </div>
        </div>

        <IoIosArrowDown
          className={`text-2xl text-gray-400 duration-200 ${
            isDropDown && "rotate-180"
          }`}
        />
      </button>
      <DropDown
        alignPosition={"top-14 md:top-16 right-6 md:right-12"}
        showDropdown={isDropDown}
        onMouseLeave={() => setIsDropDown(false)}
      />
    </Fragment>
  );
};
