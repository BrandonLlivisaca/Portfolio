import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { faChartPie,faMobile } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import TrackVisibility from "react-on-screen";

/*  */

/*@ cambios */

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <div className="background-image-left">
                
            </div>

            <div class="custom-shape-divider-top-1684818565">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            
            <Container>            
                <Row>
                    {/* <Col>
                        <div className="skill-bx">
                            <h2>
                                Servicios
                            </h2>
                            <p>Ofrecemos</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <FontAwesomeIcon icon={faWindowRestore} />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon icon={faMobile} />
                                    <h5>Movil App</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon icon={faChartPie} />
                                    <h5>Business Intelligence</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col> */}
                    
                             
                    <Col xs={12} md={6} xl={12}>
                        <h2 className="title_services">Skills</h2>
                    </Col>
                    
                   
                    <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                    
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">  
                        <Col xs={10} md={10} xl={10}>
                            <div className="skill-bx">
                                <h2>
                                    Web Development
                                </h2>
                                <div className="item">
                                    <FontAwesomeIcon icon={faWindowRestore} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={10} md={10} xl={10}>
                            <div className="skill-bx">
                                <h2>
                                    Movil App
                                </h2>
                                <div className="item">
                                    <FontAwesomeIcon icon={faMobile} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={10} md={10} xl={10}>
                            <div className="skill-bx">
                                <h2>
                                    Business Intelligence
                                </h2>
                                <div className="item">
                                    <FontAwesomeIcon icon={faChartPie} />
                                </div>
                            </div>
                        </Col>
                        </Carousel>
                    </div>}
                    </TrackVisibility>
                    
                </Row>

            </Container>

            <div class="custom-shape-divider-top-16848185651">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            

        </section>
    );
}