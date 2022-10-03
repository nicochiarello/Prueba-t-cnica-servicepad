import React from "react";
import ButtonComponent from "../../components/button";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header className={styles.container}>
        <Image src={Logo} alt="Main logo" width="141px" height="22px" />
        <nav>
          <ul className={styles.navbarElements}>
            {router.pathname === "/" ? (
              <li className={styles.pointer + " " + styles.elementActive}>
                <Link href={"/"}>Home</Link>
              </li>
            ) : (
              <li className={styles.pointer}>
              <Link href={"/"}>Home</Link>
            </li>
            )}
            <li className={styles.pointer}>About</li>
            <li className={styles.pointer}>Contact</li>
            <li className={styles.pointer}>Blog</li>
            <li className={styles.pointer}>Careers</li>
          </ul>
        </nav>
        <ButtonComponent string={"Request Invite"} />
      </header>
    </>
  );
};

export default Navbar;
