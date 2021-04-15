import React from 'react';
import "./styles.css";

const Headline = ({ title }) => {

    return (
        <h1 className="headline">
            {title}
        </h1>
    )
}

export default Headline;