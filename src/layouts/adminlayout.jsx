import { Outlet } from "react-router-dom";
import { NavbarAdmin, SidebarAdmin } from "../components";

export const AdminLayout = () => {
  return (
    <main className="w-full h-screen flex items-center overflow-y-auto">
      <SidebarAdmin />
      <section className="flex flex-col w-full h-full justify-start overflow-y-auto">
        <NavbarAdmin />
        <Outlet />
      </section>
    </main>
  );
};
