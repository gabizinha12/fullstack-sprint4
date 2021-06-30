import React from "react";
import styles from "./searchBar.module.css";
export default function SearchBar() {
  return (
    <div className={styles.search__bar}>
      <input
        className={styles.search__input}
        type="search"
        placeholder="O que você está procurando?"
      />
    </div>
  );
}
