import React from 'react';
// { useState } from 'react
import './styles/About.css'


const About = () => {

    return (
        <div className="about">
            <div className="about__container">
            <h1 className="about__headline">Just Human Things...</h1>
                <div className="about__columns">
                                    
                    <article 
                        className="about__column" 
                        // onMouseEnter={() => setHover("history")} 
                        // onMouseLeave={() => setHover("")}
                        >
                        <h4>History</h4>
                        {/* {onHover === 'history' &&  */}
                            <div>
                                <br></br>
                                <ul>
                                    <li>B.S. - Pre-Medical Biology</li>
                                    <li>A.P. - Ayurvedic Practitioner</li>
                                    <li>RYT-500 - Ayurvedic Yoga</li>
                                    <li>C.H. - Clinical Herbalist</li>
                                    <li>L.D.T. - Lymph Drainage Therapist</li>
                                    <li>Nutritionist</li>
                                </ul>
                                <br></br>
                                <p>Flipped my whole career field from health and nutrition into tech, October 2020, without any previous experience in coding, and I've been engrossed ever since! I know I still have a lot to learn, but I'm ready to absorb all I can!</p>
                            </div>
                        {/* } */}
                    </article>

                    <article 
                        className="about__column" 
                        // onMouseEnter={() => setHover("hobbies")} 
                        // onMouseLeave={() => setHover("")}
                        >
                        <h4>Hobbies</h4>
                        {/* {onHover === "hobbies" &&  */}
                            <div>
                                <br></br>
                                <ul>
                                    <li>Being cozy is my favorite emotion</li>
                                    <li>House plant care and husbandry</li>
                                    <li>18th Century cooking and recipes</li>
                                    <li>Building relationship and rapport with the local ravens</li>
                                    <li>World of Warcraft & Diablo III</li>
                                    <li>Marie Kondo-inspired organizing</li>
                                    <li>Watercolor and Acrylic painting</li>
                                    <li>Connecting with nature through ritual</li>
                                    <li>Making portfolio websites</li>
                                    <li>Flexing my creativity muscle</li>
                                </ul>
                            </div>
                        {/* } */}
                    </article>

                    <article className="about__column" 
                        // onMouseEnter={() => setHover("looking")} 
                        // onMouseLeave={() => setHover("")}
                        >
                        <h4>What I'm looking for</h4>
                        {/* {onHover === "looking" && */}
                            <div>
                                <br></br>
                                <p>...in a work environment: </p>
                                <br></br>
                                <ul>
                                    <li>Collaborative atmosphere</li>
                                    <li>Autonomy and trust</li>
                                    <li>Appreciates my playful enthusiasm</li>
                                    <li>Loves my creative/innovative ideas</li>
                                    <li>Conducive to skills improvement</li>
                                    <li>Clear communication</li>
                                    <li>Mentorship</li>
                                    <li>Projects that enhance and inspire the human experience</li>
                                </ul>
                            </div>
                        {/* } */}
                    </article>

                    <article className="about__column" 
                        // onMouseEnter={() => setHover("personality")} 
                        // onMouseLeave={() => setHover("")}
                        >
                        <h4>Personality Traits: </h4>
                        {/* {onHover === "personality" &&  */}
                            <div className="about__column-hover">   
                                <br></br>
                                <ul>
                                    <li>ENTHUSIASM!</li>
                                    <li>Can discuss and resolve conflicts</li>
                                    <li>Inclusive and team-oriented</li>
                                    <li>Asks many clarifying questions</li>
                                    <li>Curious and inquisitive</li>
                                    <li>Takes responsibility for actions</li>
                                    <li>Empathetic and emotionally intelligent</li>
                                    <li>Excellent written and oral communication</li>
                                    <li>Acknowledges shortcomings and works to improve</li>
                                </ul>
                            </div>
                        {/* } */}
                    </article>

                </div>
            </div>
        </div>
    );
}

export default About;