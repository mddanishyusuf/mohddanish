import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Markdown from 'markdown-to-jsx';

const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const Comments = function({ comments }) {
    return (
        <div className="comments-list">
            <div className="no-comments">
                Do you have any comment on this tricks? then let the author know about that.{' '}
                <a href={comments[0].html_url} target="_blank" rel="noopener noreferrer">
                    comment here
                </a>
            </div>
            {comments.length > 0 ? (
                <div className="list">
                    {comments.map((comment, key) => (
                        <div className="comment-body" key={key}>
                            <div className="comment-head">
                                <div className="commenter-pic">
                                    <img src={comment.user.avatar_url} alt={comment.user.login} />
                                </div>
                                <div className="comment-meta">
                                    <div className="commenter-name">{comment.user.login}</div>
                                    <div className="comment-date">{moment(comment.created_at).fromNow()}</div>
                                </div>
                            </div>
                            <div className="comment-text">
                                <Markdown
                                    className="post-body"
                                    options={{
                                        overrides: {
                                            a: {
                                                component: HyperLink,
                                            },
                                        },
                                    }}
                                >
                                    {comment.body}
                                </Markdown>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                'This post have comments'
            )}
            <style jsx>
                {`
                    .comment-body .comment-head .commenter-pic img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                        border: 2px solid #d8d8d8;
                    }
                    .comment-body .comment-head {
                        display: grid;
                        grid-template-columns: 40px auto;
                    }
                    .comment-body .comment-head .comment-meta {
                        font-size: 10px;
                        letter-spacing: 1px;
                    }

                    .comment-text {
                        font-size: 12px;
                        line-height: 1.6;
                        margin-bottom: 40px;
                        border: 1px solid #d8d8d8;
                        border-radius: 4px;
                        padding: 6px 18px;
                        margin-top: 10px;
                        background-color: #f1f8ff;
                        border-bottom-color: #c0d3eb;
                        display: inline-block;
                        letter-spacing: 1px;
                        border-radius: 10% 10% 10% 10% / 14% 14% 12% 12%;
                    }
                    .no-comments {
                        font-size: 14px;
                        margin-bottom: 20px;
                        font-family: 'Noto Serif JP', serif;
                        padding: 20px 0px;
                    }
                `}
            </style>
        </div>
    );
};

const CommentBox = function({ comments }) {
    return (
        <div className="comment-box">
            <div className="comments">
                <hr />
                {comments.length > 0 ? (
                    <Comments comments={comments} />
                ) : (
                    <div className="no-comments">
                        Do you have any comment on this tricks? then let the author know about that.{' '}
                        <a href="https://github.com/mddanishyusuf/dailyhack/issues">comment here</a>
                    </div>
                )}
            </div>
            <style jsx>
                {`
                    .comment-box {
                        width: 60%;
                        margin: 0px auto;
                    }
                    .no-comments {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }

                    @media screen and (max-width: 700px) {
                        .comment-box {
                            width: 90%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default CommentBox;
