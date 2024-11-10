import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer d-flex direction-column align-center">
      <p>
        SmartQ Private Limited
      </p>
      <div>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      </div>
      <div className="d-flex gap align-center padding-all-8">
        <a
          href="https://github.com/imukulrajput/"
          className="link" 
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/github-logo.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/imukulrajput/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};