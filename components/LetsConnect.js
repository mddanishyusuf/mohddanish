// https://konpa.github.io/devicon/

function LetsConnect({ socialLinks }) {
    return (
        <div className="social-container">
            <h2>{socialLinks.title}</h2>
            <small dangerouslySetInnerHTML={{ __html: socialLinks.subHeading }} />
            <section className="social-project-list">
                {socialLinks.plateform.map(social => (
                    <div className="item" key={social.name}>
                        <div className="social-header">
                            <img src={social.favicon} width="20px" height="20px" alt="makers" />{' '}
                            <span>{social.name}</span>
                        </div>
                        <small>{social.type}</small>
                        <p>{social.about_it}</p>
                    </div>
                ))}
            </section>
            <style jsx>
                {`
                    .social-container {
                        padding: 80px;
                    }
                    .social-container h2 {
                        margin: 0;
                    }
                    .social-header {
                        display: flex;
                    }
                    .social-header span {
                        padding-left: 10px;
                    }
                    .social-project-list {
                        padding-top: 80px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        grid-gap: 40px;
                    }
                    .social-project-list p {
                        font-size: 0.8rem;
                        line-height: 1.3rem;
                    }
                `}
            </style>
        </div>
    );
}

export default LetsConnect;
