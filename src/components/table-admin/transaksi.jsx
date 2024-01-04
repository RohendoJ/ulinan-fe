import { MdEdit } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataNotFound } from "./error";

export const TableTransaksiAdmin = ({ data }) => {
  if (!data || data?.length === 0) {
    return <DataNotFound />;
  }

  const conditionalStatus = (status) => {
    return (
      <td
        className={`py-2 px-4 border-r-2 border-t-2 text-center font-semibold border-black
        ${
          status === "Pending"
            ? "text-[#F2C219]"
            : status === "Failed"
            ? "text-[#E1272A]"
            : status === "Success"
            ? "text-[#077927]"
            : "text-black"
        }
      `}>
        {status}
      </td>
    );
  };

  return (
    <section className="container w-full mx-auto pt-4 pb-1 overflow-x-auto">
      <table className="min-w-full w-full table bg-white border border-black shadow-md">
        <thead className="w-full bg-[#A6CEF2] border-black text-xl font-black">
          <tr>
            <th className="py-2 w-[1%] px-4 border-r-2 border-black">NO</th>
            <th className="py-2 w-[20%] px-4 border-black border-r-2 ">
              Date Time
            </th>
            <th className="py-2 md:w-[20%] px-4 border-black border-r-2 ">
              Username
            </th>
            <th className="py-2 md:w-[10%] px-4 border-black border-r-2 ">
              Status
            </th>
            <th className="py-2 w-[8%] px-4 border-black border-r-2 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="font-semibold text-lg">
          {data?.map((data, index) => (
            <tr key={index}>
              <td className="py-2 px-5 text-center border-r-2 border-t-2 border-black">
                {index + 1}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                {data?.date_time}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 text-center border-black">
                {data?.username}
              </td>
              {conditionalStatus(data?.status)}
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                <div className="w-full flex items-center justify-center gap-5">
                  <Link className="flex items-center justify-center p-1 rounded-lg bg-[#F2C219]">
                    <MdEdit className="text-white text-2xl" />
                  </Link>
                  <Link className="flex items-center justify-center p-1 rounded-lg bg-[#E1272A]">
                    <BiSolidTrashAlt className="text-white text-2xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
