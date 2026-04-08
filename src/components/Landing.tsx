import { type CSSProperties, PropsWithChildren } from "react";
import "./styles/Landing.css";

const highlights = [
  { value: "10+", label: "Years Experience" },
  { value: "6", label: "Certifications" },
  { value: "250+", label: "Deployments" },
  { value: "1000+", label: "VMs Managed" },
];

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AMRINDER
              <br />
              <span>RATTANPAL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Staff</h3>
            <h2 className="landing-info-h2">
              <span className="landing-role-window" aria-live="polite">
                <span className="landing-h2-1">DevOps</span>
                <span className="landing-h2-2">Platform</span>
              </span>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
            </h2>
            <div className="landing-stats" aria-label="Career highlights">
              {highlights.map((highlight, index) => (
                <article
                  className="landing-stat-card"
                  key={highlight.label}
                  style={{ "--landing-card-delay": `${index * 140}ms` } as CSSProperties}
                >
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
