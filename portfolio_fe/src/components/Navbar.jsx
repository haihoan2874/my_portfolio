import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

// Đổi tên menu sang tiếng Việt
const menu = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "projects", label: "Dự án" },
  { id: "contact", label: "Liên hệ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-opacity-15 backdrop-blur-md shadow-lg px-4 md:px-16 py-4">
      {/* Logo */}
      <a
        href="#"
        className="font-bold text-2xl text-white hover:text-cyan-400 transition-all duration-300 tracking-wide"
      >
        Trịnh Hải Hoàn
      </a>

      {/* Nút menu mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-8 text-white items-center">
        {menu.map((item) => (
          <li key={item.id} className="relative group">
            <a
              href={`#${item.id}`}
              className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300 font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Menu mobile */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-cyan-950 bg-opacity-90 shadow-lg flex flex-col gap-4 md:hidden px-5 py-2 ">
          {menu.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className="block text-white py-2 font-medium hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
