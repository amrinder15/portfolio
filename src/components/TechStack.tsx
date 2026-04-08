import { useEffect, useRef } from "react";
import gsap from "gsap";

const categories = [
  {
    title: "Containers",
    items: [
      "Kubernetes",
      "OpenShift",
      "AKS",
      "Docker",
      "Helm",
      "ArgoCD",
      "Flux",
      "Calico",
      "Istio",
    ],
  },
  {
    title: "Languages",
    items: ["Go", "Python"],
  },
  {
    title: "Tools",
    items: [
      "Terraform",
      "PowerShell",
      "Shell",
      "Azure DevOps",
      "GitHub",
      "Artifactory",
      "Hashi Vault",
      "Azure",
    ],
  },
  {
    title: "Monitoring",
    items: ["Grafana", "Prometheus", "Loki", "New Relic", "App Insights"],
  },
];

function MarqueeRow({
  title,
  items,
  reverse = false,
  speed = 40,
}: {
  title: string;
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
    <div className="marquee-category">
      <div className="marquee-category-label">
        <span>{title}</span>
      </div>
      <div className="marquee-row">
        <div className="marquee-track" ref={trackRef}>
          {doubled.map((label, i) => (
            <span className="marquee-item" key={`${title}-${label}-${i}`}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>Tech Stack</h2>
      <div className="marquee-container">
        {categories.map((category, i) => (
          <MarqueeRow
            key={category.title}
            title={category.title}
            items={category.items}
            reverse={i % 2 === 1}
            speed={28 + i * 6}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
