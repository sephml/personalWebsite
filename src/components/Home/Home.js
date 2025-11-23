import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { HiArrowDown } from "react-icons/hi";

function Home() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Particle />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Text Content */}
            <div className="text-left space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Hi There!{" "}
                  <span className="inline-block animate-[wave_1s_ease-in-out_infinite]">
                    👋🏻
                  </span>
                </h1>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200">
                  I'm{" "}
                  <span className="gradient-text">Sep Aminian</span>
                </h1>
              </div>

              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 min-h-[80px]">
                <Type />
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Machine Learning Engineer specializing in Large Language Models and AI solutions.
                Transforming cutting-edge research into production-ready systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/amirsepehr-aminian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get In Touch
                </a>
                <a
                  href="/project"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  View My Work
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end animate-float">
              <img
                src={homeLogo}
                alt="hero illustration"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <HiArrowDown className="text-4xl text-blue-400" />
        </div>
      </div>

      <Home2 />
    </section>
  );
}

export default Home;
