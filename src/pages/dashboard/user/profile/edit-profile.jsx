import { Link, useNavigate } from "react-router-dom";
import { FooterUser, Navbar, Spinner } from "../../../../components";
import { useGetUserMe } from "../../../../components/navbar-admin/hooks";
import { useMemo, useState } from "react";
import { FaPen } from "react-icons/fa";
import { useUpdateAvatar, useUpdateProfile } from "./hooks";
import Swal from "sweetalert2";
import { formatDate } from "../../../../utils/helpers";

export const EditProfilePage = () => {
  const { data } = useGetUserMe();
  const [avatar, setAvatar] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const user = useMemo(() => {
    return data;
  }, [data]);

  const [updateData, setUpdateData] = useState({
    gender_id: Number(user?.gender_id) || 1,
  });
  const navigate = useNavigate();

  const { mutateAsync } = useUpdateProfile();
  const { mutateAsync: mutateAvatar } = useUpdateAvatar();

  const profileItems = [
    {
      title: "Name",
      value: user?.fullname,
      type: "text",
      onChange: (e) => {
        setUpdateData({
          ...updateData,
          fullname: e.target.value,
        });
      },
    },
    {
      title: "Username",
      value: user?.username,
      type: "text",
      onChange: (e) => {
        setUpdateData({
          ...updateData,
          username: e.target.value,
        });
      },
    },
    {
      title: "Email / No. Telepon",
      value: user?.email,
      type: "text",
      onChange: (e) => {
        setUpdateData({
          ...updateData,
          email: e.target.value,
        });
      },
    },
    {
      title: "No. Telepon",
      value: user?.phone || "Belum ada data",
      type: "text",
      onChange: (e) => {
        setUpdateData({
          ...updateData,
          phone: e.target.value,
        });
      },
    },
    {
      title: "Tanggal Lahir",
      value: formatDate(user?.birth_date) || "Belum ada data",
      type: "date",
      onChange: (e) => {
        setUpdateData({
          ...updateData,
          birthdate: e.target.value,
        });
      },
    },
    {
      title: "Domisili",
      value: user?.address || "Belum ada data",
      type: "text",
      onChange: (e) => {
        setUpdateData({
          ...updateData,
          address: e.target.value,
        });
      },
    },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    setUpdateData({
      ...updateData,
    });

    if (avatar?.file) {
      await mutateAvatar(avatar?.file);
    }

    await mutateAsync(updateData, {
      onSuccess: () => {
        setIsLoading(false);

        Swal.fire({
          icon: "success",
          title: "Profile updated",
          showConfirmButton: false,
        });
        navigate("/profile");
      },
      onError: () => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
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
        onSubmit={onSubmit}
        className="w-full h-full flex flex-col lg:flex-row gap-40 lg:gap-0 mb-[50vh] lg:mb-[35vh] xl:mb-[20vh]">
        <div className="flex flex-col w-full lg:w-[50%] h-full px-[8%] gap-2">
          <h1 className="text-black font-bold text-[2rem] mt-5">
            Edit Profile
          </h1>

          <div className="w-full h-full flex flex-col gap-6 py-4 px-10">
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="appearance-none hidden"
              onChange={(e) =>
                setAvatar({
                  file: e.target.files[0],
                  url: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            <label
              htmlFor="avatar"
              className="flex gap-10 w-fit relative rounded-full cursor-pointer">
              <img
                src={avatar?.url || user?.avatar}
                alt="profile"
                className={`rounded-full w-[8rem] h-[8rem] object-cover bg-center bg-no-repeat`}
              />
              <div className="absolute rounded-full w-[8rem] h-[8rem] flex justify-center items-center bg-black bg-opacity-40 pointer-events-none">
                <FaPen className="text-xl text-white" />
              </div>
            </label>

            {profileItems?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 px-2">
                <h3 className="font-bold text-[1.3rem]">{item?.title}</h3>
                <input
                  type={item?.type}
                  className="font-medium text-[1rem] focus:outline-none focus:border-b-2 border-black"
                  defaultValue={item?.value}
                  onChange={item?.onChange}
                />
              </div>
            ))}

            <div className="flex flex-col gap-2 px-2">
              <h3 className="font-bold text-[1.3rem]">Gender</h3>
              <select
                defaultValue={Number(user?.gender) || 1}
                className="font-medium text-[1rem] focus:outline-none focus:border-b-2 border-black py-1 appearance-none"
                onChange={(e) =>
                  setUpdateData({
                    ...updateData,
                    gender_id: Number(e.target.value),
                  })
                }>
                <option value="1">Pria</option>
                <option value="2">Wanita</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] lg:h-full flex flex-col items-center lg:justify-center gap-5">
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center rounded-md border w-[60%] h-[3rem] text-white bg-[#2284DF] font-semibold py-2 px-4 text-lg">
            {isLoading ? <Spinner width="w-5" height="h-5" /> : "Simpan"}
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="rounded-md border w-[60%] border-[#2284DF] text-[#2284DF] font-semibold py-2 px-4 text-lg">
            Batal
          </button>
        </div>
      </form>

      <FooterUser dashboard />
    </main>
  );
};
