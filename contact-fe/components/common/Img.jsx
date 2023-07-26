import Image, { StaticImageData } from 'next/image';

import NoImageURL from '@/public/assets/images/no-image.png';

export function Img({ src = NoImageURL, className = '', alt = '', width = 500, height = 500, fit = 'contain' }) {
    return (
        <Image
            src={src || NoImageURL}
            className={className}
            alt={alt}
            width={width}
            height={height}
            priority={true}
            style={{ objectFit: fit }}
        />
    );
}
