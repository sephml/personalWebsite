import React from "react";
import {
  SiVisualstudiocode,
  SiLinux,
  SiWindows,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

function Toolstack() {
  const tools = [
    { component: SiWindows, name: "Windows" },
    { component: SiLinux, name: "Linux" },
    { component: SiVisualstudiocode, name: "VS Code" },
    { component: FaAws, name: "AWS" },
    { component: VscAzure, name: "Azure" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {tools.map(({ component: Tool, name }) => (
        <div
          key={name}
          className="glass-effect p-8 flex flex-col items-center justify-center gap-3 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
        >
          <Tool className="text-5xl text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
          <p className="text-sm text-gray-300 font-medium text-center">
            {name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
