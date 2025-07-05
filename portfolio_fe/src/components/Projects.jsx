import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Trang web cá nhân giới thiệu bản thân, kỹ năng và dự án.",
    tech: ["React", "TailwindCSS", "EmailJS"],
    link: "",
    img: "/avatar1.png",
  },
  {
    title: "Todo App",
    description: "Ứng dụng quản lý công việc đơn giản với React.",
    tech: ["React", "CSS", "TailwindCSS"],
    link: "",
    img: "/avatar2.png",
  },
  {
    title: "Portfolio Website",
    description: "Trang web cá nhân giới thiệu bản thân, kỹ năng và dự án.",
    tech: ["React", "TailwindCSS", "EmailJS"],
    link: "",
    img: "/avatar1.png",
  },
  {
    title: "Todo App",
    description: "Ứng dụng quản lý công việc đơn giản với React.",
    tech: ["React", "CSS", "TailwindCSS"],
    link: "",
    img: "/avatar2.png",
  },
  {
    title: "Portfolio Website",
    description: "Trang web cá nhân giới thiệu bản thân, kỹ năng và dự án.",
    tech: ["React", "TailwindCSS", "EmailJS"],
    link: "",
    img: "/avatar1.png",
  },
  {
    title: "Todo App",
    description: "Ứng dụng quản lý công việc đơn giản với React.",
    tech: ["React", "CSS", "TailwindCSS"],
    link: "",
    img: "/avatar2.png",
  },
  // Thêm các dự án khác ở đây, nhớ dùng 'img'
];

const Projects = () => (
  <div
    id="projects"
    className="min-h-screen flex flex-col items-center bg-gradient-to-r from-cyan-800 to-slate-600 px-4 md:px-28 py-12 pt-28"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
      Dự Án Nổi Bật
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-cyan-900 bg-opacity-40 flex flex-col gap-4 p-4 my-7 rounded-xl hover:scale-105 drop-shadow-lg hover:drop-shadow-lg duration-300"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-cyan-300 text-xl font-bold">{project.title}</h3>
          <p className="text-white mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-cyan-400 text-black px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="text-white text-center mt-auto hover:underline"
          >
            Xem chi tiết
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
