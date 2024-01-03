import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebarMobile } from "../../utils/hooks";
import { Profile } from "./profile";

export const NavbarAdmin = () => {
  const { getSidebarMobile, setSidebarMobile } = useSidebarMobile();

  const toggleSidebarMobile = () => {
    setSidebarMobile(!getSidebarMobile);
  };
  return (
    <header className="flex items-center justify-between w-full h-[5rem] px-8 shadow-md ">
      <div className="flex items-center gap-5">
        <button className="block lg:hidden" onClick={toggleSidebarMobile}>
          <RxHamburgerMenu className="text-3xl" />
        </button>
        <h1 className="text-[#1A69B2] text-xl font-bold hidden md:block">
          Dashboard
        </h1>
      </div>
      <Profile />
    </header>
  );
};
