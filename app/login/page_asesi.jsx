import LayoutLogin from './layout'
import Link from 'next/link'
import Image from "next/image";

import React from 'react'

const Login = () => {
  return (
    <>
      
      <section className="w-full flex-col">
      <div className="items-center flex justify-center p-3 mt-3">
      <button className="w-1/5  bg-[#008797] text-lg text-white rounded-full outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
                ASESOR
      </button>
      <button href="" className="w-1/5  bg-[#008797] text-lg text-white rounded-full outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
                ASESI
      </button>

      </div>
      <div className="bg-[#E1EDED py-10 flex justify-center  ">
        <div className="bg-[#FFFFFF] shadow-md p-8 rounded-lg  ml-20 mr-1 w-1/2  ">
          <form className="mx-auto">
            <div className="my-7">
              <h1 className="text-[#008797] text-center font-bold text-4xl">
                Login disini
              </h1>
              <p className="text-center mt-3 text-[#00000070] ">Selamat Datang Kembali !!!</p>
              <Image
                src="/assets/images/logoLogin.jpg"
                alt="logologin"
                width={200}
                height={200}
                className="m-auto object-contain justify-center content-center items-center"
                
              />
              <div className="text-[#666666] text-sm">
                Email
                <input
                  type="text"
                  className="bg-[#E1EDED] w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="my-7">
              <div className="text-[#666666] text-sm">
                Password
                <input
                  type="password"
                  className=" bg-[#E1EDED] w-full mt-2 p-4 outline-none border-none rounded-lg shadow-md"
                  placeholder="Password"
                />
              </div>
            </div>
           
            <div className=" text-center ">
                <div>
                    <button className=" w-1/2 p-3 mt-3 inline-flex items-center justify-center  bg-[#008797]   text-[#FFFFFF] rounded-full  outline-double  font-bold tracking-wide transition-all hover:bg-[#252525]">
                      LOG IN <svg className="ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                    </button>
                </div>
                <div>
              <button className="w-1/2 p-3 mt-3 inline-flex items-center justify-center bg-[#008797] text-lg text-white rounded-full outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
                PANDUAN ASESOR
              </button>

                </div>
            </div>

            <div className="text-center mt-4"> 
              Hubungi contact service di <a className="text-[#FF6A6A] font-bold">022-62111111</a> apabila memiliki kendala
            login.
            </div>
          </form>
        </div>
      </div>
    </section>

    </>
  );
};
    

export default Login

Login.getLayout = function (page) {
  return <LayoutLogin>{page}</LayoutLogin>
}
