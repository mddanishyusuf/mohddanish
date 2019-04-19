import React from 'react';

import { getPosts, getRepoInfo, getLabels } from '../config/api';
import { PostCard } from '../components/Factory';

import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

function IndexPage({ posts, totalPosts, labels, activePage }) {
    return (
        <Layout labels={labels}>
            {/* {totalPosts} */}
            <div className="card-container">
                {posts.map(post => (
                    <div className="card" key={post.id}>
                        <PostCard postDetail={post} />
                    </div>
                ))}
                <Pagination total={totalPosts} active={activePage} />
                <style jsx>
                    {`
                        .card-container .card:nth-child(odd) {
                            background: #d3cce3;
                            background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
                            background: linear-gradient(to right, #e9e4f0, #d3cce3);
                        }
                    `}
                </style>
            </div>
        </Layout>
    );
}

IndexPage.getInitialProps = async context => {
    const reqPageNumber = context.query.pageNumber;
    let pageNumber;
    if (reqPageNumber === undefined) {
        pageNumber = 1;
    } else {
        pageNumber = reqPageNumber;
    }
    console.log(pageNumber);

    const res = await getPosts(pageNumber);
    const json = await res.json();

    const repoRes = await getRepoInfo();
    const repoJson = await repoRes.json();

    const labels = await getLabels();
    const labelsJson = await labels.json();
    return { posts: json, totalPosts: repoJson.open_issues_count, labels: labelsJson, activePage: pageNumber };
};

export default IndexPage;
