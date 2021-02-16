import React from 'react';
import './styles/Secret.css'
import { Link } from 'react-router-dom'

const Secret = () => {
    return (
        <div className="secret">
            <p>You're a curious one, aren't you? I like that.</p>

            <div className="secret__button-container">
                <Link to='/'>
                    <button className="secret__button">
                        outta here
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Secret;
