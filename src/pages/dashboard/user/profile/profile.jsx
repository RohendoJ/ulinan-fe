import { Link, useNavigate } from "react-router-dom";
import { FooterUser, Navbar } from "../../../../components";
import { useGetUserMe } from "../../../../components/navbar-admin/hooks";
import { useMemo } from "react";
import { removeToken } from "../../../../utils/token";
import Swal from "sweetalert2";

export const ProfilePage = () => {
  const { data } = useGetUserMe();

  const user = useMemo(() => {
    return data;
  }, [data]);

  const navigate = useNavigate();

  const profileItems = [
    {
      title: "Email",
      value: user?.email,
    },
    {
      title: "No. Telepon",
      value: user?.phone || "Belum ada data",
    },
    {
      title: "Tanggal Lahir",
      value: user?.birth_date || "Belum ada data",
    },
    {
      title: "Domisili",
      value: user?.address || "Belum ada data",
    },
    {
      title: "Gender",
      value: user?.gender || "Belum ada data",
    },
  ];

  const buttonItems = [
    {
      title: "Edit Profile",
      onClick: () => {
        navigate("/profile/edit");
      },
    },
    {
      title: "Edit Password",
      onClick: () => {
        navigate("/profile/edit-password");
      },
    },
    {
      title: "Log Out",
      onClick: () => {
        removeToken();
        Swal.fire({
          icon: "success",
          title: "Logout Success",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      },
    },
  ];

  return (
    <main className="w-full h-screen flex flex-col overflow-x-hidden">
      <Navbar dashboard />

      <div className="w-fit text-[#2284DF] text-xl font-bold mt-[100px] ml-[5%]">
        <Link to={"/"} className="text-[#807F7F]">
          Home /
        </Link>{" "}
        Profile
      </div>

      <section className="w-full h-full flex flex-col lg:flex-row gap-20 lg:gap-0 mb-[50vh] lg:mb-[10vh]">
        <div className="flex flex-col w-full lg:w-[50%] h-full px-[8%] gap-2">
          <h1 className="text-black font-bold text-[2rem] mt-5">Profile</h1>

          <div className="w-full h-full flex flex-col gap-6 py-4 px-10">
            <figure className="flex gap-10 w-fit">
              <img
                src={user?.avatar}
                alt="profile"
                className={`rounded-full w-[8rem] h-[8rem] object-cover bg-center bg-no-repeat`}
              />
              <div className="flex flex-col gap-2 w-full justify-center text-black ">
                <figcaption className="font-bold text-[1.3rem]">
                  {user?.fullname}
                </figcaption>
                <figcaption className="font-medium text-[1rem]">
                  {user?.username}
                </figcaption>
              </div>
            </figure>

            {profileItems?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 px-2">
                <h3 className="font-bold text-[1.3rem]">{item?.title}</h3>
                <span className="font-medium text-[1rem]">{item?.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%] lg:h-full flex flex-col items-center lg:justify-center gap-5">
          {buttonItems?.map((item, index) => (
            <button
              key={index}
              onClick={item?.onClick}
              className="rounded-md border w-[60%] border-[#2284DF] text-[#2284DF] font-semibold py-2 px-4 text-lg">
              {item?.title}
            </button>
          ))}
        </div>
      </section>

      <FooterUser dashboard />
    </main>
  );
};
