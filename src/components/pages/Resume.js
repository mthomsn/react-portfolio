import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

function Resume() {
    return (
        <Container id='exp-top-container'>
        <h1 id="exp-header">Experience</h1>
        {/* <p>
            <a href="https://docs.google.com/document/d/1tXReA1KgMRi7Tmuw2TD4uowZlwF5oQ4THKzZykDFp3Y/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
        </p> */}

        <Container id="experience-main-container"> 
            {/* <Accordion defaultActiveKey="1" className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Programming Enthusiast</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}

            <Accordion defaultActiveKey="1" className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Teaching Assistant @ EdX</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1"  className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Sales Associate @ The Home Depot (2022 - Present)</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p>Assist customers with any needs, stock and maintain supplies.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1"  className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Student @ University of Texas Coding Bootcamp</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p>Full stack coding bootcamp. Learned the MERN stack and basics of building full stack web applications</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1"  className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Supply Chain @ St. David's Healthcare (2019 - 2022)</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p><u>Operating Room Internal Control Coordinator</u></p>
                        <p>Full stack coding bootcamp. Learned the MERN stack and basics of building full stack web applications</p>

                        <p><u>Operating Room Inventory Specialist</u></p>
                        <p>Full stack coding bootcamp. Learned the MERN stack and basics of building full stack web applications</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



            {/* <Accordion defaultActiveKey="0" flush > 
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="exp-header">Freelance Software Engineer (2022 - Present)</Accordion.Header>
                    <Accordion.Body>
                        <p>Student/Self employed</p>
                        <p>December 2022 - Present</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1"> 
                    <Accordion.Header className="exp-header">The Home Depot (2022 - Present)</Accordion.Header>
                    <Accordion.Body>
                        <p>Sales Associate</p>
                        <p>Assist customers with any needs, stock and maintain supplies.</p>
                        <p>March 2023 - Present</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="exp-header">University of Texas Full Stack Coding Bootcamp (2022 - Present)</Accordion.Header>
                    <Accordion.Body>
                        <p>Student</p>
                        <p>Learned the MERN stack and the basic neccessary skills to create full stack web applications.</p>
                        <p>September 2022 - December 2022</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="exp-header">Parallon - St. David's Healthcare (2022 - Present)</Accordion.Header>
                    <Accordion.Body>
                        <p>Operating Room Internal Control Coordinator(ORICC)</p>
                        <p>Responsible for data integrity of operating room supply chain systems.<br /> Automated tasks using Macro Express to increase productivity.</p>
                        <p>July 2021 - September 2022</p>
                        <p>Operating Room Inventory Specialist(ORIS)</p>
                        <p>Order, stock, and maintained operating room desposible supplies.</p>
                        <p>September 2019 - July 2021</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </Container>






        {/* <div>
            <h3>Freelance Software Engineer</h3>
            <p>Student/Self employed</p>
            <p>December 2022 - Present</p>
        </div><br />
        <div>
            <h3>The Home Depot</h3>
            <p>Sales Associate</p>
            <p>Assist customers with any needs, stock and maintain supplies.</p>
            <p>March 2023 - Present</p>
        </div><br />
        <div>
            <h3>University of Texas Full Stack Coding Bootcamp</h3>
            <p>Student</p>
            <p>Learned the MERN stack and the basic neccessary skills to create full stack web applications.</p>
            <p>September 2022 - December 2022</p>
        </div><br />
        <div>
            <h3>Parallon - St. David's Healthcare</h3>
            <p>Operating Room Internal Control Coordinator(ORICC)</p>
            <p>Responsible for data integrity of operating room supply chain systems.<br /> Automated tasks using Macro Express to increase productivity.</p>
            <p>July 2021 - September 2022</p>
            <p>Operating Room Inventory Specialist(ORIS)</p>
            <p>Order, stock, and maintained operating room desposible supplies.</p>
            <p>September 2019 - July 2021</p>
        </div> */}
        </Container>
    );
}

export default Resume;