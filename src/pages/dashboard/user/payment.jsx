import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../../components";
import { MdOutlineContentCopy } from "react-icons/md";
import Swal from "sweetalert2";

export const PaymentUser = () => {
  const navigate = useNavigate();

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

      <section className="w-full h-[60%] flex flex-col justify-evenly items-center">
        <h1 className="font-bold text-[1.2rem]">ID PEMBAYARAN #by1234</h1>
        <h2 className="font-bold text-[#262626] text-[1rem] md:text-[1.2rem]">
          Segera Lakukan pembayaran Sebelum
        </h2>
        <h1 className="font-bold text-[1.4rem] text-[#262626]">
          27 November 2023
        </h1>
        <h3 className="font-bold text-[1rem] text-[#262626]">
          Jumlah Pembayaran
        </h3>
        <h1 className="text-[#F46264] font-extrabold text-[2rem]">Rp50.000</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
          alt="payment"
          className="w-[100px]"
        />
        <p className="font-black">Nomor Virtual Account:</p>
        <div className="border rounded-lg border-[#807F7F] h-10 overflow-hidden flex items-center justify-between w-[250px]">
          <p className="text-[#807F7F] pl-3 select-none">12345678</p>
          <div
            onClick={() => {
              Swal.fire("Berhasil salin kode VA");
            }}
            className="bg-[#807F7F] w-[15%] h-full text-white text-lg grid place-items-center hover:cursor-pointer hover:bg-gray-500"
          >
            <MdOutlineContentCopy />
          </div>
        </div>
        <button
          onClick={() => navigate("/history")}
          className="border border-[#2284DF] font-bold text-[#2284DF] rounded-lg px-2 py-1"
        >
          Cek Status Pembayaran
        </button>
      </section>
    </main>
  );
};
