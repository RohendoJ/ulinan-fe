import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "./hook.js";
import { getUserRole, setToken } from "../../utils/token.js";
import { Button } from "../../components/button.jsx";

export const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();

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
          setToken(data.data.access_token);
          const token = getUserRole(data.data.access_token);

          if (token === "admin") {
            return navigate("/dashboard-admin");
          }
          navigate("/");
        },
      },
      {
        onError: () => {
          alert("Username atau Password anda salah");
        },
      }
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white w-[70%] md:w-[50%] lg:w-[40%] xl:w-[60%] 2xl:w-[55%] h-[60%] xl:h-[90%] rounded-xl flex items-center flex-col">
      <section className="w-full grid place-items-center h-[30%]">
        <h1 className="font-bold text-[1.5rem]">Masuk Akun</h1>
      </section>

      <section className="w-[75%] h-[35%] flex flex-col items-center justify-evenly gap-5">
        <div className="w-full grid place-items-center">
          <input
            type="text"
            className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F] focus:outline-none"
            placeholder="Email/Username"
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />
        </div>

        <div className="w-full grid place-items-center">
          <div className="relative w-full">
            <input
              type={isShowPassword ? "text" : "password"}
              className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F] focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={togglePassword}
<<<<<<< Updated upstream
              type="button"
              className="absolute inset-y-0 right-1"
            >
=======
              className="absolute inset-y-0 right-1">
>>>>>>> Stashed changes
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
        <Button type="submit">Masuk</Button>
        <p className="text-[0.6rem] xl:text-[0.7rem]">
          Belum punya akun ?{" "}
          <Link to={"/auth/sign-up"} className="text-[#2284DF]">
            Daftar Sekarang
          </Link>
        </p>
      </section>
    </form>
  );
};
