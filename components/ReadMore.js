import moment from 'moment';
import Markdown from 'markdown-to-jsx';

import CommentBox from './CommentBox';
import { getReadingTime } from '../config/api';
import { showPublishedDate, showCommentLabel, showReadingTime } from '../config/data';

const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
        {children}
        <style jsx>
            {`
                a {
                    color: #484848;
                    font-weight: 700;
                }
            `}
        </style>
    </a>
);

const ReadMore = function({ post, comments }) {
    return (
        <div>
            <div className="post-header">
                <div className="post-header-inner">
                    <div className="title">{post.title}</div>
                    <div className="post-published">
                        {showPublishedDate && `${moment(post.created_at).fromNow()} |`}{' '}
                        {showCommentLabel && `${post.comments} comments | `}{' '}
                        {showReadingTime && getReadingTime(post.body)}
                    </div>
                </div>
            </div>
            <div className="post-body">
                <Markdown
                    className="body-markdown"
                    options={{
                        overrides: {
                            a: {
                                component: HyperLink,
                            },
                        },
                    }}
                >
                    {post.body}
                </Markdown>
            </div>
            <CommentBox comments={comments} />
            <hr />
            <style jsx>{`
                .post-header {
                    padding: 60px;
                    text-align: center;
                    background: #d3cce3; /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3); /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(
                        to right,
                        #e9e4f0,
                        #d3cce3
                    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                }

                @media screen and (min-width: 700px) {
                    .post-header-inner {
                        width: 70%;
                        margin: 0px auto;
                    }
                    .post-body {
                        width: 60%;
                        margin: 0px auto;
                    }
                }
                .post-body {
                    padding: 20px;
                }

                @media screen and (max-width: 700px) {
                    .post-header {
                        padding: 20px 0px;
                    }
                }

                .post-header .title {
                    font-size: 2.5rem;
                    line-height: 3rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    width: 80%;
                    margin: 0px auto;
                }
                .post-header .post-published {
                    font-family: 'Shadows Into Light', cursive;
                }
            `}</style>
        </div>
    );
};

export default ReadMore;
