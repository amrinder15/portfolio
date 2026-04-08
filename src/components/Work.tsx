import { useEffect, useRef } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Container-as-a-Service Platform",
    category: "Enterprise self-service deployment platform on Azure AKS with GitOps-driven delivery",
    tools: ["AKS", "Flux", "Istio", "Calico", "Azure DevOps"],
  },
  {
    title: "AI Project Scaffolding Agent",
    category: "Conversational chatbot that generates project templates using LLM-powered code generation",
    tools: ["Python", "LangChain", "Azure OpenAI", "Cookiecutter"],
  },
  {
    title: "Kubernetes RBAC Operator",
    category: "Custom controller automating service-account RBAC across Flux-managed namespaces",
    tools: ["Go", "operator-sdk", "Kubernetes", "FLUX"],
  },
  {
    title: "Enterprise Cloud Migration",
    category: "End-to-end migration of critical DevOps toolchain from on-premises to Azure",
    tools: ["HashiCorp Vault", "Terraform Enterprise", "JFrog Artifactory", "Azure"],
  },
  {  
    title: "AKS Context Switcher (aksctx)",
    category: "CLI tool for discovering, switching, and comparing AKS clusters across Azure subscriptions",
    link: "https://github.com/amrinder15/aksctx",
    tools: ["Go", "Azure AKS", "Azure SDK", "Kubectl", "kubelogin"],
  },
  {
    title: "Architecture & Documentation",
    category: "Technical design artifacts and runbooks presented at Architecture Review Board",
    tools: ["Architecture Diagrams", "Runbooks", "IaC Documentation", "ARB"],
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip scroll animation on mobile — cards are visible by default
    if (window.innerWidth < 900) return;

    const cards = sectionRef.current?.querySelectorAll(".work-card");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
          },
          delay: i * 0.05,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-number">
                <span>0{index + 1}</span>
              </div>
              <div className="work-card-content">
                <h3>{project.title}</h3>
                <p className="work-card-category">{project.category}</p>
                <div className="work-card-tools">
                  {project.tools.map((tool, i) => (
                    <span className="work-tool-tag" key={i}>
                      {tool}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    className="work-card-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    View Project <MdArrowOutward />
                  </a>
                )}
              </div>
              <div className="work-card-line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
