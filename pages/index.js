import React from 'react';

import { getPosts, getRepoInfo, getLabels } from '../config/api';
import { PostCard } from '../components/Factory';

import Layout from '../components/Layout';

function IndexPage({ posts, totalPosts, labels }) {
    return (
        <Layout labels={labels}>
            {totalPosts}
                <div className="card-container">
                {posts.map(post => (
                    <div className="card" key={post.id}>
                        <PostCard postDetail={post} />
                    </div>
                ))}
                <style jsx>{`
                    .card-container .card:nth-child(odd) {
                        background-color: #F9F9F9;
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
