import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:a.rattanpal@hotmail.com"
                data-cursor="disable"
              >
                a.rattanpal@hotmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.Eng Electrical &amp; Computers (Wireless &amp; Networking),
              Concordia University, Montreal — 2014
            </p>
            <p>
              B.Tech Electronics &amp; Communication, Punjab Technical
              University, Jalandhar — 2011
            </p>
            <h4>Certifications</h4>
            <p>
              Azure Administrator · Azure Solutions Architect Expert ·
              Certified Kubernetes Administrator (CKA) · SAFe · CEH · CCNA
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/amrinder-rattanpal-01531677/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/amrinder-rattanpal"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Amrinder Rattanpal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
