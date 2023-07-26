import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

export default function Accomodation() {
    return (
        <div style={{ marginTop: '90px' }}>
            <ul className="ulcap1">
                <li>1</li>
                <li className="licap1">
                    2
                    <ul className="ulcap2">
                        <li className="licap2">D</li>
                        <li className="licap2">E</li>
                        <li className="licap2">F</li>
                    </ul>
                </li>
                <li>3</li>
            </ul>
        </div>
    );
}
Accomodation.Layout = RootLayout;
