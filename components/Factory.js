import { Fragment } from 'react';
import Link from 'next/link';
import getSlug from 'speakingurl';
import moment from 'moment'

function PostSlug({ title, label, number }) {
    return (
        <Fragment>
            <Link
                as={`/post/${[getSlug(title), number].join('-')}`}
                href={`/post?number=${number}&slug=${[getSlug(title)]}`}
            >
                <a>
                    {label}
                </a>
            </Link>

            <style jsx>
                {`
                    a {
                        color: ${label === 'read more' ? '#3832DC' : '#707070'};
                        text-decoration: none;
                    }
                `}
            </style>
        </Fragment>
    )
}

export function Navbar({ labels }) {
    return (
        <ul>
            {labels.map(label => (
                <li key={label.id}>
                    <Link href="/">
                        <a>{label.name}</a>
                    </Link>
                </li>
            ))}
            <style jsx>
                {`
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    ul li {
                        display: inline-block;
                        font-family: 'Shadows Into Light', cursive;
                        padding: 3px 20px;
                        font-size: 1rem;
                        font-weight: 700;
                        letter-spacing: 1px;
                    }
                    ul li a {
                        color: #707070;
                        text-decoration: none;
                    }
                `}
            </style>
        </ul>
    );
}

export function PostCard({ postDetail }) {
    return (
        <div className="post-card">
            <div className="post-label">{postDetail.labels[0].name}</div>
            <div className="post-title">
                <PostSlug title={postDetail.title} label={postDetail.title} number={postDetail.number} />
            </div>
            <div className="post-date">{moment(postDetail.created_at).fromNow()}</div>
            <div className="post-summary">{postDetail.body.substr(0, 300)} <span><PostSlug title={postDetail.title} number={postDetail.number} label="read more" /></span></div>
            <div className="post-title" />
            <style jsx>
                {`
                    .post-card {
                        padding: 60px;
                        width: 70%;
                        margin: 0 auto;
                    }
                    .post-label {
                        font-family: 'Shadows Into Light', cursive;
                        font-size: 0.7rem;
                        border: 1px solid #707070;
                        display: inline-block;
                        padding: 0px 15px;
                        letter-spacing: 1.5px;
                        border-radius: 3px;
                    }

                    .post-title {
                        font-size: 2rem;
                        font-family: MongolianFont;
                    }

                    .post-date {
                        font-family: 'Shadows Into Light', cursive;
                        letter-spacing: 3px;
                        font-size: 0.8rem;
                        font-weight: 700;
                        padding: 4px 0px;
                    }

                    .post-summary {
                        font-family: MongolianFont;
                        letter-spacing: 0.9px;
                        font-size: 1.1rem;
                    }
                    .post-summary span {
                        font-family: 'Shadows Into Light', cursive;
                        color: #3832DC;
                    }
                `}
            </style>
        </div>
    );
}
