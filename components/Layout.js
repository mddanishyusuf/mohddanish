import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import { metadata } from '../config/data';
import globalStyles from '../styles/global.js';

const Layout = props => {
    const { children, labels } = props;
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
                <meta property="og:image" content={homeFeaturedImage} />
                <meta property="og:description" content={description} />

                <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet" />
            </Head>
            <Header labels={labels} {...metadata} />
            <div className="main">{children}</div>
            <Footer />
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-weight: 400;
                    line-height: 1.6;
                    color: #333;
                }
                h1 {
                    font-weight: 700;
                }
                p {
                    font-size: 1.2rem;
                    font-family: MongolianFont;
                    letter-spacing: 1px;
                }
                h3 {
                    font-size: 1.6rem;
                    font-family: MongolianFont;
                    letter-spacing: 1px;
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

                .body-markdown p code,
                .body-markdown ol li code {
                    background-color: rgba(27, 31, 35, 0.05);
                    border-radius: 3px;
                    font-size: 85%;
                    margin: 0;
                    padding: 0.2em 0.4em;
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
