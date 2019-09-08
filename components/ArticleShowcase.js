import Link from 'next/link';
import { PostCardHome } from './Factory';

function ArticleShowcase({ posts }) {
    return (
        <div className="article-container">
            <div className="section-heading">
                <h2>‎‍👨🏻‍💻 My Articles</h2>
                <small>I write about my daily experience.</small>
                <br />
                <Link href="/blog" className="github-link">
                    <a>View all articles</a>
                </Link>
            </div>
            <section className="article-showcase-list">
                {posts.map(post => (
                    <div className="card" key={post.id}>
                        <div className="article article-item">
                            <PostCardHome postDetail={post} />
                        </div>
                    </div>
                ))}
            </section>
            <style jsx>
                {`
                    .article-container {
                        padding: 0px 80px;
                    }
                    .section-heading h2 {
                        margin: 0;
                    }
                    .section-heading small {
                        max-width: 500px;
                        display: block;
                    }

                    @media (max-width: 700px) {
                        .article-container {
                            padding: 10px !important;
                        }
                    }
                    @media (min-width: 700px) {
                        .article-showcase-list {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                        }
                    }
                    .article-showcase-list .card {
                        padding: 20px 0px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                    }
                    .article-showcase-list .card {
                        background: #d3cce3;
                        background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
                        background: linear-gradient(to right, #e9e4f0, #d3cce3);
                    }
                `}
            </style>
        </div>
    );
}

export default ArticleShowcase;
