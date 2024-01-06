import { Link } from "react-router-dom";
import { Navbar } from "../../../components/navbar";
// import { FooterUser } from "../../../components";
import { useGetCart } from "./hooks";
import { useMemo } from "react";

export const Cart = () => {
  const { data } = useGetCart();

  const cart = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  console.log(cart);

  return (
    <main className="w-full h-auto xl:h-screen flex flex-col overflow-x-hidden">
      <Navbar dashboard />

      <section className="w-fit text-[#2284DF] text-xl font-bold mt-[100px] ml-[8%]">
        <Link to={"/"} className="text-[#807F7F]">
          Home /
        </Link>{" "}
        Cart
      </section>

      <h1 className="text-black font-bold text-[1.5rem] pl-[8%] mt-5">Cart</h1>

      <section className="w-full h-full flex flex-col xl:flex-row mt-3">
        <div className="max-h-[200px] xl:max-h-[270px] w-full xl:w-[65%] overflow-auto pr-[10%] md:pr-0 ml-[10%] xl:ml-0">
          <table className="w-[80%] md:w-[85%] xl:w-[85%] xl:ml-[12%] border-collapse text-center">
            <thead className="sticky top-0 border-b border-[#807F7F] bg-white">
              <tr>
                <th className="py-2 px-8 md:px-4">No</th>
                <th className="py-2 px-8 md:px-4">Nama</th>
                <th className="py-2 px-8 md:px-4">Jumlah</th>
                <th className="py-2 px-8 md:px-4">Price</th>
                <th className="py-2 px-8 md:px-4">Total</th>
                <th className="py-2 px-8 md:px-4">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {cart?.cart_items?.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item?.product_name}</td>
                  <td className="py-2 px-4">{item?.quantity}</td>
                  <td className="py-2 px-4">
                    Rp{item.price?.toLocaleString("ID-id")}
                  </td>
                  <td className="py-2 px-4">
                    Rp{item.total_price?.toLocaleString("ID-id")}
                  </td>
                  <td className="py-2 px-4 text-green-500">
                    {item?.arrival_date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="w-full xl:w-[35%] h-full flex justify-center mb-[10vh]">
          <div className="w-[80%] md:w-[50%] lg:w-[40%] xl:w-[80%] bg-white h-[310px] xl:h-[71%] rounded-xl shadow-md border border-gray-400 flex flex-col items-center justify-between mt-10 xl:mt-0">
            <h1 className="text-[#2284DF] font-extrabold text-2xl mt-4">
              Checkout Information
            </h1>
            <div className="w-full flex flex-col items-center gap-2 mt-3">
              <div className="flex justify-between font-extrabold text-black w-[80%]">
                <h1>Total Price</h1>
                <h1>Rp{cart?.grant_total.toLocaleString("ID-id")}</h1>
              </div>
              <div className="w-[80%] h-[0.4px] bg-[#807F7F]"></div>
            </div>

            <h1 className="text-[#2284DF] font-extrabold text-2xl">
              Checkout Information
            </h1>
            <p className="text-[#807F7F] text-[1.1rem] text-center w-[70%]">
              Selesaikan Pembayaran untuk mendapatkan tiket
            </p>
            <button className="w-[80%] h-[13%] bg-[#2284DF] hover:bg-blue-600 text-white font-bold grid place-items-center rounded-lg mb-5">
              Checkout
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};
