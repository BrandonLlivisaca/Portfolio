import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={faTwitter} alt="a"></img></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}