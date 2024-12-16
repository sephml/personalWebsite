import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import frozen from "../../Assets/Projects/deepq.png";
import mcts from "../../Assets/Projects/mcts.png";
import vision from "../../Assets/Projects/CNN.png";
import search from "../../Assets/Projects/searchengine.png";
import nlp from "../../Assets/Projects/nlp.jpg";
import ai_assistant from "../../Assets/Projects/ai_assistant.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai_assistant}
              isBlog={false}
              title="AI Planning assistant"
              description="Developed an intelligent conversational AI assistant leveraging OpenAI's
               GPT-4 API and Pinecone for vector-based memory and RAG retrieval. Implemented using Python Flask and LangChain, with integrations for API communication,
                database management, and microservice architecture"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title="CORD COVID19"
              description="An information retrieval system designed and implemented to search for 
              relevant COVID19 research articles. I led a team of four to achieve our 
              sprint goals. we used SQL for databases systems, python, Node.js, Docker 
              and source controlling."
              ghLink="https://github.com/thisissepehr/IR_search_engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="NLP tasks"
              description="I implemented neural network solutions for multiple natural language 
              tasks such as Natural Language modelling, Machine Translation, Name Entity recognition 
              and coreferencing. I used TensorFlow Keras for models and ELMO and BERT for embedding 
              layers in these projects. Tried attention based methods and traditional LSTMs as well."
              ghLink="https://github.com/thisissepehr/NN_NLP_labs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vision}
              isBlog={false}
              title="Vision"
              description="In this project, I implemented VGG16, GoogLeNet and ResNet based on two famous datasets.
              I used python and processed over GPUs to implement this project."
              ghLink="https://github.com/thisissepehr/image-classification-deep-models"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frozen}
              isBlog={false}
              title="RL-frozen"
              description="A project that I was part of a team that implemented Q-learning and 
              the Sarsa algorithm for the Frozen lake game. I created a graphical 
              representation of the whole game map based on probabilities and preferred 
              moves on each tile as well as the algorithm."
              ghLink="https://github.com/devasworski/frozen_lake"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcts}
              isBlog={false}
              title="MCTS"
              description="I was in a team of three that created an intelligent agent 
              to play the Pommerman game. Our agent was an enhanced version 
              of MCTS with RAVE and parameter tuning. We used Java for this 
              project to be consistent with the game's framework. I demonstrated 
              a passion for problem-solving."
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
