import { FaUserLarge } from "react-icons/fa6";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import {
  MdAttachMoney,
  MdPermMedia,
  MdShop,
  MdViewModule,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathnameAdmin, useSidebarMobile } from "../utils/hooks";

export const SidebarAdmin = () => {
  const [isToggle, setIsToggle] = useState(true);

  const { getPathname, setPathname } = usePathnameAdmin();
  const { getSidebarMobile, setSidebarMobile } = useSidebarMobile();

  const sidebarList = [
    {
      name: "Dashboard",
      icon: <RxDashboard className="text-2xl" />,
      link: "/dashboard-admin",
    },
    {
      name: "Category",
      icon: <MdViewModule className="text-2xl" />,
      link: "/dashboard-admin/category",
    },
    {
      name: "Product",
      icon: <MdShop className="text-2xl" />,
      link: "/dashboard-admin/product",
    },
    {
      name: "Galeri Product",
      icon: <MdPermMedia className="text-2xl" />,
      link: "/dashboard-admin/galeri",
    },
    {
      name: "Transaksi",
      icon: <MdAttachMoney className="text-3xl" />,
      link: "/dashboard-admin/transaksi",
    },
  ];

  const toggleSidebar = () => {
    setIsToggle(!isToggle);
  };

  const toggleSidebarMobile = () => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setSidebarMobile(false);
    }
  };

  return (
    <aside
      className={`fixed lg:relative flex flex-col h-full py-10 px-6 lg:px-6 bg-[#1A69B2] gap-12 z-40 transition-all duration-500 ${
        isToggle ? "w-[7rem]" : "w-[20rem] lg:w-[35%] xl:w-[25%]"
      } ${
        getSidebarMobile
          ? "-translate-x-0"
          : "-translate-x-full lg:-translate-x-0"
      }`}>
      <section
        className={`flex items-center h-9 text-white text-2xl px-5 ${
          isToggle ? "justify-center" : "justify-between"
        }`}>
        <div
          className={`flex items-center gap-3  ${
            isToggle ? "hidden" : "block"
          }`}>
          <FaUserLarge className="text-lg" />
          <h1 className="font-semibold">Admin</h1>
        </div>
        <button className="hidden lg:block" onClick={toggleSidebar}>
          <RxHamburgerMenu className="text-2xl" />
        </button>
        <button className="block lg:hidden" onClick={toggleSidebarMobile}>
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </section>

      <section className="w-full flex flex-col gap-8">
        {sidebarList.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            onClick={() => setPathname(item.link)}
            className={`${
              getPathname === item.link
                ? "bg-[#A6CEF2] text-[#1A69B2]"
                : "hover:text-[#1A69B2] hover:bg-[#A6CEF2] text-[#A6CEF2]"
            } ${isToggle ? "w-auto justify-center px-2" : "w-full px-6"}
             relative h-14 flex items-center gap-4 text-lg font-bold rounded-xl duration-200`}>
            {item.icon}
            <motion.span
              initial={{ x: 40, opacity: 0, display: "none" }}
              animate={{
                x: isToggle ? 0 : 40,
                opacity: isToggle ? 0 : 1,
                display: isToggle ? "none" : "block",
                transition: { duration: 0.2, delay: isToggle ? 0 : 0.2 },
              }}
              className="absolute">
              {item.name}
            </motion.span>
          </Link>
        ))}
      </section>
    </aside>
  );
};
