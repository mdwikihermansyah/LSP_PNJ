"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {LuGraduationCap, LuHome, LuFileSpreadsheet, LuHammer, LuFileText, LuCalendar, LuMapPin, LuUsers, LuUserCheck, LuUser, LuLock } from "react-icons/lu"

const Sidebar = () => {
  return (
    <div className=" bg-[#EEEFFF] flex flex-col w-72 drop-shadow-xl">
      <div className="bg-primary-blue w-full h-[165px] rounded-b-2xl shadow-lg flex flex-col p-4 items-center">
        <Image
          src="/assets/images/Logo.svg"
          alt="PNJLogo"
          width={80}
          height={80}
          className="object-contain pb-4"
        />
        <p className="text-white text-lg font-semibold">Admin</p>
      </div>
      <div className="px-4 py-6">
        <Link href="/dashboard/admin" className="btn-sidebar">
          <LuHome size={20} />
          <p className="text-sm">Home</p>
        </Link>
        <Link href="/dashboard/admin/lembagasertifikasi" className="btn-sidebar">
          <LuGraduationCap size={20} />
          <p className="text-sm">Lembaga Sertifikasi</p>
        </Link>
        <Link href="/dashboard/admin/dokumenmutu" className="btn-sidebar">
          <LuFileSpreadsheet size={20} />
          <p className="text-sm">Dokumen Mutu</p>
        </Link>
        <Link href="/dashboard/admin/standarkompetensi" className="btn-sidebar">
          <LuHammer size={20} />
          <p className="text-sm">Standar Kompetensi</p>
        </Link>
        <Link href="/dashboard/admin/skemasertifikasi" className="btn-sidebar">
          <LuFileText size={20} />
          <p className="text-sm">Skema Sertifikasi</p>
        </Link>
        <Link href="/dashboard/admin/eventjadwal" className="btn-sidebar">
          <LuCalendar size={20} />
          <p className="text-sm">Event & Jadwal</p>
        </Link>
        <Link href="/dashboard/admin/tempatujikom" className="btn-sidebar">
          <LuMapPin size={20} />
          <p className="text-sm">Tempat Uji Kompetensi</p>
        </Link>
        <Link href="/dashboard/admin/calonasesi" className="btn-sidebar">
          <LuUsers size={20} />
          <p className="text-sm">Calon Asesi</p>
        </Link>
        <Link href="/dashboard/admin/asesi" className="btn-sidebar">
          <LuUserCheck size={20} />
          <p className="text-sm">Asesi</p>
        </Link>
        <Link href="/dashboard/admin/asesor" className="btn-sidebar">
          <LuUser size={20} />
          <p className="text-sm">Asesor</p>
        </Link>
        <Link href="/dashboard/admin" className="btn-sidebar">
          <LuLock size={20} />
          <p className="text-sm">Ubah Sandi</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
