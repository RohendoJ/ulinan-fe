import { Link, useNavigate } from "react-router-dom";
import { Navbar, Spinner } from "../../../components";
import { Fragment, useEffect, useMemo, useState } from "react";
import Accordion from "../../../components/accordion";
import { useCreateOrder, useCreateOrderCart, useGetCart } from "./hooks";
import { useGetUserMe } from "../../../components/navbar-admin/hooks";
import Swal from "sweetalert2";

export const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { data, isError } = useGetCart();
  const { data: user } = useGetUserMe();

  const cart = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  };

  const { mutate } = useCreateOrder();
  const { mutate: orderCarts } = useCreateOrderCart();

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      if (cart?.cart_items?.length > 0) {
        const products_id = cart?.cart_items?.map((item) => {
          return {
            id: item.cart_item_id,
          };
        });

        orderCarts(
          {
            payment_method: selectedOption,
            cart_items: products_id,
          },
          {
            onSuccess: (data) => {
              setIsLoading(false);
              localStorage.setItem("va", data.data.va_numbers[0].va_number);
              localStorage.setItem("expired", data.data.expiry_time);
              localStorage.setItem(
                "payment_method",
                data.data.va_numbers[0].bank
              );
              localStorage.setItem("order_id", data.data.order_id);
              localStorage.setItem("gross_amount", data.data.gross_amount);

              localStorage.removeItem("product_total_price");
              localStorage.removeItem("product_name");
              localStorage.removeItem("product_quantity");
              localStorage.removeItem("product_id");
              localStorage.removeItem("product_price");
              localStorage.removeItem("product_date");
              navigate("/payment");
            },
            onError: () => {
              setIsLoading(false);
              Swal.fire({
                icon: "error",
                title: "Pembayaran Gagal",
                showConfirmButton: false,
              });
            },
          }
        );
      } else {
        mutate(
          {
            product_id: Number(localStorage.getItem("product_id")),
            quantity: Number(localStorage.getItem("product_quantity")),
            payment_method: selectedOption,
            arrival_date: localStorage.getItem("product_date"),
          },
          {
            onSuccess: (data) => {
              setIsLoading(false);
              if (data?.data?.payment_type === "qris") {
                localStorage.setItem(
                  "payment_method",
                  data?.data?.payment_type
                );
                localStorage.setItem("qris_url", data.data.actions?.[0]?.url);
              } else {
                localStorage.setItem("va", data.data.va_numbers[0].va_number);
                localStorage.setItem(
                  "payment_method",
                  data.data.va_numbers[0].bank
                );
              }

              localStorage.setItem("gross_amount", data.data.gross_amount);
              localStorage.setItem("expired", data.data.expiry_time);
              localStorage.setItem("order_id", data.data.order_id);
              localStorage.removeItem("product_name");
              localStorage.removeItem("product_quantity");
              localStorage.removeItem("product_id");
              localStorage.removeItem("product_price");
              localStorage.removeItem("product_date");

              navigate("/payment");
            },
            onError: () => {
              setIsLoading(false);
              Swal.fire({
                icon: "error",
                title: "Pembayaran Gagal",
                showConfirmButton: false,
              });
            },
          }
        );
      }
    } catch (error) {
      setIsLoading(false);
      Promise.reject(error);
    }
  };

  useEffect(() => {
    if (isError && !localStorage.getItem("product_name")) {
      navigate("/");
    }
  }, [isError, navigate]);

  const paymentOptions = [
    {
      id: 1,
      name: "qris",
      logoUrl:
        "https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png",
      title: "QRIS",
    },
    {
      id: 2,
      name: "dana",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png",
      title: "Dana",
    },
    {
      id: 3,
      name: "gopay",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png",
      title: "Gopay",
    },
    {
      id: 4,
      name: "shopeepay",
      logoUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC8J0HHOLKSppss14Im84sOJ5D-qB0LAKsxZ8esss0VNs2LJhNYR4S9KCDV7q-U332uEe9BlF1E7rzW6tqvrZfGiivxobhls2I2E9dWgok7LzdJuNOp_s-h4RmUvc4ENhs-RZ9hVEgrPkK9DUlTvhzOFY-WW0CYEAI_xgSFRjmLLYf77QOxNC5yg/w320-h141/ShopeePay%20Logo%20-%20%20(Koleksilogo.com).png",
      title: "ShopeePay",
    },
    {
      id: 5,
      name: "ovo",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png",
      title: "Ovo",
    },
  ];

  const bankOptions = [
    {
      id: 1,
      name: "bca",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
      title: "BCA",
    },
    {
      id: 2,
      name: "bni",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png",
      title: "BNI",
    },
    {
      id: 3,
      name: "bri",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png",
      title: "BRI",
    },
  ];

  return (
    <main className="w-screen xl:h-auto flex flex-col overflow-x-hidden">
      <Navbar />
      <h1 className="font-bold text-[2rem] mt-28 pl-[8%]">Item</h1>
      <section className="text-[#2284DF] mt-2 w-full px-[8%]">
        <Link to={"/"} className="text-[#807F7F] hover:cursor-pointer">
          Home / <Link to={"/"}>Item</Link>
        </Link>{" "}
        / Payment
      </section>

      <h1 className="font-bold text-[1.5rem] mt-10 pl-[8%]">Detail Pesanan</h1>
      <section className="flex flex-col gap-6">
        {cart?.cart_items && (
          <Fragment>
            {cart?.cart_items?.map((item, index) => (
              <section key={index} className="flex ml-[10%]">
                <div className="flex flex-col justify-between px-5 text-lg font-bold gap-3 p-2">
                  <h3>Produk</h3>
                  <h3>Harga</h3>
                  <h3>Jumlah</h3>
                </div>
                <div className="flex flex-col justify-between px-5 text-lg font-bold gap-3 p-2">
                  <h3>: {item?.product_name}</h3>
                  <h3>: Rp{item?.price?.toLocaleString("ID-id")}</h3>
                  <h3>: {item?.quantity}</h3>
                </div>
              </section>
            ))}
            <h3 className="ml-[10%] px-5 text-lg font-bold mt-3 border-t-2 border-black w-fit py-2">
              Total : Rp {cart?.grant_total?.toLocaleString("ID-id")}
            </h3>
          </Fragment>
        )}

        {localStorage.getItem("product_name") && (
          <section className="flex ml-[10%]">
            <div className="flex flex-col justify-between px-5 text-lg font-bold gap-3 p-2">
              <h3>Produk</h3>
              <h3>Harga</h3>
              <h3>Jumlah</h3>
              <h3>Total</h3>
            </div>
            <div className="flex flex-col justify-between px-5 text-lg font-bold gap-3 p-2">
              <h3>: {localStorage.getItem("product_name")}</h3>
              <h3>: Rp {localStorage.getItem("product_price")}</h3>
              <h3>: {localStorage.getItem("product_quantity")}</h3>
              <h3>
                : Rp
                {Number(
                  localStorage.getItem("product_total_price")
                ).toLocaleString("ID-id")}
              </h3>
            </div>
          </section>
        )}
      </section>

      <h1 className="font-bold text-[1.5rem] mt-10 pl-[8%]">Detail Pesanan</h1>
      <section className="flex ml-[10%]">
        <div className="flex flex-col justify-between px-5 text-lg font-bold gap-3 p-2">
          <h3>Nama</h3>
          <h3>Email</h3>
          <h3>No Hp</h3>
        </div>
        <div className="flex flex-col justify-between px-5 text-lg font-bold gap-3 p-2">
          <h3>: {user?.fullname}</h3>
          <h3>: {user?.email}</h3>
          <h3>: {user?.phone}</h3>
        </div>
      </section>

      <h1 className="font-bold text-[1.5rem] mt-10 pl-[8%]">
        Metode Pembayaran
      </h1>

      <Accordion
        title={"Qris/Ewallet"}
        className={"ml-[8%] border border-[#807F7F] text-[#807F7F] mt-5"}>
        <form className="w-full flex flex-col gap-5 py-3">
          {paymentOptions.map((option) => (
            <div key={option.id} className="flex justify-between mx-[5%] py-1">
              <div className="flex gap-10 items-center">
                <img
                  src={option.logoUrl}
                  alt={option.name}
                  className="w-[70px] xl:w-[120px] p-2"
                />
                <h1 className="font-bold text-black text-lg xl:text-[2rem]">
                  {option.title}
                </h1>
              </div>
              <div className="flex pr-3 xl:pr-0">
                <input
                  type="radio"
                  className="w-[15px] xl:w-[20px]"
                  name="paymentOption"
                  checked={selectedOption === option.name}
                  onChange={() => handleOptionChange(option.name)}
                />
              </div>
            </div>
          ))}
        </form>
      </Accordion>

      <Accordion
        title={"Bank Transfer (Virtual Account)"}
        className={"ml-[8%] border border-[#807F7F] text-[#807F7F] mt-5"}>
        <section className="w-full flex flex-col gap-5 py-3">
          {bankOptions.map((option) => (
            <div key={option.id} className="flex justify-between mx-[5%] py-1">
              <div className="flex gap-10 items-center">
                <img
                  src={option.logoUrl}
                  alt={option.name}
                  className="w-[70px] xl:w-[120px] p-2"
                />
                <h1 className="font-bold text-black text-lg xl:text-[2rem]">
                  {option.title}
                </h1>
              </div>
              <div className="flex pr-3 xl:pr-0">
                <input
                  type="radio"
                  className="w-[15px] xl:w-[20px]"
                  name="paymentOption"
                  checked={selectedOption === option.name}
                  onChange={() => handleOptionChange(option.name)}
                />
              </div>
            </div>
          ))}
        </section>
      </Accordion>

      <button
        onClick={handlePayment}
        disabled={isLoading || !selectedOption}
        className={`w-[85%] flex items-center justify-center py-3 bg-[#2284DF] text-white rounded-md mt-10 ml-[8%] font-bold text-lg mb-10 disabled:cursor-not-allowed disabled:bg-opacity-70`}>
        {isLoading ? <Spinner width="w-6" height="h-6" /> : "Bayar"}
      </button>
    </main>
  );
};
