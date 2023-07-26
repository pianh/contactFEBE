import React from 'react';
import Footer from '../footer/Footer';
import HeaderOther from '../header/HeaderOther';
import Header from '../header/Header';

export default function LayoutNoFooter({ children }) {
    return (
        <div>
            <>
                <Header />
                {children}
            </>
        </div>
    );
}
