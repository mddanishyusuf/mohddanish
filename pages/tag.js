import React from 'react';

import { getPostsByTag, getLabels } from '../config/api';
import { PostCard } from '../components/Factory';

import Layout from '../components/Layout';

function TagPage({ posts, labels }) {
    return (
        <Layout labels={labels}>
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

TagPage.getInitialProps = async ({ query }) => {
    const { tagName } = query;
    const res = await getPostsByTag(tagName);
    const json = await res.json();

    const labels = await getLabels();
    const labelsJson = await labels.json();
    return { posts: json, labels: labelsJson };
};

export default TagPage;
