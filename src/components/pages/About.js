import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Portfolio from './Portfolio';
import Resume from './Resume';
import Expertise from './Expertise';

export default function About() {
    return (
        <Container>
        <Container>
            <Row id="about-intro">
                <Col id="about-header-column">
                    <h1 id="about-h">LET ME INTRODUCE MYSELF</h1><br />
                    <p id="about-p">
                    {/* I fell in love with programming while trying to find solutions to problems at work.<br /><br /> */}
                    I’m a driven software engineer with a love for problem solving and an appreciation for the art of programming. In my professional journey I have gained expertise in various programming languages and tools, while striving to develop robust and scalable software solutions.<br /><br />

                    Beyond coding, I have various interests that bring joy to my life. Cooking is one of my favorite pastimes, I find delight in experimenting with flavors and techniques to create delicious meals. It allows me to bring the same problem solving mindset to the kitchen while spending quality time with friends and family.<br /><br />

                    I believe in maintaining a balanced lifestyle. Spending quality time with my significant other and family is of utmost importance to me. Whether it's engaging in meaningful conversations or simply enjoying each other's company, these connections fuel my happiness.<br /><br />

                    To stay physically and mentally fit, I prioritize staying active and exercising regularly. Taking care of my well-being helps me maintain focus and productivity, enabling me to approach software challenges with a clear mind.<br /><br />
                </p>
                </Col>
                <Col id="about-header-image">
                    <img id="about-img" src={require("../../assets/Poo.png")} alt="profile-pic" />
                </Col>
            </Row>
        </Container>

        <Expertise />
        <Portfolio />
        <Resume />
        </Container>
    );
}
