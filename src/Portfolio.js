import React from 'react';
import './Portfolio.css';
import FacePlantPic from './pictures/FacePlant.png';
import FSPic from './pictures/F&S.png';
import PetBattlePic from './pictures/PetBattle.png';
import me4 from './pictures/me4.png'


const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <h1 className="portfolio__headline">Portfolio</h1>
            <div className="portfolio__project-container">

                <div className="project">
                    <h6 className="project__name">FacePlant</h6>
                    <div className="project__image-div">
                        <img className="project__image" src={FacePlantPic} alt="FacePlant App"></img>
                    </div>
                    <p>A social media platform for house plant enthusiasts! Catalogue your plant collection, adore other's plants, and comment your appreciation.</p>
                    <b>Built with: Ruby on Rails, PostgreSQL, Javascript, React, TheNounProject icon API, and vanilla CSS.</b>
                    <div className="project__icons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/inee-ader/FRONT-faceplant">
                            <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="github" className="project-github-icon"></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QobMlju2xlM&t=4s&ab_channel=IneeAder">
                            <img src="https://img.icons8.com/color/2x/youtube-play.png" alt="youtube" className="project-youtube-icon" ></img>
                        </a>
                    </div>
                </div>

                <div className="project">
                    <h6 className="project__name">Feather & Stone</h6>
                    <div className="project__image-div">
                        <img className="project__image" src={FSPic} alt="Feather and Stone App"></img>
                    </div>
                    <p>Write about your day's highlight and lowpoint in this simple journal-entry app for peaceful self-reflection. Watch the little snail travel across your screen for 5 minutes while you write.</p>
                    <b>Built with: Ruby on Rails, Javascript, SQLite3, and vanilla CSS.</b>
                    <div className="project__icons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/inee-ader/frontend-fs">
                            <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="github" className="project-github-icon"></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=xvJbh2iKgVw&t=1s&ab_channel=IneeAder">
                            <img src="https://img.icons8.com/color/2x/youtube-play.png" alt="youtube" className="project-youtube-icon" ></img>
                        </a>
                    </div>
                </div>

                <div className="project">
                    <h6 className="project__name">Pet Battle</h6>
                    <div className="project__image-div">
                        <img className="project__image" src={PetBattlePic} alt="Pet Battle App"></img>
                    </div> 
                    <p>Choose your team of 3 pet companions and battle the boss! No pets were harmed in the making of this game.</p>
                    <b>Built with: Ruby on Rails, Javascript, React, Blizzard's Pet API, and Bootstrap-React.</b>
                    <div className="project__icons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/inee-ader/front-PetBattle">
                            <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="github" className="project-github-icon"></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=28-tl7ifg44&ab_channel=IneeAder">
                            <img src="https://img.icons8.com/color/2x/youtube-play.png" alt="youtube" className="project-youtube-icon" ></img>
                        </a>
                    </div>
                </div>

            </div>
            <img className="portfolio__me4" src={me4} alt="me"></img>
        </div>
    );
}

export default Portfolio;
