import { Input } from "@mantine/core";
import { LuPlus } from "react-icons/lu";
import { MultiSelect } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function UpdateTU() {
  return (
    <div className="">
      <form className="mt-3 flex md:flex-row gap-5 flex-col">
        <div className="w-full">
          <Input.Wrapper label="Kode TUK" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Penanggung Jawab TUK" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>

          <MultiSelect
            data={[
              "Manajer Gudang (Warehouse Manager)",
              "SKKNI Manajer Pengembangan Produk Baru (New Product Development Manager)",
              "SKKNI Manajer Pengembangan Produk Baru (New Product Development Manager)",
            ]}
            defaultValue={["Manajer Gudang (Warehouse Manager)"]}
            label="SKK/SKKNI TUK"
            searchable
            nothingFound="Nothing found"
          />
          <Input.Wrapper label="Alamat TUK" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Provinsi" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Kecamatan" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <div className="flex flex-row gap-5 ">
            <Input.Wrapper
              label="Nomor Lisensi/Ijin/SK"
              required
              mt={10}
              className="w-full"
            >
              <Input placeholder="" />
            </Input.Wrapper>

            <DateInput
              valueFormat="MMM DD YYYY"
              label="Masa Berlaku Lisensi/Ijin/SK"
              placeholder="mm/dd/yyyy"
              mt={10}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full">
          <Input.Wrapper label="Nama TUK" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <div className="flex flex-row gap-5">
            <MultiSelect
              data={["LSP PPM Manajemen (P1-LDP)"]}
              defaultValue={["LSP PPM Manajemen (P1-LDP)"]}
              label="LSP Induk TUK"
              searchable
              nothingFound="Nothing found"
              className="w-full"
            />
            <MultiSelect
              data={[""]}
              label="Jenis TUK"
              searchable
              nothingFound="Nothing found"
              className="w-full"
            />
          </div>
          <div className="flex flex-row gap-5">
            <Input.Wrapper label="Telepon" required mt={10} className="w-full">
              <Input placeholder="" />
            </Input.Wrapper>
            <Input.Wrapper label="Faximile" required mt={10} className="w-full">
              <Input placeholder="" />
            </Input.Wrapper>
          </div>

          <Input.Wrapper label="Kota / Kabupaten" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <div className="flex flex-row gap-5">
            <Input.Wrapper
              label="Desa/Kelurahan"
              required
              mt={10}
              className="w-full"
            >
              <Input placeholder="" />
            </Input.Wrapper>
            <Input.Wrapper label="Kode Pos" required mt={10} className="w-full">
              <Input placeholder="" />
            </Input.Wrapper>
          </div>
          <Input.Wrapper label="Institusi Induk" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
        </div>
      </form>
      <div className="w-full flex justify-end">
        <button className="mt-3 btn-add">
          <p>Update</p>
        </button>
      </div>
    </div>
  );
}
