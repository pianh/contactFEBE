import React from 'react';

export default function SocialIcon() {
    return (
        <>
            <div className="social__icon d-flex justify-content-center">
                <span className="text-center d-flex  align-items-center justify-content-center">
                    <i className="fa-solid fa-basketball"></i>
                </span>
                <span className="text-center d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-vimeo-v"></i>
                </span>
                <span className="text-center d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-instagram"></i>
                </span>
                <span className="text-center d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-pinterest"></i>
                </span>
            </div>
        </>
    );
}
