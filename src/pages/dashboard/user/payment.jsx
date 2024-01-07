import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../../components";
import { MdOutlineContentCopy } from "react-icons/md";
import Swal from "sweetalert2";
import { formatTime } from "../../../utils/helpers";
import { Fragment } from "react";

export const PaymentUser = () => {
  const navigate = useNavigate();

  const bankMethod = {
    bni: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png",
    bca: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    bri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png",
  };

  return (
    <main className="w-full h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="text-[#2284DF] mt-[120px] w-full px-[8%]">
        <Link to={"/"} className="text-[#807F7F] hover:cursor-pointer">
          Home / <Link to={"/"}>Item</Link>
        </Link>{" "}
        / Payment
      </section>

      <h1 className="font-bold text-[1.7rem] pl-[8%] mt-3">Pembayaran</h1>

      <section className="w-full h-[60%] flex flex-col justify-evenly items-center mt-4">
        <h1 className="font-bold text-[1.2rem]">
          ID PEMBAYARAN {localStorage.getItem("order_id")}
        </h1>
        <h2 className="font-bold text-[#262626] text-[1rem] md:text-[1.2rem]">
          Segera Lakukan pembayaran Sebelum
        </h2>
        <h1 className="font-bold text-[1.4rem] text-[#262626]">
          {formatTime(localStorage.getItem("expired"))}
        </h1>
        <h3 className="font-bold text-[1rem] text-[#262626]">
          Jumlah Pembayaran
        </h3>
        <h1 className="text-[#F46264] font-extrabold text-[2rem]">
          Rp
          {Number(localStorage.getItem("gross_amount")).toLocaleString(
            "ID-id"
          ) ||
            Number(localStorage.getItem("product_total_price")).toLocaleString(
              "ID-id"
            )}
        </h1>
        {localStorage.getItem("payment_method") !== "qris" ? (
          <Fragment>
            <img
              src={bankMethod[localStorage.getItem("payment_method")]}
              alt="payment"
              className="w-[100px]"
            />
            <p className="font-black">Nomor Virtual Account:</p>
            <div className="border rounded-lg border-[#807F7F] h-10 overflow-hidden flex items-center justify-between w-[250px]">
              <p className="text-[#807F7F] pl-3 select-none">
                {localStorage.getItem("va")}
              </p>
              <div
                onClick={() => {
                  navigator.clipboard
                    .writeText(localStorage.getItem("va"))
                    .then(() => {
                      Swal.fire("Berhasil menyalin kode VA");
                    })
                    .catch((error) => {
                      console.error("Gagal menyalin ke clipboard:", error);
                      Swal.fire("Gagal menyalin kode VA");
                    });
                }}
                className="bg-[#807F7F] w-[15%] h-full text-white text-lg grid place-items-center hover:cursor-pointer hover:bg-gray-500">
                <MdOutlineContentCopy />
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <img
              src={localStorage.getItem("qris_url")}
              alt="payment"
              className="w-[200px]"
            />
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(localStorage.getItem("qris_url"))
                  .then(() => {
                    Swal.fire("Berhasil menyalin link address QRIS");
                  })
                  .catch((error) => {
                    console.error("Gagal menyalin ke clipboard:", error);
                    Swal.fire("Gagal menyalin link address QRIS");
                  });
              }}
              className="relative -top-2 p-4 rounded-md text-white text-lg bg-[#807F7F] hover:bg-gray-500">
              <MdOutlineContentCopy />
            </button>
          </Fragment>
        )}

        <button
          onClick={() => {
            localStorage.removeItem("va");
            localStorage.removeItem("expired");
            localStorage.removeItem("payment_method");
            localStorage.removeItem("order_id");
            localStorage.removeItem("gross_amount");
            localStorage.removeItem("product_total_price");
            localStorage.removeItem("qris_url");

            navigate("/history");
          }}
          className="border border-[#2284DF] font-bold text-[#2284DF] rounded-lg px-2 py-1">
          Cek Status Pembayaran
        </button>
      </section>
    </main>
  );
};
