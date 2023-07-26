import Image from 'next/image';
import React, { useState } from 'react';

export default function Sidebar({ title, sub, Icon }) {
    const [isOpen, setIsOpen] = useState(true);

    const menuToggleHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="sidebar">
                <span className="menu__toggle__close move-right" onClick={menuToggleHandler}>
                    <Icon />
                </span>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <Image src="/assets/images/sidearea-img.png" alt="wedding img" width={291} height={307} />
                    <div className="sidebar__heading text-center">
                        <h2>{title}</h2>
                        <h3>{sub}</h3>
                    </div>
                    <div className="sidebar__des text-center">
                        <p>
                            4:00PM – 4:30PM <br /> Via Generale Carlo Montù 78 <br /> 22021 Bellagio CO, Italy
                        </p>
                    </div>
                    <div className="sidebar__icon d-flex">
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
                </div>
            </nav>
        </>
    );
}
