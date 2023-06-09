import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/images/logo_fondo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

export const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, seScrolled ] = useState(false);

    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar bg="secondary" expand="lg" className={ scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'  } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#contacto" className={ activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'  } onClick={() => onUpdateActiveLink('contacto')}>Contact</Nav.Link>

                    </Nav>
                    {/* <span className="navbar-text">
                        <div className="social-icon">
                            <FontAwesomeIcon icon="check-square" />
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div> */}
                        {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
                    {/* </span> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}