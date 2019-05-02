import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import { metadata } from '../config/data';
import globalStyles from '../styles/global.js';

const Layout = props => {
    const { children, labels, aboutMe, social } = props;
    const { title, description, pageUrl, homeFeaturedImage } = metadata;
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="icon" href="/static/favicon.png" type="image/gif" sizes="16x16" />
                <meta name="title" content={title} />
                <meta name="description" content={description} />

                <meta name="twitter:card" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content="/static/home-featured-image.png" />
                <meta property="og:description" content={description} />

                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
                <link href="/static/devicon.css" rel="stylesheet" />
                <link href="/static/devicon-colors.css" rel="stylesheet" />
            </Head>
            <Header labels={labels} {...metadata} aboutMe={aboutMe} />
            <div className="main">{children}</div>
            <Footer social={social} />
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-weight: 400;
                    line-height: 1.6;
                    color: #333;
                    font-family: 'Poppins', sans-serif;
                    max-width: 1600px;
                    margin: 0px auto;
                }
                h1 {
                    font-weight: 700;
                }
                p,
                ol li {
                    font-size: 1rem;
                    font-weight: 400;
                    font-style: normal;
                    letter-spacing: -0.003em;
                    line-height: 1.9rem;
                    font-family: 'Poppins', sans-serif;
                }
                h3 {
                    font-size: 26px;
                    line-height: 1.22;
                    letter-spacing: -0.012em;
                }
                pre {
                    background-color: #f6f8fa;
                    border-radius: 3px;
                    font-size: 85%;
                    line-height: 1.45;
                    overflow: auto;
                    padding: 16px;
                }
                .body-markdown img {
                    max-width: 100%;
                }

                .body-markdown p {
                    margin-top: 30px;
                }

                .body-markdown ol li {
                    padding: 4px 0px;
                }

                .body-markdown p code,
                .body-markdown ol li code {
                    border-radius: 3px;
                    font-size: 85%;
                    margin: 0;
                    display: block;
                    background: rgba(0, 0, 0, 0.05);
                    padding: 20px;
                }

                @font-face {
                    font-family: MongolianFont;
                    src: url('./static/fonts/monbaiti.ttf');
                }
            `}</style>
        </div>
    );
};

export default Layout;
