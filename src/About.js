import React from 'react';
import './About.css'


const About = () => {
    return (
        <div className="about">
            <div className="about__container">
            <h1 className="about__headline">Just Human Things...</h1>
                <div className="about__columns">
                    <div className="about__column">
                        <h4>History</h4>
                        <p>Here lie the bullet points of my past: </p>
                        <ul>
                            <li>B.S. - Pre-Medical Biology</li>
                            <li>A.P. - Ayurvedic Practitioner</li>
                            <li>RYT-500 - Ayurvedic Yoga</li>
                            <li>C.H. - Clinical Herbalist</li>
                            <li>L.D.T. - Lymph Drainage Therapist</li>
                            <li>Nutritionist</li>
                        </ul>
                        <p>Flipped my whole career field from health and nutrition into tech, October 2020, without any previous experience in coding, and I've been engrossed ever since! I know I still have a lot to learn, but I'm ready to absorb all I can!</p>
                        <br></br>
                    </div>
                    <div className="about__column">
                        <h4>Hobbies</h4>
                        <p>I enjoy so many things, to name a few: </p>
                        <ul>
                            <li>Being cozy is my favorite emotion</li>
                            <li>House plant care and husbandry</li>
                            <li>18th Century cooking and recipes</li>
                            <li>Building relationship and rapport with Ravens</li>
                            <li>World of Warcraft/Diablo III</li>
                            <li>Marie Kondo-inspired organizing</li>
                            <li>Watercolor and Acrylic painting</li>
                            <li>Connecting with nature through ritual</li>
                        </ul>
                        <br></br>

                    </div>
                    <div className="about__column">
                        <h4>What I'm looking for in a work environment: </h4>
                        <ul>
                            <li>Collaborative atmosphere</li>
                            <li>Autonomy and trust</li>
                            <li>Appreciates my playful enthusiasm</li>
                            <li>Loves my creative/innovative ideas</li>
                            <li>Conducive to skills improvement</li>
                            <li>Clear communication</li>
                            <li>Mentorship</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="about__column">
                        <h4>Self-acknowledged Positive Traits: </h4>
                        <ul>
                            <li>ENTHUSIASM!</li>
                            <li>Able to discuss and resolve conflict</li>
                            <li>Inclusive and team-oriented</li>
                            <li>Asks questions until confident in what is expected of me</li>
                            <li>Curious and inquisitive</li>
                            <li>Takes responsibility for actions</li>
                            <li>Empathetic and emotionally intelligent</li>
                            <li>Accept when I'm wrong</li>
                            <li>Excellent in written and oral communication</li>
                            <li>Acknowledges shortcomings and works to improve</li>
                        </ul>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;