import Image from 'next/image';
import React from 'react';
import Button from './Button';

export default function ImagePoint({ title, subTitle, className, src, alt, width, height }) {
    return (
        <div className="section__image">
            <div className="section__image-point">
                <Image src={src} alt={alt} objectFit="cover" width={width} height={height} />
            </div>
            <h3 className="section__title-3">{title}</h3>
            <p className="section__sub-title-3">{subTitle}</p>
            <Button className="section__button section__image-button" title="RSVP" />
        </div>
    );
}
