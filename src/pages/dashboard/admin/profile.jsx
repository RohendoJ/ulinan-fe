import { useMemo } from "react";
import { useGetUserMe } from "../../../components/navbar-admin/hooks";

export const ProfileAdminPage = () => {
  const { data } = useGetUserMe();

  const user = useMemo(() => {
    return data;
  }, [data]);

  const profileItems = [
    {
      title: "Email / No. Telepon",
      value: user?.email,
    },
    {
      title: "No. Telepon",
      value: user?.email || "Belum ada data",
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
  return (
    <section className="flex flex-col w-full h-full px-[3%] pt-3 gap-2">
      <h1 className="text-[#2284DF] font-bold text-[2rem] mt-5">Profile</h1>

      <div className="w-full h-full flex flex-col gap-6 py-4 px-10">
        <figure className="flex gap-10 w-fit">
          <img
            src={user?.avatar}
            alt="profile"
            className="rounded-full w-[8rem] h-[8rem]"
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
    </section>
  );
};
