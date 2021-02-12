import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import hello from './audio/helloiminee.mp3'
// import ineee from './audio/ineee.mp3'
// import nice from './audio/nice.mp3'
// import pronounce from './audio/pronounced.mp3'
import { Howl, Howler } from 'howler'

// const audioClips = [
//     {sound: hello, label: 'Hello'}, 
//     {sound: ineee, label: 'Meee'}, 
//     {sound: nice, label: 'Nice to meet you'}, 
//     {sound: pronounce, label: 'Pronunciation'}
// ]

const helloIntro = [{sound: hello}]
// const pronunciation = [{sound: pronounce}]

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

    // renderPronunciation = () => {
    //     return pronunciation.map((soundObj) => {
    //         return(
    //             <p onClick={() => this.soundPlay(soundObj.sound)}>(pronunciation)</p>
    //         )
    //     })
    // }


    render() {
        Howler.volume(1.0)
        return (
            <div className="header">
                <div className="header__name">
                    {this.renderNameSound()}
                    {/* {this.renderPronunciation()} */}
                </div>
                <Link to='/secret' className="header__secret">
                    <div>
                    </div>
                </Link>
                <ul>
                    <Link to="/">
                        <li className={this.props.active === 'main' ? 'header__main--active' : 'header__inactive'} >Main</li>
                    </Link>
    
                    <Link to="/about">
                        <li className={this.props.active === 'about' ? 'header__about--active' : 'header__inactive'} >About</li>
                    </Link>
    
                    <Link to="/other">
                        <li className={this.props.active === 'other' ? 'header__other--active' : 'header__inactive'} >Other</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Header;