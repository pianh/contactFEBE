import OtherLayout from '@/components/layout/OtherLayout';
import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

export default function StandardList() {
    return (
        <main>
            <div className="standard__wrapper">
                <div className="container">
                    <div className="standard__cate">
                        <span className="-level-1">Home</span>
                        <span className="-level-2">/ Portfolio</span>
                        <span className="-level-3">/ Standard List</span>
                    </div>
                    <div className="standard__gallery">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 -item">
                                <div className="-img-wrap">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/maa/ig-sidebar-blog-1.jpg"
                                            width={355}
                                            height={350}
                                            objectFit="cover"
                                            alt="galley image"
                                        />
                                    </div>
                                </div>
                                <div className="-heading">
                                    <h3 className="-title">ETERNITY</h3>
                                    <h4 className="-sub-title">CEREMONYWHITE</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 -item">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/maa/ig-sidebar-blog-2.jpg"
                                        width={315}
                                        height={300}
                                        objectFit="cover"
                                        alt="galley image"
                                    />
                                </div>
                                <div className="-heading">
                                    <h3 className="-title">ETERNITY</h3>
                                    <h4 className="-sub-title">CEREMONYWHITE</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 -item">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/maa/ig-sidebar-blog-3.jpg"
                                        width={315}
                                        height={300}
                                        objectFit="cover"
                                        alt="galley image"
                                    />
                                </div>
                                <div className="-heading">
                                    <h3 className="-title">ETERNITY</h3>
                                    <h4 className="-sub-title">CEREMONYWHITE</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 -item">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/maa/ig-sidebar-blog-4.jpg"
                                        width={315}
                                        height={300}
                                        objectFit="cover"
                                        alt="galley image"
                                    />
                                </div>
                                <div className="-heading">
                                    <h3 className="-title">ETERNITY</h3>
                                    <h4 className="-sub-title">CEREMONYWHITE</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 -item">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/maa/ig-sidebar-blog-5.jpg"
                                        width={315}
                                        height={300}
                                        objectFit="cover"
                                        alt="galley image"
                                    />
                                </div>
                                <div className="-heading">
                                    <h3 className="-title">ETERNITY</h3>
                                    <h4 className="-sub-title">CEREMONYWHITE</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 -item">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/maa/ig-sidebar-blog-6.jpg"
                                        width={315}
                                        height={300}
                                        objectFit="cover"
                                        alt="galley image"
                                    />
                                </div>
                                <div className="-heading">
                                    <h3 className="-title">ETERNITY</h3>
                                    <h4 className="-sub-title">CEREMONYWHITE</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

StandardList.Layout = RootLayout;
