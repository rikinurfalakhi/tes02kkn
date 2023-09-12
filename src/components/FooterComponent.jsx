import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-light py-4 footer">
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: dessakademangan@gmail.com</p>
                        <p>Phone: +62 821-3282-7209</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent