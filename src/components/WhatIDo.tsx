import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import "./styles/WhatIDo.css";

const capabilities = [
  {
    title: "Platform Engineering",
    description:
      "Design and build internal cloud platforms that abstract infrastructure complexity and provide secure, self-service deployment workflows for engineering teams.",
    tags: ["Internal Platforms", "Self-Service", "Secure Workflows"],
  },
  {
    title: "Cloud & Kubernetes Architecture",
    description:
      "Architect and operate enterprise-grade Kubernetes platforms on Azure AKS, leveraging GitOps (Flux, ArgoCD), service mesh, and policy-based security.",
    tags: ["Azure AKS", "GitOps", "Policy Security"],
  },
  {
    title: "DevOps & CI/CD Systems",
    description:
      "Create standardized CI/CD and GitOps pipelines that improve release velocity, consistency, and operational reliability across teams.",
    tags: ["CI/CD", "Release Velocity", "Reliability"],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Develop and maintain Terraform modules and IaC frameworks to enable repeatable, compliant, and scalable infrastructure provisioning.",
    tags: ["Terraform", "Compliance", "Scalability"],
  },
];

const architecturalArtifacts = [
  {
    title: "Terraform in Azure",
    image: "/images/tfe.svg",
    alt: "Terraform artifact for Azure architecture",
  },
  {
    title: "HashiCorp Vault with DR",
    image: "/images/Vault-DR.svg",
    alt: "HashiCorp Vault disaster recovery architecture artifact",
  },
  {
    title: "AKS",
    image: "/images/AKS.svg",
    alt: "Azure Kubernetes Service architecture artifact",
  },
];

const WhatIDo = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [selectedArtifactIndex, setSelectedArtifactIndex] = useState<number | null>(null);

  const selectedArtifact =
    selectedArtifactIndex !== null ? architecturalArtifacts[selectedArtifactIndex] : null;
  const modalRoot = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((image, index) => {
        if (!image) {
          return;
        }

        gsap.set(image, { transformOrigin: "50% 50%" });

        gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } }).to(image, {
          y: index % 2 === 0 ? -10 : -14,
          rotate: index === 1 ? 1.8 : -1.8,
          scale: 1.035,
          duration: 2.3 + index * 0.25,
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (selectedArtifactIndex === null) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedArtifactIndex(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedArtifactIndex]);

  return (
    <>
      <div className="whatIDO">
        <div className="what-box what-box-copy">
          <div className="what-copy-frame">
            <div className="what-border-shell what-border-shell-copy" aria-hidden="true">
              <span className="what-border what-border-top" />
              <span className="what-border what-border-right" />
              <span className="what-border what-border-bottom" />
              <span className="what-border what-border-left" />
            </div>
            <div className="what-corner what-corner-copy" aria-hidden="true" />
            <h2 className="title what-title">
              What
              <br />
              <span className="do-h2">I Do</span>
            </h2>
          </div>
        </div>
        <div className="what-box what-box-grid">
          <div className="what-grid-shell">
            <div className="what-box-in">
              {capabilities.map((capability, index) => (
                <article
                  className="what-content"
                  key={capability.title}
                  style={{ "--card-delay": "0ms" } as CSSProperties}
                >
                  <div className="what-border-shell" aria-hidden="true">
                    <span className="what-border what-border-top" />
                    <span className="what-border what-border-right" />
                    <span className="what-border what-border-bottom" />
                    <span className="what-border what-border-left" />
                  </div>
                  <div className="what-corner" aria-hidden="true" />
                  <div className="what-content-in">
                    <span className="what-card-index">0{index + 1}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    <div className="what-tags" aria-label={`${capability.title} focus areas`}>
                      {capability.tags.map((tag) => (
                        <span className="what-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="what-artifacts-row">
          <aside className="what-artifacts" aria-labelledby="architectural-artifacts-title">
            <div className="what-artifacts-panel">
              <p className="what-artifacts-kicker">Architectural Artifacts</p>
              <h3 className="what-artifacts-title" id="architectural-artifacts-title">
                Reference diagrams from recent platform work.
              </h3>
              <div className="what-artifact-list">
                {architecturalArtifacts.map((artifact, index) => (
                  <article className="what-artifact-card" key={artifact.title}>
                    <button
                      className="what-artifact-button"
                      type="button"
                      onClick={() => setSelectedArtifactIndex(index)}
                      aria-label={`Open ${artifact.title} diagram`}
                    >
                      <div className="what-artifact-visual-shell">
                        <img
                          className="what-artifact-visual"
                          ref={(element) => {
                            imageRefs.current[index] = element;
                          }}
                          src={artifact.image}
                          alt={artifact.alt}
                        />
                      </div>
                      <div className="what-artifact-meta">
                        <h4>{artifact.title}</h4>
                        <span className="what-artifact-expand">Open diagram</span>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      {selectedArtifact &&
        modalRoot &&
        createPortal(
          <div
            className="what-artifact-modal"
            role="presentation"
            onClick={() => setSelectedArtifactIndex(null)}
          >
            <div
              className="what-artifact-modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="artifact-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="what-artifact-modal-close"
                type="button"
                onClick={() => setSelectedArtifactIndex(null)}
                aria-label="Close architectural diagram"
              >
                Close
              </button>
              <div className="what-artifact-modal-copy">
                <p className="what-artifacts-kicker">Architectural Artifact</p>
                <h3 className="what-artifact-modal-title" id="artifact-modal-title">
                  {selectedArtifact.title}
                </h3>
              </div>
              <div className="what-artifact-modal-visual-shell">
                <img
                  className="what-artifact-modal-visual"
                  src={selectedArtifact.image}
                  alt={selectedArtifact.alt}
                />
              </div>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
};

export default WhatIDo;
