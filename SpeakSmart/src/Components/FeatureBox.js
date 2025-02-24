import React from 'react';
import { Link } from 'react-router-dom';


const FeatureBox = ({ icon: Icon, title, description, link, boxColor, iconStyle }) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className="feature-box" style={{ backgroundColor: boxColor }}>
                {Icon && (
                    <div className="feature-icon" style={iconStyle}>
                        {React.createElement(Icon)}
                    </div>
                )}
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>

    );
};

export default FeatureBox