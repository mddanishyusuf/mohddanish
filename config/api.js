import fetch from 'isomorphic-unfetch';
import readingTime from 'reading-time';
import { repositoryName, postPerPage } from './data';

export function getRepoInfo() {
    return fetch(`https://api.github.com/repos/${repositoryName}?access_token=${process.env.GITHUB_ACCESS_TOKEN}`);
}

export function getPosts(pageNumber) {
    return fetch(
        `https://api.github.com/repos/${repositoryName}/issues?page=${pageNumber}&per_page=${postPerPage}&access_token=${
            process.env.GITHUB_ACCESS_TOKEN
        }`
    );
}

export function getLabels() {
    return fetch(
        `https://api.github.com/repos/${repositoryName}/labels?access_token=${process.env.GITHUB_ACCESS_TOKEN}`
    );
}

export function getPost(number) {
    return fetch(
        `https://api.github.com/repos/${repositoryName}/issues/${number}?access_token=${
            process.env.GITHUB_ACCESS_TOKEN
        }`
    );
}

export function getComments(number) {
    return fetch(
        `https://api.github.com/repos/${repositoryName}/issues/${number}/comments?access_token=${
            process.env.GITHUB_ACCESS_TOKEN
        }`
    );
}

export function getPostsByTag(tagName) {
    return fetch(
        `https://api.github.com/repos/${repositoryName}/issues?labels=${tagName}&access_token=${
            process.env.GITHUB_ACCESS_TOKEN
        }`
    );
}

export async function getData() {
    const contentsArray = await fetch(
        `https://raw.githubusercontent.com/mddanishyusuf/profile-with-github/master/profile.json`
    );
    const profileObj = await contentsArray.json();

    const openSourceList = profileObj.openSourceProjects;
    const projectsList = profileObj.sideProjects;
    const skillList = profileObj.skills;
    const social = profileObj.letsConnect;
    const { aboutMe } = profileObj;

    return { openSourceList, projectsList, skillList, social, aboutMe };
}

export function getReadingTime(text) {
    const timeObj = readingTime(text);
    return timeObj.text;
}
