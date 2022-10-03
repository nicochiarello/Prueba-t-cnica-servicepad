import styles from "./footer.module.css";
import Image from "next/image";
import FooterLogo from "../../assets/footerLogo.png";
import ButtonComponent from "../../components/button";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <article className={styles.footerContactContainer}>
        <nav className={styles.footerSocial}>
          <Image src={FooterLogo} alt="Main logo" width="141px" height="22px" />
          <ul className={styles.socialIconsList}>
            <li>
              <i className="bx bxl-facebook-square"></i>
            </li>
            <li>
              <i className="bx bxl-youtube"></i>
            </li>
            <li>
              <i className="bx bxl-twitter"></i>
            </li>
            <li>
              <i className="bx bxl-pinterest"></i>
            </li>
            <li>
              <i className="bx bxl-instagram"></i>
            </li>
          </ul>
        </nav>
        <nav >
            <ul className={styles.footerNav}>
                <li>About us</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy policy</li>
            </ul>
        </nav>
      </article>
      <article className={styles.footerInfoContainer}>
        <ButtonComponent string={"Request Invite"}/>
        <p>© Easybank. All Rights Reserved</p>
      </article>
    </footer>
  );
};

export default Footer;
