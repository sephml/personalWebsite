import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="relative py-20 md:py-32 z-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              LET ME <span className="gradient-text">INTRODUCE</span> MYSELF
            </h2>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm passionate about building intelligent systems that solve real-world problems. 
                With expertise in{" "}
                <span className="text-cyan-400 font-semibold">Large Language Models</span>{" "}
                and deep learning, I transform cutting-edge AI research into production-ready solutions.
              </p>
              
              <p>
                I'm fluent in programming languages like{" "}
                <span className="text-cyan-400 font-semibold">Python, C++, and JavaScript</span>, 
                with a strong foundation in modern ML/AI frameworks.
              </p>
              
              <p>
                My primary focus is building innovative{" "}
                <span className="text-cyan-400 font-semibold">ML models</span>{" "}
                and conducting research, particularly in the field of{" "}
                <span className="text-cyan-400 font-semibold">Large Language Models</span>{" "}
                and their practical applications.
              </p>
              
              <p>
                Beyond coding, I enjoy{" "}
                <span className="text-cyan-400 font-semibold">exploring startup ideas</span>, 
                traveling, and gaming to unwind and stay creative.
              </p>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="lg:col-span-2 flex justify-center">
            <Tilt>
              <div className="w-64 h-64 lg:w-80 lg:h-80">
                <img 
                  src={myImg} 
                  alt="avatar" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </Tilt>
          </div>
        </div>

        {/* Social Connect Section */}
        <div className="mt-20 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            LET'S CONNECT
          </h2>
          
          <p className="text-lg text-gray-300">
            Feel free to{" "}
            <span className="text-cyan-400 font-semibold">reach out</span>{" "}
            for collaborations or opportunities
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/amirsepehr-aminian/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="/project"
              className="btn-secondary"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/sephml"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <AiFillGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/amirsepehr-aminian/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <FaLinkedinIn className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
