import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Skills from "./Skills";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="relative min-h-screen py-20">
      <Particle />
      
      <div className="container-custom relative z-10">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About <span className="gradient-text">Me</span>
            </h1>
            <Aboutcard />
          </div>
          
          <div className="flex justify-center">
            <img 
              src={laptopImg} 
              alt="about" 
              className="w-full max-w-md drop-shadow-2xl animate-float"
            />
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Professional <span className="gradient-text">Skillset</span>
          </h1>
          <Skills />
        </div>

        {/* Tools & Platforms Section */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            <span className="gradient-text">Tools & Platforms</span>
          </h1>
          <Toolstack />
        </div>

        {/* GitHub Activity Section */}
        <Github />
      </div>
    </div>
  );
}

export default About;
