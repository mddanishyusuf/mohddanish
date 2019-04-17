import React from 'react';

import { getPosts, getRepoInfo, getLabels } from '../config/api';
import { PostCard } from '../components/Factory';

import Layout from '../components/Layout';

function IndexPage({ posts, totalPosts, labels }) {
    return (
        <Layout labels={labels}>
            {/* {totalPosts} */}
            <div className="card-container">
                {posts.map(post => (
                    <div className="card" key={post.id}>
                        <PostCard postDetail={post} />
                    </div>
                ))}
                <style jsx>
                    {`
                        .card-container .card:nth-child(odd) {
                            background: #d3cce3; /* fallback for old browsers */
                            background: -webkit-linear-gradient(
                                to right,
                                #e9e4f0,
                                #d3cce3
                            ); /* Chrome 10-25, Safari 5.1-6 */
                            background: linear-gradient(
                                to right,
                                #e9e4f0,
                                #d3cce3
                            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        }
                    `}
                </style>
            </div>
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req }) => {
    const res = await getPosts();
    const json = await res.json();

    const repoRes = await getRepoInfo();
    const repoJson = await repoRes.json();

    const labels = await getLabels();
    const labelsJson = await labels.json();
    return { posts: json, totalPosts: repoJson.open_issues_count, labels: labelsJson };
};

export default IndexPage;
