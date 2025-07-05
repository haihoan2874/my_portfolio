import React from "react";
import avatar from "../assets/avatar1.png";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center bg-gradient-to-r from-cyan-800 to-slate-600 px-4 md:px-28 py-4 md:py-12 gap-4 md:gap-36"
    >
      {/* Avatar: chỉ hiện trên md trở lên */}
      <div
        className="hidden md:block relative w-60 h-60 md:w-80 md:h-80 rounded-full shadow-[0_0_60px_30px_rgba(34,211,238,0.5)] shadow-cyan-400 shadow-2xl mb-8 md:mb-0 flex-shrink-0 hover:scale-110 hover:shadow-[0_0_100px_30px_rgba(34,211,238,0.8)]
              transition-all duration-300 shadow-lg"
      >
        <img
          src={avatar}
          alt="avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {/* Info */}
      <div className="text-white flex flex-col gap-4 max-w-xl md:mt-0 mt-4">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">
          Lập Trình Viên Front End
        </h3>
        <p className="text-base leading-relaxed">
          Front End là cầu nối giữa người dùng và website. Tôi đam mê xây dựng
          giao diện đẹp, tối ưu trải nghiệm người dùng với các công nghệ hiện
          đại như ReactJS, TailwindCSS. Tôi luôn sẵn sàng học hỏi và hợp tác để
          tạo ra những sản phẩm chất lượng.
        </p>
        <div>
          <a
            href="#"
            className="inline-block text-black mt-4 bg-cyan-400 px-6 py-3 rounded-full shadow-cyan-400 shadow-[0_0_60px_5px]
              hover:bg-cyan-300
              hover:scale-110
              hover:shadow-[0_0_100px_30px_rgba(34,211,238,0.8)]
              transition-all duration-300 shadow-lg font-semibold"
          >
            Xem thêm về tôi
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
