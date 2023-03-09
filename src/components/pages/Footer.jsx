import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_items}>
        <div className={styles.footer_link}>
          <Link to="inspiration">Inspiration</Link>
          <Link to="hobbies">Hobbies</Link>
          <Link to="photoalbum">Photo Album</Link>
        </div>
        <div className={styles.contact_link}>
          <Link to="contact">Contact</Link>
          <Link className={styles.barcode_font}>CONTACT</Link>
        </div>
        <div className={styles.copyright_link}>
          <div className={styles.copyright}>
            <p className={styles.copy_para}>Copyright &copy; {footerYear} Brian Cordisco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
