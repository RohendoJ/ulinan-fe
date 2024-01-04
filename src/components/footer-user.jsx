import { Fragment } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export const FooterUser = () => {
  return (
    <section className="w-full h-[300px] bg-[#134F86] mt-10 flex flex-col justify-evenly items-center">
      <div className="flex gap-5">
        <img src="/logo-white.png" alt="ulinan" className="object-cover" />
        <div className="w-[1px] h-8 bg-white"></div>
        <div className="text-white text-[1.5rem] flex justify-center items-center gap-5">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
      <div className="flex text-white items-center gap-10">
        <h3>Home</h3>
        <div className="w-[1px] h-5 bg-white"></div>
        <h3>Service</h3>
        <div className="w-[1px] h-5 bg-white"></div>
        <h3>Resource</h3>
        <div className="w-[1px] h-5 bg-white"></div>
        <h3>Contact</h3>
        <div className="w-[1px] h-5 bg-white"></div>
        <h3>About</h3>
      </div>
      <div className="text-white w-[65%]">
        <p className="text-center">
          Ulinan adalah website wisata yang menyajikan informasi lengkap tentang
          destinasi wisata di Garut, Jawa Barat. Website ini dipersembahkan oleh
          Pemerintah Kabupaten Garut untuk memudahkan wisatawan dalam
          merencanakan perjalanan wisata ke Garut.
        </p>
      </div>
      <div className="text-white">
        <p>© 2022 Ulinan | Powered by Ulinan</p>
      </div>
    </section>
  );
};
