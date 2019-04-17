import fetch from 'isomorphic-unfetch';
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
