import React from 'react';
import './Portfolio.css';
import FacePlantPic from './pictures/FacePlant.png';
import FSPic from './pictures/F&S.png';
import PetBattlePic from './pictures/PetBattle.png';

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <h1 className="portfolio__headline">Portfolio</h1>
            <div className="portfolio__project-container">

                <div className="project">
                    <h6 className="project__name">FacePlant</h6>
                    <div className="project__image-div">
                        <img className="project__image" src={FacePlantPic} alt="FacePlant"></img>
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
                        <img className="project__image" src={FSPic} alt="Feather and Stone"></img>
                    </div>
                    <p>Write about your day's highlight and lowpoint in this simple journal-entry app for peaceful self-reflection.</p>
                    <b>Built with: Ruby on Rails, Javascript, and vanilla CSS.</b>
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
                        <img className="project__image" src={PetBattlePic} alt="Pet Battle"></img>
                    </div> 
                    <p>Choose your team of 3 pet companions and battle the boss!</p>
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
        </div>
    );
}

export default Portfolio;
