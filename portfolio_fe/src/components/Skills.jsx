import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaUser,
  FaComments,
  FaGithub,
  FaLightbulb,
  FaLock,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, percent: 50 },
  { name: "CSS", icon: <FaCss3 className="text-blue-400" />, percent: 50 },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-blue-300" />,
    percent: 50,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    percent: 50,
  },
  { name: "ReactJs", icon: <FaReact className="text-cyan-600" />, percent: 50 },
  { name: "PHP", icon: <FaPhp className="text-red-500" />, percent: 50 },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-orange-400" />,
    percent: 50,
  },
  {
    name: "Git",
    icon: <FaGithub className="text-white" />,
    percent: 50,
  },
];

const softSkills = [
  {
    name: "Teamwork",
    icon: <FaUser className="text-cyan-400" />,
    percent: 50,
  },
  {
    name: "Communication",
    icon: <FaComments className="text-cyan-400" />,
    percent: 50,
  },
  {
    name: "Problem Solving",
    icon: <FaLightbulb className="text-cyan-400" />,
    percent: 50,
  },
  {
    name: "Time Management",
    icon: <FaLock className="text-cyan-400" />,
    percent: 50,
  },
];
const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-800 to-slate-600 px-4 md:px-28 py-12 md:py-12 gap-4 pt-28 md:pt-28 "
    >
      <h2 className="text-3xl md:text-4xl  font-bold text-white mb-8">
        Kỹ Năng Của Tôi
      </h2>
      <div className="w-full max-w-5xl grid grid-rows-1 md:grid-cols-2 gap-12 ">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center drop-shadow-lg">
            Kỹ năng chuyên môn
          </h3>
          <div className="flex flex-col gap-6">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 bg-cyan-900 bg-opacity-40 rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-cyan-300 text-sm font-semibold">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-cyan-700 rounded-full h-3">
                    <div
                      className="bg-cyan-400 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center drop-shadow-lg">
            Kỹ năng mềm
          </h3>
          <div className="flex flex-col gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 bg-cyan-900 rounded-xl p-4 shadow-lg bg-opacity-40"
              >
                <div className="text-3xl">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-cyan-300 text-sm font-semibold">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-cyan-700 rounded-full h-3">
                    <div
                      className="bg-cyan-400 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
