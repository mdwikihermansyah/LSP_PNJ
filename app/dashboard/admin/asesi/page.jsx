import Link from "next/link";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

export default function AsesiHome() {
  return (
    <>
      <div className="bg-primary-blue text-4xl p-2 rounded-t-2xl text-white  ">
        Profil Asesi
      </div>

      <div className="bg-[#FFFFFF] shadow-md p-8 rounded-lg   mr-0 w-3/2 md:w-50 text-center  ">
        <div className="text-center">
          <Image
            src="/assets/images/jeriko-asesi.jpg"
            alt="profil asesi"
            width={200}
            height={200}
            className="m-auto object-contain justify-center content-center items-center"
          />
        </div>

        <h1 className="mt-4 text-[#008797] text-center font-bold text-3xl">
          Jeriko
        </h1>
        <p className="text-[#008797]">ID : 201938029183</p>

        <div className="mt-12 bg-primary-blue  p-1 rounded-t-2xl">
          {/* <h1 className=" text-white text-center font-bold text-sm">
            Detail Data
          </h1> */}
          <div className="bg-[#FFFFFF] rounded-b-2xl text-center border-spacing-px ">
            <table class=" w-full">
              <thead>
                <tr className="text-white  bg-primary-blue flex-1 w-64 ">
                  <th colSpan={2}>Detail Data</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">
                    Nomor Registrasi (Pendaftaran)
                  </td>
                  <td class="text-left">dasndsakj</td>
                </tr>
                <tr class="border border-slate-600">
                  <td className="border border-slate-600 w-80">Nomor KTP</td>
                </tr>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">Nama Lengkap</td>
                </tr>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">
                    Tempat, Tanggal Lahir
                  </td>
                </tr>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">Alamat</td>
                </tr>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">Nomor HP</td>
                </tr>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">Email</td>
                </tr>
                <tr class="border border-slate-600">
                  <td class="border border-slate-600 w-80">
                    Pendidikan Terakhir
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="p-3 mt-9 bg-[#09768a] text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
            Unggah Dokumen
          </button>

          <button className="p-3 mt-9 bg-[#09768a] text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
            Ubah Profile
          </button>
        </div>
      </div>
    </>
  );
}
