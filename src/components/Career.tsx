import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Staff DevOps Engineer</h4>
                <h5>Canadian Tire</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              Architected an enterprise Container-as-a-Service platform on
              Azure AKS with Istio service mesh and Calico network policies.
              Migrated HashiCorp Vault, Terraform Enterprise, and JFrog
              Artifactory to Azure. Standardized CI/CD and GitOps templates
              across Flux and ArgoCD, and provided architectural leadership
              for platform-wide design decisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Consultant</h4>
                <h5>BDO Canada</h5>
              </div>
              <h3>2019–22</h3>
            </div>
            <p>
              Delivered end-to-end Azure IaaS and PaaS solutions for multiple
              enterprise clients. Authored IaC with PowerShell and ARM
              templates, orchestrated 250+ portal deployments via CI/CD, and
              established observability stacks with Azure Sentinel, Grafana,
              and Prometheus.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Systems Administrator</h4>
                <h5>RICOH</h5>
              </div>
              <h3>2017–19</h3>
            </div>
            <p>
              Operated VMware clusters spanning 50+ hosts and 1,000+ VMs.
              Administered Citrix XenApp/XenDesktop for multi-site
              application delivery. Owned vulnerability management, patch
              orchestration via WSUS, and network hardening through group
              policy and MFA enforcement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Specialist</h4>
                <h5>Micro Computers Consulting</h5>
              </div>
              <h3>2015–17</h3>
            </div>
            <p>
              Centrally managed client infrastructure via SolarWinds
              N-central. Configured perimeter firewalls (Cisco ASA,
              SonicWALL, Checkpoint), provisioned SAN storage across IBM,
              Lenovo, and NetApp, and built ESXi and Hyper-V
              virtualization environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
