import { useState } from "react";
import {
  FaRegEyeSlash,
  FaRegEye,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLogin } from "./hook.js";

export const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const { mutate: login } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();

    login(
      {
        identifier: emailOrUsername,
        password: password,
      },
      {
        onSuccess: (data) => {
          localStorage.setItem("access_token", data.data.access_token);
        },
      }
    );
  };

  return (
    <main className="w-screen h-[100dvh] md:h-screen bg-[url('/auth-sign-in.png')] bg-bottom bg-no-repeat bg-cover object-cover flex justify-center items-center xl:justify-start xl:flex-col">
      <section className="w-full h-[15%] items-center pl-[10%] hidden xl:flex">
        <img src="/auth-logo.png" alt="ulinan" className="w-[120px]" />
      </section>

      <section className="w-full flex h-full xl:h-[70%]">
        <div className="w-1/2 hidden xl:flex justify-center flex-col pl-[10%] gap-5">
          <h1 className="font-zaitun text-[3rem] text-white">Selamat Datang</h1>
          <p className="text-white text-[1.2rem]">
            Jelajahi pesona Garut, pesona alam. Telusuri potensi wisata Garut
            yang beragam dan rasakan pengalaman wisata yang tak terlupakan
          </p>
        </div>

        <div className="w-full xl:w-1/2 flex justify-center items-center">
          <form
            onSubmit={onSubmit}
            className="bg-white w-[70%] md:w-[50%] lg:w-[40%] xl:w-[60%] 2xl:w-[55%] h-[50%] md:h-[40%] lg:h-[35%] xl:h-[90%] rounded-xl flex items-center flex-col"
          >
            <section className="w-full grid place-items-center h-[30%]">
              <h1 className="font-bold text-[1.5rem]">Masuk Akun</h1>
            </section>

            <section className="w-[75%] h-[35%] flex flex-col items-center justify-evenly gap-5">
              <div className="w-full grid place-items-center">
                <input
                  type="text"
                  className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F]"
                  placeholder="Email/Username"
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  required
                />
              </div>

              <div className="w-full grid place-items-center">
                <div className="relative w-full">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F]"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-1"
                  >
                    {isShowPassword ? (
                      <FaRegEye className="text-[#807F7F]" />
                    ) : (
                      <FaRegEyeSlash className="text-[#807F7F]" />
                    )}
                  </button>
                </div>

                <div className="w-full flex justify-end">
                  <h3 className="text-xs xl:text-[0.7rem] text-[#2284DF] text-right mt-2">
                    Lupa password ?
                  </h3>
                </div>
              </div>
            </section>

            <section className="w-full h-[25%] flex flex-col items-center justify-start gap-3 mt-[10%]">
              <button className="bg-[#2284DF] rounded-md w-[75%] h-8 text-white">
                Masuk
              </button>
              <p className="text-[0.6rem] xl:text-[0.7rem]">
                Belum punya akun ?{" "}
                <Link to={"/sign-up"} className="text-[#2284DF]">
                  Daftar Sekarang
                </Link>
              </p>
            </section>
          </form>
        </div>
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
