import React from "react";

import { LuSearch, LuUser } from "react-icons/lu";

const HeaderDashboard = () => {
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
        <LuUser size={24} />
        <p>Admin</p>
      </div>
    </div>
  );
};

export default HeaderDashboard;
