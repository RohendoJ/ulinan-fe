import { Link, useNavigate } from "react-router-dom";
import { FooterUser, Navbar } from "../../../../components";
import { useState } from "react";
import { useUpdatePassword } from "./hooks";
import Swal from "sweetalert2";

export const EditProfilePassword = () => {
  const [updatePassword, setUpdatePassword] = useState({});

  const navigate = useNavigate();

  const profileItems = [
    {
      title: "Kata Sandi Lama",
      placeholder: "Masukan Kata Sandi Lama",
      onChange: (e) => {
        setUpdatePassword({
          ...updatePassword,
          old_password: e.target.value,
        });
      },
    },
    {
      title: "Kata Sandi Baru",
      placeholder: "Masukan Kata Sandi Baru",
      onChange: (e) => {
        setUpdatePassword({
          ...updatePassword,
          new_password: e.target.value,
        });
      },
    },
    {
      title: "Konfirmasi Kata Sandi",
      placeholder: "Masukan Ulang Kata Sandi Baru",
      onChange: (e) => {
        setUpdatePassword({
          ...updatePassword,
          confirm_password: e.target.value,
        });
      },
    },
  ];

  const { mutate } = useUpdatePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(updatePassword, {
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Password updated",
          showConfirmButton: false,
        });
        navigate("/profile");
      },
      onError: (err) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: err.response.data.message.split(":").splice(1, 2),
          showConfirmButton: false,
        });
      },
    });
  };

  return (
    <main className="w-full h-screen flex flex-col overflow-x-hidden">
      <Navbar dashboard />

      <div className="w-fit text-[#2284DF] text-xl font-bold mt-[100px] ml-[5%]">
        <Link to={"/"} className="text-[#807F7F]">
          Home /
        </Link>{" "}
        Profile
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col gap-20 lg:gap-0 mb-[20vh] lg:mb-[10vh]">
        <div className="flex flex-col w-full lg:w-[50%] h-full px-[8%] gap-2">
          <h1 className="text-black font-bold text-[2rem] mt-5">
            Ubah Kata Sandi
          </h1>

          <div className="w-full h-fit flex flex-col gap-6 p-4">
            {profileItems?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 px-2">
                <h3 className="font-bold text-[1.3rem]">{item?.title}</h3>
                <input
                  type={item?.type}
                  placeholder={item?.placeholder}
                  className="font-medium text-[1rem] focus:outline-none focus:border-b-2 border-black"
                  onChange={item?.onChange}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%] lg:h-full flex flex-col items-center justify-center md:justify-start gap-3 md:pr-28 pt-5">
          <button className="rounded-md border w-[65%] text-white bg-[#2284DF] font-semibold py-2 px-4 text-lg">
            Simpan
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="rounded-md border w-[65%] border-[#2284DF] text-[#2284DF] font-semibold py-2 px-4 text-lg">
            Batal
          </button>
        </div>
      </form>

      <FooterUser dashboard />
    </main>
  );
};
