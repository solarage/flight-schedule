import React from 'react';
import { Link } from 'react-router-dom';

import './FlightCard.css';

const FlightCard = ({flightName, link, path}) => {
    return(
        <div className="flight-card">
            <div className="flight-btn">
                <Link to={link}>
                    <button type="button">
                        <img 
                            className="flight-icon" 
                            src={path} 
                            alt={flightName}
                        />
                        <p>{flightName}</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FlightCard;