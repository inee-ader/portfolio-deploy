import React from 'react';
import './Main.css';
import Portfolio from './Portfolio'

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <p className="main__intro">Hi there! I'm Inée, the amazing newly-hatched Software Engineer! I prefer front-end stuff, but I learned full-stack! Can't wait to learn more and upgrade my skills! </p>
            </div>
            <Portfolio />
            <div className="main__top-icon-div">
                <img className='main__top-icon' src='https://img.icons8.com/wired/2x/ffffff/collapse-arrow.png' alt='to top' onClick={()=>{window.scrollTo({top:0, left:0, behavior:'smooth'})}}/>
            </div>
        </div>
    );
}

export default Main;
