"use client"
import React from 'react'
import { Table, Modal, Button, Group  } from '@mantine/core';
import { LuPlus, LuEdit, LuTrash2 } from 'react-icons/lu'
import Link from 'next/link';
import AddStandarSertifikasi  from './AddStandarSertifikasi';
import { useDisclosure } from '@mantine/hooks';
import UpdateStandarSertifikasi from './UpdateStandarSertifikasi';



export default function page() {

  const identitasdatask = [
    {
      nama : "SKM/1296/00016/2/2018/9Manajer",
      divisi : "(Logistic Manager)",
      jenis: "SI",
      lisensi: "BNSP-LSP-2017-10929345 (Berlaku sd. 22 Desember 2023)",
      penerbit: "Standar Internasional TLI4206 Certificate IV in Logistics, Transport & Logistics Industry Skills Council, Australian Government"
    },
    {
      nama : "LSP PPM Manajemen",
      divisi : "Manajer Rantai Pasok (Supply Chain Manager)",
      jenis: "SI",
      lisensi: "BNSP-LSP-2017-10929345 (Berlaku sd. 22 Desember 2023)",
      penerbit: "Standar Internasional TLI4206 Certificate IV in Logistics, Transport & Logistics Industry Skills Council, Australian Government"
      
    },
    {
      nama : "LSP PPM Manajemen",
      divisi : "Supervisor Logistik (Logistic Supervisor)",
      jenis: "SI",
      lisensi: "BNSP-LSP-2017-10929345 (Berlaku sd. 22 Desember 2023)",
      penerbit: "Standar Internasional TLI4206 Certificate IV in Logistics, Transport & Logistics Industry Skills Council, Australian Government"
      
    }
  ]


  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
    <div className='bg-primary-blue w-full rounded-t-xl p-3 text-white font-semibold text-lg'>
      <p>Standar Kompetensi</p>
    </div>

    <div className='p-3 border'>
      <div className='justify-between flex items-center mt-3 mb-5'>
        <div className='flex'>
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
          <Link href="dashboard/admin/standarkompetensi#tambahlsp" scroll={false} className="btn-add" >
            <LuPlus />
            <p>Tambah SK</p> 
          </Link>
        </div>
      </div>

      <div>
        <Table className='mb-5' border={'1'}>
          <thead>
            <tr>
              <th>No</th>
              <th>Identitas dan Data Standar Kompetensi</th>
              <th>Penerbit</th>
              <th colSpan={2} >Aksi</th>
            </tr>
          </thead>
          <tbody>
            {identitasdatask.map((data, index) => {
              return (
              <tr className='text-sm'>
                <td className='flex'>{index+1}</td>
                <td className=''>
                  <p>{data.nama}</p>
                  <p> {data.divisi} </p>
                  <p>Jenis :  {data.jenis}</p>
                </td>
                <td>
                 {data.penerbit}
                  
                </td>
                <td>
                    <button onClick={open}>
                      <LuEdit color='#008797' size={24} className='mx-1' />
                    </button>
                </td>
                <td>
                    <button>
                      <LuTrash2 color='red' size={24} className='mx-1' />
                    </button>

                </td>
              </tr>
              );
            })}
          </tbody>
        </Table>

        <Modal opened={opened} onClose={close} size="auto" title="Update Standar Sertifikasi Profesi">
          <UpdateStandarSertifikasi />
        </Modal>

        <div id="tambahlsp" className='mt-5'>
          <AddStandarSertifikasi />
        </div>

      </div>
    </div>
    </>
  )
}
