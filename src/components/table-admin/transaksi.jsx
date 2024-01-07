import { MdEdit } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataNotFound } from "./error";
import Swal from "sweetalert2";

export const TableTransaksiAdmin = ({
  data,
  isLoading,
  onDelete,
  currentPage,
  itemsPerPage,
}) => {
  if ((!data && !isLoading) || (data?.length === 0 && !isLoading)) {
    return <DataNotFound />;
  }

  if (isLoading) {
    return (
      <div className="container w-full h-[20rem] mx-auto my-6 bg-slate-200 animate-pulse"></div>
    );
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
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-5 text-center border-r-2 border-t-2 border-black">
                {index + 1 + (currentPage - 1) * itemsPerPage}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                {item?.created_at}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 text-center border-black">
                {item?.username}
              </td>
              {conditionalStatus(item?.payment_status)}
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                <div className="w-full flex items-center justify-center gap-5">
                  <Link
                    to={`/dashboard-admin/transaksi/edit/${item?.id}`}
                    className="flex items-center justify-center p-1 rounded-lg bg-[#F2C219]">
                    <MdEdit className="text-white text-2xl" />
                  </Link>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "Yakin ingin menghapus data ini?",
                        icon: "question",
                        showConfirmButton: true,
                        showDenyButton: true,
                        denyButtonText: "Hapus",
                        denyButtonColor: "#F2C219",
                        confirmButtonText: "Batal",
                        confirmButtonColor: "#2284DF",
                        iconColor: "#F2994A",
                      }).then((result) => {
                        if (result.isDenied) {
                          onDelete(item?.id);
                        }
                      });
                    }}
                    className="flex items-center justify-center p-1 rounded-lg bg-[#E1272A]">
                    <BiSolidTrashAlt className="text-white text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
