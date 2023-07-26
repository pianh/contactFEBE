import React from 'react';
import Footer from '../footer/Footer';
import HeaderOther from '../header/HeaderOther';

export default function Test({ children }) {
    return (
        <div>
            <>
                <h1>Layout</h1>
                {children}
            </>
        </div>
    );
}
