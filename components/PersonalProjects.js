// https://konpa.github.io/devicon/

function PersonalProjects({ projects }) {
    return (
        <div className="personal-projects-container">
            <h2>Projects</h2>
            <section className="side-project-list">
                {projects.map(personal => (
                    <section className="side-project" key={personal.name}>
                        <img src={personal.image} alt="Yummy Taco" className="project-screenshoot" />
                        <div className="about__details">
                            <h2>{personal.name}</h2>
                            <p>{personal.description}</p>
                            <button>Learn More →</button>
                        </div>
                    </section>
                ))}
            </section>
            <style jsx>
                {`
                    .personal-projects-container {
                        padding: 80px;
                    }
                    .side-project {
                        display: grid;
                        grid-template-columns: 400px 1fr;
                        align-items: center;
                        grid-gap: 20px;
                        margin-bottom: 40px;
                    }
                    .side-project img {
                        max-width: 100%;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                    }
                `}
            </style>
        </div>
    );
}

export default PersonalProjects;
