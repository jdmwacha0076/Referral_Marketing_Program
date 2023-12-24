// HomePage.js
import React from 'react';
import { FaEnvelope, FaInfoCircle, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';
import CommonLayout from './CommonLayout';
import image from '../assets/image2.jpeg';


const HomePage = () => {
    return (
        <CommonLayout>
            <div className="home-container">
                <div className="home-header">
                    <h1>Welcome to Referral Marketing Program &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </h1>
                </div>

                <div className="home-main-content">
                    <img src={image} alt="Homepage" className="home-image" />
                    <div className="home-feature">
                        <h2>Featured Content</h2>
                        <p>Explore our latest and greatest offerings.</p>
                    </div>
                </div>

                <div className="home-sections">
                    <div className="home-section">
                        <FaEnvelope className="icon" />
                        <h2>Contact Us</h2>
                        <p className="contact-message">
                            We love hearing from you! Whether you have questions, feedback, or just want to say hello,
                            feel free to reach out to our friendly support team at{' '}
                            <a href="mailto:jmwacha0076@gmail.com">jmwacha0076@gmail.com</a>. We'll get back to you as soon as
                            possible and look forward to assisting you on your journey with our app.
                        </p>
                    </div>

                    <div className="home-section">
                        <FaInfoCircle className="icon" />
                        <h2>About Us</h2>
                        <p className="contact-message">
                            Welcome to our innovative platform designed to enhance your experience and make your
                            journey seamless. Our system is built with a commitment to providing you with the best
                            possible solutions.
                        </p>
                    </div>

                    <div className="home-section">
                        <FaQuestionCircle className="icon" />
                        <h2>How to Use</h2>
                        <p className="contact-message">
                            That's it! Our intuitive interface and helpful features are designed to make your
                            experience seamless. If you ever have questions or need assistance, feel free to reach out
                            to our support team.
                        </p>
                    </div>

                    <div className="home-section">
                        <FaLightbulb className="icon" />
                        <h2>Our Uniqueness</h2>
                        <p className="contact-message">
                            At our core, we are committed to providing a unique and exceptional experience for our
                            users. Discover the difference with our system and join us on a journey of innovation and
                            excellence.
                        </p>
                    </div>

                </div>

                <div className="home-footer">
                    <p>Stay connected with us for more updates and announcements.</p>
                </div>
            </div>
        </CommonLayout>
    );
};

export default HomePage;
