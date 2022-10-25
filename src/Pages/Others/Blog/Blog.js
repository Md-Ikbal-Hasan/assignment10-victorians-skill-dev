import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className="container my-5">
            <h1 className='text-center mb-3'>Blog</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is CORS</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                        </p>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more
                        </p>
                        <p>
                            We can use backend for authentication.There are two main things your React application needs to do to sign on a user: Get an access token from an authentication server. Send the access token to your backend server with each subsequent request.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server
                        </p>

                        <p>
                            Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”
                        </p>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default Blog;