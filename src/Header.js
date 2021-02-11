import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import hello from './audio/helloiminee.mp3'
import imineee from './audio/imineee.mp3'
import meetyou from './audio/nicetomeetyou.mp3'
import pronounce from './audio/pronouncedInee.mp3'
import { Howl, Howler } from 'howler'

const audioClips = [
    {sound: hello, label: 'helloiminee'}, 
    {sound: imineee, label: 'imineee'}, 
    {sound: meetyou, label: 'nicetomeetyou'}, 
    {sound: pronounce, label: 'Pronunciation'}
]

class Header extends Component {


    soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    renderSound = () => {
        return audioClips.map((soundObj, index) => {
            return(
                <button key={index} onClick={()=> this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <div className="header">
                <h1>INÉE ADER</h1>
                {this.renderSound()}
                <ul>
                    <Link to="/">
                        <li className={this.props.active === 'main' ? 'header__main--active' : null} >Main</li>
                    </Link>
    
                    <Link to="/about">
                        <li className={this.props.active === 'about' ? 'header__about--active' : null} >About</li>
                    </Link>
    
                    <Link to="/other">
                        <li className={this.props.active === 'other' ? 'header__other--active' : null} >Other</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Header;