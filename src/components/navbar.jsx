import { Link, useNavigate } from "react-router-dom";
import { LuX, LuMenu, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getToken, removeToken } from "../utils/token";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/axios";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import Swal from "sweetalert2";
export const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const categoryRef = useRef(null);
  const profileRef = useRef(null);
  const sideRef = useRef(null);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleCategoryOpen = () => {
    setCategoryOpen(!categoryOpen);
  };

  const toggleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  const alertLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        removeToken();
        navigate("/");
      }
    });
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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const token = getToken();

  const useGetProfile = () => {
    return useQuery({
      queryKey: ["profile"],
      queryFn: async () => {
        const { data } = await api.get("/api/user/me");

        return data;
      },
    });
  };

  const { data } = useGetProfile();

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

      {!props.dashboard && (
        <section className="w-[30%] h-[50%] hidden xl:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F5F6F7] h-full pl-5 rounded-md w-full border focus:outline-slate-400"
          />
        </section>
      )}

      <section
        onClick={toggleOpen}
        className="flex xl:hidden w-[10%] justify-center items-center text-[2rem] text-[#2284DF]">
        {open ? <LuX /> : <LuMenu />}
      </section>

      <section
        className={`w-[30%] ${
          props.dashboard ? "ml-[36%]" : "ml-0"
        } xl:flex justify-around hidden select-none`}>
        <div
          className="flex justify-center items-center gap-3 text-[#2284DF] hover:cursor-pointer relative"
          onClick={toggleCategoryOpen}
          ref={categoryRef}>
          <h1 className="font-bold text-[1.2rem]">List Kategori</h1>
          {categoryOpen ? (
            <Fragment>
              <LuChevronUp className="text-[1.5rem]" />
              <motion.div
                className="absolute shadow-md w-[30vw] h-[70vh] top-[180%] bg-gray-100 flex flex-col"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}>
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
          className="text-[#2284DF] font-bold text-[1.2rem]">
          History
        </Link>

        <Link to={"/cart"} className="text-[#2284DF] font-bold text-[1.2rem]">
          Cart
        </Link>
      </section>

      {token ? (
        <section
          onClick={toggleProfileOpen}
          ref={profileRef}
          className="select-none w-[10%] hidden xl:flex justify-center items-center text-[#2284DF] text-[2rem] gap-2 hover:cursor-pointer relative">
          <img
            className="w-[40px] h-[40px] rounded-full select-none object-cover bg-center bg-no-repeat"
            src={data?.avatar}
            alt="profile"
          />
          {profileOpen ? (
            <Fragment>
              <LuChevronUp />
              <motion.div
                className="absolute w-[10vw] h-[12vh] bg-white shadow-md top-[135%] rounded-md flex flex-col justify-evenly"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}>
                <Link
                  to={"/profile"}
                  className="w-full h-1/2 flex justify-center items-center gap-4 hover:bg-gray-50 rounded-md">
                  <FaRegUser className="text-[1.2rem] text-black" />
                  <p className="text-black text-[1.2rem]">Profile</p>
                </Link>
                <div
                  onClick={alertLogout}
                  className="w-full h-1/2 flex justify-center items-center gap-4 hover:bg-gray-50 rounded-md">
                  <MdLogout className="text-[1.2rem] rotate-180 text-black" />
                  <div className="text-black text-[1.2rem]">Logout</div>
                </div>
              </motion.div>
            </Fragment>
          ) : (
            <LuChevronDown />
          )}
        </section>
      ) : (
        <section className="w-[15%] hidden xl:flex gap-3 justify-center items-center">
          <button
            className="border-2 border-[#2284DF] rounded-xl w-full h-10 font-bold text-[#2284DF]"
            onClick={() => {
              navigate("/auth/sign-in");
            }}>
            Masuk
          </button>
          <button
            className="bg-[#2284DF] rounded-xl text-white w-full h-10"
            onClick={() => {
              navigate("/auth/sign-up");
            }}>
            Daftar
          </button>
        </section>
      )}
      <aside
        className={`flex xl:hidden w-[75%] md:w-[35%] lg:w-[30%] h-[100dvh] bg-slate-50 absolute duration-500 z-10 flex-col py-[5vh] pl-[10vw] md:pl-[7vw] lg:pl-[5vw] gap-5 justify-between shadow-xl left-0 inset-y-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={sideRef}>
        <img className="w-[100px]" src="/auth-logo.png" alt="ulinan" />
        <div className="flex flex-col gap-5 mb-[45vh] text-[#2284DF] font-bold text-[1.2rem]">
          <Link to={"/category"}>Kategori</Link>

          <Link to={"/history"}>History</Link>

          <Link to={"/cart"}>Cart</Link>
        </div>
        <div className="w-[80%] flex flex-col gap-5 lg:mb-[3vh]">
          {token ? (
            <section className="w-full flex flex-col items-center gap-5">
              <Link
                to={"/profile"}
                className="w-full flex justify-around items-center p-2 bg-white border border-slate-300 rounded-md">
                <img
                  src={data?.avatar}
                  alt="profile"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <h1 className="text-[1.2rem]">{data?.fullname}</h1>
              </Link>
              <button
                onClick={alertLogout}
                className="w-full bg-red-400 text-white p-2 rounded-md">
                Log out
              </button>
            </section>
          ) : (
            <Fragment>
              <button
                className="border-2 border-[#2284DF] rounded-xl w-full h-12 font-bold text-[#2284DF]"
                onClick={() => {
                  navigate("/auth/sign-in");
                }}>
                Masuk
              </button>
              <button
                className="bg-[#2284DF] rounded-xl text-white w-full h-12"
                onClick={() => {
                  navigate("/auth/sign-up");
                }}>
                Daftar
              </button>
            </Fragment>
          )}
        </div>
      </aside>
    </nav>
  );
};
