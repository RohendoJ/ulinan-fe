import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar, Spinner } from "../../../components";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock7 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { useGetProductById } from "../admin";
import { useAddToCart } from "./hooks";
import Swal from "sweetalert2";
import { getToken } from "../../../utils/token";

export const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [date, setDate] = useState("");

  const { product_id } = useParams();

  const { data } = useGetProductById(product_id);

  const product = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const [image, setImage] = useState(
    product?.image?.[0]?.image_url ||
      "https://images.unsplash.com/photo-1503503330041-4cd943d2b61f?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleThumbnailClick = (url) => {
    setImage(url);
  };

  const navigate = useNavigate();

  const { mutate } = useAddToCart();
  const handleInsertCart = () => {
    try {
      const token = getToken();

      if (!token) {
        return Swal.fire({
          icon: "info",
          title: "Tidak bisa menambah ke keranjang",
          text: "Silahkan login terlebih dahulu",
          confirmButtonColor: "#2284DF",
        }).then(() => navigate("/auth/sign-in"));
      }

      setIsLoading(true);
      mutate(
        {
          product_id: Number(product?.id),
          quantity: count,
          arrival_date: date,
        },
        {
          onSuccess: () => {
            setIsLoading(false);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Product added to cart",
            });
          },
          onError: () => {
            setIsLoading(false);
            Swal.fire({
              icon: "error",
              title: "Terjadi Kesalahan",
            });
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (product?.image?.[0]?.image_url) {
      setImage(product?.image?.[0]?.image_url);
    }
  }, [product?.image]);

  const handleBuy = () => {
    const token = getToken();

    if (!token) {
      return Swal.fire({
        icon: "info",
        title: "Tidak bisa membeli",
        text: "Silahkan login terlebih dahulu",
        confirmButtonColor: "#2284DF",
      }).then(() => navigate("/auth/sign-in"));
    }

    localStorage.setItem("product_id", product.id);
    localStorage.setItem("product_name", product.name);
    localStorage.setItem("product_date", date);
    localStorage.setItem("product_price", product.price);
    localStorage.setItem("product_quantity", Number(count));
    localStorage.setItem("product_total_price", count * product.price);
    navigate("/item/pembayaran");
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

      <h1 className="font-extrabold text-[2rem] pl-[8%]">{product?.name}</h1>

      <section className="w-full flex flex-col xl:flex-row mt-2 gap-5">
        <div className="w-[90%] xl:w-[60%] flex flex-col gap-3 pl-[8%]">
          <div className="full h-[250px]">
            <img
              className="w-full h-[250px] object-cover duration-300"
              src={image}
              alt="wisata"
            />
          </div>
          <div className="grid grid-cols-4 w-full gap-3">
            {product?.image?.map((item, index) => (
              <div key={index}>
                <img
                  className="w-full object-cover hover:cursor-pointer hover:scale-95 duration-300"
                  src={item?.image_url}
                  alt={`wisata-${index}`}
                  onClick={() => handleThumbnailClick(item?.image_url)}
                />
              </div>
            ))}
          </div>
          <section className="flex items-center font-bold gap-2">
            <MdOutlineLocationOn className="text-lg" />
            <h3>{product?.address}</h3>
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
            <h3 className="text-[#F46264]">{product?.category}</h3>
          </section>

          <section className="flex items-center font-bold gap-2">
            <h3 className="font-bold text-[1.5rem]">Informasi</h3>
          </section>

          <section className="flex flex-col items-center font-bold gap-4 mb-10 ">
            {product?.description?.split("\n\n").map((item) => (
              <p key={item}>{item}</p>
            ))}
          </section>
        </div>

        <div className="w-[80%] xl:w-[32%] h-[420px] border border-[#807F7F] rounded-xl ml-[10%] xl:ml-[4%] mr-[8%] flex justify-between items-center flex-col py-5 mb-10 xl:mb-0">
          <h1 className="font-bold text-[1.5rem]">Informasi Paket</h1>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Nama</h3>
            <h3>{product?.name}</h3>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Harga</h3>
            <h3>Rp{product?.price?.toLocaleString("ID-id")}</h3>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Tanggal</h3>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Jumlah</h3>
            <div className="w-[40%] flex justify-between">
              <button
                onClick={() => setCount(count <= 1 ? 1 : count - 1)}
                className="rounded-full border border-black bg-white w-8">
                -
              </button>
              <h3>{count}</h3>
              <button
                onClick={() => setCount(count + 1)}
                className="rounded-full border border-black bg-white w-8">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <h3>Total</h3>
            <h3 className="text-[#F46264]">
              Rp{(product?.price * count).toLocaleString("ID-id")}
            </h3>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <button
              onClick={handleBuy}
              className="w-full bg-[#2284DF] text-white rounded-md py-1">
              Beli
            </button>
          </div>
          <div className="flex justify-between w-full px-[10%] font-bold text-xl">
            <button
              onClick={handleInsertCart}
              disabled={count <= 0 || isLoading}
              className="w-full flex items-center justify-center text-[#2284DF] border border-[#2284DF] bg-white rounded-md py-1 disabled:bg-opacity-70 disabled:cursor-not-allowed">
              {isLoading ? <Spinner width="w-6" height="h-6" /> : "Add To Cart"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
