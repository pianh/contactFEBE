import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Product() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="product__wrapper">
                        <div className="product__img">
                            <Link href="">
                                <Image
                                    src="/assets/images/partners/shop-15-img-1.jpg"
                                    alt="product"
                                    width={310}
                                    height={430}
                                    objectFit="cover"
                                />
                            </Link>
                            <div className="product__img-effect"></div>
                        </div>

                        <div className="product__card mt-3 text-center">
                            <h3 className="section__title-4 m-0">INVITATIONS</h3>
                            <h4 className="section__des-4">$420.00</h4>
                            <span className="section__sub-title-4 product__add">ADD TO CART</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="product__wrapper">
                        <div className="product__img">
                            <Link href="">
                                <Image
                                    src="/assets/images/partners/shop-18-img-1.jpg"
                                    alt="product"
                                    width={310}
                                    height={430}
                                    objectFit="cover"
                                />
                            </Link>
                            <div className="product__img-effect"></div>
                        </div>

                        <div className="product__card mt-3 text-center">
                            <h3 className="section__title-4 m-0">CAKE ICING</h3>
                            <h4 className="section__des-4">$420.00</h4>
                            <span className="section__sub-title-4 product__add">ADD TO CART</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="product__wrapper">
                        <div className="product__img">
                            <Link href="">
                                <Image
                                    src="/assets/images/partners/shop-24-img-01.jpg"
                                    alt="product"
                                    width={310}
                                    height={430}
                                    objectFit="cover"
                                />
                            </Link>
                            <div className="product__img-effect"></div>
                        </div>

                        <div className="product__card mt-3 text-center">
                            <h3 className="section__title-4 m-0">LONG GOWN</h3>
                            <h4 className="section__des-4">$420.00</h4>
                            <span className="section__sub-title-4 product__add">ADD TO CART</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="product__wrapper">
                        <div className="product__img">
                            <Link href="">
                                <Image
                                    src="/assets/images/partners/shop-25-img-01.jpg"
                                    alt="product"
                                    width={310}
                                    height={430}
                                    objectFit="cover"
                                />
                            </Link>
                            <div className="product__img-effect"></div>
                        </div>
                        <div className="product__card mt-3 text-center">
                            <h3 className="section__title-4 m-0">CARAMEL CAKE</h3>
                            <h4 className="section__des-4">$420.00</h4>
                            <span className="section__sub-title-4 product__add">ADD TO CART</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
