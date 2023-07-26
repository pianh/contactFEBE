import React from 'react';
import Footer from '../footer/Footer';
import HeaderOther from '../header/HeaderOther';

export default function OtherLayout({ children }) {
    return (
        <div>
            <>
                <HeaderOther />
                {children}
            </>
        </div>
    );
}
