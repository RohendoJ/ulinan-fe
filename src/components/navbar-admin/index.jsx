import { Profile } from "./profile";

export const NavbarAdmin = () => {
  return (
    <header className="flex items-center justify-between w-full h-[5rem] px-8 shadow-md ">
      <h1 className="text-[#1A69B2] text-xl font-bold">Dashboard</h1>
      <Profile />
    </header>
  );
};
