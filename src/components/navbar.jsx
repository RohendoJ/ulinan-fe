import { Link, useNavigate } from "react-router-dom";
import { LuX, LuMenu, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getToken } from "../utils/token";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryRef = useRef(null);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleCategoryOpen = () => {
    setCategoryOpen(!categoryOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const token = getToken();

  return (
    <nav className="w-full h-[70px] shadow-md flex justify-between items-center px-10 z-20 fixed bg-white">
      <section className="w-[30%] xl:w-[10%]">
        <img
          src="/auth-logo.png"
          alt="ulinan"
          className="w-[150px] md:w-[100px] lg:w-[120px] h-[35px] lg:h-[40px] hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
      </section>

      <section className="w-[30%] h-[50%] hidden xl:flex">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F5F6F7] h-full pl-5 rounded-md w-full border focus:outline-slate-400"
        />
      </section>

      <section
        onClick={toggleOpen}
        className="flex xl:hidden w-[10%] justify-center items-center text-[2rem] text-[#2284DF]"
      >
        {open ? <LuX /> : <LuMenu />}
      </section>

      <section className="w-[30%] xl:flex justify-around hidden select-none">
        <div
          className="flex justify-center items-center gap-3 text-[#2284DF] hover:cursor-pointer relative"
          onClick={toggleCategoryOpen}
        >
          <h1 className="font-bold text-[1.2rem]">List Kategori</h1>
          {categoryOpen ? (
            <Fragment>
              <LuChevronUp className="text-[1.5rem]" />
              <motion.div
                className="absolute shadow-md w-[30vw] h-[70vh] top-[180%] bg-gray-100 flex flex-col"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                ref={categoryRef}
              >
                <section className="w-full h-[19%] flex p-2 hover:bg-gray-50">
                  <div className="w-[55%] h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1660206609394-afe2e1a69b6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="wisata"
                    />
                  </div>
                  <div className="w-[45%] h-full flex flex-col justify-cent pl-[3%]">
                    <h1 className="text-black font-bold">Paket Event</h1>
                    <p className="text-black text-xs">
                      Kumpulan Paket Event Wisata
                    </p>
                  </div>
                </section>
                <section className="w-full h-[19%] flex p-2 hover:bg-gray-50">
                  <div className="w-[55%] h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1660206609394-afe2e1a69b6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="wisata"
                    />
                  </div>
                  <div className="w-[45%] h-full flex flex-col justify-cent pl-[3%]">
                    <h1 className="text-black font-bold">Paket Event</h1>
                    <p className="text-black text-xs">
                      Kumpulan Paket Event Wisata
                    </p>
                  </div>
                </section>
                <section className="w-full h-[19%] flex p-2 hover:bg-gray-50">
                  <div className="w-[55%] h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1660206609394-afe2e1a69b6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="wisata"
                    />
                  </div>
                  <div className="w-[45%] h-full flex flex-col justify-cent pl-[3%]">
                    <h1 className="text-black font-bold">Paket Event</h1>
                    <p className="text-black text-xs">
                      Kumpulan Paket Event Wisata
                    </p>
                  </div>
                </section>
                <section className="w-full h-[19%] flex p-2 hover:bg-gray-50">
                  <div className="w-[55%] h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1660206609394-afe2e1a69b6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="wisata"
                    />
                  </div>
                  <div className="w-[45%] h-full flex flex-col justify-cent pl-[3%]">
                    <h1 className="text-black font-bold">Paket Event</h1>
                    <p className="text-black text-xs">
                      Kumpulan Paket Event Wisata
                    </p>
                  </div>
                </section>
                <section className="w-full h-[19%] flex p-2 hover:bg-gray-50">
                  <div className="w-[55%] h-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1660206609394-afe2e1a69b6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="wisata"
                    />
                  </div>
                  <div className="w-[45%] h-full flex flex-col justify-cent pl-[3%]">
                    <h1 className="text-black font-bold">Paket Event</h1>
                    <p className="text-black text-xs">
                      Kumpulan Paket Event Wisata
                    </p>
                  </div>
                </section>
                <section className="w-full h-[5%] flex justify-end items-center pr-[3%]">
                  <Link to={"/category"} className="text-[#2284DF] text-xs">
                    See More
                  </Link>
                </section>
              </motion.div>
            </Fragment>
          ) : (
            <LuChevronDown className="text-[1.5rem]" />
          )}
        </div>

        <Link
          to={"/history"}
          className="text-[#2284DF] font-bold text-[1.2rem]"
        >
          History
        </Link>

        <Link to={"/cart"} className="text-[#2284DF] font-bold text-[1.2rem]">
          Cart
        </Link>
      </section>

      {token ? (
        <section className="w-[10%] hidden xl:flex justify-center items-center">
          <img className="w-full" src="" alt="profile" />
        </section>
      ) : (
        <section className="w-[15%] hidden xl:flex gap-3 justify-center items-center">
          <button
            className="border-2 border-[#2284DF] rounded-xl w-full h-10 font-bold text-[#2284DF]"
            onClick={() => {
              navigate("/auth/sign-in");
            }}
          >
            Masuk
          </button>
          <button
            className="bg-[#2284DF] rounded-xl text-white w-full h-10"
            onClick={() => {
              navigate("/auth/sign-up");
            }}
          >
            Daftar
          </button>
        </section>
      )}
      <aside
        className={`flex xl:hidden w-[75%] md:w-[35%] lg:w-[30%] h-screen bg-slate-50 absolute duration-500 z-10 flex-col py-[5vh] lg:py-0 pl-[10vw] md:pl-[7vw] lg:pl-[5vw] gap-5 justify-between shadow-xl left-0 top-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 mt-[8vh]">
          <h1 className="text-[#2284DF] font-bold text-[1.5rem]">Kategori</h1>

          <h1 className="text-[#2284DF] font-bold text-[1.5rem]">History</h1>

          <h1 className="text-[#2284DF] font-bold text-[1.5rem]">Cart</h1>
        </div>
        <div className="w-[80%] flex flex-col gap-5 lg:mb-[3vh]">
          <button
            className="border-2 border-[#2284DF] rounded-xl w-full h-12 font-bold text-[#2284DF]"
            onClick={() => {
              navigate("/auth/sign-in");
            }}
          >
            Masuk
          </button>
          <button
            className="bg-[#2284DF] rounded-xl text-white w-full h-12"
            onClick={() => {
              navigate("/auth/sign-up");
            }}
          >
            Daftar
          </button>
        </div>
      </aside>
    </nav>
  );
};
