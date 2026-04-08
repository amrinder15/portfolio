import { useEffect } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    const linkedInWindow = window as Window & {
      IN?: { parse?: () => void };
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-linkedin-profile-badge="true"]'
    );

    const parseBadge = () => {
      linkedInWindow.IN?.parse?.();
    };

    if (existingScript) {
      parseBadge();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.setAttribute("data-linkedin-profile-badge", "true");
    script.addEventListener("load", parseBadge, { once: true });

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", parseBadge);
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Open To</h4>
            <p>
              Open to Staff / Principal platform engineering and cloud architecture roles,
              as well as technical leadership discussions.
            </p>
            <p>
              Connect with me on LinkedIn or reach out directly.
            </p>
            <a
              className="contact-mail-link"
              href="mailto:a.rattanpal@hotmail.com"
              data-cursor="disable"
            >
              a.rattanpal@hotmail.com
            </a>
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
              href="https://github.com/amrinder15"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <div className="contact-linkedin-badge" data-cursor="disable">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="amrinder-rattanpal-01531677"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://ca.linkedin.com/in/amrinder-rattanpal-01531677?trk=profile-badge"
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <h2>
            Built with passion by <span>Amrinder Rattanpal</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
