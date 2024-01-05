import { Link } from "react-router-dom";
import { Navbar } from "../../../components/navbar";
import { FooterUser } from "../../../components";

export const History = () => {
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
            <tr>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">2024-01-05</td>
              <td className="py-2 px-4">3</td>
              <td className="py-2 px-4">$150.00</td>
              <td className="py-2 px-4 text-green-500">Completed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <FooterUser dashboard />
    </main>
  );
};
