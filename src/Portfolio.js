import React from 'react';
import './styles/Portfolio.css';
import { Link } from 'react-router-dom'
import FacePlantPic from './pictures/FacePlant.png';
import FSPic from './pictures/F&S.png';
import PetBattlePic from './pictures/PetBattle.png';
import me4 from './pictures/me4.png';
import best from './pictures/best.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <p className="portfolio__intro" >Hi there! I'm Inée, the amazing newly-hatched Software Engineer! I prefer front-end stuff, but I learned full-stack! Can't wait to create new projects and enhance my skills!</p>
            <h1 className="portfolio__headline">Portfolio</h1>
            <div className="portfolio__project-container">

                <div className="project">
                    <h6 className="project__name">FacePlant</h6>
                    <div className="project__image-div">
                        <img className="project__image" src={FacePlantPic} alt="FacePlant App"></img>
                    </div>
                    <div className="project__best__div">
                        <a className='project__link' target="_blank" rel="noreferrer" href="https://careerkarma.com/discussions/projects/faceplant-520/">
                            <img className='project__best__image' src={best} alt="Voted best project of the Month on Career Karma"></img>
                        </a>
                    </div>
                    <p>A social media platform for house plant enthusiasts! Catalogue your plant collection, adore other's plants, and comment your appreciation.</p>
                    <b>Built with: Ruby on Rails, PostgreSQL, Javascript, React, TheNounProject icon API, and vanilla CSS.</b>
                    <div className="project__icons">
                        <a className="project__link" target="_blank" rel="noreferrer" href="https://github.com/inee-ader/FRONT-faceplant">
                            <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="github" className="project-github-icon"></img>
                        </a>
                        <a className="project__link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QobMlju2xlM&t=4s&ab_channel=IneeAder">
                            <img src="https://img.icons8.com/color/2x/youtube-play.png" alt="youtube" className="project-youtube-icon" ></img>
                        </a>
                    </div>
                </div>
                
                <div className="project">
                    <h6 className="project__name">Feather & Stone</h6>
                    <div className="project__image-div">
                        <img className="project__image" src={FSPic} alt="Feather and Stone App"></img>
                    </div>
                    <p>Write about your day's highlight and lowpoint in this simple journal-entry app for peaceful self-reflection. Watch the snail travel across your screen while you write.</p>
                    <b>Built with: Ruby on Rails, Javascript, SQLite3, and vanilla CSS.</b>
                    <div className="project__icons">
                        <a className="project__link" target="_blank" rel="noreferrer" href="https://github.com/inee-ader/frontend-fs">
                            <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="github" className="project-github-icon"></img>
                        </a>
                        <a className="project__link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=xvJbh2iKgVw&t=1s&ab_channel=IneeAder">
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
                        <a className="project__link" target="_blank" rel="noreferrer" href="https://github.com/inee-ader/front-PetBattle">
                            <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png" alt="github" className="project-github-icon"></img>
                        </a>
                        <a className="project__link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=28-tl7ifg44&ab_channel=IneeAder">
                            <img src="https://img.icons8.com/color/2x/youtube-play.png" alt="youtube" className="project-youtube-icon" ></img>
                        </a>
                    </div>
                </div>
            </div>
            <Link className='portfolio__pages__link' to='/pages'>
                <p>Check out the pages I've made for my friends!</p>
            </Link>
            
            <div className="portfolio__image-form">
                <img className="portfolio__me4" src={me4} alt="me"></img>
                <div className="contact__form-div">
                        <h2 className="contact__h">Reach out to me</h2>
                        <form action="https://send.pageclip.co/KsNCmYc4KYuibLzdlLAo0Z0B3yz0atJh" className="contact__form" method="post">
                            <input className="contact__input" type="text" name="name" placeholder="Your beautiful name" />
                            <input className="contact__input" type="email" name="email" placeholder="Your cool email" />
                            <textarea className="contact__message" type="text" name="message" placeholder="Your sweet message"></textarea>
                            <button type="submit" class="pageclip-form__submit">
                            <span>Send</span>
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default Portfolio;
