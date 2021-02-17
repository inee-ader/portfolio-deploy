import React from 'react';
import './styles/Egg.css'
import { Link } from 'react-router-dom'


const Egg = () => {
    return (
        <div className="eggs">
            <div className="eggs__container">
                <div className="eggs__list">
                    <p className="eggs__p">Did you find all the hidden things?</p>
                    <p className="eggs__p">Clues:</p>
                    <ol>
                        <li className="eggs__clue">How do I pronounce "Inée"?</li>
                        <li className="eggs__clue">Something strange in the header</li>
                    </ol>
                    <Link to='/'>
                        <p>{"<<"}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Egg;
