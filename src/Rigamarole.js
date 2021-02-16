import React from 'react';
import './Rigamarole.css'
import { Link } from 'react-router-dom'

// import me1 from './pictures/me1.png'


const Rigamarole = () => {
    return (
        <div className="rigamarole">
            <div className="rigamarole__container">
                <h1> Look at this bird nonsense </h1>
            </div>
            <div className="rigamarole__button-div">
                <Link to="/peace">
                    <button className="rigamarole__peace-button">Find Peace</button>
                </Link>
            </div>
        </div>
    );
}

export default Rigamarole;