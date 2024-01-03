import { Outlet } from "react-router-dom";
import { SidebarAdmin } from "../components/sidebar-admin";
import { NavbarAdmin } from "../components";

export const AdminLayout = () => {
  return (
    <main className="w-full h-screen flex items-center">
      <SidebarAdmin />
      <section className="flex flex-col w-full h-full justify-center items-center mt-[3.7rem] md:mt-0">
        <NavbarAdmin />
        <Outlet />
      </section>
    </main>
  );
};
