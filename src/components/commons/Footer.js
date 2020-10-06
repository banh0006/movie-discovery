import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'
import ContactForm from '../organisms/ContactForm'
import '../../css/Footer.css'

export default function Footer() {
    const techList = ["React (React Hooks)", "Redux", "Redux Thunk", "The Movie Database API", "Axios", "Swiper", "React Strap"]
    const techInfoRows = techList.map(tech => {
        return <Row key={tech} className="tech-item">{tech}</Row>
    }) 

    return (
        <Container className="footer-container">
            <Row className="footer-wrapper">
                <Col sm="10">
                    <Row>
                        <Col sm="3" className="developed-by-col">
                            <Row>Developed by: </Row>
                            <Row className="dev-name">
                                <a href="https://thienbanh.com/">
                                    Thien Banh
                                </a>
                            </Row>
                        </Col>
                        <Col sm="3" className="tech-info-col">
                            <Row>Using:</Row>
                            {techInfoRows}
                        </Col>
                        <Col sm="3" className="contact-col">
                            <Row>Contact:</Row>
                            <Row className="icons">
                                <a href="https://www.linkedin.com/in/thien-banh-060339193">
                                    <SiLinkedin className="linkedin-icon" />
                                </a>
                                <a href="https://github.com/banh0006">
                                    <SiGithub className="github-icon" />
                                </a>
                                <a href="mailto: phucthienst1995@gmail.com">
                                    <SiGmail className="gmail-icon" />
                                </a>
                            </Row>
                        </Col>
                        <Col sm="3" className="message-col">
                            <Row>Leave A Message</Row>
                            <Row>
                                <ContactForm />
                            </Row>
                        </Col>
                    </Row>
                </Col>
               
            </Row>
        </Container>
    )
}
