import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-items">
        <div className="footer-link">
          <div>erer</div>
          <div>ergegg</div>
          <div>ergerg</div>
        </div>
        <div className="footer-link">
          <div>Contact</div>
        </div>
        <div className="footer-link">
          <div>
            <p>Copyright &copy; {footerYear} Brian Cordisco</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
