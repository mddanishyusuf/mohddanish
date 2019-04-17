import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from './Factory';

const Header = function({ labels, logoName, logoSubtitle }) {
    const [mobileNav, setMobilenav] = useState(false);

    const toggleNavbar = () => {
        setMobilenav(!mobileNav);
    };

    return (
        <div>
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
                    <Navbar labels={labels} isMobileNavOpen={mobileNav} closenavbar={toggleNavbar} />
                </div>
                <div className="menu-bar" role="presentation" onClick={toggleNavbar}>
                    Menu
                </div>
            </header>
            <style jsx global>
                {`
                    body {
                        overflow-y: ${mobileNav && 'hidden'};
                    }
                `}
            </style>
            <style jsx>{`
                .logo-title a {
                    font-size: 1.5rem;
                    font-family: MongolianFont;
                    text-decoration: none;
                    color: #707070;
                    letter-spacing: 1px;
                    line-height: 1.8rem;
                }
                .sub-title {
                    font-family: 'Shadows Into Light', cursive;
                    font-weight: 700;
                    opacity: 0.6;
                    font-size: 0.9rem;
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

export default Header;
