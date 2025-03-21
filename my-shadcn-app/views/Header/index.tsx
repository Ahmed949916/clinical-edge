import React from "react";
import { Search, Bell, MessageCircle, Settings } from "lucide-react";
import Image from "next/image";
import Avatar from "../../assests/avatar.png";

const Header = () => {
  return (
    <div className="flex items-center justify-end gap-6 p-4 bg-white shadow-sm rounded-2xl mr-6 mt-2 ml-7 mb-5">
      <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-md hover:bg-gray-100 transition cursor-pointer">
        <Search className="w-6 h-6 text-gray-400" />
      </button>

      <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-md hover:bg-gray-100 transition cursor-pointer">
        <MessageCircle className="w-6 h-6 text-gray-400" />
      </button>

      <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-md hover:bg-gray-100 transition cursor-pointer">
        <Settings className="w-6 h-6 text-gray-400" />
      </button>

      <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-md hover:bg-gray-100 transition cursor-pointer">
        <Bell className="w-6 h-6 text-gray-400" />
      </button>

      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm cursor-pointer mr-3">
        <Image
          src={Avatar}
          alt="User Avatar"
          width={42}
          height={42}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
