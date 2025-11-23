import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="glass-effect p-8 space-y-6">
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          Hi, I'm <span className="text-cyan-400 font-semibold">Sep</span>, 
          originally from <span className="text-cyan-400 font-semibold">Tehran</span>{" "}
          and currently based in <span className="text-cyan-400 font-semibold">London, UK</span>.
        </p>
        
        <p>
          I hold an MSc. in Artificial Intelligence from Queen Mary University of London, 
          where I developed a deep passion for machine learning and AI systems.
        </p>
        
        <p>
          As a Machine Learning Engineer, I specialise in building production-ready AI solutions, 
          with a particular focus on Large Language Models and their practical applications. 
          I love the challenge of transforming research concepts into scalable, real-world products.
        </p>
        
        <p className="pt-4 font-semibold text-white">
          When I'm not coding, I enjoy:
        </p>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-3">
            <ImPointRight className="text-cyan-400 text-lg flex-shrink-0" />
            <span>Playing video games</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-cyan-400 text-lg flex-shrink-0" />
            <span>Running</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-cyan-400 text-lg flex-shrink-0" />
            <span>Watching series</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
