"use client";
import React from "react";
import { Table, Modal, Button, Group } from "@mantine/core";
import { LuPlus, LuEdit, LuTrash2 } from "react-icons/lu";
import Link from "next/link";
import AddTU from "./AddTU";
import { useDisclosure } from "@mantine/hooks";
import UpdateTU from "./UpdateTU";

export default function page() {
  const isitempatuk = [
    {
      namaTuk: "PPM Manajemen (TUK Sewaktu)",
      namaTuk1: "PPM Manajemen (TUK Sewaktu)",
      waktu: "Sewaktu",
      jadwal: " 3 ",
      lspinduk: "LSP PPM Manajemen (P1-LDP)",
      lisensi: "BNSP-LSP-2017-10929345 (Berlaku sd. 25 Juli 2023)",
      skkni:
        "SKKNI Manajer Pengembangan Produk Baru (New Product Development Manager)",
      pj: "Frida Chairani, S.Pd",
    },
    {
      namaTuk: "Teknik PNJ (TUK Sewaktu)",
      namaTuk1: "Teknik PNJ (TUK Sewaktu)",
      waktu: "Sewaktu",
      jadwal: "0 ",
      lspinduk: "LSP PPM Manajemen (P1-LDP)",
      lisensi: "(Telah Berakhir pada 25 Mei 2023)",
      skkni: "Manajer Gudang (Warehouse Manager)",
      pj: "Frida Chairani, S.Pd",
    },
  ];

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="bg-primary-blue w-full rounded-t-xl p-3 text-white font-semibold text-lg">
        <p>Tempat Uji Kompetensi (TUK)</p>
      </div>

      <div className="p-3 border">
        <div className="justify-between flex items-center mt-3 mb-5">
          <div className="flex">
            <p>Menampilkan&nbsp;&nbsp;</p>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
            </select>
            
            <p>&nbsp;&nbsp;data</p>
          </div>
          <div>
            <Link
              href="dashboard/admin/tempatujikom#tambahlsp"
              scroll={false}
              className="btn-add"
            >
             
              <p>Tambah LSP</p>
            </Link>
          </div>
        </div>

        <div>
          <Table className="mb-5">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama TUK</th>
                <th>LSP Induk</th>
                <th>No. Lisensi dan SKKNI</th>
                <th>Penanggung Jawab</th>
                <th colSpan={2}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {isitempatuk.map((data, index) => {
                return (
                  <tr className="text-sm">
                    <td className="flex">{index + 1}</td>
                    <td className="">
                      <p>{data.namaTuk}</p>
                      <p>{data.namaTuk1}</p>
                      <p>{data.waktu}</p>
                      <p>Terjadwal {data.jadwal} Asesmen</p>
                    </td>
                    <td>
                      <p>{data.lspinduk}</p>
                    </td>
                    <td>
                      <p className="text-lisensi"> <b>{data.lisensi}</b> </p>
                      <br />
                      <p>{data.skkni}</p>
                    </td>
                    <td>
                      <p>{data.pj}</p>
                    </td>
                    <td>
                      <button onClick={open}>
                        <LuEdit color="#008797" size={24} className="mx-1" />
                      </button>
                    </td>
                    <td>
                      <button>
                        <LuTrash2 color="red" size={24} className="mx-1" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Modal
            opened={opened}
            onClose={close}
            size="auto"
            title="Edit Data Tempat Uji Kompetensi (TUK)"
          >
            <UpdateTU />
          </Modal>

          <div id="tambahlsp" className="mt-5">
            <AddTU />
          </div>
        </div>
      </div>
    </>
  );
}
