import React from "react";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@components/NavBarDaftar";

const Pendaftaran = () => {
  return (
    <>
      <NavBar />
      <section className="w-full flex-col">
        <div className=" mt-40 ">
          <h1 className="text-left text-[#008797] text-3xl font-bold mt-28 ml-8 mb-7">
            Pendaftaran Peserta (Asesi)
          </h1>
          <h2 className="text-left text-[#008797] text-2xl font-semibold ml-8 mb-7">
            Pendaftaran Peserta (Asesi) Formulir pendaftaran akun peserta
            (Asesi) uji kompetensi sertifikasi profesi
          </h2>
        </div>

        <div className="bg-white py-10 flex justify-between ">
          <div className="bg-[#E1EDED] shadow-md p-8 rounded-lg  ml-20 mr-1 w-1/2  ">
            <form className="mx-auto">
              <div className="my-3">
                <div className="text-[#666666] text-sm">
                  Nama Lengkap*
                  <input
                    type="text"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>
              <div className="my-7">
                <div className="text-[#666666] text-sm">
                  Nomor KTP/NIK*
                  <input
                    type="text"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                    placeholder="Nomor KTP/NIK"
                  />
                </div>
              </div>
              <div className="my-7">
                <div className="text-[#666666] text-sm">
                  Email*
                  <input
                    type="text"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="my-7">
                <div className="text-[#666666] text-sm">
                  Password*
                  <input
                    type="password"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="my-7">
                <div className="text-[#666666] text-sm">
                  Verif Password*
                  <input
                    type="password"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                    placeholder="Verif Password"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Link href="/login">
                  <button className="p-3 mt-9 bg-[#FFFFFF] text-lg text-[#7A5CFA] rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
                    Kembali
                  </button>
                </Link>
                <button className="p-3 mt-9 bg-[#7A5CFA] text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
                  Daftar
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[#E1EDED] rounded-lg p-5 mr-40 px-6  w-1/4 h-1/4 shadow-md">
            <h1 className="bg-[#008797]  rounded-lg  text-center text-[#FFFFFF] text-2xl font-bold mt-4 mb-7">
              Perlu Anda Tahu:
            </h1>
            Peserta uji kompetensi dapat secara mandiri melakukan pendaftaran
            melalui laman ini. Setelah melakukan pendaftaran, periksa inbox
            (kotak masuk) email anda, bila tidak terdapat pada inbox email anda
            silahkan periksa di SPAM email anda.
          </div>
        </div>
      </section>
    </>
  );
};

export default Pendaftaran;
