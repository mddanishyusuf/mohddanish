import React from 'react';

import { getPosts, getData } from '../config/api';

import Layout from '../components/Layout';
import GitHubRepoList from '../components/GitHubRepoList';
import ArticleShowcase from '../components/ArticleShowcase';
import Skills from '../components/Skills';
import PersonalProjects from '../components/PersonalProjects';
import LetsConnect from '../components/LetsConnect';

function IndexPage({ posts, labels, skills, projects, openSourceProjects, social, aboutMe }) {
    return (
        <Layout labels={labels} aboutMe={aboutMe}>
            <div className="card-container">
                <ArticleShowcase posts={posts} />
                <GitHubRepoList openSourceProject={openSourceProjects} />
                <LetsConnect socialLinks={social} />
                <Skills skillsObj={skills} />
                <PersonalProjects projects={projects} />
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

IndexPage.getInitialProps = async () => {
    const res = await getPosts(1);
    const json = await res.json();

    const data = await getData();

    return {
        posts: json,
        aboutMe: data.aboutMe,
        activePage: 1,
        skills: data.skillList,
        projects: data.projectsList,
        openSourceProjects: data.openSourceList,
        social: data.social,
    };
};

export default IndexPage;
