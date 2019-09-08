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
    console.log(post);
    return (
        <div className="single-post">
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
            <CommentBox comments={comments} number={post.number} />
            <style jsx>{`
                .single-post {
                    margin: 0px auto;
                    max-width: 800px;
                }
                .post-header {
                    padding: 40px;
                    text-align: center;
                }

                .post-body {
                    padding: 20px;
                }

                .body-markdown {
                    font-size: 16px;
                    color: #5d5c5c;
                    word-spacing: 1px;
                }

                @media screen and (max-width: 700px) {
                    .post-header {
                        padding: 20px 0px;
                    }
                }

                .post-header .title {
                    font-size: 2.3rem;
                    line-height: 3rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    width: 80%;
                    margin: 0px auto;
                    color: #e36444;
                }
                .post-header .post-published {
                    font-size: 0.8rem;
                    padding: 10px;
                }
            `}</style>
        </div>
    );
};

export default ReadMore;
