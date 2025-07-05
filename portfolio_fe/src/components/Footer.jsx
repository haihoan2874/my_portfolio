import React from "react";

const Footer = () => (
  <footer className="w-full bg-cyan-900 bg-opacity-70 text-white text-center py-8 ">
    <div className="container mx-auto">
      © {new Date().getFullYear()} Trịnh Hải Hoàn. Bản quyền đã được bảo lưu.
    </div>
  </footer>
);

export default Footer;
