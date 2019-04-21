import { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Star, Eye, AlertTriangle } from 'react-feather';

function GitHubCard({ obj }) {
    // the client and secret id is from here https://lab.lepture.com/github-cards

    const [card, setCard] = useState({});
    const [cardLoaded, setCardLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(
                `https://api.github.com/repos/${
                    obj.name
                }?client_id=a11a1bda412d928fb39a&client_secret=92b7cf30bc42c49d589a10372c3f9ff3bb310037`
            )
            .then(res => {
                setCard(res.data);
                setCardLoaded(true);
            });
    }, [obj.name]);
    console.log(card);
    return (
        <div>
            {cardLoaded && (
                <div className="github-card">
                    <div className="card-header" style={{ backgroundColor: obj.color }}>
                        <div className="card-header-content">
                            <div className="owner-pic">
                                <img src={card.owner.avatar_url} alt={card.owner.login} />
                            </div>
                            <div className="repo-name">
                                <div>
                                    <a href={obj.repo_url} target="_blank" rel="noopener noreferrer">
                                        {card.name}
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'lowercase', opacity: 0.8 }}>
                                    ({obj.role})
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>
                                <User size={15} />
                                <span>{card.owner.login}</span>
                            </li>
                            <li>
                                <Star size={15} />
                                <span>{card.stargazers_count}</span>
                            </li>
                            <li>
                                <Eye size={15} />
                                <span>{card.watchers_count}</span>
                            </li>
                            <li>
                                <AlertTriangle size={15} />
                                <span>{card.open_issues_count}</span>
                            </li>
                        </ul>
                        <hr />
                        <p>{card.description}</p>
                    </div>
                    <style jsx>
                        {`
                            .card-header {
                                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
                                    0 2px 1px -1px rgba(0, 0, 0, 0.12);
                            }
                            .github-card .card-header-content {
                                padding: 0px 20px 0px 20px;
                                display: flex;
                            }
                            .repo-name {
                                align-items: center;
                                justify-items: center;
                                align-content: center;
                                padding-right: 10px;
                                font-size: 0.9rem;
                                padding: 10px;
                                margin-top: 10px;
                                font-weight: 700;
                            }
                            .repo-name a {
                                text-decoration: none;
                                color: #010101;
                            }
                            .owner-pic img {
                                width: 50px;
                                height: 50px;
                                border: 2px solid #eee;
                                margin-top: 20px;
                                margin-bottom: -25px;
                            }
                            .card-body {
                                color: #747171;
                                background-color: #fff;
                                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                                height: 150px;
                            }
                            .card-body ul {
                                padding: 20px;
                                margin: 0px;
                            }
                            .card-body ul li {
                                list-style: none;
                                display: flex;
                                float: left;
                                padding-right: 10px;
                                font-size: 0.8rem;
                            }
                            .card-body p {
                                font-size: 0.8rem;
                                line-height: 1.4rem;
                                padding: 5px 20px;
                            }
                        `}
                    </style>
                </div>
            )}
        </div>
    );
}

function GitHubRepoList({ openSourceProject }) {
    return (
        <div className="osp-container">
            <div className="section-heading">
                <h2>{openSourceProject.title}</h2>
                <small dangerouslySetInnerHTML={{ __html: openSourceProject.subHeading }} />
            </div>
            <section className="github-project-list">
                {openSourceProject.projects.map(osProject => (
                    <div className="item" key={osProject.name}>
                        <GitHubCard obj={osProject} />
                    </div>
                ))}
            </section>
            <style jsx global>
                {`
                    .section-heading {
                        padding: 60px 0px;
                    }
                    .osp-container {
                        padding: 80px;
                    }
                    .osp-container h2 {
                        margin: 0px;
                        padding: 0px;
                    }
                    .github-project-list {
                        grid-gap: 20px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    }
                `}
            </style>
        </div>
    );
}

export default GitHubRepoList;
