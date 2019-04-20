// https://konpa.github.io/devicon/

function Skills({ skills }) {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <small>
                I learn all these skills while developing projects. <br />
                So, I alwasy keen to learn new stuffs and technologies. I can do more.
            </small>
            <section className="skills-project-list">
                {skills.map(skill => (
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
