import React from 'react';
import Link from 'next/link';
import { Navbar } from './Factory';

const Header = function({ labels, logoName, logoSubtitle }) {
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
                    <Navbar labels={labels} />
                </div>
            </header>
            <style jsx>{`
                .logo-title a {
                    font-size: 1.5rem;
                    font-family: MongolianFont;
                    text-decoration: none;
                    color: #707070;
                    letter-spacing: 1px;
                }
                .sub-title {
                    font-family: 'Shadows Into Light', cursive;
                    font-weight: 700;
                    opacity: 0.6;
                    font-size: 0.9rem;
                }
                header {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto;
                    padding: 40px;
                }
                header .labels {
                    text-align: right;
                }
            `}</style>
        </div>
    );
};

export default Header;
