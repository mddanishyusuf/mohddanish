import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Navbar } from './Factory';

const Header = function({ labels, logoName, logoSubtitle, summary, router, aboutMe }) {
    const [mobileNav, setMobilenav] = useState(false);

    const toggleNavbar = () => {
        setMobilenav(!mobileNav);
    };

    return (
        <div className="top-header">
            <header>
                <div className="logo-title">
                    <Link href="/">
                        <a>{logoName}</a>
                    </Link>
                    <div className="sub-title">
                        <div dangerouslySetInnerHTML={{ __html: logoSubtitle }} />
                    </div>
                </div>
                <div className="labels">
                    <Navbar labels={labels} router={router} isMobileNavOpen={mobileNav} closenavbar={toggleNavbar} />
                </div>
            </header>
            {router.asPath === '/' && (
                <div className="profile-container">
                    <div className="user-image">
                        <img src="https://github.com/mddanishyusuf.png" alt="mohd danish" />
                    </div>
                    <div className="user-bio" dangerouslySetInnerHTML={{ __html: aboutMe.coverLetter }} />
                </div>
            )}
            <style jsx global>
                {`
                    body {
                        overflow-y: ${mobileNav && 'hidden'};
                    }
                    .user-bio a {
                        color: #362d5f !important;
                        text-decoration: none;
                    }
                `}
            </style>
            <style jsx>{`
                .top-header {
                    background: ${router.asPath === '/' && '#4776e6'};
                    background: ${router.asPath === '/' && '-webkit-linear-gradient(to right, #fd746c, #ff9068)'};
                    background: ${router.asPath === '/' && 'linear-gradient(to right, #fd746c, #ff9068)'};
                }
                .logo-title a {
                    font-size: 1.5rem;
                    text-decoration: none;
                    color: ${router.asPath === '/' ? '#373737' : '#333'};
                    letter-spacing: 1px;
                    line-height: 1.8rem;
                    font-weight: 600;
                }
                .sub-title {
                    opacity: 0.8;
                    font-size: 0.9rem;
                    color: ${router.asPath === '/' ? '#373737' : '#333'};
                }

                .profile-container {
                    text-align: center;
                    padding-bottom: 80px;
                }

                .profile-container img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    border: 3px solid #fff;
                }

                .user-bio {
                    color: #373737;
                    letter-spacing: 0.5px;
                    padding: 20px;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 30px;
                }

                @media screen and (min-width: 700px) {
                    header {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: auto;
                        padding: 60px;
                    }
                    header .labels {
                        text-align: right;
                    }
                    .menu-bar {
                        display: none;
                    }
                    .user-bio {
                        max-width: 750px;
                        margin: 0 auto;
                    }
                }
                @media screen and (max-width: 700px) {
                    header {
                        padding: 40px 20px;
                    }
                    .menu-bar {
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
};

export default withRouter(Header);
