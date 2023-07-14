import { Input  } from '@mantine/core';
import { LuPlus } from 'react-icons/lu'

export default function UpdateStandarSertifikasi() {
  return (
    <div className=''>
          <form className='mt-3   md:flex-row gap-5 flex-col '>
            <div className='w-full'>
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
              
          </form>
          <div className='w-full flex justify-end'>
            <button className='mt-3 btn-add'>
              <p>Update</p> 
            </button>
          </div> 
    </div>
  )
}
