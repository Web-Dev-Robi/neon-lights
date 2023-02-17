import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-items" style={{ overflowBlock: "auto hidden" }}>
        <div className="footer-link">
          <div>Inspiration</div>
          <div>Hobbies</div>
          <div>Photo Album</div>
        </div>
        <div className="contact-link">
          <div>Contact</div>
          <div className="barcode-font">CONTACT</div>
        </div>
        <div className="copyright-link">
          <div className="copyright">
            <p>Copyright &copy; {footerYear} Brian Cordisco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
