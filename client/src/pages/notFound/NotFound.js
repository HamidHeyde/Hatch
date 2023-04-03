import React from 'react';
import { NotFoundNumber } from "../../components/notFound/notFoundNumber/NotFoundNumber";
import { NotFoundText } from "../../components/notFound/notFoundText/NotFoundText";
import './NotFound.scss';


export const NotFound = () => {
    return (
        <div className="notFoundWrapper">
            <NotFoundNumber/>
            <NotFoundText/>
        </div>
    );
};