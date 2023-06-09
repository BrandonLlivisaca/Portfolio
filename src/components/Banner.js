import {useState, useEffect, ScrollLink } from "react";
import { Container, Row, Col } from "react-bootstrap"
/* import { ArrowRightCircle } from "react-bootstrap-icons" */
import logo from "../assets/images/yoa.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import pdf from "../assets/files/BrandonLlivisaca_CV.pdf"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    /* const toRotate = ["Full Stack Developer </>"]; */
    const toRotate = ["Software Engineer...", "Front End...", "App Developers..."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2500;
    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () =>{ clearInterval(ticker) };
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 30) : fullText.substring(0, text.length + 3)
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return(
        <section className="banner" id="home">
            <div class="custom-shape-divider-top-1686290789">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>


            <Container>
                <Row className="align-items-center text-align-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                
                                <h1><span className="wrap">Brandon Llivisaca</span></h1>
                                <p className="wrap">I a'm 
                                <span className="wrap wrap_text"> {text}</span></p>
                                <a href={pdf} className="tagline" target="_blank" rel="noopener noreferrer" download="BrandonLlivisaca_CV.pdf">Download CV</a>

                                <span className="navbar-text">
                                <div className="social-icon">
                                    <FontAwesomeIcon icon="check-square" />
                                    <a href="https://www.facebook.com/brando.llivisaca/"><FontAwesomeIcon icon={faFacebookF} /> </a>
                                    <a href="https://instagram.com/brando.llivisaca?igshid=ZDc4ODBmNjlmNQ=="><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="https://twitter.com/BrandonL1398?t=Lalr-YOnUgAX20fVO2wkww&s=09"><FontAwesomeIcon icon={faTwitter} /></a>
                                </div>
                                </span>

                                 
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col className="headder_col" xs={12} md={6} xl={4}>
                        <img src={logo} alt="headder" className="img_fondo"></img>
                    </Col>
                </Row>
                <Row className="acerca">
                    <Col xs={12} md={6} xl={4}>
                        <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__flash" : ""}>
                                <h2><span className="wrap">About me</span></h2>
                                <p class="about_me">My name is Brandon Llivisaca, I'm a Freelance Full Stack Developer based in Cuenca, Ecuador,
                                    and I'm very passionate and to my work. With 5 year experience as a professional
                                    full Stack Developer, I have acquired the skills necessary to build great and premium websites.
                                </p>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    
                </Row>
            </Container>
                        
        </section>
    )
}