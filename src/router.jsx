import { Link, createBrowserRouter } from "react-router-dom";
import { AuthLayout, AdminLayout } from "./layouts";
import { Home } from "./pages/dashboard/user/home";
import { Suspense } from "react";
import { LazyLoading } from "./components";
import { SignIn, SignUp } from "./pages";
import { lazily } from "react-lazily";
const {
  HomeAdmin,
  CategoryAdmin,
  ProductAdmin,
  GalleryAdmin,
  TransaksiAdmin,
  AddCategory,
  EditCategory,
} = lazily(() => import("./pages/dashboard"));

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
            <HomeAdmin />
          </Suspense>
        ),
      },
      {
        path: "category",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <CategoryAdmin />
          </Suspense>
        ),
      },
      {
        path: "category/add",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <AddCategory />
          </Suspense>
        ),
      },
      {
        path: "category/edit/:id",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <EditCategory />
          </Suspense>
        ),
      },
      {
        path: "product",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <ProductAdmin />
          </Suspense>
        ),
      },
      {
        path: "galeri",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <GalleryAdmin />
          </Suspense>
        ),
      },
      {
        path: "transaksi",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <TransaksiAdmin />
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
