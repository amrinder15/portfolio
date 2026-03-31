import { useEffect, useRef } from "react";
import gsap from "gsap";

const rows = [
  [
    "Azure", "Kubernetes", "Terraform", "Docker", "Helm",
    "Istio", "Calico", "ArgoCD", "Flux", "Azure DevOps",
  ],
  [
    "Python", "Go", "PowerShell", "HashiCorp Vault", "JFrog Artifactory",
    "Grafana", "Prometheus", "NewRelic", "Azure Monitor", "ARM / Bicep",
  ],
  [
    "AKS", "GitOps", "CI/CD", "Service Mesh", "IaC",
    "RBAC", "Azure SQL", "API Management", "Service Bus", "Sentinel",
  ],
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 40,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate content once so we have a seamless loop
    const contentWidth = track.scrollWidth / 2;
    const duration = contentWidth / speed;

    const tween = gsap.fromTo(
      track,
      { x: reverse ? -contentWidth : 0 },
      {
        x: reverse ? 0 : -contentWidth,
        duration,
        ease: "none",
        repeat: -1,
      }
    );

    // Pause on hover
    const pause = () => tween.timeScale(0.2);
    const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [reverse, speed]);

  // Render items twice for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-row">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((label, i) => (
          <span className="marquee-item" key={i}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>My Techstack</h2>
      <div className="marquee-container">
        {rows.map((items, i) => (
          <MarqueeRow
            key={i}
            items={items}
            reverse={i % 2 === 1}
            speed={30 + i * 8}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
