// https://konpa.github.io/devicon/

function GitHubRepoList() {
    return (
        <div className="osp-container">
            <h2>Open Source Projects</h2>
            <section className="github-project-list">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </section>
            <style jsx>
                {`
                    .github-project-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    }
                `}
            </style>
        </div>
    );
}

export default GitHubRepoList;
