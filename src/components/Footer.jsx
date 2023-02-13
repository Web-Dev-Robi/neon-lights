import React from "react";

function Footer() {
 const footerYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-items">
            <div className="footer-link">
              <div>erer</div>
              <div>ergegg</div>
              <div>ergerg</div>
            </div>
            <div className="footer-link">
              <div>ergeg</div>
              <div>eergegr</div>
            </div>
            <div className="footer-link">
              <div>
                <p>Copyright &copy; {footerYear} Brian Cordisco</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
