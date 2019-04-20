import { PostCardHome } from './Factory';

function ArticleShowcase({ posts }) {
    return (
        <section className="article-showcase-list">
            {posts.map(post => (
                <div className="card" key={post.id}>
                    <div className="article article-item">
                        <PostCardHome postDetail={post} />
                    </div>
                </div>
            ))}
            <style jsx>
                {`
                    .article-showcase-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    }
                    .article-showcase-list .card {
                        padding: 20px 0px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                    }
                    .article-showcase-list .card:nth-child(odd) {
                        background: #d3cce3;
                        background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
                        background: linear-gradient(to right, #e9e4f0, #d3cce3);
                    }
                `}
            </style>
        </section>
    );
}

export default ArticleShowcase;
