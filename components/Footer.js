import Link from 'next/link';
import { Twitter, GitHub, Facebook, Youtube } from 'react-feather';

const Footer = function(props) {
    return (
        <footer>
            <div className="footer">
                <div className="footer-inner">
                    <p>
                        Theme by
                        <a href="https://twitter.com/mddanishyusuf" target="_blank" rel="noreferrer noopener">
                            @mddanishyusuf
                        </a>
                    </p>
                    <p>
                        Build with{' '}
                        <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
                            Next.js
                        </a>{' '}
                        +{' '}
                        <a
                            href="https://github.com/mddanishyusuf/dailyhack/issues"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub Issues CMS
                        </a>
                    </p>
                </div>
                <div className="footer-nav right-navbar">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/mddanishyusuf/dailyhack#-how-to-add-tricks"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Facebook color="#3832DC" size={18} /> <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/mddanishyusuf/dailyhack/blob/master/README.md"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Twitter color="#3832DC" size={18} /> <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/mddanishyusuf/dailyhack"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <GitHub color="#3832DC" size={18} /> <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/dailyhacknotes" target="_blank" rel="noreferrer noopener">
                                <Youtube color="#3832DC" size={18} /> <span>YouTube</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    .footer {
                        background-color: rgb(240, 237, 237);
                        margin-bottom: -15px;
                    }

                    @media screen and (min-width: 700px) {
                        .footer {
                            display: flex;
                            -moz-box-pack: justify;
                            justify-content: space-between;
                        }

                        .footer-nav ul {
                            float: right;
                        }

                        .footer-nav ul li {
                            padding: 10px;
                            -moz-box-align: center;
                            align-items: center;
                            float: left;
                            list-style: none;
                        }

                        .footer-nav {
                            padding: 40px;
                        }
                    }

                    .footer-inner {
                        padding: 40px;
                    }
                    .footer-inner p {
                        line-height: 1.2;
                        font-size: 0.9rem;
                    }
                    .footer-inner a {
                        color: #4618b1;
                    }

                    .footer-nav ul {
                        padding: 0;
                    }

                    .footer-nav ul li a {
                        display: flex;
                        text-decoration: none;
                        color: #707070;
                        font-size: 0.9rem;
                        font-family: 'Shadows Into Light', cursive;
                    }

                    .footer-nav {
                        padding: 40px;
                    }

                    .footer-nav ul li {
                        padding: 10px;
                        list-style: none;
                        display: inline-block;
                    }

                    .footer-nav ul li span {
                        padding: 0px 5px;
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
