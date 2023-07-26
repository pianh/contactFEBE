import Image from 'next/image';
import SocialIcon from '../common/SocialIcon';

function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-12">
                            <div className="footer-top-left text-center d-flex flex-column">
                                <p className="footer-address section__des-4">
                                    Via Carlo Montù 78 22021 Bellagio CO, Italy
                                </p>
                                <p className="footer-pre-phone section__des-4">+11 6254 7855</p>
                                <p className="footer-phone section__des-4">+11 5488 3866</p>
                                <p className="footer-mail section__des-4">castella@example.com</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="footer-top-center d-flex align-items-center flex-column">
                                <div className="logo__image">
                                    <Image
                                        src="/assets/images/logo/logo-new-1.png"
                                        alt="logo new"
                                        width={220}
                                        height={70}
                                        objectFit="cover"
                                    />
                                </div>
                                <p className="section__des-4">
                                    Semper libero, sit amet blandit vel, rhoncus venenatis luctus pulvinar, hendrerit
                                    id, lorem.
                                </p>
                                <SocialIcon />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-12">
                            <div className="footer-top-right text-center">
                                <span>
                                    <p className="section__des-4 footer-working mb-2">Working hours:</p>
                                    <p className="section__des-4">Monday to Friday 9am - 5pm</p>
                                </span>
                                <div className="footer-input mt-3">
                                    <input type="text" name="" id="" placeholder="Your mail..." />
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-80">
                    <span className="d-flex align-items-center justify-content-center">
                        © 2023 Qode Interactive, All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
