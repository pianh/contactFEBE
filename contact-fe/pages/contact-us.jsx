import HeaderBottom from '@/components/header/HeaderBottom';
import Image from 'next/image';
import { useState } from 'react';
import { SwiperImage } from '@/components/common/SwiperImg';
import Map from '@/components/common/Map';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import RootLayout from '@/components/layout/RootLayout';

export default function Contact() {
    return (
        <main>
            <div className="contact__wrapper">
                <section className="map__area">
                    <div className="container-fluid">
                        <Map />
                    </div>
                </section>
                <section className="contact__anytime mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="d-flex justify-content-center flex-column align-items-center">
                                    <div className="-img d-flex justify-content-center align-items-center">
                                        <Image
                                            src="/assets/images/team-icon.png"
                                            width={330}
                                            height={170}
                                            objectFit="cover"
                                            alt="get-img"
                                        />
                                    </div>
                                    <Heading
                                        title="CONTACT US ANYTIME"
                                        subTitle="WE WOULD LIKE TO HEAR FROM YOU"
                                        desc="Lorem ipsum dolor sti amet se dcredula non seculus est voluspa fin et dol"
                                        className="animate__animated animate__backInDown animate__delay-0.5s"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="contact__form d-flex justify-content-center flex-column">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input placeholder="Your Name" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <input placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <textarea placeholder="Write a message" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Button className="section__button contact__button" title="CONTACT US" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact__city-area mt-80">
                    <div className="container-fluid">
                        <div className="-img">
                            <Image
                                src="/assets/images/p10-img-01.jpg"
                                alt="city image"
                                width={2000}
                                height={375}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="contact__city-wrapper">
                            <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
                                <div className="contact__city">
                                    <div className="-heading">
                                        <h3 className="section__title-2">MONACO</h3>
                                        <h4 className="section__sub-title-4">SAVE THE DATE</h4>
                                    </div>
                                    <div className="-sub-heading">
                                        <p className="contact-mail">castella@example.com</p>
                                        <p className="contact-address">
                                            Via Carlo Montù 78, 22021 <br /> Bellagio CO, Italy
                                        </p>
                                        <p className="contact-phone">+11 6254 7855, +12 6545 1123</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
                                <div className="contact__city">
                                    <div className="-heading">
                                        <h3 className="section__title-2">FRANCE</h3>
                                        <h4 className="section__sub-title-4">GIFT REGISTRY</h4>
                                    </div>
                                    <div className="-sub-heading">
                                        <p className="contact-mail">castella@example.com</p>
                                        <p className="contact-address">
                                            Via Carlo Montù 78, 22021 <br /> Bellagio CO, Italy
                                        </p>
                                        <p className="contact-phone">+11 6254 7855, +12 6545 1123</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
                                <div className="contact__city">
                                    <div className="-heading">
                                        <h3 className="section__title-2">ITALY</h3>
                                        <h4 className="section__sub-title-4">RSVP FOR US</h4>
                                    </div>
                                    <div className="-sub-heading">
                                        <p className="contact-mail">castella@example.com</p>
                                        <p className="contact-address">
                                            Via Carlo Montù 78, 22021 <br /> Bellagio CO, Italy
                                        </p>
                                        <p className="contact-phone">+11 6254 7855, +12 6545 1123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact__slider mt-80 mb-40">
                    <div className="container-fluid">
                        <div className="contact__img-wrapper d-flex">
                            <SwiperImage />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
Contact.Layout = RootLayout;
