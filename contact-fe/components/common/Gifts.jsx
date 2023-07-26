import Image from 'next/image';
import React from 'react';

export default function Gifts() {
    const giftsImages = [
        '/assets/images/hover-client-new.png',
        '/assets/images/h3-client-2.png',
        '/assets/images/h3-client-hover-3.png',
        '/assets/images/h3-client-hover-04.png',
        '/assets/images/h3-client-hover-05.png',
        '/assets/images/h3-client-hover-6.png',
    ];
    return (
        <div>
            <div className="gifts__wrapper d-flex">
                {giftsImages.map((gift, index) => (
                    <div className="col-12 col-sm-3 col-lg-2" key={index}>
                        <div className="gift-item">
                            <Image
                                src={gift}
                                alt={`introduce image ${index}`}
                                width={170}
                                height={170}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
