import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const ButtonComponent = ({ string, href}) => {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        <div className={styles.button}>{string}</div>
      </Link>
    );
  } else {
    return <div className={styles.button}>{string}</div>;
  }
};

export default ButtonComponent;
