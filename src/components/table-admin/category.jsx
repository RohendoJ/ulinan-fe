import { MdEdit } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataNotFound } from "./error";

export const TableCategoryAdmin = ({ data }) => {
  if (!data || data?.length === 0) {
    return <DataNotFound />;
  }

  return (
    <section className="container w-full mx-auto py-6 overflow-x-auto">
      <table className="min-w-full w-full table bg-white border border-black shadow-md">
        <thead className="w-full bg-[#A6CEF2] border-black text-xl font-black">
          <tr>
            <th className="py-2 w-[1%] px-4 border-r-2 border-black">NO</th>
            <th className="py-2 w-[17%] px-4 border-black border-r-2 ">Nama</th>
            <th className="py-2 md:w-[30%] px-4 border-black border-r-2 ">
              Deskripsi
            </th>
            <th className="py-2 w-[6%] px-4 border-black border-r-2 ">
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
                {data?.name}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                {data?.description}
              </td>
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
