import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import frozen from "../../Assets/Projects/deepq.png";
import mcts from "../../Assets/Projects/mcts.png";
import vision from "../../Assets/Projects/CNN.png";
import search from "../../Assets/Projects/searchengine.png";
import nlp from "../../Assets/Projects/nlp.jpg";
import ai_assistant from "../../Assets/Projects/ai_assistant.png"

function Projects() {
  const projectsData = [
    {
      imgPath: ai_assistant,
      title: "AI Planning Assistant",
      description: "Developed an intelligent conversational AI assistant leveraging OpenAI's GPT-4 API and Pinecone vectorised context retrieval. Implemented using Python Flask and LangGraph, with API endpoints for easy integrations, database management, and microservice architecture",
      ghLink: null,
      technologies: ["Python", "Flask", "OpenAI GPT-4", "Pinecone", "LangGraph", "Microservices"]
    },
    {
      imgPath: search,
      title: "CORD COVID-19 Search Engine",
      description: "An information retrieval system designed and implemented to search for relevant COVID-19 research articles. I led a team of four to achieve our sprint goals. We used SQL for database systems, Python, Node.js, Docker and source controlling.",
      ghLink: "https://github.com/sephml/IR_search_engine",
      technologies: ["Python", "Node.js", "SQL", "Docker", "BM25"]
    },
    {
      imgPath: nlp,
      title: "Natural Language Processing Tasks",
      description: "I implemented neural network solutions for multiple natural language tasks such as Natural Language modelling, Machine Translation, Name Entity recognition and coreferencing. I used TensorFlow Keras for models and ELMO and BERT for embedding layers in these projects. Tried attention based methods and traditional LSTMs as well.",
      ghLink: "https://github.com/sephml/NN_NLP_labs",
      technologies: ["TensorFlow", "Keras", "ELMO", "BERT", "LSTM", "Attention Mechanisms"]
    },
    {
      imgPath: vision,
      title: "Computer Vision with Deep Learning",
      description: "In this project, I implemented VGG16, GoogLeNet and ResNet based on two famous datasets. I used Python and processed over GPUs to implement this project.",
      ghLink: "https://github.com/sephml/image-classification-deep-models",
      technologies: ["Python", "VGG16", "GoogLeNet", "ResNet", "GPU Computing", "Deep Learning"]
    },
    {
      imgPath: frozen,
      title: "Reinforcement Learning - Frozen Lake",
      description: "A project that I was part of a team that implemented Q-learning and the Sarsa algorithm for the Frozen lake game. I created a graphical representation of the whole game map based on probabilities and preferred moves on each tile as well as the algorithm.",
      ghLink: "https://github.com/devasworski/frozen_lake",
      technologies: ["Q-Learning", "SARSA", "Reinforcement Learning", "Python", "Game Theory"]
    },
    {
      imgPath: mcts,
      title: "Monte Carlo Tree Search (MCTS)",
      description: "I was in a team of three that created an intelligent agent to play the Pommerman game. Our agent was an enhanced version of MCTS with RAVE and parameter tuning. We used Java for this project to be consistent with the game's framework. I demonstrated a passion for problem-solving.",
      ghLink: null,
      technologies: ["Java", "MCTS", "RAVE", "Game AI", "Algorithm Optimization"]
    }
  ];

  return (
    <Container fluid className="project-section">
      
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "3rem" }}>
          Here are some of the projects I've worked on, each representing different
          aspects of my technical journey and interests.
        </p>
        
        {projectsData.map((project, index) => (
          <div key={index} className="project-section-individual" style={{ marginBottom: "4rem", position: "relative", zIndex: 10 }}>
            <Row className={`align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <Col lg={6} className="mb-4">
                <div className="project-image-container" style={{ 
                  borderRadius: "15px", 
                  overflow: "hidden", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease",
                  position: "relative",
                  zIndex: 10
                }}>
                  <img 
                    src={project.imgPath} 
                    alt={project.title}
                    style={{ 
                      width: "100%", 
                      height: "300px", 
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                  />
                </div>
              </Col>
              
              <Col lg={6} className="mb-4">
                <div className="project-content" style={{ 
                  padding: "2rem",
                  position: "relative",
                  zIndex: 10
                }}>
                  <h2 style={{ 
                    color: "#c770f0", 
                    fontSize: "2.2rem", 
                    marginBottom: "1rem",
                    fontWeight: "bold"
                  }}>
                    {project.title}
                  </h2>
                  
                  <p style={{ 
                    color: "white", 
                    fontSize: "1.1rem", 
                    lineHeight: "1.8",
                    marginBottom: "1.5rem"
                  }}>
                    {project.description}
                  </p>
                  
                  <div className="technologies" style={{ marginBottom: "1.5rem" }}>
                    <h5 style={{ color: "#c770f0", marginBottom: "0.5rem" }}>Technologies Used:</h5>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          style={{
                            backgroundColor: "rgba(199, 112, 240, 0.2)",
                            color: "#c770f0",
                            padding: "0.3rem 0.8rem",
                            borderRadius: "20px",
                            fontSize: "0.9rem",
                            border: "1px solid #c770f0"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.ghLink && (
                    <Button
                      href={project.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-primary"
                      style={{
                        backgroundColor: "#c770f0",
                        borderColor: "#c770f0",
                        color: "white",
                        padding: "0.8rem 1.5rem",
                        borderRadius: "25px",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                        position: "relative",
                        zIndex: 1000
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#c770f0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#c770f0";
                        e.target.style.color = "white";
                      }}
                    >
                      View on GitHub
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
