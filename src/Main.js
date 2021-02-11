import React from 'react';
import './Main.css';
// import Portfolio from './Portfolio'

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <p>Currently Under Construction. With all due respect, please bugger off and come back later :) </p>
            </div>
            {/* <Portfolio /> */}
            <div className="main__top-icon-div">
                <img className='main__top-icon' src='https://img.icons8.com/wired/2x/ffffff/collapse-arrow.png' alt='to top' onClick={()=>{window.scrollTo({top:0, left:0, behavior:'smooth'})}}/>
            </div>
        </div>
    );
}

export default Main;