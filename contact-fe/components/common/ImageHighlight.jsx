import Image from 'next/image';
import React from 'react';

export default function ImageHighlight({ src, width, height, alt }) {
    return (
        <div className="section_logo-icon">
            <Image src={src} width={width} height={height} objectFit="cover" alt={alt} />
        </div>
    );
}
