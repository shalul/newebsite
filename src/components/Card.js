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
    return(
            <section className="project" id="project">
              <Container>
                <Row>
                  <Col size={12}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h3>Projects</h3>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                              <Row>
                                {
                                  projects.map((project, index) => {
                                    return (
                                      <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                  })
                                }
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section">
                              <p> Want to see more? Get in touch!</p>
                              <span>&#8595;</span>
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

