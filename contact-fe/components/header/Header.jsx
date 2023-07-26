import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import SocialIcon from '../common/SocialIcon';
import { GrClose } from 'react-icons/gr';
import { useRouter } from 'next/router';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [showMobile, setShowMobile] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    const menuToggleMobileHandler = () => {
        setShowMobile((p) => !p);
    };

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        // Add event listeners for scroll and route change
        window.addEventListener('scroll', handleScroll);
        router.events.on('routeChangeStart', closeHeaderOnRouteChange);

        return () => {
            // Clean up event listeners on component unmount
            window.removeEventListener('scroll', handleScroll);
            router.events.off('routeChangeStart', closeHeaderOnRouteChange);
        };
    }, []);

    // Function to close the header on route change
    const closeHeaderOnRouteChange = () => {
        setMenuOpen(true);
        setShowMobile(false);
    };

    return (
        <div>
            <div
                id="header-sticky"
                className={`header__main d-flex align-items-center header__transparent ${
                    isSticky ? 'header-sticky' : ''
                }`}
            >
                <div className="container-fluid">
                    <div className="d-flex pl-60 pr-60 justify-content-between header__wrapper">
                        <div className="header__main__left d-flex align-items-center">
                            <div>
                                <i className="bi bi-search"></i>
                                <input type="text" placeholder="Search..." />
                            </div>
                            <div className="header__logo-mobile">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/logo/logo-dark-new-02.png"
                                        className="items-center"
                                        alt="header logo"
                                        width={110}
                                        height={55}
                                    />
                                </Link>
                            </div>
                        </div>
                        <nav
                            className={`header__main__content d-flex align-items-center ${
                                showMobile ? 'show-mobile' : ''
                            }`}
                        >
                            <ul className="d-flex">
                                <li>
                                    <Link className="active" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="has-dropdown">
                                    <Link className="" href="/">
                                        Pages
                                    </Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link className="" href="/gift-registry">
                                                Gift registry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/our-services">
                                                Our Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/pricing-plans">
                                                Pricing Plans
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/make-an-appointment">
                                                Make an Appointment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/rsvp">
                                                RSVP Page
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/contact-us">
                                                Contact US
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/get-in-touch">
                                                Get In Touch
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/faq">
                                                FAQ Page
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-dropdown">
                                    <Link className="" href="/">
                                        Portfolio
                                    </Link>

                                    <ul className="submenu">
                                        <li className="has-sub-dropdown">
                                            <div className="d-flex justify-content-between">
                                                <Link href="/">List Types</Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <ul className="sub-detail">
                                                <li>
                                                    <Link href="/standard-list">Standard List</Link>
                                                </li>
                                                <li>
                                                    <Link href="/standard-list">Gallery List</Link>
                                                </li>
                                                <li>
                                                    <Link href="/standard-list">Floating List</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    List Layout
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <ul className="sub-detail">
                                                <li>
                                                    <Link href="/standard-list">Three Column</Link>
                                                </li>
                                                <li>
                                                    <Link href="/standard-list">Three Column Grid</Link>
                                                </li>
                                                <li>
                                                    <Link href="/standard-list">Four Column</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    Single Types
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <ul className="sub-detail">
                                                <li>
                                                    <Link href="/">Single One</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Single Two</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Single Three</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="header__main__logo">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/logo/logo-dark-new-02.png"
                                        className="items-center"
                                        alt="header logo"
                                        width={190}
                                        height={80}
                                    />
                                </Link>
                            </div>
                            <ul className="d-flex">
                                <li>
                                    <Link className="" href="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link className="" href="/shop">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link className="" href="/landing">
                                        Landing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__main__sidebar d-flex align-items-center">
                            <div className="header__main__toggle " onClick={menuToggleHandler}>
                                <div className="diamond-container">
                                    <i className="fa-solid fa-diamond"></i>
                                    <i className="fa-solid fa-diamond"></i>
                                    <i className="fa-solid fa-diamond"></i>
                                </div>
                            </div>
                            {!menuOpen ? (
                                <nav className="sidebar sidebar-visible">
                                    <span className="menu__toggle__close move-right" onClick={menuToggleHandler}>
                                        <AiOutlineClose />
                                    </span>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <Image
                                            src="/assets/images/sidearea-img.png"
                                            alt="wedding img"
                                            width={291}
                                            height={307}
                                        />
                                        <div className="sidebar__heading text-center">
                                            <h2>WEDDING HOUR</h2>
                                            <h3>LAGO DI GARDA</h3>
                                        </div>
                                        <div className="sidebar__des text-center">
                                            <p>
                                                4:00PM – 4:30PM <br /> Via Generale Carlo Montù 78 <br /> 22021 Bellagio
                                                CO, Italy
                                            </p>
                                        </div>
                                        <div className="sidebar__icon">
                                            <SocialIcon />
                                        </div>
                                    </div>
                                </nav>
                            ) : null}
                        </div>
                        {/* Toggle Mobile */}
                        <div className="header__toggle-mobile">
                            {showMobile ? (
                                <GrClose
                                    onClick={menuToggleMobileHandler}
                                    style={{ fontSize: '33px', opacity: '0.6' }}
                                />
                            ) : (
                                <div className="diamond-container" onClick={menuToggleMobileHandler}>
                                    <i className="fa-solid fa-diamond"></i>
                                    <i className="fa-solid fa-diamond"></i>
                                    <i className="fa-solid fa-diamond"></i>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
