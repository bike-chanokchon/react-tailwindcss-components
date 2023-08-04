import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxDashboard, RxCross2 } from "react-icons/rx";
import {
  AiOutlineUser,
  AiFillSetting,
  AiFillSave,
  AiFillFolder,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "dashboard", link: "/", icon: RxDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "message", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: AiFillFolder },
    { name: "Cart", link: "/", icon: BsFillCartFill },
    { name: "Saved", link: "/", icon: AiFillSave, margin: true },
    { name: "Setting", link: "/", icon: AiFillSetting },
  ];

  return (
    <section className="flex gap-6 bg-gray-400 ">
      <div
        className={`bg-[#0e0e0e] min-h-screen text-white ${
          open ? "w-72" : "w-0"
        } duration-300 overflow-hidden`}
      >
        <div className="py-3 flex justify-end mr-3">
          <RxCross2
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <div key={i} className="flex justify-center w-72">
              <div
                className={`${
                  menu.margin && "mt-5"
                } flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer w-64`}
              >
                {React.createElement(menu.icon, { size: "20" })}
                <h2
                  style={{
                    transitionDelay: `${i}00ms`,
                  }}
                  className={`duration-75 ${
                    !open && "opacity-0 translate-x-10"
                  }`}
                >
                  {menu.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
        React tailwind
      </div>
    </section>
  );
};

export default Sidebar;