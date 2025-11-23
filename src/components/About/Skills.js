import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiDocker,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiSpacy,
  SiOpenai,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Languages & Core",
      level: "Expert",
      skills: [
        { icon: DiPython, name: "Python" },
        { icon: CgCPlusPlus, name: "C++" },
        { icon: DiJavascript1, name: "JavaScript" },
      ]
    },
    {
      title: "ML/DL Frameworks",
      level: "Expert",
      skills: [
        { icon: SiPytorch, name: "PyTorch" },
        { icon: SiTensorflow, name: "TensorFlow" },
        { icon: SiKeras, name: "Keras" },
        { icon: SiScikitlearn, name: "Scikit-learn" },
      ]
    },
    {
      title: "NLP & LLMs",
      level: "Expert",
      skills: [
        { icon: SiOpenai, name: "OpenAI API" },
        { icon: SiSpacy, name: "spaCy" },
        { icon: SiNumpy, name: "Transformers" },
      ]
    },
    {
      title: "Data Science",
      level: "Proficient",
      skills: [
        { icon: SiNumpy, name: "NumPy" },
        { icon: SiPandas, name: "Pandas" },
      ]
    },
    {
      title: "Web & Backend",
      level: "Proficient",
      skills: [
        { icon: SiDjango, name: "Django" },
        { icon: DiNodejs, name: "Node.js" },
        { icon: DiReact, name: "React" },
        { icon: DiMongodb, name: "MongoDB" },
      ]
    },
    {
      title: "DevOps & Tools",
      level: "Proficient",
      skills: [
        { icon: SiDocker, name: "Docker" },
        { icon: DiGit, name: "Git" },
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "Expert":
        return "text-blue-400 border-blue-400 bg-blue-500/10";
      case "Proficient":
        return "text-purple-400 border-purple-400 bg-purple-500/10";
      default:
        return "text-gray-400 border-gray-400 bg-gray-500/10";
    }
  };

  return (
    <div className="space-y-12">
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} className="animate-slide-up">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {category.title}
            </h2>
            <span className={`inline-block px-4 py-2 rounded-full font-semibold border-2 ${getLevelColor(category.level)}`}>
              {category.level}
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {category.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="glass-effect p-6 flex flex-col items-center justify-center gap-3 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
                >
                  <IconComponent className="text-5xl text-cyan-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <p className="text-sm text-gray-300 font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;

