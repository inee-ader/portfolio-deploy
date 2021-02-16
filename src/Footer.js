import React from 'react';
import './styles/Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <div className="link__icons">
                <a target='_blank' rel="noreferrer" href='https://github.com/inee-ader'>
                    <img className="icon__github" src='https://img.icons8.com/ios-glyphs/2x/ffffff/github.png' alt='github' ></img>
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/in%C3%A9e-ader/'>
                    <img className="icon__linkedin" src='https://img.icons8.com/ios-glyphs/2x/ffffff/linkedin-circled.png' alt='linked in' ></img>
                </a>
                <a target='_blank' rel="noreferrer" href='https://dev.to/ineeader'>
                    <img className="icon__dev" src='https://img.icons8.com/windows/2x/ffffff/dev.png' alt='dev.to blog'></img>
                </a>
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1vJqbct6gjl9gsbODTzJ_3AOdoCxIS8Sr/view?usp=sharing'>
                    <img className="icon__resume" src='https://img.icons8.com/fluent-systems-regular/2x/ffffff/regular-document.png' alt="resume and cover letter" ></img>
                </a>
            </div>
            <Link to="/eggs" className="footer__eggs">
                <img className="egg__image" src="https://img.icons8.com/?id=HOKOLx6gSDDY&size=2x&color=000000" alt="hidden eggs"></img>
            </Link>
        </div>
    );
}

export default Footer;