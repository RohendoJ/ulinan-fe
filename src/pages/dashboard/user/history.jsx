import { Link } from "react-router-dom";
import { Navbar } from "../../../components/navbar";
import { FooterUser } from "../../../components";
import { useGetHistoryTransaction } from "./hooks";
import { useMemo } from "react";
import { FiAlertTriangle } from "react-icons/fi";

export const History = () => {
  const { data } = useGetHistoryTransaction();

  const history = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  console.log(history);

  const conditionalStatus = (status) => {
    return (
      <td
        className={`py-2 px-4
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
    <main className="w-full xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar dashboard />

      <section className="text-[#2284DF] mt-[100px] ml-[8%] hover:cursor-pointer">
        <Link to={"/"} className="text-[#807F7F]">
          Home /
        </Link>{" "}
        History
      </section>

      <section className="w-full flex h-auto mt-5 overflow-x-auto">
        <h1 className="text-black font-bold text-[1.5rem] pl-[8%]">Histori</h1>
      </section>

      {!history?.length ? (
        <div className="max-h-[400px] xl:max-h-[270px] flex w-full mt-3 flex-col gap-2 items-center justify-center h-[20rem] font-medium ">
          <FiAlertTriangle className="text-5xl" />
          <p>Kamu belum melakukan checkout</p>
        </div>
      ) : (
        <section className="max-h-[400px] xl:max-h-[270px] w-full mt-3 overflow-auto ml-[8%] pr-[10%] md:pr-0 xl:ml-0">
          <table className="w-[80%] md:w-[85%] xl:w-[84%] xl:mx-auto border-collapse text-center">
            <thead className="sticky top-0 border-b border-[#807F7F] bg-white">
              <tr>
                <th className="py-2 px-8 md:px-4">No</th>
                <th className="py-2 px-8 md:px-4">Nama</th>
                <th className="py-2 px-8 md:px-4">Tanggal</th>
                <th className="py-2 px-8 md:px-4">Jumlah</th>
                <th className="py-2 px-8 md:px-4">Total</th>
                <th className="py-2 px-8 md:px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    {item?.products?.[0]?.product_name}
                  </td>
                  <td className="py-2 px-4">{item?.arrival_date}</td>
                  <td className="py-2 px-4">{item?.total_quantity}</td>
                  <td className="py-2 px-4">
                    Rp{item.grand_total_price.toLocaleString("ID-id")}
                  </td>
                  {conditionalStatus(item?.payment_status)}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <FooterUser dashboard />
    </main>
  );
};
