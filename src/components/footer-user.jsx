import { Fragment } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export const FooterUser = (props) => {
  return (
    <Fragment>
      {props.dashboard ? (
        <section className="absolute bottom-0 w-full h-[50px] bg-[#134F86] mt-10 flex justify-between px-[10%] items-center">
          <div className="text-white text-[0.6rem] md:text-[0.8rem]">
            <p>© 2024 Ulinan | Powered by Ulinan</p>
          </div>
          <div className="text-white text-[1rem] md:text-[1.2rem] xl:text-[1rem] flex justify-center items-center gap-5">
            <FaFacebookF className="hover:cursor-pointer" />
            <FaTwitter className="hover:cursor-pointer" />
            <FaLinkedinIn className="hover:cursor-pointer" />
            <FaInstagram className="hover:cursor-pointer" />
          </div>
        </section>
      ) : (
        <section className="w-full h-[300px] bg-[#134F86] mt-10 flex flex-col justify-evenly items-center">
          <div className="flex gap-5 items-center">
            <img
              src="/logo-white.png"
              alt="ulinan"
              className="w-[70px] md:w-[100px] object-cover"
            />
            <div className="w-[1px] h-5 md:h-7 xl:h-8 bg-white"></div>
            <div className="text-white text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] flex justify-center items-center gap-5">
              <FaFacebookF className="hover:cursor-pointer" />
              <FaTwitter className="hover:cursor-pointer" />
              <FaLinkedinIn className="hover:cursor-pointer" />
              <FaInstagram className="hover:cursor-pointer" />
            </div>
          </div>
          <div className="flex text-white text-[0.7rem] md:text-[0.9rem] items-center gap-3 xl:gap-10">
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
            <p className="text-center text-[0.6rem] md:text-[0.8rem]">
              Ulinan adalah website wisata yang menyajikan informasi lengkap
              tentang destinasi wisata di Garut, Jawa Barat. Website ini
              dipersembahkan oleh Pemerintah Kabupaten Garut untuk memudahkan
              wisatawan dalam merencanakan perjalanan wisata ke Garut.
            </p>
          </div>
          <div className="text-white text-[0.7rem] md:text-[0.8rem]">
            <p>© 2024 Ulinan | Powered by Ulinan</p>
          </div>
        </section>
      )}
    </Fragment>
  );
};
