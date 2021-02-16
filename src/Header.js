import React, { Component } from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom'
import hello from './audio/helloiminee.mp3'

import { Howl, Howler } from 'howler'

// const audioClips = [
//     {sound: hello, label: 'Hello'}, 
//     {sound: ineee, label: 'Meee'}, 
//     {sound: nice, label: 'Nice to meet you'}, 
//     {sound: pronounce, label: 'Pronunciation'}
// ]

const helloIntro = [{sound: hello}]

class Header extends Component {

    soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    renderNameSound = () => {
        return helloIntro.map((soundObj, index) => {
            return(
                <h1 key={index} onMouseEnter={() => this.soundPlay(soundObj.sound)}>
                INÉE ADER
                </h1>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <div className="header">
                <div className="header__name">
                    {this.renderNameSound()}
                </div>
                <Link to='/secret' className="header__secret">
                    <div>
                        <br></br>
                    </div>
                </Link>
                <ul>
                    <li >
                        <Link className={`header__link ${this.props.active === 'main' ? 'header__main--active' : 'header__inactive'}`} to="/">Main</Link>
                    </li>
    
                    <li >
                        <Link className={`header__link ${this.props.active === 'about' ? 'header__about--active' : 'header__inactive'}`} to="/about">About</Link>
                    </li>
    
                    <li >
                        <Link className={`header__link ${this.props.active === 'other' ? 'header__other--active' : 'header__inactive'}`} to="/other">Rigamarole</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;