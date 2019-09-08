// https://konpa.github.io/devicon/

function Skills({ skillsObj }) {
    return (
        <div className="skills-container">
            <h2>🛠 {skillsObj.title}</h2>
            <small dangerouslySetInnerHTML={{ __html: skillsObj.subHeading }} />
            <section className="skills-project-list">
                {skillsObj.skills.map(skill => (
                    <div className="item tooltip" key={skill.name}>
                        <i className={skill.icon_name} />
                        <span className="tooltiptext">{skill.name}</span>
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
                    .skills-container small {
                        max-width: 500px;
                    }
                    .skills-project-list {
                        padding-top: 80px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                        grid-gap: 40px;
                    }
                    .skills-project-list i {
                        font-size: 30px;
                    }

                    @media (max-width: 700px) {
                        .skills-container {
                            padding: 20px !important;
                        }
                        .skills-project-list {
                            display: grid;
                            grid-gap: 40px;
                        }
                    }
                    .tooltip {
                        position: relative;
                        display: inline-block;
                        border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
                    }

                    /* Tooltip text */
                    .tooltip .tooltiptext {
                        background-color: black;
                        color: #fff;
                        text-align: center;
                        padding: 0px 10px;
                        border-radius: 6px;
                        position: absolute;
                        z-index: 1;
                        font-size: 12px;
                        top: -18px;
                    }

                    /* Show the tooltip text when you mouse over the tooltip container */
                    .tooltip:hover .tooltiptext {
                        visibility: visible;
                    }
                `}
            </style>
        </div>
    );
}

export default Skills;
