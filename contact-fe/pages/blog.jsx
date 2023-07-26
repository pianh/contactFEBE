import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import SocialIcon from '@/components/common/SocialIcon';
import { SwiperImage } from '@/components/common/SwiperImg';
import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
export default function Blog() {
    return (
        <>
            <div className="blog__wrapper">
                <section className="container-fluid">
                    <div className="blog__cate">
                        <span className="-level-1">Home</span>
                        <span className="-level-3">/ Blog right sidebar</span>
                    </div>
                    <div className="blog__content">
                        <div className="row">
                            <div className="blog__left col-12 col-sm-12 col-lg-9">
                                <div className="blog__happy">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/blog/p9-title-img-01.jpg"
                                            width={1000}
                                            height={500}
                                            alt="happy image"
                                        />
                                    </div>
                                    <Heading
                                        title="CHOOSE YOUR TRUE HAPPINES"
                                        subTitle="NOVEMBER 28, 2022 EVENTS"
                                        desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien laoreet semper libero, sit amet adipiscing blandit vel, rhoncus bibendum nullam quis ante. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo mullam dictum felis eu pede mollis pretium. Integer tincidunt venenatis tempus. Etiam sit amet orci eget eros faucibus. Etiam ultricies feugiat a aliquam lorem ante, dapibus in, viverra quisnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Duis leo vel augue luctus pulvinar, hendrerit id, lorem.."
                                    />
                                    <div className="blog__btn">
                                        <Button className="" title="READ MORE" />
                                    </div>
                                </div>
                                <div className="blog__begin">
                                    <div className="-video">
                                        <iframe
                                            width="1500"
                                            height="400"
                                            src="https://www.youtube.com/embed/xtQtGKL0NCI"
                                            frameborder="0"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <Heading
                                        title="CHOOSE YOUR TRUE HAPPINES"
                                        subTitle="NOVEMBER 28, 2022 EVENTS"
                                        desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien laoreet semper libero, sit amet adipiscing blandit vel, rhoncus bibendum nullam quis ante. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo mullam dictum felis eu pede mollis pretium. Integer tincidunt venenatis tempus. Etiam sit amet orci eget eros faucibus. Etiam ultricies feugiat a aliquam lorem ante, dapibus in, viverra quisnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Duis leo vel augue luctus pulvinar, hendrerit id, lorem.."
                                    />
                                    <div className="blog__btn">
                                        <Button className="" title="READ MORE" />
                                    </div>
                                </div>
                                <article className="blog__intro">
                                    <h3>
                                        “Walking with your hands in mine and mine in yours, that&apos;s exactly where I
                                        want to be always.”
                                    </h3>
                                    <h4>Unknown</h4>
                                </article>
                                <div className="blog__ending">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/blog/blog-list-01.jpg"
                                            width={1000}
                                            height={500}
                                            alt="happy image"
                                        />
                                    </div>
                                    <Heading
                                        title="CHOOSE YOUR TRUE HAPPINES"
                                        subTitle="NOVEMBER 28, 2022 EVENTS"
                                        desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien laoreet semper libero, sit amet adipiscing blandit vel, rhoncus bibendum nullam quis ante. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo mullam dictum felis eu pede mollis pretium. Integer tincidunt venenatis tempus. Etiam sit amet orci eget eros faucibus. Etiam ultricies feugiat a aliquam lorem ante, dapibus in, viverra quisnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Duis leo vel augue luctus pulvinar, hendrerit id, lorem.."
                                    />
                                    <div className="blog__btn">
                                        <Button className="" title="READ MORE" />
                                    </div>
                                </div>
                                <article className="blog__banner">
                                    <div className="-bg"></div>
                                    <h3>She said yes</h3>
                                </article>
                            </div>
                            <div className="blog__right col-12 col-sm-12 col-lg-3 text-center">
                                <div className="blog__seach">
                                    <input placeholder="Search..." />
                                    <RxMagnifyingGlass />
                                </div>
                                <div className="blog__social">
                                    <div className="blog-user">
                                        <Image
                                            src="/assets/images/blog/user-sidebar.png"
                                            alt="Blog avatar"
                                            width={250}
                                            height={250}
                                            objectFit="cover"
                                        />
                                    </div>
                                    <SocialIcon />
                                </div>
                                <div className="blog__posts">
                                    <span className="blog__posts-heading">LATEST POSTS:</span>
                                    <div className="blog__post-item">
                                        <div className="-img">
                                            <Image
                                                src="/assets/images/blog/sidebar-blog-1.jpg"
                                                width={250}
                                                height={150}
                                                objectFit="cover"
                                                alt="post image"
                                            />
                                        </div>
                                        <div className="-heading">
                                            <h3>Write your love story </h3>
                                            <h4>December 29, 2022</h4>
                                        </div>
                                    </div>
                                    <div className="blog__post-item">
                                        <div className="-img">
                                            <Image
                                                src="/assets/images/blog/sidebar-blog-2.jpg"
                                                width={250}
                                                height={150}
                                                objectFit="cover"
                                                alt="post image"
                                            />
                                        </div>
                                        <div className="-heading">
                                            <h3>Write your love story </h3>
                                            <h4>December 29, 2022</h4>
                                        </div>
                                    </div>
                                    <div className="blog__post-item">
                                        <div className="-img">
                                            <Image
                                                src="/assets/images/blog/sidebar-blog-3.jpg"
                                                width={250}
                                                height={150}
                                                objectFit="cover"
                                                alt="post image"
                                            />
                                        </div>
                                        <div className="-heading">
                                            <h3>Write your love story </h3>
                                            <h4>December 29, 2022</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__category">
                                    <span className="blog__category-heading">CATEGORY</span>
                                    <div className="blog__category-list">
                                        <ul>
                                            <li>CEREMONY</li>
                                            <li>DECORATION</li>
                                            <li>DRESS</li>
                                            <li>EVENTS</li>
                                            <li>INVITATIONS</li>
                                            <li>MUSIC</li>
                                            <li>WEDDING</li>
                                        </ul>
                                    </div>
                                    <div className="blog__category-img">
                                        <Image
                                            src="/assets/images/blog/sidebar-img.png"
                                            alt="cate img"
                                            width={250}
                                            height={250}
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                                <div className="blog__share">
                                    <span className="blog__share-heading">SOCIAL SHARE</span>
                                    <SocialIcon />
                                </div>
                                <div className="blog__tags">
                                    <span className="blog__tags-heading">TAGS:</span>
                                    <ul>
                                        <li>
                                            <Link href="#">Bride </Link>
                                            <Link href="#">- Castle </Link>
                                            <Link href="#">- Church </Link>
                                            <Link href="#">- Decor </Link>
                                            <Link href="#">- Floral </Link>
                                            <Link href="#"> Groom </Link>
                                            <Link href="#">- Hall </Link>
                                            <Link href="#">- Lake </Link>
                                            <Link href="#">- Lake </Link>
                                            <Link href="#">- Lake </Link>
                                            <Link href="#"> Hall </Link>
                                            <Link href="#">- Hall </Link>
                                            <Link href="#">- Hall </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog__instagram">
                                    <span className="blog__instagram-heading">INSTAGRAM:</span>
                                    <div className="blog__instagram-item">
                                        <div className="row">
                                            <div className="col-6 col-lg-4 col-sm-6">
                                                <div className="-img">
                                                    <Image
                                                        src="/assets/images/blog/ig-sidebar-blog-1.jpg"
                                                        alt="instagram img"
                                                        width={120}
                                                        height={120}
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4 col-sm-6">
                                                <div className="-img">
                                                    <Image
                                                        src="/assets/images/blog/ig-sidebar-blog-2.jpg"
                                                        alt="instagram img"
                                                        width={120}
                                                        height={120}
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4 col-sm-6">
                                                <div className="-img">
                                                    <Image
                                                        src="/assets/images/blog/ig-sidebar-blog-3.jpg"
                                                        alt="instagram img"
                                                        width={120}
                                                        height={120}
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4 col-sm-6">
                                                <div className="-img">
                                                    <Image
                                                        src="/assets/images/blog/ig-sidebar-blog-4.jpg"
                                                        alt="instagram img"
                                                        width={120}
                                                        height={120}
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4 col-sm-6">
                                                <div className="-img">
                                                    <Image
                                                        src="/assets/images/blog/ig-sidebar-blog-5.jpg"
                                                        alt="instagram img"
                                                        width={120}
                                                        height={120}
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4 col-sm-6">
                                                <div className="-img">
                                                    <Image
                                                        src="/assets/images/blog/ig-sidebar-blog-2.jpg"
                                                        alt="instagram img"
                                                        width={120}
                                                        height={120}
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__archive">
                                    <span className="blog__archive-heading">ARCHIVE</span>
                                    <ul className="blog__archive-year">
                                        <li>
                                            <Link href="/">December 2022</Link>
                                        </li>
                                        <li>
                                            <Link href="/">November 2022</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="blog__slider">
                <div className="blog__img-wrapper d-flex">
                    <SwiperImage />
                </div>
            </section>
        </>
    );
}
Blog.Layout = RootLayout;
