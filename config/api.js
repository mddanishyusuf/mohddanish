import fetch from 'isomorphic-unfetch';
import readingTime from 'reading-time';
import { repositoryName } from './data';

export function getRepoInfo() {
    return fetch(`https://api.github.com/repos/${repositoryName}?access_token=${process.env.GITHUB_ACCESS_TOKEN}`);
}

export function getPosts() {
    return fetch(
        `https://api.github.com/repos/${repositoryName}/issues?access_token=${process.env.GITHUB_ACCESS_TOKEN}`
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

export function getReadingTime(text) {
    const timeObj = readingTime(text);
    return timeObj.text;
}
