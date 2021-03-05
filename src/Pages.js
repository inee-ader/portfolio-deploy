import React from 'react';
import './styles/Pages.css'
import KylePage from './pictures/kyle-page.png'
import JessPage from './pictures/jess-page.png'

const Pages = () => {
    return (
        <div className='pages'>
            <h3 className='pages__title'>These were so much fun to make!</h3>
            <div className='pages__container'>
                <a className='pages__link' target='_blank' rel='noopener noreferrer' href='https://theunifiedpurpose.com/'>
                    <div className='pages__card'>
                        <h4 className='pages__h'>Unified Purpose Coaching</h4>
                        <div className='pages__img__div'>
                            <img className='pages__img' src={KylePage} alt='Unified Purpose Coaching'></img>
                        </div>
                        <p className='pages__p'>Masculine and Feminine dynamics, relationship coaching, and personal growth solutions.</p>
                    </div>
                </a>

                <a className='pages__link' target='_blank' rel='noopener noreferrer' href='https://www.jessicamorse.me/'>
                    <div className='pages__card'>
                        <h4 className='pages__h'>Landing Page</h4>
                        <div className='pages__img__div'>
                            <img className='pages__img' src={JessPage} alt='Personal landing page'></img>
                        </div>
                        <p className='pages__p'>Personal landing page for my best friend in natural healing, archetypal medicine, and wellness.</p>
                    </div>
                </a>
            </div>
            <br></br>
            <br></br>
            <h3 className='pages__title'>Would you like a simple landing page for yourself? I'm down to design that for you, just contact me!</h3>
        </div>
    );
}

export default Pages;
