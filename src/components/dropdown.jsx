import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { motion } from "framer-motion";

export const DropDown = ({ showDropdown, alignPosition }) => {
  return (
    <motion.div
      animate={{
        y: showDropdown ? 0 : -5,
        display: showDropdown ? "block" : "none",
        opacity: showDropdown ? 1 : 0,
        transition: { duration: 0.1 },
      }}
      className={`absolute flex flex-col items-center w-auto h-auto gap-1 bg-[#EBEAEA] rounded-b-lg shadow-xl duration-100 ${alignPosition}`}>
      <button className="flex gap-2 w-full h-full text-base items-center justify-center py-3 px-5 duration-200 hover:bg-[#F5F6F7]">
        <FaRegUser className="text-base mr-2" />
        <span className="font-black">Profile</span>
      </button>
      <button className="flex gap-2 w-full h-full text-base items-center justify-center pt-2 pb-3 px-4 rounded-b-lg duration-200 hover:bg-[#F5F6F7]">
        <MdOutlineLogout className="text-2xl rotate-180 mr-1" />
        <span className="font-black">Logout</span>
      </button>
    </motion.div>
  );
};
