import { Outlet } from "react-router-dom";
import { SidebarAdmin } from "../components/sidebar-admin";
import { NavbarAdmin } from "../components";

export const AdminLayout = () => {
  return (
    <main className="w-full h-screen flex items-center">
      <SidebarAdmin />
      <section className="flex flex-col w-full h-full justify-center items-center">
        <NavbarAdmin />
        <Outlet />
      </section>
    </main>
  );
};
