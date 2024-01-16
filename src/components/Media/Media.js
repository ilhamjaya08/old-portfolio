import React from "react";
import { Col, Container } from "react-bootstrap";
import Particle from "../Particle";
import MediaCards from "./MediaCards"

function Media () {
    return (
        <Container fluid className="media-section">
            <Particle />
            <Container>
            <MediaCards />
            <Col xs={4} md={2} className="instagram-view">
            <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25348299' frameborder='0' width='100%' height='1000'></iframe>
            </Col>
            </Container>
        </Container>
    );
}

export default Media;