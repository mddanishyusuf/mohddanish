import React from 'react';

import { getPosts, getRepoInfo, getLabels, getData } from '../config/api';
import { PostCard, PostCardHome } from '../components/Factory';

import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import GitHubRepoList from '../components/GitHubRepoList';
import ArticleShowcase from '../components/ArticleShowcase';
import Skills from '../components/Skills';
import PersonalProjects from '../components/PersonalProjects';
import LetsConnect from '../components/LetsConnect';

function IndexPage({ posts, totalPosts, labels, activePage, skills, projects, openSourceProjects, social }) {
    return (
        <Layout labels={labels}>
            {/* {totalPosts} */}
            <div className="card-container">
                {/* {posts.map(post => (
                    <div className="card" key={post.id}>
                        <PostCard postDetail={post} />
                    </div>
                ))} */}
                <ArticleShowcase posts={posts} />
                <GitHubRepoList openSourceProject={openSourceProjects} />
                <LetsConnect socialLinks={social} />
                <Skills skillsObj={skills} />
                <PersonalProjects projects={projects} />
                {/* <Pagination total={totalPosts} active={activePage} /> */}
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

    const data = await getData();

    return {
        posts: json,
        totalPosts: repoJson.open_issues_count,
        labels: labelsJson,
        activePage: pageNumber,
        skills: data.skillList,
        projects: data.projectsList,
        openSourceProjects: data.openSourceList,
        social: data.social,
    };
};

export default IndexPage;
