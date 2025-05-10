import React from 'react';
import './Card.css';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from './CardItem';
import projImg1 from '../images/proj3pic.png';
import projImg2 from '../images/gpt.png';
import projImg3 from '../images/newasdrp.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Projects(){
    const projects=[
        {
            title: "Creating an SQL table",
            description: "Used C++ to create the functions of an SQL table",
            imgUrl: projImg1,
        },
        {
            title: "Building a GPT",
            description: "Used python to create unique Star Wars monologues from an original dataset, utilizing self-attention and a bigram language model",
            imgUrl: projImg2,
        },
        {
            title: "Research on the COVID-19 Pandemic using ML",
            description: "Used trends in states to predict the next hotspot of COVID-19 using LSTM and linear regression algorithms",
            imgUrl: projImg3,
        }
    ];
    
    const skills = [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      // add more as needed
    ];
    
    return(
            <section className="project" id="project">
              <Container>
                <Row>
                  <Col size={12}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h3>some things i've built</h3>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                              <Row>
                              <Tab.Pane eventKey="first">
                              {
                                projects.map((project, index) => (
                                  <Row key={index} className={`zigzag-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="card-wrapper">
                                      <ProjectCard {...project} />
                                    </div>
                                  </Row>
                                ))
                              }
                              </Tab.Pane>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>}
                    </TrackVisibility>
                  </Col>
                </Row>
              </Container>
            </section>
            
          )
}
export default Projects;

