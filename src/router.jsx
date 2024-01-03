import { Link, createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";
import { Home } from "./pages/dashboard/home";
import { AuthLayout, AdminLayout } from "./layouts";
import { Suspense } from "react";
import { LazyLoading } from "./components";
const { SignIn, SignUp } = lazily(() => import("./pages/auth"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard-admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <LazyLoading />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <section className="flex h-screen justify-center items-center bg-[#1A69B2] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl ">
              Halaman tidak ditemukan
            </p>
            <p className="mb-4 text-lg font-light text-[#A6CEF2]">
              Maaf halaman yang anda cari tidak ada
            </p>
            <Link
              href="/"
              className="inline-flex text-[#A6CEF2] bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
              Kembali
            </Link>
          </div>
        </div>
      </section>
    ),
  },
]);
