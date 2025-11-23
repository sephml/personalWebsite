import React from "react";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool, MdCheckCircle } from "react-icons/md";

function Experience() {
  const experiences = [
    {
      title: "Python Developer and AI Engineer",
      company: "Carpmaels & Ransford",
      location: "London, UK",
      date: "2026 - Present",
      type: "work",
      description: [
      ]
    },{
      title: "Software consultant - Assistant Manager",
      company: "S&W",
      location: "London, UK",
      date: "2024 - 2026",
      type: "work",
      description: [
        "Developed and deployed production-ready AI solutions for report generation using Large Language Models",
        "Implemented microservices architecture for AI applications with Flask and FastAPI",
        "Achieved an estimated cost reduction of £2.8m per year by improving productivity and efficiency",
        "Collaborated with cross-functional teams to integrate AI features into existing PoC"
      ]
    },{
      title: "Machine Learning Engineer",
      company: "Definely",
      location: "London, UK",
      date: "2022 - 2023",
      type: "work",
      description: [
        "Developed and deployed production-ready machine learning models for detecting defined terms and references in commercial contracts using transformers",
        "Achieved an accuracy of 90% in detecting defined terms and references in commercial contracts",
        "created a pipeline for feature extraction, training and deployment of the machine learning models."
      ]
    },
    {
      title: "MSc in Artificial Intelligence",
      company: "Queen Mary University of London",
      location: "London, UK",
      date: "2022 - 2023",
      type: "education",
      description: [
        "Graduated with Distinction",
        "Specialised in Deep Learning and Natural Language Processing",
        "Relevant coursework: Advanced ML, Computer Vision, Neural Networks and deep learning, AI for Games, Natural Language Processing, Information Retrieval"
      ]
    },
  ];

  return (
    <div className="relative min-h-screen py-20">
      <Particle />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Professional <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A timeline of my education and professional experience in AI and Machine Learning
          </p>
        </div>

        <VerticalTimeline lineColor="rgba(6, 182, 212, 0.3)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                backdropFilter: 'blur(10px)',
                color: '#fff',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.2)',
                borderRadius: '1rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(6, 182, 212, 0.3)' }}
              date={exp.date}
              dateClassName="timeline-date"
              iconStyle={{ 
                background: exp.type === 'work' 
                  ? 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' 
                  : 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)', 
                color: '#fff',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
              }}
              icon={exp.type === 'work' ? <MdWork /> : <MdSchool />}
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">
                {exp.title}
              </h3>
              <h4 className="text-lg text-gray-300 font-semibold mb-4">
                {exp.company} - {exp.location}
              </h4>
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <MdCheckCircle className="text-cyan-400 text-xl flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;

