import React from "react";
import HeaderLogo from "../header/logo/Logo";
import styles from "./Header.module.css";
import SearchBar from "./searchBar/searchBar";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className="header__mobile">
          <HeaderLogo className={styles.header__logo}></HeaderLogo>
          <SearchBar></SearchBar>
          <div className="header__drawer header__drawer--active"></div>
        </div>
      </div>
    </header>
  );
}
