import { Link } from "react-router-dom";
import { Navbar } from "../../../components";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock7 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const imageUrls = [
    "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606820854416-439b3305ff39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvdXJ8ZW58MHx8MHx8fDA%3D",
  ];

  const handleThumbnailClick = (url) => {
    setImage(url);
  };

  return (
    <main className="w-screen xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />

      <section className="text-[#2284DF] mt-[90px] w-full px-[8%]">
        <Link to={"/"} className="text-[#807F7F] hover:cursor-pointer">
          Home / <Link to={"/"}>Kategori</Link> / <Link to={"/"}>Wisata</Link>
        </Link>{" "}
        / Item
      </section>

      <h1 className="font-extrabold text-[2rem] pl-[8%]">Darajat Pass</h1>

      <section className="w-full flex flex-col xl:flex-row mt-2 gap-5">
        <div className="w-[90%] xl:w-[60%] flex flex-col gap-3 pl-[8%]">
          <div className="full h-[250px]">
            <img
              className="w-full h-[250px] object-cover hover:cursor-pointer hover:scale-95 duration-300"
              src={image}
              alt="wisata"
            />
          </div>
          <div className="flex w-full justify-between gap-3">
            {imageUrls.map((url, index) => (
              <div key={index} className="w-[25%]">
                <img
                  className="w-full object-cover hover:cursor-pointer hover:scale-95 duration-300"
                  src={url}
                  alt={`wisata-${index}`}
                  onClick={() => handleThumbnailClick(url)}
                />
              </div>
            ))}
          </div>
          <section className="flex items-center font-bold gap-2">
            <MdOutlineLocationOn className="text-lg" />
            <h3>jl. darajat km. 15 44161 Samarang West Java · ~42 km</h3>
          </section>

          <section className="flex items-center font-bold gap-2">
            <LuClock7 className="text-lg" />
            <h3>24 Jam</h3>
          </section>

          <section className="flex items-center font-bold gap-2">
            <FaStar className="text-lg text-[#F2C219]" />
            <h3 className="text-[#B3B2B2]">5.0 (1K)</h3>
          </section>

          <section className="flex items-center font-bold gap-2">
            <h3 className="text-[#F46264]">Air Panas, Gunung, Kolam</h3>
          </section>

          <section className="flex items-center font-bold gap-2">
            <h3 className="font-bold text-[1.5rem]">Informasi</h3>
          </section>

          <section className="flex items-center font-bold gap-2 mb-10 ">
            <h3>
              Darajat Pass adalah salah satu destinasi wisata alam yang populer
              di Garut, Jawa Barat. Destinasi wisata ini terletak di ketinggian
              sekitar 1.300 meter di atas permukaan laut, sehingga udaranya
              sejuk dan segar. Darajat Pass menawarkan berbagai macam aktivitas
              wisata, antara lain: Pemandian air panas: Darajat Pass memiliki
              beberapa kolam pemandian air panas yang mengandung belerang.
              Pemandian air panas ini dipercaya dapat menyembuhkan berbagai
              macam penyakit, seperti rematik, asam urat, dan penyakit kulit.
              Terbuka di jendela baruinfogarut.id Kolam pemandian air panas
              Darajat Pass Bermain air: Darajat Pass juga memiliki wahana
              permainan air, seperti kolam renang, seluncur air, dan waterboom.
              Wahana permainan air ini cocok untuk keluarga yang ingin
              menghabiskan waktu liburan bersama. Terbuka di jendela
              baruwisatahits.blog Wahana permainan air Darajat Pass Menikmati
              pemandangan: Darajat Pass memiliki pemandangan alam yang indah,
              dengan hamparan kebun teh dan pegunungan yang hijau. Wisatawan
              dapat menikmati pemandangan alam ini dengan berjalan-jalan di
              taman atau bersantai di gazebo. Terbuka di jendela
              baruwww.tripadvisor.co.id Pemandangan Darajat Pass Berbelanja: Di
              Darajat Pass terdapat berbagai macam toko yang menjual oleh-oleh
              khas Garut, seperti dodol, keripik, dan kerajinan tangan.
            </h3>
          </section>
        </div>

        <div className="w-[80%] xl:w-[32%] h-[420px] border border-[#807F7F] rounded-xl ml-[10%] xl:ml-[4%] mr-[8%] flex justify-between items-center flex-col py-5 mb-10 xl:mb-0">
          <h1 className="font-bold text-[1.5rem]">Informasi Paket</h1>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Nama</h3>
            <h3>Darajat Pass</h3>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Harga</h3>
            <h3>Rp50.000</h3>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Tanggal</h3>
            <input type="date" />
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Jumlah</h3>
            <div className="w-[40%] flex justify-between">
              <button
                onClick={() => setCount(count <= 1 ? 1 : count - 1)}
                className="rounded-full border border-black bg-white w-8"
              >
                -
              </button>
              <h3>{count}</h3>
              <button
                onClick={() => setCount(count + 1)}
                className="rounded-full border border-black bg-white w-8"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Total</h3>
            <h3 className="text-[#F46264]">Rp50.000</h3>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <button className="w-full bg-[#2284DF] text-white rounded-md py-1">
              Beli
            </button>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <button className="w-full text-[#2284DF] border border-[#2284DF] bg-white rounded-md py-1">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
