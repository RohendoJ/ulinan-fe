import { useNavigate } from "react-router-dom";
import { LuX, LuMenu } from "react-icons/lu";
import { Fragment, useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <nav className="w-full h-[10%] xl:h-[13%] shadow-md flex justify-between items-center px-10 z-10">
        <section className="w-[40%] xl:w-[10%]">
          <img
            src="/auth-logo.png"
            alt="ulinan"
            className="w-[150px] h-[50px] hover:cursor-pointer"
            onClick={() => navigate("/")}
          />
        </section>

        <section className="w-[50%] xl:w-[30%] h-[50%] hidden xl:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F5F6F7] h-full pl-5 rounded-md w-full"
          />
        </section>

        <section
          onClick={toggleOpen}
          className="flex xl:hidden w-[10%] justify-center items-center text-[2rem] text-[#2284DF]"
        >
          {open ? <LuX /> : <LuMenu />}
        </section>

        <section className="w-[30%] xl:flex gap-5 justify-center hidden">
          <div>
            <h1 className="text-[#2284DF] font-bold text-[1.5rem]">
              List Kategori
            </h1>
          </div>

          <div>
            <h1 className="text-[#2284DF] font-bold text-[1.5rem]">History</h1>
          </div>

          <div>
            <h1 className="text-[#2284DF] font-bold text-[1.5rem]">Cart</h1>
          </div>
        </section>

        <section className="w-[20%] hidden xl:flex gap-3">
          <button
            className="border-2 border-[#2284DF] rounded-xl w-full h-12 font-bold text-[#2284DF]"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Masuk
          </button>
          <button
            className="bg-[#2284DF] rounded-xl text-white w-full h-12"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Daftar
          </button>
        </section>
      </nav>

      <aside
        className={`flex xl:hidden w-[100vw] h-[90dvh] bottom-0 bg-slate-50 absolute duration-500 z-10 flex-col justify-evenly items-center ${
          open ? "translate-x-0" : "-translate-x-[100vw]"
        }`}
      >
        <div>
          <h1 className="text-[#2284DF] font-bold text-[1.5rem]">
            List Kategori
          </h1>
        </div>

        <div>
          <h1 className="text-[#2284DF] font-bold text-[1.5rem]">History</h1>
        </div>

        <div>
          <h1 className="text-[#2284DF] font-bold text-[1.5rem]">Cart</h1>
        </div>

        <div className="w-[80%]">
          <button
            className="border-2 border-[#2284DF] rounded-xl w-full h-12 font-bold text-[#2284DF]"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Masuk
          </button>
        </div>

        <div className="w-[80%]">
          <button
            className="bg-[#2284DF] rounded-xl text-white w-full h-12"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Daftar
          </button>
        </div>
      </aside>
    </Fragment>
  );
};
