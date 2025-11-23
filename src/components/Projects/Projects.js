import React from "react";
import Particle from "../Particle";
import frozen from "../../Assets/Projects/deepq.png";
import mcts from "../../Assets/Projects/mcts.png";
import vision from "../../Assets/Projects/CNN.png";
import search from "../../Assets/Projects/searchengine.png";
import nlp from "../../Assets/Projects/nlp.jpg";
import ai_assistant from "../../Assets/Projects/ai_assistant.png";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projectsData = [
    {
      imgPath: ai_assistant,
      title: "AI Planning Assistant",
      description: "Built an intelligent conversational AI assistant that improved response accuracy by 40% and reduced query processing time by 2.5x. Leveraged OpenAI's GPT-4 API with Pinecone vectorized retrieval for enhanced context understanding. Implemented microservices architecture using Python Flask and LangGraph, with RESTful API endpoints enabling seamless integration across multiple platforms.",
      ghLink: null,
      technologies: ["Python", "Flask", "OpenAI GPT-4", "Pinecone", "LangGraph", "Microservices"],
      role: "Lead Developer",
      duration: "3 months"
    },
    {
      imgPath: search,
      title: "CORD COVID-19 Search Engine",
      description: "Led a team of 4 developers to build a high-performance information retrieval system for COVID-19 research articles. Implemented BM25 ranking algorithm achieving 85% relevance accuracy. Processed and indexed over 200,000 research papers with sub-second query response times. Utilized Docker containerization for seamless deployment and SQL optimization for efficient data retrieval.",
      ghLink: "https://github.com/sephml/IR_search_engine",
      technologies: ["Python", "Node.js", "SQL", "Docker", "BM25"],
      role: "Team Lead",
      duration: "4 months"
    },
    {
      imgPath: nlp,
      title: "Natural Language Processing Suite",
      description: "Developed comprehensive neural network solutions for multiple NLP tasks including language modeling, machine translation, Named Entity Recognition (NER), and coreference resolution. Achieved 92% accuracy on NER tasks using BERT embeddings. Implemented and compared attention-based transformers vs traditional LSTMs, demonstrating 25% improvement in translation quality with attention mechanisms. Built using TensorFlow and Keras with ELMO and BERT embeddings.",
      ghLink: "https://github.com/sephml/NN_NLP_labs",
      technologies: ["TensorFlow", "Keras", "ELMO", "BERT", "LSTM", "Attention Mechanisms"],
      role: "Individual Project",
      duration: "6 months"
    },
    {
      imgPath: vision,
      title: "Deep Learning for Computer Vision",
      description: "Implemented and optimized three state-of-the-art CNN architectures (VGG16, GoogLeNet, ResNet) achieving 94% accuracy on image classification tasks. Conducted comparative analysis demonstrating ResNet's superior performance with 8% accuracy improvement over VGG16. Utilized GPU acceleration with CUDA for 10x faster training times. Trained on ImageNet and CIFAR-10 datasets with extensive hyperparameter tuning.",
      ghLink: "https://github.com/sephml/image-classification-deep-models",
      technologies: ["Python", "PyTorch", "VGG16", "GoogLeNet", "ResNet", "CUDA", "GPU Computing"],
      role: "Individual Project",
      duration: "3 months"
    },
    {
      imgPath: frozen,
      title: "Reinforcement Learning - Frozen Lake",
      description: "Collaborated on implementing Q-learning and SARSA algorithms for the Frozen Lake environment, achieving 95% success rate. Developed an interactive visualization system displaying probability heatmaps and optimal policy decisions for each state. Created comparative analysis demonstrating Q-learning's 15% faster convergence compared to SARSA. Implemented epsilon-greedy exploration strategy with dynamic decay for optimal learning.",
      ghLink: "https://github.com/devasworski/frozen_lake",
      technologies: ["Q-Learning", "SARSA", "Reinforcement Learning", "Python", "OpenAI Gym"],
      role: "Algorithm Developer & Visualization Lead",
      duration: "2 months"
    },
    {
      imgPath: mcts,
      title: "Monte Carlo Tree Search for Pommerman",
      description: "Developed an intelligent game-playing agent using enhanced Monte Carlo Tree Search (MCTS) with RAVE (Rapid Action Value Estimation) for the Pommerman multi-agent environment. Achieved top 20% ranking in class competition through extensive parameter tuning and optimization. Implemented parallel tree search reducing decision time by 40%. Designed custom evaluation heuristics improving win rate by 30% compared to vanilla MCTS.",
      ghLink: null,
      technologies: ["Java", "MCTS", "RAVE", "Game AI", "Multi-Agent Systems"],
      role: "Algorithm Designer",
      duration: "3 months"
    }
  ];

  return (
    <div className="relative min-h-screen py-20">
      <Particle />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Recent <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            Here are some of the projects I've worked on, each representing different
            aspects of my technical journey and interests.
          </p>
          <p className="text-lg text-gray-300">
            Want to collaborate on a project?{" "}
            <a href="https://www.linkedin.com/in/amirsepehr-aminian/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Let's talk!
            </a>
          </p>
        </div>

        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`glass-effect p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300 animate-slide-up`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src={project.imgPath}
                      alt={project.title}
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    {project.title}
                  </h2>

                  {project.role && (
                    <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full font-semibold border border-blue-500/30">
                    Role: {project.role}
                  </span>
                  {project.duration && (
                    <span className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full font-semibold border border-teal-500/30">
                      Duration: {project.duration}
                    </span>
                  )}
                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold text-cyan-400 mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-lg text-sm border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.ghLink && (
                    <a
                      href={project.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaGithub className="text-xl" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
