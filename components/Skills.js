// https://konpa.github.io/devicon/

function Skills({ skillsObj }) {
    return (
        <div className="skills-container">
            <h2>{skillsObj.title}</h2>
            <small dangerouslySetInnerHTML={{ __html: skillsObj.subHeading }} />
            <section className="skills-project-list">
                {skillsObj.skills.map(skill => (
                    <div className="item" key={skill.name}>
                        <i className={skill.icon_name} />
                    </div>
                ))}
            </section>
            <style jsx>
                {`
                    .skills-container {
                        padding: 80px;
                    }
                    .skills-container h2 {
                        margin: 0;
                    }
                    .skills-project-list {
                        padding-top: 80px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        grid-gap: 40px;
                    }
                    .skills-project-list i {
                        font-size: 30px;
                    }
                `}
            </style>
        </div>
    );
}

export default Skills;
