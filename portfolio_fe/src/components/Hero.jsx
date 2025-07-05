import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-cyan-800 to-slate-600 px-6 md:px-28 py-12 gap-36 pt-28"
    >
      <div className="text-white flex flex-col gap-4 ">
        <div>
          <h2
            className={`text-4xl font-bold transition-all duration-1000 transform ${
              show ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
            }`}
          >
            Xin chào, tôi là
          </h2>
        </div>
        <div>
          <h1
            className={`text-6xl font-bold transition-all duration-1000 transform ${
              show ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            }`}
          >
            Trịnh Hải Hoàn
          </h1>
        </div>
        <div>
          <div
            className={`text-2xl transition-all duration-1000 transform ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            <Typewriter
              words={["Một lập trình viên đam mê công nghệ"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </div>
        </div>
        <div></div>
        <div
          className={`flex gap-5 text-4xl transition-all duration-[1000ms] ease-in transform ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://www.facebook.com/daylahoan/"
            className="hover:scale-110 hover:text-cyan-300 transition-all duration-300"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://github.com/haihoan2874"
            className="hover:scale-110 hover:text-cyan-300 transition-all duration-300"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.instagram.com/leot7_hoan/?next=%2F"
            className="hover:scale-110 hover:text-cyan-300 transition-all duration-300"
          >
            <FaInstagram></FaInstagram>
          </a>
        </div>
        <div>
          <a
            href="#about"
            className="inline-block text-black mt-4 bg-cyan-400 px-6 py-3 rounded-full shadow-cyan-400 shadow-[0_0_60px_5px]
              hover:bg-cyan-300
              hover:scale-110
              hover:shadow-[0_0_100px_30px_rgba(34,211,238,0.8)]
              transition-all duration-300 shadow-lg font-semibold"
          >
            Xem thêm
          </a>
        </div>
      </div>
      <div
        className="relative w-60 h-60 md:w-80 md:h-80 rounded-full shadow-[0_0_60px_30px_rgba(34,211,238,0.5)] shadow-cyan-400 shadow-2xl mb-8 md:mb-0 flex-shrink-0 hover:scale-110 hover:shadow-[0_0_100px_30px_rgba(34,211,238,0.8)]
              transition-all duration-300 shadow-lg"
      >
        <img
          src="/avatar2.png"
          alt="avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
