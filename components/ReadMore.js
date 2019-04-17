import moment from 'moment';
import Markdown from 'markdown-to-jsx';

const HyperLink = ({ children, ...props }) => (
    <a {...props} href={props.href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const ReadMore = function({ post }) {
    return (
        <div>
            <div className="post-header">
                <div className="title">{post.title}</div>
                <div className="post-published">
                    {moment(post.created_at).fromNow()} | {post.comments} comments
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
            <style jsx>{`
                .post-header {
                    padding: 60px;
                    width: 60%;
                    margin: 0px auto;
                    text-align: center;
                    background-color: #f9f9f9;
                }
                .post-header .title {
                    font-size: 2.5rem;
                    font-family: MongolianFont;
                    font-weight: 700;
                    letter-spacing: 1px;
                    width: 80%;
                    margin: 0px auto;
                }
                .post-header .post-published {
                    font-family: 'Shadows Into Light', cursive;
                }
                .post-body {
                    padding: 40px;
                    width: 60%;
                    margin: 0px auto;
                }
            `}</style>
        </div>
    );
};

export default ReadMore;
