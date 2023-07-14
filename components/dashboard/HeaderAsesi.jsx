import React from "react";

import Image from "next/image";
import { LuSearch, LuUser } from "react-icons/lu";

const HeaderAsesi = () => {
  return (
    <div className="m-4 flex justify-between border-2 p-3 bg-white rounded-2xl border-gray-200 shadow-xl">
      <div className="flex items-center gap-4 text-primary-blue">
        <LuSearch />
        <input
          placeholder="Search for anything..."
          type="text"
          name="search"
          className="focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 text-primary-blue">
        <Image 
            src="/assets/images/asesor2.jpg"
            alt="logoAsesi"
            width={24}
            height={24}
            className="rounded-full object-cover w-[24px] h-[24px]"
        />
        <p>Nur Sifa Amalia</p>
      </div>
    </div>
  );
};

export default HeaderAsesi;
