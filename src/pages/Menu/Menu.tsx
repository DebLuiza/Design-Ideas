import React from "react";
import { Link } from "react-router-dom";
import styles from "./Style/Menu.module.scss";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div id={styles["mobile"]} onClick={() => setOpen(!open)}>
        <input
          type="checkbox"
          name=""
          id=""
          className={styles["input-hamb"]}
          checked={open}
        />
        <div className={styles["hamburger-lines"]}>
          <span className={`${styles["line"]} ${styles["line1"]}`}></span>
          <span className={`${styles["line"]} ${styles["line2"]}`}></span>
          <span className={`${styles["line"]} ${styles["line3"]}`}></span>
        </div>
        <ul
          className={
            open
              ? ` ${styles["links"]} ${styles["active"]}`
              : styles["links"]
          }
        >
          <li>
            <Link to={"/"}>Forms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
