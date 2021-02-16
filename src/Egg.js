import React from 'react';
import './styles/Egg.css'
import { Link } from 'react-router-dom'


const Egg = () => {
    return (
        <div className="eggs">
            <div className="eggs__container">
                <div className="eggs__list">
                    <p>Did you find all the hidden things?</p>
                    <p>Clues:</p>
                    <ol>
                        <li>How do I pronounce "Inée"?</li>
                        <li>Something strange in the header</li>
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
