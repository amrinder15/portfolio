import "./styles/About.css";

const aboutParagraphs = [
  "I’m a Staff DevOps Engineer with 10+ years of experience building and operating cloud‑native platforms in large enterprise environments. I specialize in internal developer platforms, Kubernetes, and infrastructure automation that balances speed, security, and reliability. I’ve led major Azure migrations for platforms like Terraform Enterprise, Vault, and Artifactory, and designed a self‑service, GitOps‑driven CaaS platform on AKS. Alongside hands‑on engineering, I provide architectural leadership, mentorship, and strategic direction for scalable, secure platforms.",
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title about-title">
          <span className="about-title-line" />
          <span className="about-title-text">About Me</span>
        </h3>
        <div className="about-copy" aria-label="About me summary">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              className="about-paragraph"
              key={paragraph}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
