import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
/* import colorSharp2 from "../assets/images/photo9.jpg" */
import photo1 from "../assets/images/photo6.jpg"
import photo2 from "../assets/images/photo7.jpg"
import photo3 from "../assets/images/photo8.jpg"
import photo4 from "../assets/images/photo9.jpg"
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () =>{
    const projects_movil = [
        {
            title: "Movil",
            description: "Design & Development",
            imgUrl: photo3
        }
    ]
    const projects_business = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: photo2
        },
    ]
    const projects = [
        {
            title: "Web",
            description: "Design & Development",
            imgUrl: photo1
        },
        {
            title: "Web",
            description: "Design & Development",
            imgUrl: photo4
        }, 
        {
            title: "Web",
            description: "Design & Development",
            imgUrl: photo1
        },  
    ]
    return (
      <section className="project" id="projects" >
      <div class="custom-shape-divider-top-1684818565">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        <Container>
            
            <Row>
                <Col>
                    <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>Proyectos</h2>
                        </div>}
                    </TrackVisibility>
                    
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">{/* defaultActivateKey="/home" */}
                            <Nav.Item>
                                <Nav.Link eventKey="first">PAGINAS WEB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">APLICACIONES MOVILES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">BUSINESS INTELLIGENCE</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects_movil.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects_business.map((project,index) =>{
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>    
                </Col>
            </Row>
        </Container>
        <div class="custom-shape-divider-top-16848185651">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        {/* <img className="background-image-rigth" src={colorSharp2} alt=""></img> */}
      </section>  
    )
}