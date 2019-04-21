import { ExternalLink } from 'react-feather';

function PersonalProjects({ projects }) {
    return (
        <div className="side-projects">
            <div className="section-heading">
                <h2>{projects.title}</h2>
                <small dangerouslySetInnerHTML={{ __html: projects.subHeading }} />
            </div>
            <section className="side-project-list">
                {projects.list.map(personal => (
                    <section className="side-project" key={personal.name}>
                        <img src={personal.image} alt="Yummy Taco" className="project-screenshoot" />
                        <div className="about-project">
                            <h2>{personal.name}</h2>
                            <p>{personal.description}</p>
                            <a className="visit-project" href={personal.url} target="_blank" rel="noreferrer noopener">
                                <span>Learn More</span> <ExternalLink size={12} />
                            </a>
                        </div>
                    </section>
                ))}
            </section>
            <style jsx>
                {`
                    .side-projects {
                        padding: 80px;
                    }
                    .section-heading {
                        padding: 30px 0px 60px 0px;
                    }
                    .side-projects h2 {
                        margin: 0px;
                        padding: 0px;
                    }
                    .side-project-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    }
                    .side-project {
                        display: grid;
                        grid-template-columns: 40% 1fr;
                        align-items: center;
                        grid-gap: 20px;
                        margin-bottom: 40px;
                    }
                    .side-project h2 {
                        font-size: 1.1rem;
                    }
                    .side-project img {
                        max-width: 100%;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                    }
                    .about-project p {
                        padding: 0;
                        margin: 0;
                        font-size: 0.8rem;
                        line-height: 1.2rem;
                    }
                    .visit-project {
                        border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
                        border-style: solid;
                        border-width: 1px;
                        padding: 3px 8px;
                        align-items: flex-start;
                        text-align: center;
                        cursor: pointer;
                        color: buttontext;
                        background-color: #7cacf7;
                        box-sizing: border-box;
                        font-size: 11px;
                        text-shadow: none;
                        display: inline-block;
                        border-radius: 3px;
                    }
                `}
            </style>
        </div>
    );
}

export default PersonalProjects;
