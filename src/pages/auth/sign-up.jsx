import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRegister } from "./hook.js";

export const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsConfirmShowPassword] = useState(false);

  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const toggleConfirmPassword = () => {
    setIsConfirmShowPassword(!isShowConfirmPassword);
  };

  const { mutate: register } = useRegister();

  const onSubmit = (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("Password tidak sama");
    }

    register(
      {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        password_confirm: confirmPassword,
      },
      {
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white w-[70%] md:w-[50%] lg:w-[40%] xl:w-[60%] 2xl:w-[55%] h-[75%] xl:h-[100%] rounded-xl flex items-center flex-col">
      <section className="w-full grid place-items-center h-[30%]">
        <h1 className="font-bold text-[1.5rem]">Daftar Akun</h1>
      </section>

      <section className="w-[75%] h-[45%] flex flex-col items-center justify-evenly gap-5">
        <div className="w-full grid place-items-center">
          <input
            type="text"
            className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F] focus:outline-none"
            placeholder="Nama Lengkap"
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className="w-full grid place-items-center">
          <input
            type="text"
            className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F] focus:outline-none"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="w-full grid place-items-center">
          <input
            type="email"
            className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F] focus:outline-none"
            placeholder="Email/Username"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="w-full grid place-items-center gap-5">
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
              className="absolute inset-y-0 right-1"
              type="button">
              {isShowPassword ? (
                <FaRegEye className="text-[#807F7F]" />
              ) : (
                <FaRegEyeSlash className="text-[#807F7F]" />
              )}
            </button>
          </div>

          <div className="relative w-full">
            <input
              type={isShowConfirmPassword ? "text" : "password"}
              className="w-full border-b-2 border-[#807F7F] placeholder:text-[#807F7F] focus:outline-none"
              placeholder="Konfirmasi Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              onClick={toggleConfirmPassword}
              className="absolute inset-y-0 right-1"
              type="button">
              {isShowConfirmPassword ? (
                <FaRegEye className="text-[#807F7F]" />
              ) : (
                <FaRegEyeSlash className="text-[#807F7F]" />
              )}
            </button>
          </div>

          <div className="w-full flex justify-end">
            <h3 className="text-[0.5rem] xl:text-[0.7rem] text-center">
              Dengan melakukan pendaftaran, saya setuju dengan{" "}
              <span className="text-[#2284DF]">Syarat & Ketentuan</span>
              dan{" "}
              <span className="text-[#2284DF]">Kebijakan Privasi Aturan</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="w-full h-[25%] flex flex-col items-center justify-start gap-3 mt-[10%]">
        <button
          type="submit"
          className="bg-[#2284DF] rounded-md w-[75%] h-8 text-white">
          Daftar
        </button>
        <p className="text-[0.6rem] xl:text-[0.7rem]">
          Sudah punya akun ?{" "}
          <Link to={"/auth/sign-in"} className="text-[#2284DF]">
            Masuk Disini
          </Link>
        </p>
      </section>
    </form>
  );
};
