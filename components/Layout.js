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
                    line-height: 1.8;
                    color: #333;
                }
                h1 {
                    font-weight: 700;
                }
                p {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default Layout;
