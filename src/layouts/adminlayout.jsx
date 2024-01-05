import { Outlet, useNavigate } from "react-router-dom";
import { NavbarAdmin, SidebarAdmin } from "../components";
import { useEffect } from "react";
import { getToken } from "../utils/token";

export const AdminLayout = () => {
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, [token, navigate]);

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
