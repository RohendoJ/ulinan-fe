import { MdEdit } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataNotFound } from "./error";
import Swal from "sweetalert2";

export const TableGalleryAdmin = ({
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

  return (
    <section className="container w-full mx-auto pt-4 pb-1 overflow-x-auto">
      <table className="min-w-full w-full table bg-white border border-black shadow-md">
        <thead className="w-full bg-[#A6CEF2] border-black text-xl font-black">
          <tr>
            <th className="py-2 w-[1%] px-4 border-r-2 border-black">NO</th>
            <th className="py-2 w-[17%] px-4 border-black border-r-2 ">Nama</th>
            <th className="py-2 md:w-[30%] px-4 border-black border-r-2 ">
              Keterangan
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
                {index + 1 + (currentPage - 1) * itemsPerPage}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                {data?.name}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                {data?.description}
              </td>
              <td className="py-2 px-4 border-r-2 border-t-2 border-black">
                <div className="w-full flex items-center justify-center gap-5">
                  <Link
                    to={`/dashboard-admin/galeri/edit/${data?.id}`}
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
                          onDelete(data?.id);
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
