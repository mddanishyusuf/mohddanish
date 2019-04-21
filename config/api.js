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
        `https://api.github.com/repos/mddanishyusuf/profile-with-github/contents?access_token=${
            process.env.GITHUB_ACCESS_TOKEN
        }`
    );
    const contentURLObj = await contentsArray.json();

    const openSourceContentIndex = contentURLObj.findIndex(x => x.name === 'open-source-projects.json');

    const projectsContentIndex = contentURLObj.findIndex(x => x.name === 'projects.json');

    const skillContentIndex = contentURLObj.findIndex(x => x.name === 'skills.json');

    const socialLinks = contentURLObj.findIndex(x => x.name === 'find-me.json');

    const openSourceContent = await fetch(contentURLObj[openSourceContentIndex].download_url);
    const projectsContent = await fetch(contentURLObj[projectsContentIndex].download_url);
    const skillContent = await fetch(contentURLObj[skillContentIndex].download_url);
    const socialLinksContent = await fetch(contentURLObj[socialLinks].download_url);

    const openSourceList = await openSourceContent.json();
    const projectsList = await projectsContent.json();
    const skillList = await skillContent.json();
    const social = await socialLinksContent.json();

    return { openSourceList, projectsList, skillList, social };
}

export function getReadingTime(text) {
    const timeObj = readingTime(text);
    return timeObj.text;
}
