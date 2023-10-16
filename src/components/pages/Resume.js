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
                    <Accordion.Header className="exp-header">Open Source (2022 - Present)</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p><u>Redwood | Ecommerce Web Application</u><br />                          
                        - Created Apollo server with GraphQL schema to query and mutate MongoDB database.<br />
                        - Utilized React state with Apollo client to send requests to server.<br />
                        - Built object models using Mongoose to enforce schema and maintain data integrity.<br />
                        - Implemented search function with utilizing React state.<br />
                        - Applied user authentication to allow personal account management and security.<br /><br /></p>
                

                        <p><u>Employee Management System</u><br />
                        - Created wire-frame for initial concept.<br /> 
                        - Implemented the Model-View-Controller (MVC) paradigm to provide responsive web application.<br />
                        - Built Node server using Express to handle user authentication.<br />
                        - Utilized MySQL to build database to store relevant employee data.<br />
                        - Successfully deployed production built application using Heroku.<br /><br /></p>

                        <p><u>Eventify | Local Event Finder</u>
                        <p>- Utilized Javascript to call SeatGeek API to find events based on given location.<br />
                        - Developed application using agile methods.<br />
                        - Worked with team using Git as version control.</p ></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion defaultActiveKey="1"  className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Student @ University of Texas Coding Bootcamp (2022)</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p>- Programming foundational concepts such as HTML, CSS, Git, Javascript, API's, and JSON.<br />
                            - Programming technical skills such as Node, ES6, Object-oriented programming, Express, MySQL, MVC paradigm, Sequelize, Testing, and Agile Development.<br />
                            - Current tools such as Progressive Web Applications, React, NoSQL, MongoDB, and the MERN stack.<br />
                            - Developed skills to learn and implement technologies quickly.<br />
                            - Gained foundational understanding on how applications are created.
                            - Worked with teams using agile methods to develop full stack applications.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1"  className='exp-accordion'>
                <Accordion.Item eventKey="0" className="exp-item">
                    <Accordion.Header className="exp-header">Supply Chain @ St. David's Healthcare (2019 - 2022)</Accordion.Header>
                    <Accordion.Body className="exp-body">
                        <p><u>Operating Room Internal Control Coordinator</u>
                        <p>- Maintained data integrity between supply chain and hospital clinical software.<br />
        - Automated tasks using Macro Express to increase productivity, causing an 80% reduction in monthly bills on hold.<br />
        - Provided communication to operating room staff in regards to supply availability.<br /> 
        - Worked with cross functional teams to update, maintain, and standardize formatting of physician preference cards.<br />
        - Worked with cross functional teams to update, maintain, and standardize internal supply chain inventory management systems.</p></p>

                        <p><u>Operating Room Inventory Specialist</u>
                        <p>- Order, stock, and maintain Operating Room disposable supplies.<br / >
- Identified and implemented improvements in supply chain processes to meet special/urgent requests.<br />
- Identified and optimized inventory minimum and maximum, leading to a $50,000 reduction of on hand inventory while maintaining supply availability. </p></p>
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
