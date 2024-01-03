import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-[100dvh] md:h-screen bg-[url('/auth-sign-in.png')] bg-bottom bg-no-repeat bg-cover object-cover ">
      <section className="bg-black bg-opacity-35 w-screen h-[100dvh] md:h-screen flex justify-center items-center xl:justify-start xl:flex-col">
        <section className="w-full h-[15%] items-center pl-[10%] hidden xl:flex">
          <img
            onClick={() => navigate("/")}
            src="/logo-white.png"
            alt="ulinan"
            className="w-[120px] hover:cursor-pointer"
          />
        </section>

        <section className="w-full flex h-full xl:h-[70%]">
          <div className="w-1/2 hidden xl:flex justify-center flex-col pl-[10%] gap-5">
            <h1 className="font-zaitun text-[3rem] text-white">
              Selamat Datang
            </h1>
            <p className="text-white text-[1.2rem]">
              Jelajahi pesona Garut, pesona alam. Telusuri potensi wisata Garut
              yang beragam dan rasakan pengalaman wisata yang tak terlupakan
            </p>
          </div>

          <div className="w-full xl:w-1/2 flex justify-center items-center">
            <Outlet />
          </div>
        </section>
      </section>

      <section className="bg-[#134F86] w-full h-[7%] absolute bottom-0 hidden xl:flex justify-between px-[10%] items-center text-white">
        <div className="flex">© 2023 Ulinan | Powered by ulinan</div>
        <div className="flex gap-4 text-white">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </section>
    </main>
  );
};
