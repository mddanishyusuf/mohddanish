import React from 'react';
import Link from 'next/link';
import getSlug from 'speakingurl';

import { getPosts, getRepoInfo, getLabels } from '../config/api';
import { PostCard } from '../components/Factory';

import Layout from '../components/Layout';

function IndexPage({ posts, totalPosts, labels }) {
    return (
        <Layout labels={labels}>
            {totalPosts}
            <ul>
                {posts.map(post => (
                    <Link
                        as={`/post/${[getSlug(post.title), post.number].join('-')}`}
                        href={`/post?number=${post.number}&slug=${[getSlug(post.title)]}`}
                        key={post.title}
                    >
                        <a>
                            <PostCard postDetail={post} />
                        </a>
                    </Link>
                ))}
            </ul>
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
