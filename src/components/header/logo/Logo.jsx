import React from "react";
import HeaderLogo from "../../../assets/riachuelo.svg";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={HeaderLogo} className={styles.logo__img} alt="Logo" />
    </div>
  );
}
