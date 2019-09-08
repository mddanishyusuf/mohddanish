import React from 'react';

import { getPosts, getRepoInfo, getLabels, getData } from '../config/api';
import { PostCardHome } from '../components/Factory';

import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

function IndexPage({ posts, totalPosts, labels, activePage, social }) {
    return (
        <Layout labels={labels} social={social}>
            {/* {totalPosts} */}
            <div className="card-container article-showcase-list">
                {posts.map(post => (
                    <div className="card" key={post.id}>
                        <div className="article article-item">
                            <PostCardHome postDetail={post} />
                        </div>
                    </div>
                ))}
                <Pagination total={totalPosts} active={activePage} />
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
                                padding: 40px;
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

    const res = await getPosts(pageNumber);
    const json = await res.json();

    const repoRes = await getRepoInfo();
    const repoJson = await repoRes.json();

    const labels = await getLabels();
    const labelsJson = await labels.json();

    const data = await getData();
    return {
        posts: json,
        totalPosts: repoJson.open_issues_count,
        labels: labelsJson,
        activePage: pageNumber,
        social: data.social,
    };
};

export default IndexPage;
