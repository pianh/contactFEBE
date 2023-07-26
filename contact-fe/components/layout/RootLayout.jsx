import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function RootLayout({ children }) {
    return (
        <div>
            <>
                <Header />
                {children}
                <Footer />
            </>
        </div>
    );
}
