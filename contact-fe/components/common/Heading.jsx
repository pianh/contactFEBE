import React from 'react';

export default function Heading({ title, subTitle, desc, className }) {
    return (
        <div className={`text-center ${className}`}>
            <h3 className="section__title">{title}</h3>
            <h4 className="section__sub__title">{subTitle}</h4>
            <p className="section__des">{desc}</p>
        </div>
    );
}
