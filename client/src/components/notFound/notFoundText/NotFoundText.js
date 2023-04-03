import React from 'react';
import './NotFoundText.scss';
import { Link } from "react-router-dom";


export const NotFoundText = () => {
    return (
        <div className="notFouondText">
            <div className="title">Sorry,<br/>Page Not Found</div>
            <Link to="/" className="backButton">Back To Home</Link>
        </div>
    );
};