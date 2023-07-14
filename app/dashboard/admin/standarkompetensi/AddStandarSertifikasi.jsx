import { Input } from "@mantine/core";
import { LuPlus } from "react-icons/lu";

export default function AddStandarSertifikasi () {
  return (
    <>
      <p className="mt-3 text-xl underline text-primary-blue font-semibold">
        Tambah Standar Kompetensi
      </p>
      <form className="mt-3 flex md:flex-row gap-5 flex-col">
        <div className="w-full">
          <div className="flex flex-row gap-5">
            <Input.Wrapper
              label="Jenis Standar"
              required
              mt={10}
              className="w-full"
            >
              <Input component="select">
                {/* rightSection={<IconChevronDown size={14} stroke={1.5} />} */}
                <option value="">1</option>
                <option value="">2</option>
              </Input>
            </Input.Wrapper>
            <Input.Wrapper
              label="No Standar"
              required
              mt={10}
              className="w-full"
            >
              <Input placeholder="" />
            </Input.Wrapper>
          </div>{" "}
          <Input.Wrapper label="Judul Standar/ SKKNI/ SKK" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Legalitas/ Perundangan" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Sector" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Sub Sector" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Penerbit/ Kementerian" required mt={10}>
            <Input placeholder="" />
          </Input.Wrapper>
          <div className="gap-5">
            <p className="mt-3 "> Tambah Standar Kompetensi</p>
            <button className="mt-3 btn-upload">
              <LuPlus />
              <p>Upload Dokumen</p>
            </button>
          </div>
        </div>
      </form>
      <div className="w-full flex justify-end">
        <button className="mt-3 btn-add">
          <LuPlus />
          <p>Tambah</p>
        </button>
      </div>
    </>
  );
}
