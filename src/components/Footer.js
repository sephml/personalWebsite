import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-8 mt-20 z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-300 text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Sep Aminian. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sephml"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110"
            >
              <AiFillGithub className="text-xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/amirsepehr-aminian/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </a>
          </div>

          {/* Additional Info */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
