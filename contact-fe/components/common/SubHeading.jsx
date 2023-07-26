import React from 'react';

export default function SubHeading({ title, subTitle, desc, className }) {
    return (
        <div>
            <h3 className={`section__title-2 ${className}`}>{title}</h3>
            <h4 className={`section__sub-title-2 ${className}`}>{subTitle}</h4>
            <h4 className={`section__desc-2 ${className}`}>{desc}</h4>
        </div>
    );
}
